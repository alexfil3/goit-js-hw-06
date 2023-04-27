const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();

    if (email === '' || password === '') {
        alert("Please fill in all fields.")
    } else {
        const formData = {
        email,
        password,
    }
        console.log(formData)
        form.reset()
    }
}