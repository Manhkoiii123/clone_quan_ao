// copy menu for mobile
// copy lai cai menu cho mobile
function copyMenu(){
    // copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    var mainnav =document.querySelector('.header-nav nav');
    var navplace = document.querySelector('.off-canvas nav');
    navplace.innerHTML = mainnav.innerHTML;

    var topNav=document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML=topNav.innerHTML;
}
copyMenu();


//show submenu in mobile

const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu)=>menu.addEventListener('click',toggle));
function toggle(e){
    e.preventDefault();
    subMenu.forEach((item)=>item != this ? item.closest('.has-child').classList.remove('expand'):null);
    if(this.closest('.has-child').classList != 'expand'){
        this.closest('.has-child').classList.toggle('expand');
    }
}

// show menu mobile
const menuBtn = document.querySelector('.trigger');
const closeBtn = document.querySelector('.t-close');
const addClass = document.querySelector(".site");

menuBtn.addEventListener('click', function(){
    addClass.classList.toggle('showmenu');
})
closeBtn.addEventListener('click', function(){
    addClass.classList.remove('showmenu');

})

// slider
const swiper = new Swiper('.swiper', {
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  
  });



//   show search
const searchBtn=document.querySelector('.t-search');
const tclose=document.querySelector('.search-close');
const showClass=document.querySelector('.site');

searchBtn.addEventListener('click',function(){
    showClass.classList.toggle('showsearch');
})
tclose.addEventListener('click',function(){
    showClass.classList.remove('showsearch')
})



// show dpt menu

const dptButton= document.querySelector('.dpt-cat .dpt-trigger');
const dptClass =document.querySelector('.site');
dptButton.addEventListener('click',function(){
    dptClass.classList.toggle('showdpt');
})


// product image slider
var productThumb = new Swiper ('.small-image',{
    loop:true,
    spaceBetween : 10,
    slidesPerView : 2,
    freeMode : true,
    watchSildesProgress : true,
    breakpoints:{
        481:{
            spaceBetween:32,
        }
    }
});
var productBig = new Swiper('.big-image',{
    loop:true,
    autoHeight:true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs:{
        swiper:productThumb,
    }
})

// cái stok theo phần trăm chứ ko fix cứng nữa
var stocks =document.querySelectorAll('.products .stock')
for(let x=0;x<stocks.length;x++){
    let stock = stocks[x].dataset.stock;
    let avaiable=stocks[x].querySelector('.qty-avaiable').innerHTML;
    let sold =stocks[x].querySelector('.qty-sold').innerHTML;
    let percent = sold*100/stock;
    stocks[x].querySelector('.avaiable').style.width = percent + '%';
}

//show cart on click
const divtoShow = '.mini-cart';
const divPopUp = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click',()=>{
    setTimeout(()=>{
        if(!divPopUp.classList.contains('show')){
            divPopUp.classList.add('show');
        }
    },250);
})

document.addEventListener('click',(e)=>{
    const isClosest =e.target.closest(divtoShow);
    if(!isClosest && divPopUp.classList.contains('show')){
        divPopUp.classList.remove('show');
    }
})

// modal
window.onload=function(){
    document.querySelector('.site').classList.toggle('showModal')

}
document.querySelector('.modalclose').addEventListener('click',function(){
    document.querySelector('.site').classList.remove('showModal')
})