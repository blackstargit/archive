window.onload = document.addEventListener("DOMContentLoaded", function () {
	var copyLinks = document.getElementsByClassName("copy-link");
	for (var i = 0; i < copyLinks.length; i++) {
		copyLinks[i].addEventListener("click", function (event) {
			event.preventDefault();
			var href = this.getAttribute("href");
			copyToClipboard(href);
		});
	}
});

function copyToClipboard(text) {
	var dummy = document.createElement("input");
	document.body.appendChild(dummy);
	dummy.setAttribute("value", text);
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
}

function showMessage() {
	var messageBox = document.getElementById("messageBox");
	messageBox.style.display = "block";
	window.setTimeout(function () {
		messageBox.style.display = "none";
	}, 3000); // The message box will disappear after 3 seconds
}

function showTheMessage() {
	var messageBox = document.getElementById("messageBox-primary");
	messageBox.style.display = "block";
	window.setTimeout(function () {
		messageBox.style.display = "none";
	}, 5000); // The message box will disappear after 3 seconds
}