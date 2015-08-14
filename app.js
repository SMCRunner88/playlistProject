var playlist = new Playlist();

var whereIWantToBe = new Song ("Where I Want to Be", "The Dangerous Summer", "3:39");
var theGiftOfParalysis = new Song("The Gift of Paralysis", "Envy on the Coast", "4:38");

var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00")

playlist.add(whereIWantToBe);
playlist.add(theGiftOfParalysis);

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);


var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}