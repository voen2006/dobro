let btn1 = document.querySelector('.switch-btn-1')
let btn2 = document.querySelector('.switch-btn-2')

btn1.addEventListener("click", function () {
    btn1.classList.add('btnOneClick');
    btn1.classList.remove('btn-1');
    btn2.classList.add('btn-2');
    btn2.classList.remove('btnTwoClick');
})
btn2.addEventListener("click", function () {
    btn1.classList.add('btn-1');
    btn1.classList.remove('btnOneClick');
    btn2.classList.remove('btn-2');
    btn2.classList.add('btnTwoClick');
})