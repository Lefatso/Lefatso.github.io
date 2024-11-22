
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});


let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});


(function () {
    emailjs.init('oPX2T8bW0p2ngzb6X'); 
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const formData = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    };

  
    emailjs.send('service_i9wdimh', 'template_w3mmv7h', formData)
        .then(function (response) {
            alert('Message sent successfully!');
            
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert('Failed to send message. Please try again later.');
        });
});

