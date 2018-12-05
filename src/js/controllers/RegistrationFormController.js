import User from '../models/User';
import RegistrationForm from '../views/RegistrationForm';
import MessageFormController from './MessageFormController';

export default class RegistrationFormController {
    constructor(parent, url) {
        this.parent = parent;
        this.url = url;
        this.form = new RegistrationForm(this.parent).create();
        this.listenSubmit = this.createUser.bind(null, this);
        this.form.registerForm.addEventListener('submit', this.listenSubmit);
    }

    createUser(that, event) {
        event.preventDefault();
        that.form.registerName.value = that.form.registerName.value.trim() || 'anonymous';
        let user = new User(that.form.registerName.value);
        user.setToStorage();
        that.form.registerForm.removeEventListener('submit', that.listenSubmit);
        that.parent.removeChild(that.form.registerForm);
        const messageForm = new MessageFormController(that.parent, that.url, user);
    }
};
