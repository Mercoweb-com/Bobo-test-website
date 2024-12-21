const scriptURL ='https://script.google.com/macros/s/AKfycbxNGU0pDrrUJckJWe0pI5Cfg8oSDJHAzACh7nwklrOWlrDiIc3BtrTGOSnfTySy2roE/exec'

const form = document.forms['contact-form']

form.addEventListener('next', e=> { e.preventDefult()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully.")

        // console.log(rep);
    const jsO= JSON.parse(rep.subtrs(47).slice(0,-2));
    console.log(jsO);
})
