let list = document.getElementById('linksList');
let hamburger = document.getElementById('hamburger');
let cross = document.getElementById('cross');
const nav = document.querySelector('.main-nav');
const footer = document.querySelector('footer');
let footerList = document.querySelectorAll('footer ul');

window.onscroll = function() {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    nav.classList.add('main-nav-colored');
  } else {
    nav.classList.remove('main-nav-colored');
  }
}

function showLinks() {
  list.style.marginTop = '0';
  hamburger.style.display = 'none';
  cross.style.display = 'block';
  nav.classList.add('main-nav-colored');
};

function hideLinks() {
  list.style.marginTop = '-100vh';
  hamburger.style.display = 'block';
  cross.style.display = 'none';
};

footer.addEventListener('click', (e) => {
  if (e.target.parentNode.className == 'footerLinks') {
  let ul = e.target.parentNode.lastElementChild;
  let plus = ul.previousElementSibling;
    if (ul.style.display !== 'block') {
      ul.style.display = 'block';
      plus.style.transform = `rotate(45deg)`;
    } else {
      ul.style.display = 'none';
      plus.style.transform = `rotate(0deg)`;
    }
  }
});
