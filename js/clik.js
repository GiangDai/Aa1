// console.log("xin chào");
// tab_ex = document.querySelector('.tab_ex');
// // trangchu = document.querySelector('.trangchu');
// cong_tru = document.getElementById('cong_tru');
// tab_ex.addEventListener('click', function (e) {


//     // Kiểm tra và thay đổi lớp biểu tượng
//     if (cong_tru.classList.contains('fa-plus')) {
//         cong_tru.classList.remove('fa-plus');
//         cong_tru.classList.add('fa-minus');
//         // trangchu.style.display = 'block';
//     } else {
//         cong_tru.classList.remove('fa-minus');
//         cong_tru.classList.add('fa-plus');
//         // trangchu.style.display = 'none';
//     }
// })
// tab_ex1 = document.querySelector('.tab_ex1');
// // trangchu = document.querySelector('.trangchu1');
// cong_tru1 = document.getElementById('cong_tru1');
// tab_ex1.addEventListener('click', function (e) {
//     // e.preventDefault();
//     // e.stopPropagation();

//     // Kiểm tra và thay đổi lớp biểu tượng
//     if (cong_tru1.classList.contains('fa-plus')) {
//         cong_tru1.classList.remove('fa-plus');
//         cong_tru1.classList.add('fa-minus');
//         // trangchu1.style.display = 'block';
//     } else {
//         cong_tru1.classList.remove('fa-minus');
//         cong_tru1.classList.add('fa-plus');
//         // trangchu1.style.display = 'none';
//     }
// })

tt = document.querySelector('.tt');


tk_close = document.getElementById('tk_close');
tt.addEventListener('click', function (e) {
    console.log('hello');
    e.preventDefault();
    e.stopPropagation();

    var thanh_tk = document.querySelector('.thanh_tk');
    // console.log(thanh_tk);
    // thanh_tk.style.display = 'block';
    // console.log(e);

    console.log(tk_close.classList.contains('fa-magnifying-glass'));


    if (tk_close.classList.contains('fa-magnifying-glass')) {
        tk_close.classList.remove('fa-magnifying-glass');
        tk_close.classList.add('fa-xmark');
        thanh_tk.style.display = 'block'; // Hiển thị thanh_tk
        tk_close.style.fontSize = '1.5rem'; // Hiển thị thanh_tk
    } else {
        tk_close.classList.remove('fa-xmark');
        tk_close.classList.add('fa-magnifying-glass');
        tk_close.style.fontSize = '20px';
        thanh_tk.style.display = 'none'; // Ẩn thanh_tk
    }
});
ngonngu = document.querySelector('.ngonngu-li');
nndiv = document.querySelector('.ngonngu-div');
ng = document.querySelector('.ngonngu')
ng.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("xin ");

    // Kiểm tra và thay đổi lớp biểu tượng
    if (nndiv.style.display === 'none') {
        nndiv.style.display = 'block'; // 
    } else {
        nndiv.style.display = 'none';// 
    }
});

ngonngumy = document.querySelector('.mony-li');
nndivmy = document.querySelector('.mony-div');
nmy = document.querySelector('.monyy')
nmy.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("xin ");

    // Kiểm tra và thay đổi lớp biểu tượng
    if (nndivmy.style.display === 'none') {
        nndivmy.style.display = 'block'; // 
    } else {
        nndivmy.style.display = 'none';// 
    }
});

function changeIcon(e){
    console.log(e);
    
    if (e.classList.contains('fa-plus')) {
        e.classList.remove('fa-plus');
        e.classList.add('fa-minus');
    } else {
        e.classList.remove('fa-minus');
        e.classList.add('fa-plus');
    }
}