function createParticle() {
    const particle = document.createElement('div');
    var duration = (Math.random() * 7 + 5);
    var size = (Math.random() * 10 + 4);
    var timeout = duration * 1000;

    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = duration + 's';
    document.getElementById('particles').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, timeout);
}

// Create particles continuously
setInterval(createParticle, 200);