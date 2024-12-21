const scriptURL ='https://script.google.com/macros/s/AKfycbxNGU0pDrrUJckJWe0pI5Cfg8oSDJHAzACh7nwklrOWlrDiIc3BtrTGOSnfTySy2roE/exec'

const form = document.forms['contact-form']

form.addEventListener('next', e=> { e.preventDefult()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully.")
const sheetname='users';
const query=encodeURIComponent('select *');
const url=' ${base}&sheet=${Sheet Name}&tq=${query}';
const data =[];
document.addEventListener('DOMContentLoaded',init);

fuction init(){
    console.log('ready');
    fetch (url)
}
.then(res=> res.text())
.then(rep=> {
    // console.log(rep);
    const jsO= JSON.parse(rep.subtrs(47).slice(0,-2));
    console.log(jsO);
})
