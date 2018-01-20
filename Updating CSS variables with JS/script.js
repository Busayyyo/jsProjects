
const controls = document.querySelectorAll('.controls input');

  controls.forEach(function (input) {
    input.addEventListener('mouseover', changeInput);
    input.addEventListener('change', changeInput);
});

function changeInput(e) {
  const suffix = e.target.dataset.size || ''; //to determine if the value has a suffix or not
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
}
