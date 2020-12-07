const pageWidth = document.documentElement.scrollWidth - 150;

const header = document.querySelector('.Header');

const updateWidth = () => {
    console.log(pageWidth);
    header.style.width = pageWidth;
    console.log(header.style.width)
}
updateWidth();