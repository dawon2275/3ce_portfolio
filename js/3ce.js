//----------------------------------------------------- slideup --------------------------------------



//----------------------------------------------------- modal --------------------------------------
let modalClose = $('.modalClose')
let modalCont = $('.modal') 
//console.log(modalCont)
//console.log(modalClose)

modalClose.on('click' ,function(){
    modalCont.css(
        'display','none'
    )
})

//----------------------------------------------- product Swiper --------------------------------------------
let swiper = new Swiper('.swiper', {
  /* slidesPerView: 4, */
  /* direction: getDirection(2), */
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /* on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },

  }, */

});


let mySwiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // 화면의 넓이가 650px 이상일 때
    650: {
      slidesPerView: 4.5,
      spaceBetween: 40
    }
  }
});



function getDirection() {
  let windowWidth = window.innerWidth;
  let direction = window.innerWidth <= 640 /* ? 'vertical' : 'horizontal'  */; 

  return direction;
};


//----------------------------------------------------- gnb ------------------------------------------------
$('.top').on('mouseover', function() {
  $(this).animate({
    top:'-30px'
  },50)
})

/* $('.top').on('mouseout', function() {
  $(this).css('top','0')
}) */

$('.bot').on('mouseover',function() {
  $(this).animate({
    top:'0'
  },20)
})


$('.sub ul li').on('mouseout',function() {
  $('.bot').css('top','30px')
})





//------------------------------------------------------- mainBg page------------------------------------



let totalNum = $('.mainArea > div').length;
//console.log(totalNum)
let currentImg = 1;


      
  $('.page-n > span:first').text(currentImg);
  $('.page-n > span:last').text(totalNum);


  $('.btnNext').on('click', function(e){
      e.preventDefault();
      currentImg++;

      if (currentImg > totalNum) {
          currentImg = 1;
      }
      $('.mainArea > div:first').insertAfter('.mainArea > div:last')
      $('.page-n > span:first').text(currentImg);

  })
  
  $('.btnPrev').on('click', function(e){
    e.preventDefault();
      currentImg--; 
          
      if(currentImg < 1) {
        currentImg = totalNum;
      }
      $('.mainArea div:last').insertBefore('.mainArea > div:first')
      $('.page-n > span:first').text(currentImg);
  });


//---------------------------------------------- product tab -----------------------------------------------
$(function(){
let tab = $('.tab li');

    tab.on('click',function() {
    let idx = $(this).index();//현재 li : this 의 인덱스 : 목록값
    let tab_cont = $(this).parents('.tab').siblings('.tab_cont').eq(idx);//현재 li : this의 부모인('클릭요소 tab') 의 형제 요소들인 ('.tab_cont':보여지는 콘텐츠) li의 목록 값

    //console.log(idx);
    //console.log(tab_cont)

    $(this).addClass('on')
    $(this).siblings().removeClass('on')

    $(tab_cont).addClass('on')
    $(tab_cont).siblings().removeClass('on')
    })
})

//-------------------------------------- product tab -------------------------------------------------
  $(function() {
    $('.eventBg .text').delay(1100).animate({
      opacity : 1,
      top : 270
    },2000)

  })


/* ====================================================mobile menu============================= */

let btnMobileOpen = $('.icon .bar')
let btnMoClose = $('.btnclose, .mobileMenuBg')
let btnMore = $('.btnDown')


let MoView = $('.mobileMenu')
let MobgView = $('.mobileMenuBg')



btnMobileOpen.on('click' ,function (){
  MobgView.css(
    'display','block'
  )
  MoView.stop().animate({
    right : 0
  })
})

btnMoClose.on('click' ,function (){
  MobgView.css(
    'display','none'
  )
  MoView.stop().animate({
    right : '-350px'
  })
})


$('.accordion').on('click', '.btnDown',function () {
    if ($(this).addClass('.on').next('.sub').slideToggle()) {
      $(this).css('transform','rotate(180deg)')
    }else {
      $(this).css('transform','rotate(90deg)')
    }
});



















 
  
  



    
    