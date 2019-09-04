const fadeIn = function (object, ms, displayStyle) {
  if (!object) return;
  if (arguments.length === 2) displayStyle = "inline-block";
  object.style.opacity = 0;
  object.style.filter = "alpha(opacity=0)";
  object.style.display = displayStyle;
  object.style.visibility = "visible";
  if (ms) {
    let opacity = 0;
    const timer = setInterval(function () {
      opacity += 10 / ms;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }
      object.style.opacity = opacity;
      object.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 10);
  }
  else {
    object.style.opacity = 1;
    object.style.filter = "alpha(opacity=1)";
  }
}
const fadeOut = function (object, ms) {
  if (!object) return;
  if (object.style.display === "none") return;
  if (ms) {
    let opacity = 1;
    const timer = setInterval(function () {
      opacity -= 10 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        object.style.display = "none";
        object.style.visibility = "hidden";
      }
      object.style.opacity = opacity;
      object.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 10);
  }
  else {
    object.style.opacity = 0;
    object.style.filter = "alpha(opacity=0)";
    object.style.display = "none";
    object.style.visibility = "hidden";
  }
}

const sidebar = document.querySelector('#sidebar');
const sideOverlay = document.querySelector('#sideOverlay');

document.querySelector('#toggleSidebar').addEventListener('click', function() {
  if (sidebar.style.width == '17rem') {
    sidebar.style.width = 0;
    fadeOut(sideOverlay, 300);
  } else {
    sidebar.style.width = '17rem';
    fadeIn(sideOverlay, 300);
  }
});
sideOverlay.addEventListener('click', function() {
  sidebar.style.width = 0;
  fadeOut(sideOverlay, 300);
});