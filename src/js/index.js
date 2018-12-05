import '../css/style.css';
import ChatController from './controllers/ChatController';

window.addEventListener('DOMContentLoaded', () => {

   const chat = ChatController.instance(document.body, 'ws://st-chat.shas.tel');
   
});
