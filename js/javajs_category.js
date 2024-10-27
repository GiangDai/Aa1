
var swiperSectionCategory = new Swiper(".mySwiperCategory3", {
    slidesPerView: 3, // Mặc định hiển thị 4 item
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Khi kích thước màn hình <= 768px (kích thước của iPad), hiển thị 2 item
        992: {
            slidesPerView: 7,
        },
        770: {
            slidesPerView: 6,
        },
  
    }
  });
  // Tạm dừng autoplay khi di chuột vào vùng Swiper
  swiperSectionCategory.el.addEventListener('mouseenter', function() {
    swiperSectionCategory.autoplay.stop(); // Dừng autoplay
  });
  
  // Tiếp tục autoplay khi di chuột ra khỏi vùng Swiper
  swiperSectionCategory.el.addEventListener('mouseleave', function() {
    swiperSectionCategory.autoplay.start(); // Tiếp tục autoplay
  });
  
  
//nút thanh cuộn lên đầu

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Cuộn mượt mà lên đầu trang khi nhấn vào nút
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function handleShowMenu(e){
  let cate = document.querySelectorAll('.Categories__nav')[0];
  console.log(cate);
  if(cate.classList.contains('d-none')){
    cate.classList.remove('d-none');
    cate.classList.add('d-block');
  }else {
    cate.classList.add('d-none');
    cate.classList.remove('d-block');
  }
  
}