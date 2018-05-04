import Model from './cinderella/Model';
import CHAT_DATA from '../lib/chatHistory.json';
import ChatBoxUI from './components/ChatBox';
import OnlineUserUI from './components/OnlineUser';
import ChatMessageUI from './components/ChatMessage';
import ChatConnectionUI from './components/ChatConnection';
import ChatDisConnectionUI from './components/ChatDisConnection';


var model = new Model({
  data : CHAT_DATA,
  filterByType : function (type) {
    return this.filter(function(item) {
      return item.payload.type === type;
    });
  },
  findItemByMessageId : function (id) {
    return this.find(function (item) {
      if (item.payload.message) {
        return item.payload.message.id === id;
      }
    });
  },
  findItemByUserId : function (id) {
    return this.find(function (item) {
      if (item.payload.user) {
        return item.payload.user.id === id;
      }
    });
  }
});

var chatBox = ChatBoxUI.create({
  element: window.document.getElementById('root'),
  model: {
    title: '테스트입니다',
    user: '권'
  }
});

chatBox.render();

var chatMessage = ChatMessageUI.create({
  element: window.document.querySelector('.chat-room-container'),
  model: {
    data : model.filterByType('message')
  }
});

chatMessage.asyncRender();

var chatConnection = ChatConnectionUI.create({
  element: window.document.querySelector('.chat-room-container'),
  model: {
    data : model.filterByType('connect')
  }
});

chatConnection.asyncRender();

var chatDisConnection = ChatDisConnectionUI.create({
  element: window.document.querySelector('.chat-room-container'),
  model: {
    data : model.filterByType('disconnect')
  }
});

chatDisConnection.asyncRender();

console.log(chatMessage)

console.log(model.filterByType('update'));
console.log(model.findItemByUserId('update'));