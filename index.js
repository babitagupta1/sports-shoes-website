const shoes = [
    { id: 1, image: "1-img" },
    { id: 2, image: "2-png" },
    { id: 3, image: "3-png" },
    { id: 4, image: "4-png" }
];

const mainImage = document.querySelector('.main-shoe'); 
const icons = document.querySelectorAll('.icon');       

function updateImage(shoeId) {
    const selectedShoe = shoes.find(shoe => shoe.id === shoeId);
    if (selectedShoe) {
        mainImage.src = selectedShoe.image;
    }

    icons.forEach(icon => icon.classList.remove('icon-active'));

    const activeIcon = document.querySelector(`.icon[data-shoe="${shoeId}"]`);
    if (activeIcon) {
        activeIcon.classList.add('icon-active');
    }
}

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const shoeId = parseInt(icon.getAttribute('data-shoe'));
        updateImage(shoeId);
    });
});

updateImage(1);
