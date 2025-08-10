document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const name = form.name;
        const plan = form.plan;
        const email = form.email;
        const number = form.number;
        const address = form.address;
        const message = form.message;
        const gender = form.querySelector('input[name="gender"]:checked');

        event.preventDefault();

        if (name.value.trim() === "") {
            alert('Please enter your full name.');
            name.focus();
            return;
        }

        if (plan.value.trim() === "") {
            alert('Please select your plan.');
            plan.focus();
            return;
        }

        if (email.value.trim() === "") {
            alert('Please enter your email.');
            email.focus();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('Please enter a valid email address.');
            email.focus();
            return;
        }

        if (number.value.trim() === "") {
            alert('Please enter your phone number.');
            number.focus();
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(number.value.trim())) {
            alert('Please enter a valid 10-digit phone number.');
            number.focus();
            return;
        }

        if (address.value.trim() === "") {
            alert('Please enter your address.');
            address.focus();
            return;
        }

        if (message.value.trim() === "") {
            alert('Please enter your requirements/message.');
            message.focus();
            return;
        }

        if (!gender) {
            alert('Please select your gender.');
            form.querySelector('input[name="gender"]').focus();
            return;
        }

        alert('Thank you for contacting us!');
        form.submit(); 
    });
});
