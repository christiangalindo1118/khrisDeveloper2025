// Sound effects for Section 3 (Projects)
const hoverSound = document.getElementById('hoverSound');
const selectSound = document.getElementById('selectSound');

if (hoverSound && selectSound) {
    document.querySelectorAll('#section3 .gridy-1').forEach(item => {
        item.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => console.log("Audio play failed: " + e));
        });

        item.addEventListener('click', () => {
            selectSound.currentTime = 0;
            selectSound.play().catch(e => console.log("Audio play failed: " + e));
        });
    });
}

// Sound effects for Section 4 (Skills)
const hoverSound2 = document.getElementById('hoverSound2');
if (hoverSound2) {
    document.querySelectorAll('#section4 .progress-container').forEach(item => {
        item.addEventListener('mouseenter', () => {
            hoverSound2.currentTime = 0;
            hoverSound2.play().catch(e => console.log("Audio play failed: " + e));
        });
    });
}

// Logic for Section 6 (Carousel)
function toggleImageSelection(event) {
    const selectedItem = event.currentTarget;
    // This function can be expanded if selection logic is needed in the future.
    // For now, the primary interaction is the hover and auto-rotation.
}

// Initialize carousel animation
const box = document.querySelector('.box');
if (box) {
    let rotation = 0;
    setInterval(() => {
        if (box.matches(':hover')) return; // Pause animation on hover
        rotation += 0.2; // Slower, smoother rotation
        box.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
    }, 50);
}

// Animate progress bars on scroll
const skillBars = document.querySelectorAll('#section4 .progress');
const skillsSection = document.getElementById('section4');

const animateSkills = () => {
    let scrollPosition = window.innerHeight + window.scrollY;
    let sectionPosition = skillsSection.offsetTop + skillsSection.offsetHeight / 2;

    if (scrollPosition > sectionPosition) {
        skillBars.forEach(bar => {
            let targetWidth = bar.style.width;
            bar.style.width = targetWidth; // This triggers the transition defined in CSS
        });
        // Remove listener after animation to prevent re-triggering
        window.removeEventListener('scroll', animateSkills);
    }
};

window.addEventListener('scroll', animateSkills);