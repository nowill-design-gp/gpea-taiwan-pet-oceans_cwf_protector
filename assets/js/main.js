import * as utm from './utm_source_dd.js'

/**
 * http://techslides.com/convert-csv-to-json-in-javascript
 * 
 * @param  {text}
 * @return {Array}
 */
function csvJSON(csv){
  var lines = csv.split("\n");
  var result = [];
  var headers=lines[0].split(",").map(Function.prototype.call, String.prototype.trim);

  for(var i=1;i<lines.length;i++){
    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return result; //JavaScript object
  // return JSON.stringify(result); //JSON
}

$(document).ready(function (){
	fetch("https://docs.google.com/spreadsheets/d/14mkaWL_SaJ7qlzw0KHOK1scxoUaiNNIrKCXlX0QFZA8/export?format=csv")
		.then(response => response.text())
		.then(response => csvJSON(response))
		.then(response => { // replace the event context      
		  //console.log('response', response);
		  document.querySelector(".KI-list").innerHTML = ""
		  response.forEach(row => {			
			let name = row["姓名"];
			let unit = row["單位"];
			$('.KI-list').append(`<tr class="tbody__tr"><td class="tbody__td thead__td--name">${name}</td><td class="tbody__td thead__td--title">${unit}</td></tr>`);
		  });	  
		  $('.KI-list').append(`<tr class="tbody__tr"><td class="tbody__td tbody__td--last" colspan="2">持續新增中...</td></tr>`);
		  return response
		});
	
  // scrollbar樣式
  var scrollTb = $('.tbody__wrapper');
  scrollTb.tinyscrollbar({axis: "y"});
  $(window).resize(function(){
    scrollTb.tinyscrollbar_update();
  }).resize();

  $('.tbody__wrapper').on('mousewheel DOMMouseScroll', function(e){
    e.stopPropagation();

  });
  scrollTb.on('mouseup', function(){
    scrollTb.addClass('pc-moving');
  });
  scrollTb.on('touchmove', function(){
    scrollTb.addClass('moving');
  });

  // var $header_top = $('.header');
  AOS.init({});
  $('#fullpage').fullpage({
  // new fullpage('#fullpage', {
  //   licenseKey: 'YOUR KEY HERE',
    //anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    navigation: true,
    //scrollOverflow: true,
    normalScrollElements: '.tbody__wrapper',
    afterLoad: function(anchorLink, index){
      $('.fp-table.active .aos-init').addClass('aos-animate');
      //history.pushState(null, null, "index.html");
      scrollTb.tinyscrollbar_update(0);
    },
    afterRender: function(){
       $('.section--active .aos-init').removeClass('aos-animate');
       setTimeout(function(){
        $('.section--active .aos-init').addClass('aos-animate');
       }, 800)


    },
    onLeave: function(){
      if($('body').hasClass('noscroll') && $('.lightbox').is(':visible')) return false;
      if(scrollTb.hasClass('moving')){
        scrollTb.removeClass('moving')
        return false;
      }
      $('.fp-table.active .aos-init').removeClass('aos-animate');
    },
  });




  var dangerSwiper = new Swiper ('#dangerSlider .swiper-container', {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    // slidesPerGroup : 1,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    draggable: true,
    spaceBetween: 35,
    pagination: {
      el: '#dangerSlider .swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '#dangerSlider .swiper-button-next',
      prevEl: '#dangerSlider .swiper-button-prev',
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
        // noSwiping: true,
      },
      769: {
        slidesPerView: 2,
      },
    }
  });

  var seaSwiper = new Swiper ('#seaSlider .swiper-container', {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    spaceBetween: 35,
    draggable: true,
    pagination: {
      el: '#seaSlider .swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '#seaSlider .swiper-button-next',
      prevEl: '#seaSlider .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      },
      575: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      }
    }
  });

  var conservationSwiper = new Swiper ('#conservationSlider .swiper-container', {
    loop: true,
    speed: 500,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    slidesPerView: 1,
    spaceBetween: 35,
    draggable: true,
    pagination: {
      el: '#conservationSlider .swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '#conservationSlider .swiper-button-next',
      prevEl: '#conservationSlider .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      },
      575: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      }
    }
  });

  var extendSwiper = new Swiper ('#extendSlider .swiper-container', {
    loop: true,
    speed: 500,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    slidesPerView: 1,
    spaceBetween: 35,
    draggable: true,
    pagination: {
      el: '#extendSlider .swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '#extendSlider .swiper-button-next',
      prevEl: '#extendSlider .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      },
      769: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      },
      575: {
        slidesPerView: 1,
        slidesPerGroup : 1,
      }
    }
  });

  var protectSwiper = new Swiper ('#protectSlider .swiper-container', {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup : 1,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    spaceBetween: 10,
    draggable: true,
    pagination: {
      el: '#protectSlider .swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '#protectSlider .swiper-button-next',
      prevEl: '#protectSlider .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup : 3,
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup : 3,
        spaceBetween: 35,
      },
      575: {
        slidesPerView: 2,
        slidesPerGroup : 2,
        spaceBetween: 20,
      }
    }
  });

  var studySwiper;
  // rss feed

  var studyContent = '';
  $.ajax({
    url: "https://cors-anywhere.small-service.gpeastasia.org/https://www.greenpeace.org/taiwan/category/oceans/feed/?tag=mpa",
    method: "GET",
    success: function (res) {
      var $XML = $(res);
      $XML.find("item").each(function() {
          var $this = $(this),
              item = {
                  title:       $this.find("title").text(),
                  link:        $this.find("link").text(),
                  //description: $this.find("description").text(),
                  img:         $this.find("media\\:content").attr('url'),
              };
          console.log(res,item.img);
          studyContent += `<a class="swiper-slide card swiper-no-swiping" href="${item.link}?ref=2021-cwf_oceanprotector" title="${item.title}" target="_blank">
          <div class="card__img card__img--1" style="background-image:url(${item.img});"></div>
          <div class="card__bottom">
            <h3 class="card__title">${item.title}</h3>
            <div class="card__btn">MORE+</div>
          </div></a>`
      });
      $('#studySlider .swiper-wrapper').html(studyContent);
      studySwiper = new Swiper ('#studySlider .swiper-container', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        spaceBetween: 35,
        draggable: true,
        pagination: {
          el: '#studySlider .swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '#studySlider .swiper-button-next',
          prevEl: '#studySlider .swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 1,
          }
        }
      });
    },
    error: function (error) {
      console.log(error);
    }
  });


  // mobile nav icon點擊效果
  $('.nav-icon').click(function(){
    $(this).toggleClass('show');
    $(".nav").slideToggle(100);

    if($(this).hasClass('show')){
      $("body").addClass('noscroll');
      $('header').css('height', '100%');
      $('.header-container').addClass('gradient');
      $('.nav__item a').click(function(){
        $('.nav-icon').removeClass('show');
        $("body").removeClass('noscroll');
        $("header").css('height','auto');
        $(".nav").css('display','none');
      });
    }else{
      $("body").removeClass('noscroll');
      $("header").css('height','auto');
      $('.header-container').removeClass('gradient');
    }
  });

  // scroll down 點擊
  $('.scroll-down--1').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 1);
  });
  $('.scroll-down--2').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(3, 1);
  });
  $('.scroll-down--3').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(4, 1);
  });
  $('.scroll-down--4').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(5, 1);
  });
  $('.scroll-down--5').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(6, 1);
  });
  $('.scroll-down--6').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(7, 1);
  });
  $('.scroll-down--7').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(8, 1);
  })

  // 錨點點擊效果
  $(".hash").click(function(e){
    e.preventDefault();
    var newhash=$(this).attr("href");
    $('.lightbox').fadeOut(100);
    $('.header__apply').show();
    if (newhash == '#active') {
      $.fn.fullpage.moveTo(1, 1);
    }
    if (newhash == '#danger') {
      $.fn.fullpage.moveTo(2, 1);
    }
    if (newhash == '#sea') {
      $.fn.fullpage.moveTo(3, 1);
    }
    if (newhash == '#conservation') {
      $.fn.fullpage.moveTo(4, 1);
    }
    if (newhash == '#extend') {
      $.fn.fullpage.moveTo(5, 1);
    }
    if (newhash == '#dolphin') {
      $.fn.fullpage.moveTo(6, 1);
    }
    if (newhash == '#protect') {
      $.fn.fullpage.moveTo(7, 1);
    }
    if (newhash == '#study') {
      $.fn.fullpage.moveTo(8, 1);
    }
  });


  $('.header__apply').append('<input class="header__input" type="text" placeholder="電子信箱" autofocus></input>');
  $('.header__input').hide();
  $('.close').click(function(e){
    $('.lightbox').fadeOut(100);
    $('.header__apply').show();
    $('#fp-nav').show();
    $("body").removeClass('noscroll');
    $('.header__apply').show().removeClass('show');
    $('.header__apply').css('backgroundColor', '');
    $('.header__input').hide();
    $('.header__apply span').show();
  });

  var w = $(window).width();
  $(window).resize(function(){
    w = $(window).width();
    if ( w > 768 ) {
      if($('.header').hasClass('enter-pc')) return false;
      $('.header').addClass('enter-pc');
      $('.header__apply').hover(function() {
        $(this).addClass('show');
        $(this).css('backgroundColor', 'white');
        $('.header__input').show();
        $('.header__apply span').hide();
        $('.header__input').focus();

      }, function(){
        if($('body').hasClass('noscroll')) return false;
        $('.header__apply').show().removeClass('show');
        $('.header__apply').css('backgroundColor', '');
        $('.header__input').hide();
        $('.header__apply span').show();
      });
      $('.header__input, .protect__btn').click(function(e){
        e.preventDefault();
        $('.header__apply').hide();
        $('#fp-nav').hide();
        $('.lightbox').fadeIn();
        $("body").addClass('noscroll');
      });
    }else {
      if($('.header').hasClass('enter-mb')) return false;
      $('.header').addClass('enter-mb');
      $('.header__apply, .protect__btn').click(function(e){
        e.preventDefault();
        $('.header__apply').hide();
        $('#fp-nav').hide();
        $('.lightbox').fadeIn();
        $("body").addClass('noscroll');
      });
    }
    if(w<=575){
      $('.study__space-block').css({
        'padding-bottom': $('.footer').height() + 'px'
      });
    }
  }).resize();

  // var titleHeight = [];
	// $(".study__slider .card .card__bottom .card__title").each(function (index) {
	// 	titleHeight[index] = $(this).height();
	// });
	// var max = titleHeight[0];
	// for (var i = 0; i < titleHeight.length; i++) {
	// 	if (titleHeight[i] >= max) {
	// 		max = titleHeight[i];
	// 		$(".study__slider .card .card__bottom .card__title").height(max);
	// 	}
	// }

  $('.donate__btn').on('click', function(e){
	//console.log('donate');
	window.location.href= "https://supporter.ea.greenpeace.org/tw/s/donate?campaign=cwf&ref=2021-cwf_protector_tkpage";
  });
  
  $('.fb__btn').on('click', function(e){	
	window.location.href= "https://www.facebook.com/sharer/sharer.php?u=https://act.gp/3uCHosc";
  });

  //$('.fb__btn').width($('.donate__btn').width());
})

