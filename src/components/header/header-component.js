
const removeActiveClass = () => {
  const activeElement = document.getElementsByClassName('menu-active')[0];
  if (activeElement) activeElement.classList.remove('menu-active');
};

const addActiveClass = (active) => {
  const newActiveElement = document.getElementById(active);
  if (newActiveElement) newActiveElement.classList.add('menu-active');
};

const handleHamburgerClick = () => {
  const menu = document.getElementsByTagName('header')[0];
  const hamburgerLink = document.getElementById('hamburger-icon');
  
  hamburgerLink.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
  });
};

const updateTitle = (title) => {
  const titleElement = document.getElementById('title');
  titleElement.innerHTML = title;
};

export const updateHeader = ({ title, active }) => {
  updateTitle(title);
  handleHamburgerClick();
  removeActiveClass();
  addActiveClass(active);
};

export default {
  updateHeader
};
