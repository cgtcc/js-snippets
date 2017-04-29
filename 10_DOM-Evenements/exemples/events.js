if (!window.addEventListener) {
	window.addEventListener = function (type, listener, useCapture) {
		window.attachEvent("on" + type, function() {
			listener(event);
		});
	}
}

if (!window.removeEventListener) {
	window.removeEventListener = function (type, listener, useCapture) {
		window.detachEvent("on" + type, function() {
			listener(event);
		});
	}
}