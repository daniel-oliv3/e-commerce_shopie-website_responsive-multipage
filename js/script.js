/*Side-bar Btn/Botão barra lateral*/
let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
}


/*Search Btn/Botão de pesquisa*/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
}

