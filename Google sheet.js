const scriptURL = 'https://script.google.com/macros/s/AKfycbz-HC4myY8JZL4gf09lhhS753_k0fVwRAeuWYr0ccDbL1wh7ZsEowJNjC8_0_i5Epd5OQ/exec'

const form = document.form['contact-form']

form.addEventListener('submit', e => {
    e.preventDefult()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(Response => alert("Thank you! your form is submitted suceessfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message));
})
