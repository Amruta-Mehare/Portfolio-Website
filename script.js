// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 200) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById('button');
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            var link = document.createElement('a');
            link.href = 'https://drive.google.com/file/d/1trpfCgBw7f5cyfgML4TxfPa1ROUTD-n6/view?usp=drive_link';
            link.target = '_blank';
            link.download = 'https://drive.google.com/file/d/1trpfCgBw7f5cyfgML4TxfPa1ROUTD-n6/view?usp=drive_link'; // Provide a filename for the download
            link.click();
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM content loaded");
    var form = document.getElementById('contact-form');
    console.log("Form:", form);
    if (form) {
        form.reset();
        console.log("Form reset successfully");
    } else {
        console.log("Form not found");
    }
});


// Show/hide scroll-up button based on scroll position
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#scroll-up-btn').fadeIn();
    } else {
        $('#scroll-up-btn').fadeOut();
    }
});

// Scroll to top when button is clicked
$('#scroll-up-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
