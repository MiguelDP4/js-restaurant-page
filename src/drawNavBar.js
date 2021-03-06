import drawHome from './drawHome';
import drawMenu from './drawMenu';
import drawAbout from './drawAbout';
import drawVenues from './drawVenues';

const drawNavBar = () => {
  const contentPage = document.getElementById('content');
  const accent = document.createElement('div');
  accent.classList.add('nav-accent');
  contentPage.append(accent);
  const naviBar = document.createElement('nav');
  naviBar.classList.add('align-items-center');
  const pageLogo = document.createElement('a');
  pageLogo.classList.add('page-logo');
  pageLogo.href = '#home';
  pageLogo.append('FICTIONAL RESTAURANT');
  naviBar.append(pageLogo);
  const naviLinks = document.createElement('div');
  naviLinks.classList.add('navigation-links-container');
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const aboutLink = document.createElement('a');
  const venuesLink = document.createElement('a');
  homeLink.href = '#home';
  menuLink.href = '#menu-marker';
  aboutLink.href = '#about-marker';
  venuesLink.href = '#venues-marker';
  homeLink.id = 'home-tag';
  menuLink.id = 'menu-tag';
  aboutLink.id = 'about-tag';
  venuesLink.id = 'venues-tag';
  homeLink.classList.add('navigation-link');
  menuLink.classList.add('navigation-link');
  aboutLink.classList.add('navigation-link');
  venuesLink.classList.add('navigation-link');
  homeLink.innerHTML = 'Home';
  menuLink.innerHTML = 'Menu';
  aboutLink.innerHTML = 'About Us';
  venuesLink.innerHTML = 'Our Venues';
  naviLinks.append(homeLink);
  naviLinks.append(menuLink);
  naviLinks.append(aboutLink);
  naviLinks.append(venuesLink);
  naviBar.append(naviLinks);
  contentPage.append(naviBar);
  homeLink.onclick = drawHome;
  menuLink.onclick = drawMenu;
  aboutLink.onclick = drawAbout;
  venuesLink.onclick = drawVenues;
  const spacer = document.createElement('div');
  spacer.id = 'home';
  spacer.classList.add('nav-spacer');
  contentPage.append(spacer);
};

export { drawNavBar as default };