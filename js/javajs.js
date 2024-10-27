
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  var swiperSectionCategory = new Swiper(".mySwiperCategory", {
    slidesPerView: 2, // Mặc định hiển thị 4 item
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination-category",
        clickable: true,
        ynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Khi kích thước màn hình <= 768px (kích thước của iPad), hiển thị 2 item
        992: {
            slidesPerView: 4,
        }
    }
});

var swiperSectionCategory = new Swiper(".mySwiperCategory2", {
  slidesPerView: 2, // Mặc định hiển thị 4 item
  spaceBetween: 30,
  loop: true,
  pagination: {
      el: ".swiper-pagination-category2",
      clickable: true,
      ynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      // Khi kích thước màn hình <= 768px (kích thước của iPad), hiển thị 2 item
      992: {
          slidesPerView: 4,
      },

      763: { // Khi kích thước màn hình <= 763px, hiển thị 2 item
        slidesPerView: 3,
    }
  }
});
// Ngăn ngừa hành vi mặc định của liên kết
document.getElementById('videoLink').addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn ngừa hành vi mặc định của liên kết

  // Mở Offcanvas bằng JavaScript
  var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'));
  offcanvas.show();
});

var swiperSectionCategory = new Swiper(".mySwiperblog", {
  slidesPerView: 1, // Mặc định hiển thị 4 item
  spaceBetween: 30,
  loop: true,
  pagination: {
      el: ".swiper-pagination-blog",
      clickable: true,
      ynamicBullets: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
      // Khi kích thước màn hình <= 768px (kích thước của iPad), hiển thị 2 item
      992: {
          slidesPerView: 3,
      },

      763: { // Khi kích thước màn hình <= 763px, hiển thị 2 item
        slidesPerView: 2,
    }
  }
});
var swiperSectionCategory = new Swiper(".mySwiperCategory3", {
  slidesPerView: 2, // Mặc định hiển thị 4 item
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
      // Khi kích thước màn hình <= 768px (kích thước của iPad), hiển thị 2 item
      992: {
          slidesPerView: 6,
      },

      400: { // Khi kích thước màn hình <= 763px, hiển thị 2 item
        slidesPerView: 4,
    }

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