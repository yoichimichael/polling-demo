// for fetch requests
const COMMENTS_URL = 'http://localhost:3000/comments'
const HEADERS = {
	'Content-Type': 'application/json', 
  Accept: 'application/json'
}

// HTML elements
const commentForm = document.querySelector('.comment-form');
const commentsDiv = document.querySelector('div.comments');

//event listeners
document.addEventListener("DOMContentLoaded", fetchComments());
commentForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	const commenter = e.target.name.value;
	const comment = e.target.comment.value;

	fetch(COMMENTS_URL, {
		method: "POST",
		headers: HEADERS,
		body: JSON.stringify({
			name: commenter,
			content: comment
		})
	})
        // .then(resp => resp.json())
        // .then(data=> this.props.addMember(data))

	// console.dir(form);
	// console.log(form.comment.value, form.name.value);
}


function fetchComments() {
	let interval = setInterval(getFetch, 3000, COMMENTS_URL);
}


function getFetch(url) {
	commentsDiv.innerHTML = "";
	fetch(url)
	.then(resp => resp.json())
	.then(comments => {
		comments.forEach(comment => {
			let p = document.createElement('p');
			p.innerText = `${comment.content} - ${comment.name}`;
			commentsDiv.appendChild(p);
		});
	})
}

/*
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
*/