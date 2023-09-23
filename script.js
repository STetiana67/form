const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
} 

checkbox.addEventListener('change', ()=> {
    if (localStorage.getItem('isCecked')) {
        localStorage.clear()
    } else {
        localStorage.setItem('ísChecked', true)
        
    }
 });

 change.addEventListener('click', ()=> {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg')
        form.style.backgroundColor = '#fff'
    } else {
        localStorage.setItem('bg', 'changed')
        form.style.backgroundColor = 'red'
    }
 })

 const user = {
    name: 'alex',
    web: 'https://a.com'
 }

let string = JSON.stringify(user)

const secret = 'Xv3c&'
//start
let encrypted = CryptoJS.AES.encrypt(string, secret).toString()
//console.log(encrypted)

//sessionStorage.setItem("user", encrypted);

//finish
let decrypted = CryptoJS.AES.decrypt(encrypted, secret);
let data = decrypted.toString(CryptoJS.enc.Utf8)
//console.log(data)
