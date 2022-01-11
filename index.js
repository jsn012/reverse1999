const introPage = document.querySelector('.page-intro');
const introLogo = document.querySelector('.intro-logo');
let page = 0;

introLogo.style.opacity = 1;
introLogo.style.marginTop = 0;

introLogo.addEventListener('click', () => {
  if (page === 0) {
    introPage.style.width = 0;
  
    introLogo.style.transform = 'none';
    introLogo.style.top = '24px';
    introLogo.style.left = '30px';
    introLogo.style.width = '14%';
    introLogo.style.maxWidth = '180px';

    setTimeout(() => {
      document.querySelector('.top-nav').style.opacity = 1;
      document.querySelector('.main-menu').style.opacity = 1;
    }, 1300);

    page = 1;
  } else {
    introPage.style = '';

    introLogo.style = '';
    introLogo.style.opacity = 1;
    introLogo.style.marginTop = 0;

    document.querySelector('.top-nav').style.opacity = 0;
    document.querySelector('.main-menu').style.opacity = 0;

    page = 0;
  }
});