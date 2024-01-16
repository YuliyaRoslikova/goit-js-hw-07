const formElem = document.querySelector('form.login-form');
formElem.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();

    const userEmail = formElem.elements.email.value.trim();
    const userPassword = formElem.elements.password.value.trim();
    
    if (!userEmail || !userPassword) {
        alert('All form fields must be filled in');
        return;
    }

    const obj = {
        email: userEmail,
        password: userPassword,
    };

    console.log(obj);
    formElem.reset();
}
