const scriptURL = 'https://docs.google.com/spreadsheets/d/1wVaywSfCAmxTeQ_mlHjs90ubtbInEmelCr3GRIJq5Sg/edit?gid=0#gid=0'

const form = document.form['contact-form']

form.addEventListener('submit', e => {
    e.preventDefult()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(Response => alert("Thank you! your form is submitted suceessfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message));
})
