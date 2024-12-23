const dangerClass = ['btn', 'btn-danger', 'my-auto', 'p-2'];
const successClass = ['btn', 'btn-success', 'my-auto', 'p-2'];

export class ADanger extends HTMLAnchorElement {
    constructor(text: string, url: string) {
        super();

        this.classList.add(...dangerClass);
        
        this.innerText = text;
        this.href = url;
    }
}

export class ASuccess extends HTMLAnchorElement {
    constructor(text: string, url: string) {
        super();

        this.classList.add(...successClass);
        
        this.innerText = text;
        this.href = url;
    }
}

export class BtnDanger extends HTMLButtonElement {
    constructor(text: string) {
        super();

        this.classList.add(...dangerClass);
        this.textContent = text;
    }
}

export class BtnSuccess extends HTMLButtonElement {
    constructor(text: string) {
        super();

        this.classList.add(...successClass);
        this.textContent = text;
    }
}

export class InputSuccess extends HTMLInputElement {
    constructor(text: string) {
        super();

        this.classList.add(...successClass);
        this.textContent = text;
    }
}

export class InputDanger extends HTMLInputElement {
    constructor(text: string) {
        super();

        this.classList.add(...successClass);
        this.textContent = text;
    }
}

export class InputText extends HTMLInputElement {
    constructor(text: string, private password: boolean = false) {
        super();

        this.textContent = text;
        this.placeholder = text;

        if(password) {
            this.type = 'password';
        }

        this.classList.add('form-control');
    }
}

window.customElements.define('a-danger', ADanger, { extends: 'a'});
window.customElements.define('a-success', ASuccess, { extends: 'a'});

window.customElements.define('btn-danger', BtnDanger, { extends: 'button'});
window.customElements.define('btn-success', BtnSuccess, { extends: 'button'});

window.customElements.define('input-text', InputText, { extends: 'input'});