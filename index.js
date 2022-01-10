// window.addEventListener("wheel", function (e) {
//   e.preventDefault();
// }, { passive: false });

window.onload = () => {
  document.querySelector('.intro-logo').style.opacity = 1;
  document.querySelector('.intro-logo').style.marginTop = 0;
  setTimeout(() => {
    document.querySelector('.top-nav').style.opacity = 1;
  }, 1500);
}