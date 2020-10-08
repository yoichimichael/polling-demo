const COMMENTS_URL = 'http://localhost:3000/comments'
let commentsDiv = document.querySelector('div.comments')

document.addEventListener("DOMContentLoaded", addParagraphElement());

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