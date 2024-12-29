const scriptURL = 'https://script.google.com/macros/s/AKfycbzP0pBBmBaX2G6iT7pVeVTxHujCG3JathJkf30rkEx2_otSPXimfx9SAEX8hXG1tAJq/exec'

const form = document.form['contact-form']

form.addEventListener('submit', e => {
    e.preventDefult()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(Response => alert("Thank you! your form is submitted suceessfully."))
.then(() => { window.location.reload(); })
.catch(console.error( => console.error('Error!', error.message))
})
