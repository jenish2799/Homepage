//================================Start Practice====================================//    

// let dataObj = {
//     name: 'Jenish',
//     age: 21,
//     look: {
//         eye: 'blue',
//         skin: 'Indian'
//     }
// }

// //console.log(dataObj.look);

// // let dataClone = cloneObject({}, dataObj);
// // console.log(dataClone);
// let dataClone = cloneDeep(dataObj); 
// console.log(dataClone);

// function cloneDeep(obj){
//     let clone = {}
//     for (let key in obj){
//         if (typeof obj[key] === "object"){
//             clone[key] = cloneDeep(obj[key]);
//             console.log(clone[key]);
//         }else {
//             clone[key] = obj[key];
//         }
//     }
//     return clone;
// }



// function cloneObject(clone, object) {
//     for (let key in object) {
//     if (typeof object[key] === "object") {
//     clone[key] = cloneObject(object[key], {});
//     } else {
//     clone[key] = object[key];
//     }
//     }
//     return clone;
//     }

//================================End Practice======================================//    

// SLIDER
$(document).ready(function() {
    // HERO-SLIDER
    $('#collection').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        mobileFirst: true,
        adaptiveHeight: true,
        fade:true,
        customPaging : function(slider, i) {
                return '<a>'+'0'+(i+1)+'</a>';
        }        
    });

    //ARRIVAL SECTION SLIDER
    $('.arrivals-container').slick({
        autoplay:false,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1025,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 3
                }
            },
            {
            breakpoint: 769,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2
                }
            },
            {
            breakpoint: 481,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToScroll: 1,
                slidesToShow: 1
                }
            }
        ]
    });

});

// FOR RESPONSIVE NAV

$(function () {
    $(document).scroll(function () {
      var $nav = $(".header-section");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

var header_first = document.querySelector('.header-first');
var selectBody = document.querySelector('body');

document.querySelector('.nav-icon').addEventListener('click' , function() {
    header_first.classList.add('responsive');
    //document.querySelector('.responsive .menu').style.width = '250px';
    selectBody.style.overflowY = 'hidden';
    selectBody.style.backgroundColor = 'rgba(0,0,0,0.5)';
});

document.querySelector('.btn-close-nav').addEventListener('click', function() {
    header_first.classList.remove('responsive');
    //document.querySelector('.menu').style.width = '0px';
    selectBody.style.overflowY = 'auto';
    selectBody.style.backgroundColor = 'inherit';

    hidePanel();
    innerHidePanel();
});


//FOR HOME,SHOP,PAGE AND BLOG CLICK EVENTS IN SMALL SCREEN

let acc = document.querySelectorAll(".accordion");
let accPanel = document.querySelectorAll('.panel');

for (let j = 0; j < acc.length; j++) {
  acc[j].addEventListener("click", function() {
      if (this.nextElementSibling.style.maxHeight) {
          hidePanel();
      } else {
          showPanel(this);
      }
 
  });
}

function showPanel(el) {
    hidePanel();
    el.classList.add('active');
    el.nextElementSibling.style.maxHeight = '500px';
}

function hidePanel() {
    for(let i = 0; i < accPanel.length; i++) {
        accPanel[i].style.maxHeight = null;
        acc[i].classList.remove('active');
    }
}


// FOR SHOP MEGA-MENU IN SMALL SCREEN
let shop_acc = document.querySelectorAll(".shop-accordion");
let shop_accPanel = document.querySelectorAll('.shop-panel');

for (let j = 0; j < shop_acc.length; j++) {
  shop_acc[j].addEventListener("click", function() {
      if (this.nextElementSibling.style.maxHeight) {
        shopHidePanel();
      } else {
        shopShowPanel(this);
      }
 
  });
}

function shopShowPanel(el) {
    shopHidePanel();
    el.classList.add('shop-active');
    el.nextElementSibling.style.maxHeight = '500px';
}

function shopHidePanel() {
    for(let i = 0; i < shop_accPanel.length; i++) {
        shop_accPanel[i].style.maxHeight = null;
        shop_acc[i].classList.remove('shop-active');
    }
}

// TAB LAYOUT
function openProductPage(e, tabName) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    e.currentTarget.className += ' active';
}

// DEFAULT OPEN TAB
document.getElementById('defaultOpen').click();


//FOR SEARCH, WISHLIST AND CART CONTENT

var search_content = document.querySelector('.search-content');
var wishlist_content = document.querySelector('.wishlist-content');   
var cart_content = document.querySelector('.cart-content');

document.querySelector('.fa-search').addEventListener('click', function() {
    cart_content.classList.remove('display-cart-content');
    wishlist_content.classList.remove('display-wishlist-content');
    search_content.classList.toggle('display-search-content');
});

document.querySelector('.close-icon').addEventListener('click', function() {
    search_content.classList.remove('display-search-content');
});

document.querySelector('.fa-heart').addEventListener('click', function() {
    cart_content.classList.remove('display-cart-content');
    search_content.classList.remove('display-search-content');
    wishlist_content.classList.toggle('display-wishlist-content');
});

document.querySelector('.fa-shopping-cart').addEventListener('click', function() {
    search_content.classList.remove('display-search-content');
    wishlist_content.classList.remove('display-wishlist-content');
    cart_content.classList.toggle('display-cart-content');
});

document.querySelector('.cart-close-icon').addEventListener('click', function() {
    cart_content.classList.remove('display-cart-content');
});


// FOR COUNTDOWN TIMER
    
var endDate = new Date("Aug 13, 2020");

var x = setInterval(function() {

    var now = new Date();

    var remainingTime = endDate - now;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if (remainingTime <= 0) {
        endDate.setDate(endDate.getDate() + 5);
        console.log(endDate);
    }
        
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    
});


