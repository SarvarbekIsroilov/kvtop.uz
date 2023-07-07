
 let list_length = document.querySelectorAll('.slide ul li');
let list_one = document.querySelector('.slide ul li:nth-child(1)');
let list_two = document.querySelector('.slide ul li:nth-child(2)');

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', two);
function two(){
    btn2.classList.add('col');
    btn1.classList.remove('col');

    list_two.classList.remove('opac');
    list_two.classList.add('blok');
    list_one.classList.remove('blok');
    list_one.classList.add('opac');
}

btn1.addEventListener('click', blok);
function blok(){
    btn2.classList.remove('col');
    btn1.classList.add('col');

    list_one.classList.add('blok');
    list_one.classList.remove('opac');
    list_two.classList.add('opac');
    list_two.classList.remove('blok');

}
let interval1 = setInterval(run, 5000);
let interval2 = setInterval(row, 10000);

function run(){
    two();
}
function row(){
    blok();
}
    
function many(){
    let item = document.querySelector('.list');
    item.classList.toggle('black');
}

 const toping = document.querySelector('.top_icon');
 toping.addEventListener('click', () =>{
    window.scrollTo({
        top:0
    })
 })
 
window.addEventListener('scroll', () =>{
    toping.classList.toggle('bln',window.scrollY>200);
    
  
})

window.addEventListener('scroll',() => {
    let shodow = document.querySelector('.navbar_list');
    shodow.classList.toggle('fix', window.scrollY>120);
    
})

// slide uchun yozamiz
let slide_lenght = document.querySelectorAll('.boox .one_slide');
console.log(slide_lenght.length);

let index = 0;

let next = document.querySelector('#next');
let back = document.querySelector('#back');
    next.addEventListener('click', function(){
        index++;
        images();
    })
    back.addEventListener('click', function(){

        index--;
        images();
    })

function images(){
    if(index>slide_lenght.length-3){
        index = 0;
    }
    else if(index<0){
        index = slide_lenght.length-3;
    }
    let lister = document.querySelector('.boox');
    lister.style.transform=`translateX(${-index * 400}px)`;
}    

let intervals =setInterval(() => {
    takror();
}, 3000);;
function takror(){
    index++;
    images();
}


// footer slide uchun yozamiz
let ind= 0;
let uzunligi= document.querySelectorAll('.slider_foo .file')
console.log(uzunligi.length);
const oldinga = document.getElementById('oldinga');
const orqaga = document.getElementById('orqaga');
function transform(){
    if(ind>uzunligi.length-3){
        ind = uzunligi.length-6;
    }
    else if(ind<0){
        ind = uzunligi.length-3;
    }
    const slider_foo = document.querySelector('.footer_slider');
    slider_foo.style.transform=`translatex(${-ind * 33}%)`;
}                             
oldinga.addEventListener('click', goo);
orqaga.addEventListener('click', back_goo);
function goo(){
    ind++;
    ber();
    transform();

}
function back_goo(){
    ind--;
    transform();

}
function ber(){
    let davomiy = setInterval(() => {
        ind++;
        transform();
    
    }, 4000);
    

}

const sharpa = document.querySelector('.sharpa');
const face = document.querySelector('.right_menu_face');


const right_menu = document.querySelector('.led_down');
right_menu.addEventListener('click', () =>{
    sharpa.classList.add('opacity');
    face.classList.add('qayt');
})
const btn_back = document.querySelector('#btn_back');
    btn_back.addEventListener('click', () => {
    sharpa.classList.remove('opacity');
    face.classList.remove('qayt');


})

