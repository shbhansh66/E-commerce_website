
import "./style.css";



const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });







      /* --- Default Hidden State for individual features --- */

    
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // 1. Reveal the main section instantly (from .scroll-reveal to .scroll-reveal.active)
                element.classList.add('active');
                
                // 2. Stagger the reveal of the inner features
                if (element.classList.contains('why-choose-us')) {
                    const features = element.querySelectorAll('.choose-us-feature');
                    
                    features.forEach((feature, index) => {
                        // Set a delay based on the index (0.2s for the first, 0.4s for the second, etc.)
                        const delay = index * 200; // 200 milliseconds stagger
                        
                        setTimeout(() => {
                            feature.classList.add('feature-visible');
                        }, delay);
                    });
                }
                
                // Stop observing the main section
                observer.unobserve(element); 
            }
        });
    }, observerOptions);

    // Find all elements with the class 'scroll-reveal' and start observing them
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
});


import products  from './api/products.json';
import { showProductContainer } from "./homeProductCards";

// call the fuction to dispaly alll the products as a card
 
showProductContainer(products);


