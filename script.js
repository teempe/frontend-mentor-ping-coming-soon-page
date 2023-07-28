const form = document.querySelector('.subscribe-form__form');
const inputEmail = form.querySelector('#email');


const renderError = errorMsg => {
    const errorMarkup = `<p class="subscribe-form__msg-error">${errorMsg}</p>`;
    
    inputEmail.insertAdjacentHTML('afterend', errorMarkup);
    inputEmail.classList.add('subscribe-form__input-error');
    document.querySelector('.subscribe-form').classList.add('subscribe-form-error');
}

const clearError = () => {
    inputEmail.classList.remove('subscribe-form__input-error');
    document.querySelector('.subscribe-form').classList.remove('subscribe-form-error');
    document.querySelector('.subscribe-form__msg-error')?.remove();
}

const clearInputEmail = () => {
    inputEmail.value = '';
}

const validateEmail = emailString => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

    return emailPattern.test(emailString);
}

const handleFormSubmit = event => {
    event.preventDefault();

    clearError();
    const emailStr = inputEmail.value.trim();

    if (emailStr.length === 0) {
        renderError('Whoops! It looks like you forgot to add your email');
        return;
    }

    if (!validateEmail(emailStr)) {
        renderError('Please provide a valid email address');
        return;
    }
    
    console.log(`${emailStr} successfully subscribed.`);
    clearInputEmail();
}

const handleKeypress = event => {
    if (event.key === 'Enter') {
        handleFormSubmit(event);
        return;
    }

    if (event.key === 'Escape') {
        clearError();
        clearInputEmail();
    }
}

form.addEventListener('submit', handleFormSubmit);
inputEmail.addEventListener('keydown', handleKeypress);
