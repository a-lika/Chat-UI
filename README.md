# Chat-UI
UI for chat with websocket connection.   
User's nickname stored in LocalStorage and keep active status that allow to open another browser tab with the current nickname.  
Implemented reconnection mechanism. When connection drops, websocket try to restart. User can turn off connection independently. When there is no connection, user can't to send messages and don't get notifications.  
Implemented notifications for new messages only when app is not visible.  
User can log out that removes his active status.  

![main](/presentation/chat1.png)  


![main](/presentation/chat2.png)  


![main](/presentation/chat3.png)   

