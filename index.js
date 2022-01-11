const introPage = document.querySelector('.page-intro');
const introLogo = document.querySelector('.intro-logo');
let page = 0;

introLogo.style.opacity = 1;
introLogo.style.marginTop = 0;

introLogo.addEventListener('click', () => {
  if (page === 0) {
    introPage.style.width = 0;
    // introPage.style.left = '50%';
  
    introLogo.style.transform = 'none';
    introLogo.style.top = '22px';
    introLogo.style.left = '26px';
    introLogo.style.width = '150px';

    page = 1;
  } else {
    introPage.style = '';

    introLogo.style = '';
    introLogo.style.opacity = 1;
    introLogo.style.marginTop = 0;

    page = 0;
  }
});