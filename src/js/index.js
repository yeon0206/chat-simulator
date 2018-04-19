import Model from './cinderella/Model'
import CHAT_DATA from '../lib/chatHistory.json';

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
