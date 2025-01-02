const scriptURL='https://script.google.com/macros/s/AKfycbzv_b0sbP0IXjHSytjhpr0240UHgmNiY0WA4cvQHMqgPTq9SpmZzINFfsP3ebq8Sp_IxA/exec'

const form = document.form['contact-form']

form.addEventListener('submit', e => {
    e.preventDefult()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(Response => alert("Thank you! your form is submitted suceessfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message));
})
