if (performance.navigation.type === 1) {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const poemLines = document.querySelectorAll('.poem-line');
    const valentineTitle = document.querySelector('.valentine-title');
    
    setTimeout(() => {
        poemLines.forEach((line, index) => {
            line.style.animationPlayState = 'running';
        });
    }, 300);
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hearts = document.querySelectorAll('.heart-float-bg');
        
        hearts.forEach((heart, index) => {
            const speed = 0.5 + (index * 0.1);
            heart.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
