
const btnMenu = document.querySelector('.btn_rond_menu');
const nav = document.querySelector('.navgauche');
const close = document.querySelector('.close')





btnMenu.addEventListener('click', ()=>{

    
    nav.classList.toggle('shownav');
    
});


close.addEventListener('click',()=>{
    nav.classList.toggle('shownav');
});


const elem = document.querySelectorAll(".test");

elem.forEach(item =>{
  item.addEventListener("click",()=>{
    nav.classList.toggle('shownav');

    
  })
})





