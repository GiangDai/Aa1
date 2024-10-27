
var swiperSectionCategory = new Swiper(".mySwiperCategory4", {
    slidesPerView: 3, // Mặc định hiển thị 4 item
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Khi kích thước màn hình <= 768px (kích thước của iPad), hiển thị 2 item
        770: {
            slidesPerView: 4,
        },
  
    }
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
// // thay đổi gacahj chaanj
// document.getElementById('thd').addEventListener('click', function(e) {
//   e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
//   this.classList.toggle('underline'); // Chuyển đổi lớp "underline"
// });