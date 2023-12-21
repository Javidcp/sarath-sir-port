//whatsapp

document.addEventListener('DOMContentLoaded', function () {
    var whatsappButton = document.getElementById('whatsapp-button');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Show/hide WhatsApp button based on scroll direction
        if (scrollTop > lastScrollTop) {
            whatsappButton.classList.remove('hidden');
        } else {
            whatsappButton.classList.add('hidden');
        }

        lastScrollTop = scrollTop;
    });
});


//scroll

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
    } else {
        reveals[i].classList.remove("active");
    }
    }
}

window.addEventListener("scroll", reveal);






