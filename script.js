const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successScreen = document.getElementById('successScreen');
const mainContainer = document.getElementById('mainContainer');

function getRandomPosition() {
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const padding = 20;
    
    const maxX = viewportWidth - btnWidth - padding;
    const maxY = viewportHeight - btnHeight - padding;
    
    const minX = padding;
    const minY = padding;
    
    const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
    const randomY = Math.floor(Math.random() * (maxY - minY) + minY);
    
    return { 
        x: Math.max(minX, Math.min(randomX, maxX)), 
        y: Math.max(minY, Math.min(randomY, maxY)) 
    };
}

function moveNoButton() {
    const pos = getRandomPosition();
    noBtn.style.position = 'fixed';
    noBtn.style.left = pos.x + 'px';
    noBtn.style.top = pos.y + 'px';
    noBtn.style.zIndex = '100';
}

noBtn.addEventListener('mouseenter', moveNoButton);

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'valentine.html';
});

window.addEventListener('resize', () => {
    if (noBtn.style.position === 'fixed') {
        const btnRect = noBtn.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const padding = 20;
        
        let currentLeft = parseFloat(noBtn.style.left);
        let currentTop = parseFloat(noBtn.style.top);
        
        const maxX = viewportWidth - btnRect.width - padding;
        const maxY = viewportHeight - btnRect.height - padding;
        
        if (currentLeft > maxX) {
            noBtn.style.left = maxX + 'px';
        }
        if (currentTop > maxY) {
            noBtn.style.top = maxY + 'px';
        }
        if (currentLeft < padding) {
            noBtn.style.left = padding + 'px';
        }
        if (currentTop < padding) {
            noBtn.style.top = padding + 'px';
        }
    }
});

function createFloatingHeart() {
    const container = document.getElementById('floatingHeartsContainer');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    
    const hearts = ['💕', '💗', '💖', '💝', '💓', '❤️'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    const size = Math.random() * 25 + 25;
    heart.style.fontSize = size + 'px';
    
    const startPosition = Math.random() * 100;
    heart.style.left = startPosition + '%';
    
    const drift = (Math.random() - 0.5) * 100;
    heart.style.setProperty('--drift', drift + 'px');
    
    const duration = Math.random() * 4 + 6;
    heart.style.animationDuration = duration + 's';
    
    const delay = Math.random() * 2;
    heart.style.animationDelay = delay + 's';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

function startFloatingHearts() {
    setInterval(() => {
        createFloatingHeart();
    }, 800);
}

startFloatingHearts();
