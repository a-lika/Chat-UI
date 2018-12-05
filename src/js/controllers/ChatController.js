import MessageFormController from './MessageFormController';
import RegistrationFormController from './RegistrationFormController';

let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class ChatController {
    constructor(enforcer, parent, url) {
        if (enforcer !== singletonEnforcer) {
            throw 'Instantiation failed: use ChatController.instance(parent, url) instead of new.';
        }
        this.parent = parent;
        this.url = url;
        this.form;

        if (localStorage.getItem('active')) {
            const user = {};
            user.nickname = localStorage.getItem('active');
            this.form = new MessageFormController(this.parent, this.url, user);
        } else {
            this.form = new RegistrationFormController(this.parent, this.url);
        }
    }

    static instance(parent, url) {
        if (!this[singleton]) {
            this[singleton] = new ChatController(singletonEnforcer, parent, url);
        }
        return this[singleton];
    }
};
