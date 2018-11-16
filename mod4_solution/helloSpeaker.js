// JavaScript source code
( function (name) {
	var helloSpeaker = {};
		var speakword = "hello";
 helloSpeaker.speak = function (name) {
  console.log(speakword + " " + name);
}
	window.helloSpeaker = helloSpeaker;

}) (window);