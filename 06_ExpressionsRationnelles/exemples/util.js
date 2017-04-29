function write(str) {
	document.write(str+"<br />");
}

function regTest(re, str){
	var midString;
	if (re.test(str)) {
		midString = " est conforme à ";
	} else {
		midString = " n'est pas conforme à ";
	}
	return '<strong>"' + str + '"</strong>' + midString + ': <strong>/' + re.source + '/' +((re.ignoreCase)?'i':'') + '</strong>';
}
