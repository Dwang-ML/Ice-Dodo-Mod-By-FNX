


var guardian = {
	init: function() {
		if (deployment.is_chrome_ext == true) {
			chrome.runtime.setUninstallURL("https://forms.gle/jUFzghwpdr3NJWmN7"); // Maximum 255 characters.
		}
		if (deployment.is_dev == false) {
			document.addEventListener('contextmenu', event => event.preventDefault());
		}
	}
}






