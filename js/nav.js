// navbar 

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180) {
        navbar.classList.add('bg')
    }
    else{
        navbar.classList.remove('bg')
    }
})


const createnavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
    <ul class="link-container">
    <li class="link-item"><a href="#" class="link active">home</a></li>
    <li class="link-item"><a href="#" class="link">product</a></li>
    <li class="link-item"><a href="#" class="link">about</a></li>
    <li class="link-item"><a href="#" class="link">contact</a></li>
</ul>
<div class="user-interactions">
    <div class="cart">
        <img src="img/icon-2.png" class="cart-icon" alt="">
        <span class="cart-item-count">00</span>
    </div>
    <div class="user">
        <img src="img/icon-1.png" class="user-icon" alt="">
        <div class="user-icon-popup">
            <p>login to your account</p>
            <a>login</a>
        </div>
    </div>
</div> `

}

createnavbar();

// user icon popup

let userIcon = document.querySelector('.user-icon');
let uesrpopIcon = document.querySelector('.user-icon-popup')

userIcon.addEventListener('click', () => {
    uesrpopIcon.classList.toggle('active')
})

 let text = uesrpopIcon.querySelector('p');
 let actionbtn = uesrpopIcon.querySelector('a');
 let user = JSON.parse(sessionStorage.user || null);
 
 if(user != null) {
     text.innerHTML = `Log in as, ${user.name}`;
     actionbtn.innerHTML = 'Log out'
     actionbtn.addEventListener('click', () => logout());
 }else {
     text.innerHTML = 'Login to your account'
     actionbtn.innerHTML = 'Login'
     actionbtn.addEventListener('click', () => location.href = '/login');
 }

 const logout = () => {
    sessionStorage.clear();
    location.reload();
 }