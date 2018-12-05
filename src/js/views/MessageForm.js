import DomNode from './DomNode';

export default class MessageForm {
    constructor(parent, username) {
        this.parent = parent;
        this.username = username;
        this.messageForm = new DomNode('form').addClass('message-form');
        this.messageArea = new DomNode('section').addClass('message-area');
        this.statusArea = new DomNode('section').addClass('status-area');
        this.nickname = new DomNode('span').addClass('nickname');
        this.status = new DomNode('span').addClass('status');
        this.connectBtn = new DomNode('button').addClass('connect-btn');
        this.logoutBtn = new DomNode('button').addClass('logout-btn');
        this.messageInputArea = new DomNode('section').addClass('message-input-area');
        this.messageInput = new DomNode('input').addClass('message-input');
        this.messageSubmit = new DomNode('button').addClass('message-submit');
    }

    create() {
        this.appendNodes().setAttributes();
        this.parent.appendChild(this.messageForm);
        return this;
    }

    appendNodes() {
        this.statusArea.appendChild(this.status);
        this.statusArea.appendChild(this.connectBtn);
        this.statusArea.appendChild(this.logoutBtn);
        this.messageInputArea.appendChild(this.messageInput);
        this.messageInputArea.appendChild(this.messageSubmit);
        this.messageForm.appendChild(this.statusArea);
        this.messageForm.appendChild(this.messageArea);
        this.messageForm.appendChild(this.messageInputArea);
        this.messageForm.appendChild(this.nickname);
        return this;
    }

    setAttributes() {
        this.nickname.textContent = `${this.username.nickname}`;
        this.logoutBtn.textContent = 'Log out';
        this.logoutBtn.setAttribute('type', 'button');
        this.connectBtn.textContent = 'Disconnect';
        this.connectBtn.setAttribute('type', 'button');
        this.messageSubmit.textContent = 'Send';
        this.messageInput.setAttribute('autofocus', true);
        this.messageInput.setAttribute('required', true);
        return this;
    }
};
