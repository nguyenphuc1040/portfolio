document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Dynamic Footer Year
    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // Mobile Hamburger Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when a nav link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust for fixed header height
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Projects Data Rendering
    const projectsContainer = document.getElementById('projects-container');
    const videoModal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const closeModal = document.getElementById('close-modal');

    // Close Modal Event Listeners
    closeModal.addEventListener('click', () => {
        videoModal.classList.remove('active');
        videoFrame.src = ''; // Stop video
    });

    window.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            videoFrame.src = '';
        }
    });

    // Render projects directly from the loaded projectsData array (from projects.js)
    try {
        if (typeof projectsData !== 'undefined') {
            projectsData.forEach(project => {
                // Determine overlay content metric (if any)
                let overlayHTML = '';
                if (project.metric) {
                    const iconHTML = project.metricIcon ? `<i class="${project.metricIcon}"></i> ` : '';
                    const downloadsHTML = project.downloads
                        ? `<span class="downloads-badge"><i class="fas fa-download"></i> ${project.downloads}</span>`
                        : '';
                    overlayHTML = `
                        <div class="project-overlay">
                            <span class="metric">${iconHTML}${project.metric}</span>
                            ${downloadsHTML}
                        </div>
                    `;
                }

                // Determine Play Button (if any)
                let playBtnHTML = '';
                if (project.videoUrl) {
                    playBtnHTML = `
                        <div class="play-btn" data-video="${project.videoUrl}">
                            <i class="fas fa-play"></i>
                        </div>
                    `;
                }

                // Award badge (bottom-left)
                let awardHTML = '';
                if (project.award) {
                    awardHTML = `<div class="award-badge"><i class="fas fa-award"></i> ${project.award}</div>`;
                }

                // Map highlights
                const highlightsHTML = project.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('');
                
                // Map tags
                const tagsHTML = project.tags.map(t => `<span>${t}</span>`).join('');

                // Store Links
                let storeLinksHTML = '';
                if (project.androidUrl || project.iosUrl || project.otherUrl) {
                    storeLinksHTML += '<div class="store-links">';
                    if (project.androidUrl) {
                        storeLinksHTML += `<a href="${project.androidUrl}" target="_blank" class="store-btn android-btn" title="Get it on Google Play"><i class="fab fa-google-play"></i></a>`;
                    }
                    if (project.iosUrl) {
                        storeLinksHTML += `<a href="${project.iosUrl}" target="_blank" class="store-btn ios-btn" title="Download on the App Store"><i class="fab fa-apple"></i></a>`;
                    }
                    if (project.otherUrl) {
                        storeLinksHTML += `<a href="${project.otherUrl}" target="_blank" class="store-btn web-btn" title="Visit Website"><i class="fas fa-external-link-alt"></i></a>`;
                    }
                    storeLinksHTML += '</div>';
                }

                // Determine background style
                const bgStyle = project.imageUrl 
                    ? `background: url('${project.imageUrl}') center/cover no-repeat;` 
                    : `background: ${project.gradient};`;
                    
                // Render main icon if no image
                const mainIconHTML = (!project.imageUrl && project.mainIcon)
                    ? `<i class="${project.mainIcon} project-main-icon"></i>`
                    : '';

                const projectCard = document.createElement('div');
                projectCard.className = 'project-card glass-card scroll-reveal active'; // Add 'active' so it renders immediately
                projectCard.innerHTML = `
                    <div class="project-image" style="${bgStyle}">
                        ${mainIconHTML}
                        ${overlayHTML}
                        ${playBtnHTML}
                        ${awardHTML}
                        ${storeLinksHTML}
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <span class="company-badge"><i class="fas fa-building"></i> ${project.company}</span>
                        <p class="project-desc">${project.description}</p>
                        <h4 class="contributions-title">My Contributions</h4>
                        <ul class="project-highlights">
                            ${highlightsHTML}
                        </ul>
                        <div class="tags">
                            ${tagsHTML}
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
                observer.observe(projectCard);
            });

            // Add Play Button Listeners after rendering
            const playButtons = document.querySelectorAll('.play-btn');
            playButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    let videoUrl = btn.getAttribute('data-video');
                    if(videoUrl) {
                        // Correctly format YouTube URLs for direct viewing in a new tab
                        if (videoUrl.includes('youtube.com/embed/')) {
                            const videoId = videoUrl.split('embed/')[1].split('?')[0];
                            if (videoId) videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                        } else if (videoUrl.includes('youtu.be/')) {
                            const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
                            if (videoId) videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                        }
                        
                        // Open the video link in a new tab
                        window.open(videoUrl, '_blank');
                    }
                });
            });
        }
    } catch (error) {
        console.error('Error loading projects:', error);
    }

    // ==========================================
    // OPTION 1: Particle Background (tsParticles)
    // ==========================================
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load('tsparticles', {
            fullScreen: { enable: false },
            particles: {
                number: { value: 60, density: { enable: true, area: 900 } },
                color: { value: ['#6c63ff', '#00d4ff', '#ff6b9d'] },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.4,
                    random: { enable: true, minimumValue: 0.1 },
                    animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false }
                },
                size: {
                    value: 2.5,
                    random: { enable: true, minimumValue: 0.5 },
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: '#6c63ff',
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: true,
                    straight: false,
                    outModes: { default: 'out' }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: 'grab' },
                    resize: true
                },
                modes: {
                    grab: { distance: 160, links: { opacity: 0.4 } }
                }
            },
            detectRetina: true
        });
    }

    // ==========================================
    // OPTION 3: 3D Card Tilt (Vanilla-Tilt.js)
    // ==========================================
    if (typeof VanillaTilt !== 'undefined') {
        const cards = document.querySelectorAll('.project-card');
        VanillaTilt.init(cards, {
            max: 8,
            speed: 400,
            glare: true,
            'max-glare': 0.15,
            perspective: 1000,
            scale: 1.02
        });

        // Also apply to glass-cards in about/experience sections
        const glassCards = document.querySelectorAll('.about-grid .glass-card, .timeline-content');
        VanillaTilt.init(glassCards, {
            max: 5,
            speed: 300,
            glare: true,
            'max-glare': 0.1,
            perspective: 1200
        });
    }

    // ==========================================
    // OPTION 5: Parallax Scrolling
    // ==========================================
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
    
    function handleParallax() {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed'));
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }

    window.addEventListener('scroll', handleParallax, { passive: true });
});
