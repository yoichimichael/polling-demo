// for fetch requests
const COMMENTS_URL = 'http://localhost:3000/comments'
const HEADERS = {
	'Content-Type': 'application/json', 
  Accept: 'application/json'
}

// HTML elements
const commentForm = document.querySelector('.comment-form');
const commentsDiv = document.querySelector('div.comments');

document.addEventListener("DOMContentLoaded", addParagraphElement());
commentForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	console.log("hello")
}

function addParagraphElement() {	
	fetch(COMMENTS_URL)
	.then(resp => resp.json())
	.then(comments => {
		comments.forEach(comment => {
			let p = document.createElement('p')
			p.innerText = `${comment.content} - ${comment.name}`
			commentsDiv.appendChild(p)
		});
	})
}
