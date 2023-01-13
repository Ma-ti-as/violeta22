const my=document.querySelector('#myDropdown');
const btn=document.querySelector('#btn');

const drop=()=>{
    my.classList.toggle('show');
};

btn.onclick=drop;
