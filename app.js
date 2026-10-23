const card = document.getElementById('card');
const flipBtn = document.getElementById('flip-btn');

function toggleFlip() {
    card.classList.toggle('flipped');
}

// Hem karta tıklayınca hem de butona basınca kart dönsün
card.addEventListener('click', toggleFlip);
flipBtn.addEventListener('click', toggleFlip);
