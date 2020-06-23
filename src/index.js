import './style.scss';
import { globals } from './globals'
import { drawNavBar } from './drawNavBar';
import { drawContainer } from './drawContainer';
import { drawHome } from './drawHome';

window.onload = function() {
  drawNavBar();
  drawContainer();
  drawHome();
};