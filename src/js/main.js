const mainArea = document.querySelector('.main'),
  headerArea = mainArea.querySelector('.header'),
  section = document.querySelector('section'),
  nav = document.querySelectorAll('.nav-bar li'),
  strongPointArea = document.querySelector('.strong-point-area'),
  gotoTopBtn = document.querySelector('.goto-top-area'),
  firstKey = document.querySelector('.first-key'),
  secondKey = document.querySelector('.second-key'),
  thirdKey = document.querySelector('.third-key'),
  modal = document.querySelector('.modal-area'),
  modalContent = document.querySelector('.modal-content');
// forthKey = document.querySelector('.forth-key');

let activeIndex = 0;

// key-word area
keyWordsAni = i => {
  if (i == 0 || i == 3) {
    firstKey.classList.add('active');
    secondKey.classList.add('active');
    thirdKey.classList.add('active');
    // forthKey.classList.add('active');
  } else {
    firstKey.classList.remove('active');
    secondKey.classList.remove('active');
    thirdKey.classList.remove('active');
    // forthKey.classList.remove('active');
  }
};

// nav btn
activeNav = i => {
  nav.forEach(item => {
    item.classList.remove('active');
  });
  if ((activeIndex = i)) {
    nav[i].classList.add('active');
  } else if (i == 0) {
    nav[0].classList.add('active');
  } else {
  }
};

clickedNav = () => {
  for (let i = 0; i < nav.length; i++) {
    activeIndex = i;
    nav[i].addEventListener('click', event => {
      // nav.forEach(item => {
      //     item.classList.remove('active');
      // })
      activeNav(i);
      keyWordsAni(i);
      // console.log(activeIndex, i, nav[i], event.target);
    });
  }
};

// scroll event
window.addEventListener('scroll', event => {
  let fromTop = window.scrollY;
  let mainHeight = mainArea.offsetHeight;
  let NOWINDEX = 0;
  // console.log(fromTop);
  // 화면의 index
  for (let i = 0; i < 5; i++) {
    //5번 반복
    if (fromTop >= mainHeight * i && fromTop < mainHeight * (i + 1)) {
      //A 0~99
      NOWINDEX = i;
    }
  }
  // console.log(NOWINDEX);
  // nave bar 변형
  if (NOWINDEX > 0) {
    headerArea.classList.add('scrolled');
    const navBtn = headerArea.querySelectorAll('.nav-bar a');
    gotoTopBtn.classList.add('active');

    if (NOWINDEX % 2 === 0) {
      navBtn.forEach(item => {
        item.classList.add('change-color');
      });
    } else {
      navBtn.forEach(item => {
        item.classList.remove('change-color');
      });
    }
  } else {
    headerArea.classList.remove('scrolled');
    gotoTopBtn.classList.remove('active');
  }

  // list active
  activeNav(NOWINDEX);
  keyWordsAni(NOWINDEX);
});

// main
showStrongPoint = () => {
  strongPointArea.classList.add('active');

  // setTimeout(showStrongPointChild, 400);
};

// showStrongPointChild = () => {
//     const strongPoint = strongPointArea.querySelectorAll('.strong-point');
//     // console.log(strongPoint);
//     strongPoint.forEach(item => {
//         item.classList.toggle('active');
//     });
// }

showNav = () => {
  const navBar = headerArea.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

gotoTop = () => {
  activeIndex = 0;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// show modal & add video
showModal = id => {
  modal.classList.add('active');
  document.body.style.overflowY = 'hidden';
  createModal(id);
};

// close modal & remove video
closeModal = () => {
  const videoContent = modalContent.querySelector('.video-content');
  modal.classList.remove('active');
  document.body.style.overflowY = 'scroll';
  modalContent.removeChild(videoContent);
};

// 모달 생성
createModal = id => {
  const video = document.createElement('video');

  video.src = `./src/assets/video/${id}.mp4`;
  video.controls = true;
  video.className = 'video-content';

  const newModal = modalContent.appendChild(video);

  return newModal;
};

// 날짜 포맷팅 함수
formatDate = date => {
  const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

// 마지막 업데이트 날짜 설정
setLastUpdateDate = () => {
  const lastUpdateElement = document.getElementById('lastUpdateDate');
  if (lastUpdateElement) {
    lastUpdateElement.textContent = formatDate(new Date());
  }
};

init = () => {
  clickedNav();
  setTimeout(showStrongPoint, 2000);
  setLastUpdateDate();
};
init();
