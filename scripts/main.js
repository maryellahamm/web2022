if (new Date().getHours() > 18) {
  //alert(new Date().getHours());
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'grey';
}
//logo header
if (new Date().getHours() > 18) {
  const logo = document.getElementsByClassName('logo');
logo[0].style.backgroundColor = 'black';
}
//nav background
if (new Date().getHours() > 18) {
  const nav__links = document.getElementsByClassName('nav__links');
nav__links[0].style.backgroundColor = 'black';
}
if (new Date().getHours() > 18) {
  const about = document.getElementsBy('about');
  about.style.backgroundColor = 'black';
  about.style.color = 'black';
}
//footer
if (new Date().getHours() > 18) {
  const footer = document.getElementsByClassName('footer');
  footer[0].style.backgroundColor = 'black';
}
