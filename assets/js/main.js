
const mainArea = document.querySelector('.main'),
    headerArea = mainArea.querySelector('.header'),
    // secondArea = document.querySelector('.second'),
    // thirdArea = document.querySelector('.third'),
    // forthArea = document.querySelector('.forth');
    section = document.querySelector('section'),
    nav = document.querySelectorAll('.nav-bar li'),
    strongPointArea = document.querySelector('.strong-point-area');

let activeIndex = 0;
    
// nav btn
activeNav = (i) => {
     nav.forEach(item => { 
        item.classList.remove('active');
    })
    if (activeIndex = i) {
        nav[i].classList.add('active');
    } else if (i == 0){
        nav[0].classList.add('active');
    }
    else {
        
    }
}
clickedNav = () => {
    for (let i = 0; i < nav.length; i++){
        activeIndex = i;
        nav[i].addEventListener('click', event => { 
            // nav.forEach(item => { 
            //     item.classList.remove('active');
            // })
            activeNav(i);
            // console.log(activeIndex, i, nav[i], event.target);
        })
    }
}


// scroll event
window.addEventListener("scroll", event => { 
    let fromTop = window.scrollY;
    let mainHeight = mainArea.offsetHeight;
    let NOWINDEX = 0; 

    // 화면의 index
    for(let i = 0; i < 4; i++){ //4번 반복
        if(fromTop >= mainHeight * i && fromTop < mainHeight * (i + 1)){ //A 0~99
            NOWINDEX = i;
        } 
    } 
    // console.log(NOWINDEX);
    // nave bar 변형
    if (NOWINDEX > 0) {
        headerArea.classList.add('scrolled');
        const navBtn = headerArea.querySelectorAll('.nav-bar a')
        
        if (NOWINDEX > 1) {
            navBtn.forEach(item => { 
                item.classList.add('change-color')
            })
        }
        else {
            navBtn.forEach(item => { 
                item.classList.remove('change-color')
            })
        }
    }
    else {
        headerArea.classList.remove('scrolled');
    }
  
    // list active
    activeNav(NOWINDEX);

 })

// main
showStrongPoint = () => {
    strongPointArea.classList.toggle('active');
    setTimeout(showStrongPointChild, 400);
}
showStrongPointChild = () => {
    const strongPoint = strongPointArea.querySelectorAll('.strong-point');
    console.log(strongPoint);
    strongPoint.forEach(item => {
        item.classList.toggle('active');
    });
}
showNav = () => {
    const navBar = headerArea.querySelector('.nav-bar');
    navBar.classList.toggle('active');

    // const menuBar = headerArea.querySelector('.menu-bar');
    // menuBar.classList.toggle('active');
}
init = () => {
    clickedNav()
};
init();