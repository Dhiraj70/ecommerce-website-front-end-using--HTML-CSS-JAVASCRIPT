
let user = JSON.parse(sessionStorage.user || null)

if (user == null) {
    location.replace('/login')
}
else if(!user.seller) {
    location.replace('/seller');
}


let greeting = document.querySelector('#seller-greeting');
greeting.innerHTML += user.name;

