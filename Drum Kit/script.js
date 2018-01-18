document.addEventListener('keydown', playDrum);

//Play Drum Kits
function playDrum(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key =  document.querySelector(`.key[data-key='${e.keyCode}']`);
  key.classList.add('playing');

  if(audio === undefined) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
  }
}

//To remove the transition effects afterwards
const allKeys = document.querySelectorAll('.key');
allKeys.forEach(function(key) {
  key.addEventListener('transitionend', endTransition)

});

function endTransition(e) {
  e.target.classList.remove('playing');onsole.log(e);
}
