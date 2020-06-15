const App = () => {
  // Get Dom Elements
  const menuButton = document.querySelector('.menu-button');
  const menuLayout = document.querySelector('.menu'); 
  const pageLayout = document.querySelector('.content-page');
  const scrollActions = document.querySelectorAll('.scroll-action');
  const totalSlides = document.querySelectorAll('.scrollpoint').length;
  const scrollPage = document.querySelector('.scrollpage');
  const slides = document.querySelectorAll('.slide');
  const menuExtItems = document.querySelectorAll('.extmenu');
  

  let isOpen = false;
  let currentSlide = 1;

  // Events
  menuButton.addEventListener('click', (e)=> {
    e.preventDefault();
    e.stopImmediatePropagation();
    pageLayout.classList.add('open');
    isOpen = true;
  });

  pageLayout.addEventListener('click', (e)=> {
    closePage();
  });

  scrollActions.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      selectMenuItem(e.currentTarget.dataset.slide);
      selectSlide(e.currentTarget.dataset.slide);
    });
  })

  menuExtItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      selectMenuItem(e.currentTarget.dataset.slide);
      selectSlide(e.currentTarget.dataset.slide);
      closePage();
    });
  })

  document.addEventListener('wheel', (e) => {
    scrollSlide(e.wheelDeltaY * -1);
  });

  function closePage() {
    if (isOpen) {
      pageLayout.classList.remove('open');
      isOpen = false;
    }
  }

  function removeSelectedSlides() {
    slides.forEach((item, index) => {
      item.classList.remove('active');
    })
  }

  function removeSelectedMenu() {
    scrollActions.forEach((item) => {
      item.parentNode.classList.remove('selected');
    })
  }

  function selectMenuItem(menuNumber) {
    removeSelectedMenu();

    scrollActions.forEach((item, index) => {
      if (parseInt(menuNumber) === (index+1)) {
        item.parentNode.classList.add('selected');
      }
    })
  }

  function selectSlide(slideNumber) {
    currentSlide = slideNumber;
    removeSelectedSlides();

    slides.forEach((item, index) => {
      if (parseInt(currentSlide) === (index+1)) {
        item.classList.add('active');
      }
    })
  }

  function scrollSlide(slide) {
    if (slide > 0) {
      if (currentSlide >= totalSlides) {
        return;
      } else {
        currentSlide +=1;
      }
    } else {
      if (currentSlide <= 1 ) {
        return;
      } else {
        currentSlide -=1;
      }
    }
    selectMenuItem(currentSlide);
    selectSlide(currentSlide);
  }
}

export default App();