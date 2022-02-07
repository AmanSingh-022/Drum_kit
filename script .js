var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

// let isPlaying = false;
// let playingAudio;
// function Play(sound){

// if(!isPlaying){
//   playingAudio = sound;
// 	sound.play();
//   isPlaying = true;
// }
//   else
// {
//   playingAudio.pause();
//   playingAudio = sound;
//   sound.play(); 
// }
// }

function sound(key) {
  var sound1;
switch (key) {
	case "w":
   sound1 = new Audio("assets/w.mp3");
  // Play(sound1);
  sound1.play();
	break;

	case "a":
	 sound1 = new Audio("assets/a.mp3");
  // Play(sound1);
  sound1.play();
	break;

	case "s":
	 sound1 = new Audio('assets/s.mp3');
  //  Play(sound1);
   sound1.play();
	break;

	case "d":
	 sound1 = new Audio('assets/d.mp3');
  //  Play(sound1);
   sound1.play();
	break;

	case "j":
	 sound1 = new Audio('assets/j.mp3');
  //  Play(sound1);
   sound1.play();
	break;

	case "k":
	 sound1 = new Audio('assets/k.mp3');
  //  Play(sound1);
   sound1.play();
	break;

	case "l":
	 sound1 = new Audio('assets/l.mp3');
  //  Play(sound1);
   sound1.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
