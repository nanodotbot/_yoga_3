const previous2 = document.getElementById('previous-2');
const next2 = document.getElementById('next-2');

let current = 0;

const handlePrevious = () => {
    if(current === 0) {
        current = modalImages.length - 1;
        return;
    }
    current--;
}
const handleNext = () => {
    if(current === modalImages.length - 1) {
        current = 0;
        return;
    }
    current++;
}

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