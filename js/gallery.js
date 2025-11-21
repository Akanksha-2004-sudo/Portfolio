document.addEventListener('DOMContentLoaded', function() {
    // Simple Lightbox functionality for gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const clone = img.cloneNode();
            
            // Clear lightbox
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            
            // Add image to lightbox
            lightbox.appendChild(clone);
            
            // Show lightbox
            lightbox.classList.add('active');
        });
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target !== e.currentTarget) return;
        this.classList.remove('active');
    });
    
    // Add styles for lightbox
    const lightboxStyles = document.createElement('style');
    lightboxStyles.textContent = `
        #lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
        
        #lightbox.active {
            opacity: 1;
            pointer-events: all;
        }
        
        #lightbox img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
    `;
    document.head.appendChild(lightboxStyles);
});