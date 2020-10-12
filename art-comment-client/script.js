// for fetch requests
const COMMENTS_URL = 'http://localhost:3000/comments'
const HEADERS = {
	'Content-Type': 'application/json', 
  Accept: 'application/json'
}

// HTML elements
const commentForm = document.querySelector('.comment-form');
const commentsDiv = document.querySelector('div.comments');

// event listeners
// swap second argument of DOMContentLoaded event to switch polling techniques
document.addEventListener("DOMContentLoaded", () => {
	getFetch(COMMENTS_URL);
	checkForNewComments(COMMENTS_URL);
});
commentForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	const commenter = e.target.name.value;
	const comment = e.target.comment.value;

	postFetch(COMMENTS_URL)
}

// regular polling technique
// sends a get request  to API for comments every 3 seconds
function fetchComments() {
	let interval = setInterval(getFetch, 3000, COMMENTS_URL);
}

let numOfComments;

// returns sets above variable and returns comments
async function asyncFetchComments(url) {
	// let promise = await fetch(url);
	fetch(url)
	.then(resp => resp.json())
	.then(comments => {
		numOfComments = comments.length;
		console.log(numOfComments)
		return comments;
	})
	// let comments = response.json()
	// console.log(comments);
	// numOfComments = response.json().length;
}

async function checkForNewComments(url) {
	let response = await fetch(url);
	
	if (response.status === 502) {
		await checkForNewComments();
	} else if (response.status != 200) {
		alert(response.statusText);
		await new Promise(resolve => setTimeout(resolve, 1000));
		await checkForNewComments(url);
	} else {
		response.json(comments => {
			console.log(comments)
		})
	}
}

// sample long polling technique
/*
async function asyncFetchComments() {
	let response = await fetch(COMMENTS_URL);

	if (response.status == 502) {
		// Status 502 is a connection timeout error,
		// may happen when the connection was pending for too long,
		// and the remote server or a proxy closed it
		// let's reconnect
		await asyncFetchComments();
	} else if (response.status != 200) {
		// An error - let's show it
		showMessage(response.statusText);
		// Reconnect in one second
		await new Promise(resolve => setTimeout(resolve, 1000));
		await asyncFetchComments();
	} else {
		// Get and show the message
		let message = await response.text();
		showMessage(message);
		// Call subscribe() again to get the next message
		await asyncFetchComments();
	}
}
*/

// fetches and loads comments onto DOM
function getFetch(url) {
	// clears comments section before repopulating
	commentsDiv.innerHTML = "";

	fetch(url)
	.then(resp => resp.json())
	.then(comments => {
		numOfComments = comments.length;
		console.log(numOfComments)
		loadComments(comments);
	})
}

// sends a post request with new comment
function postFetch(url) {
	fetch(url, {
		method: "POST",
		headers: HEADERS,
		body: JSON.stringify({
			name: commenter,
			content: comment
		})
	})	
}

// loads comments, no return
function loadComments(comments) {
	comments.forEach(comment => {
		let p = document.createElement('p');
		p.innerText = `${comment.content} - ${comment.name}`;
		commentsDiv.appendChild(p);
	});
}