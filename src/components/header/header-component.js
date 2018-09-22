
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
  console.log(menu.classList);
  hamburgerLink.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    console.log(menu.classList);
   
  });
};

const updateTitle = (title) => {
  const titleElement = document.getElementById('title');
  titleElement.innerHTML = title;
};

export const updateHeader = ({ title, active }) => {
  console.log('En updateHEader');
  updateTitle(title);
  handleHamburgerClick();
  removeActiveClass();
  addActiveClass(active);
};

export default {
  updateHeader
};
