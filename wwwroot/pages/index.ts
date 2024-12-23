import { ADanger, BtnSuccess, InputText } from "../models/buttons.js";

class User {
    username: string = '';
    password: string = '';
    comfirmPassword: string = '';
}

function forms(body: HTMLElement) {
    const frag = document.createDocumentFragment();

    const div = document.createElement('div');
    div.style.backgroundColor = '#2B5678';

    const img = document.createElement('img');
    img.src = "redfordlogo.png";
    img.classList.add('d-flex', 'm-auto');
    img.style.width = "auto !important";

    const moto = document.createElement('p');
    moto.innerHTML = "A platform where legal speech is allowed based on where the user lives."
    moto.style.color = "white";
    moto.style.textAlign = "center";

    const divForms = document.createElement('div');
    divForms.classList.add('d-flex', 'px-4');

    //Register form
    const registerForm = document.createElement('form');
        registerForm.ariaPlaceholder = "Username";
        registerForm.submit = function() {
            
    };

    const registerUser = new InputText("Username");
    const registerPass = new InputText("Password", true);
    const registerConfirm = new InputText("Confirm Password", true);

    const registerSubmit = new BtnSuccess("Register");
    registerSubmit.type = "submit";

    registerForm.append(registerUser, registerPass, registerConfirm, registerSubmit);

    //Login form
    const loginForm = document.createElement('form');
    loginForm.ariaPlaceholder = "Username";
    loginForm.submit = function() {

    };

    const loginUser = new InputText("Username");
    const loginPass = new InputText("Password", true);

    const loginSubmit = new BtnSuccess("Login");
    loginSubmit.type = "submit";

    loginForm.append(loginUser, loginPass, loginSubmit);

    body.appendChild(div);
    div.append(img, moto, divForms);
    divForms.append(registerForm, loginForm);
}

window.onload = async function() {
    const body = document.body;
    forms(body);

    if(!localStorage.getItem("Authorization")) {
        let auth = await fetch("login", { method: "get" }).then((res) => {
            return  res.text();
        });

        localStorage.setItem("Authorization", auth);
    }

    let auth2 = await fetch("authorizationonly", {
        method: "get",
        headers: {"Authorization": `Bearer ${localStorage.getItem("Authorization")}`}
    });

    // let images = new Array<CImage>();
    // images.forEach(element => {
    //     let btn = document.createElement('button');
    //     let img = document.createElement('img');
    //     //Fill image with content here
        
    //     let b: boolean = true;

    //     btn.addEventListener('click', function() {
    //         if(!b) {
    //             b = true;
    //             img.style.display = 'block';
    //         } else {
    //             b = false;
    //             img.style.display = 'none';
    //         }
    //     });

    //     body.append(img, btn);
    // });
}