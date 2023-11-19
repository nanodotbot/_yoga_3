const navModal = document.getElementById('nav-modal');
const navMenu = document.getElementById('nav-menu');
const modalLinks = document.querySelectorAll('.modal-link');

navMenu.onclick = () => {
    navModal.classList.toggle('active');
    navMenu.classList.toggle('active');
};

modalLinks.forEach(modalLink => {
    modalLink.onclick = () =>{
        navModal.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
})