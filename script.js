const envelope = document.querySelector('.envelope-wrapper');
const btnOpen = document.getElementById('open');
const btnReset = document.getElementById('reset');

// Toggle open class
const toggleEnvelope = () => {
    envelope.classList.toggle('open');
    document.querySelector('.owl-message').classList.toggle('hidden');
};

envelope.addEventListener('click', toggleEnvelope);

// Accessibility: Allow keyboard (Enter/Space) to open
envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Prevent scrolling for space
        toggleEnvelope();
    }
});

btnOpen.addEventListener('click', () => {
    envelope.classList.add('open');
    document.querySelector('.owl-message').classList.add('hidden');
});

btnReset.addEventListener('click', () => {
    envelope.classList.remove('open');
    document.querySelector('.owl-message').classList.remove('hidden');
});

// Pagination Logic
let currentPage = 1;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const pageIndicator = document.getElementById('page-indicator');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updatePagination() {
    // Show active page
    pages.forEach((page, index) => {
        if (index + 1 === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    
    // Update counter
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;
    
    // Update buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing the envelope
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing the envelope
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

// Generate generic stars for background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = ''; // Clear existing
    const count = 100; // Number of stars

    for(let i=0; i<count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2 + 1; // 1px to 3px
        
        // Random animation duration and delay
        const duration = Math.random() * 3 + 2; // 2s to 5s
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        
        starsContainer.appendChild(star);
    }
}

createStars(); // Init stars individually
