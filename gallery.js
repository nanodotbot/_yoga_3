const imgs = document.querySelectorAll('.img');
const links = document.querySelectorAll('.gallery-link');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const previous2 = document.getElementById('previous-2');
const next2 = document.getElementById('next-2');

let current = 0;
links.forEach((link, index) => {
    link.onclick = () => {
        imgs[current].classList.remove('active');
        links[current].classList.remove('active');
        imgs[index].classList.add('active');
        links[index].classList.add('active');
        current = index;
    };
});

const handlePrevious = () => {
    imgs[current].classList.remove('active');
    links[current].classList.remove('active');
    if(current === 0) {
        current = imgs.length - 1;
        imgs[current].classList.add('active');
        links[current].classList.add('active');
        console.log(current);
        return;
    }
    current--;
    imgs[current].classList.add('active');
    links[current].classList.add('active');
}
const handleNext = () => {
    imgs[current].classList.remove('active');
    links[current].classList.remove('active');
    if(current === imgs.length - 1) {
        current = 0;
        imgs[current].classList.add('active');
        links[current].classList.add('active');
        console.log(current);
        return;
    }
    current++;
    imgs[current].classList.add('active');
    links[current].classList.add('active');
}

previous.onclick = handlePrevious;
next.onclick = handleNext;
previous2.onclick = e => {
    e.stopPropagation();
    handlePrevious();
    modalImage.setAttribute('src', modalImages[current].getAttribute('src'));
}
next2.onclick = e => {
    e.stopPropagation();
    handleNext();
    modalImage.setAttribute('src', modalImages[current].getAttribute('src'));
}