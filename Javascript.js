const sheetID='1CqXh6vJClru9iJUR94_3K3A4kFY7pkYydPC1mrlqXQg/edit?usp=sharing';
const base='https://docs.google.com/spreadsheets/d/${sheetID}/gvz/tq?';
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