//mailcheck
let domains = [
	"me.com",
	"outlook.com",
	"netvigator.com",
	"cloud.com",
	"live.hk",
	"msn.com",
	"gmail.com",
	"hotmail.com",
	"ymail.com",
	"yahoo.com",
	"yahoo.com.tw",
	"yahoo.com.hk"
];
let topLevelDomains = ["com", "net", "org"];
let email = document.getElementById("Email");

email.onblur = function(){
	if (!document.getElementById("email-suggestion")) {
		Mailcheck.run({
			email: email.value,
			domains: domains,                       // optional
			topLevelDomains: topLevelDomains,       // optional
			suggested: function(suggestion) {		
				email.insertAdjacentHTML('afterend', `<div id="email-suggestion">您想輸入的是 <strong id="emailSuggestion">${suggestion.full}</strong> 嗎？</div>`);
				console.log(suggestion)
				document.getElementById("email-suggestion").onclick = function() {
					email.value = document.getElementById("emailSuggestion").innerText;
					document.getElementById("email-suggestion").remove();
					document.querySelector("")
				};
			},
			empty: function() {
				this.emailSuggestion = null;
			}
		});
	}
};


 //表單驗證
 window.addEventListener('DOMContentLoaded', (event) => {
  // create the year options
let currYear = new Date().getFullYear();
  for (var i = 0; i < 100; i++) {
  let option = `<option value="${currYear-i}-01-01">${currYear-i}</option>`;
  let obj = document.getElementById('Birthdate');
  obj.add(new Option(currYear-i, `${currYear-i}-01-01`));
  }

// generate LINE QR code in the thank you page & hide donate btn
utm.line_QR_code('#line_block');
utm.hide_donate_btn('#donate_btn');
	
// form validation
$.validator.addMethod(
      'email',
      function(value, element){
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i.test(value);
      },
      'Email 格式錯誤'
  );

  $.validator.addMethod(
      'taiwan-phone',
      function (value, element) {
    const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(value);
    const phoneReg7 = new RegExp(/^(0|886|\+886){1}[2-8]-?\d{6,8}$/).test(value);
      
    if ($('#MobilePhone').prop('required')) {
      return this.optional(element) || phoneReg6 || phoneReg7;
    } else if ($('#MobilePhone').val()) {
      return this.optional(element) || phoneReg6 || phoneReg7;
    }
    return true;
      },
      "電話格式不正確，請輸入格式 0912345678 或 02-12345678");

  $.validator.addClassRules({ // connect it to a css class
      "email": {email: true},
      "taiwan-phone" : { "taiwan-phone" : true }
  });

  $.extend($.validator.messages, {
      required: "必填欄位"
  });
    
  $("#signForm").validate({       
      submitHandler: function() {          
    showFullPageLoading();
    
    let formData = new FormData();
    document.querySelectorAll("#signForm input,select").forEach(function (el, idx) {
      let v = null
      if (el.type==="checkbox") {
        v = el.checked;
      } else {
        v = el.value;
      }

      formData.append(el.name, v);
      console.log("Use", el.name, v);
    });

    fetch(document.querySelector("#signForm").action, {
      method: 'POST',
      body: formData
    })
    .then(response => {console.log(response); return response.json()})
    .then(response => {            
      if (response) {                                  
        if (response.Supporter) {
          // add tracking code here
		  sendPetitionTracking("2021-cwf_oceanprotector");
		  
          console.log('successful');
          //$('.lightbox .close').trigger('click');
		  // hide the Form, display the thank you div
			$('.lightbox__form').hide();
			$('.thank-you-page').css("display","flex");
        }
      }
      hideFullPageLoading();
    })
    .catch(error => {
      console.log(error);
      alert('送出失敗，請再試一次或聯絡我們')
      hideFullPageLoading();
      // display the error message                      
    });
  }
});
  
/**
 * This is a full page loading animation	 
   */
const showFullPageLoading = () => {
  if ( !document.querySelector("#page-loading")) {
    document.querySelector("body").insertAdjacentHTML('beforeend', `
      <div id="page-loading" class="hide">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>`);
      }

      setTimeout(() => { // to enable the transition
        document.querySelector("#page-loading").classList.remove("hide")
      }, 0)
}
/**
 * Hide the full page loading
 */
const hideFullPageLoading = () => {
  document.querySelector("#page-loading").classList.add("hide")

      setTimeout(() => {
        document.querySelector("#page-loading").remove()
      }, 1100)
}

const sendPetitionTracking = (eventLabel, eventValue) => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
	    'event': 'gaEvent',
	    'eventCategory': 'petitions',
	    'eventAction': 'signup',
	    'eventLabel': eventLabel,
	    'eventValue' : eventValue
	});

	window.dataLayer.push({
	    'event': 'fbqEvent',
	    'contentName': eventLabel,
	    'contentCategory': 'Petition Signup'
	});
} 
});

