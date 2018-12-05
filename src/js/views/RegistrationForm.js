import DomNode from './DomNode';

export default class RegistrationForm {
    constructor(parent) {
        this.parent = parent;
        this.registerForm = new DomNode('form').addClass('register-form');
        this.registerGreeting = new DomNode('p').addClass('register-greeting');
        this.registerName = new DomNode('input').addClass('register-name');
        this.registerSubmit = new DomNode('button').addClass('register-submit');
    }

    create() {
        this.appendNodes().setAttributes();
        this.parent.appendChild(this.registerForm);
        return this;
    }

    appendNodes() {
        this.registerForm.appendChild(this.registerGreeting);
        this.registerForm.appendChild(this.registerName);
        this.registerForm.appendChild(this.registerSubmit);
        return this;
    }

    setAttributes() {
        this.registerGreeting.textContent = 'Welcome to SuperPuperChat! Please sign up to begin';
        this.registerName.setAttribute('placeholder', 'Nickname');
        this.registerName.setAttribute('required', true);
        this.registerSubmit.textContent = 'Sign up';
        this.registerSubmit.setAttribute('type', 'submit');
        this.parent.appendChild(this.registerForm);
        return this;
    }
};
