const scriptURL = 'https://script.google.com/macros/s/AKfycbxj6f8TEEJNvbfeNy_ay7B1X4GuR8awCnayml3wKMoQxhtmc2cyJr5oS8YYrqAIRP4/exec'

const form = document.form['contact-form']

form.addEventListener('submit', e => {
    e.preventDefult()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(Response => alert("Thank you! your form is submitted suceessfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message));
})