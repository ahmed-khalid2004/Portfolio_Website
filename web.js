const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const crossIcon = document.querySelector('.cross-icon');
    const links = document.querySelectorAll('.links');

    // Toggle the menu
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
        crossIcon.classList.toggle('active');
    });

    // Smooth scroll
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close the menu on link click
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburgerIcon.classList.add('active');
                crossIcon.classList.remove('active');
            }
        });
    });
});
