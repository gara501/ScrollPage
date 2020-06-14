const App = () => {
  // Get Dom Elements
  const menuButton = document.querySelector('.menu-button');
  const menuLayout = document.querySelector('.menu'); 
  const pageLayout = document.querySelector('.content-page');
  let isOpen = false;

  // Events
  menuButton.addEventListener('click', (e)=> {
    e.preventDefault();
    e.stopImmediatePropagation();
    pageLayout.classList.add('open');
    isOpen = true;
  });

  pageLayout.addEventListener('click', (e)=> {
    if (isOpen) {
      pageLayout.classList.remove('open');
      isOpen = false;
    }
  });
}

export default App();