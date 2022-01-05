const sectionImg = document.querySelectorAll('.section_img');
const section = document.querySelectorAll('.section');
for (let i = 0; i < section.length; i++) {
    sectionImg[i].addEventListener('mouseover', function(){
        section[i].classList.add('active');
    });
    sectionImg[i].addEventListener('mouseout', function(){
        section[i].classList.remove('active');
    });
}

const navLink = document.querySelectorAll('.nav_link a');
for (let i = 0; i < navLink.length; i++) {
    let navtagName = navLink[i].getAttribute('href');
    navLink[i].href = '#' + navtagName;
}

const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav_menu');
const navList = document.querySelector('.nav_list');
$(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
        $("nav").addClass("fixed");
    } else {
        $("nav").removeClass("fixed");
    }
});

window.addEventListener('click', function(e){
    if (e.target != navMenu && e.target != navMenu.querySelector('i') && e.terget != nav) {
        navList.classList.remove('active');
    } else{
        navList.classList.add('active');
    }
});