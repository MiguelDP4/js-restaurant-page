import './style.scss';
import drawNavBar from './drawNavBar';
import drawContainer from './drawContainer';
import drawHome from './drawHome';

// eslint-disable-next-line func-names
window.onload = function () {
  drawNavBar();
  drawContainer();
  drawHome();
};