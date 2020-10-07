document.addEventListener("DOMContentLoaded", addParagraphElement());

function addParagraphElement() {
	let commentsDiv = document.querySelector('div.comments')
	setTimeout(() => {
		commentsDiv.innerHTML = "<p>Like staring into the face of god</p>"
	}, 5000); 
}