const scriptURL='https://script.google.com/macros/s/AKfycbyPHi_Y-MIWP9gDE2oO8Jez2VavaYqwQ3KKFZuTFG8peh0NixMI4mLN5XFYHKrS-mEmhQ/exec'

const form = document.form['contact-form']

form.addEventListener('submit', e => {
    e.preventDefult()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(Response => alert("Thank you! your form is submitted suceessfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message));
})
