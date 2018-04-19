/* JS는 이 파일내에서만 작업해주세요. */

// 수정하지 마세요.
import CHAT_DATA from '../lib/chatHistory.json';

// `CHAT_DATA`라는 변수에 채팅 히스토리가 담겨있습니다. 이 데이터를 이용하시면 됩니다.

CHAT_DATA.forEach(function (data) {
  (function IIFE (item) {
    setTimeout(
      View.bind(null, item), item.delta);  
  })(data);
});

function View (item) {
  var $targetTag = window.document.querySelector('.chat-room');
  var $divTag = window.document.createElement('div');

  if (item.payload.type === 'message') {
    console.log('메세지를 보냅니다.')
    var userName = item.payload.user.user_name.toUpperCase();
    var displayName = item.payload.user.display_name;
    var text = item.payload.message.text;  
    var message = `<div>${userName}(${displayName}) : ${text}</div>`;

    $divTag.classList.add('message-box');
    $divTag.innerHTML = message;
    $targetTag.appendChild($divTag);
    $targetTag.scrollTop = $targetTag.scrollHeight;

  } else if (item.payload.type === 'connect'){
    console.log('유저가 접속했습니다.')
    var userName = item.payload.user.user_name.toUpperCase();
    var displayName = item.payload.user.display_name;
    var message = `<div>${userName}(${displayName}) joined the chat!</div>`;

    $divTag.classList.add('user-connection-box');
    $divTag.innerHTML = message;
    $targetTag.appendChild($divTag);
    $targetTag.scrollTop = $targetTag.scrollHeight;

  } else if (item.payload.type === 'update') {
    if (item.payload.user) {
      console.log('한 유저가 아이디를 변경했습니다.');
      var userName = item.payload.user.user_name.toUpperCase();
      var displayName = item.payload.user.display_name;
      var message = `(A USER) CHANGE ITS ID TO <div> "${userName}(${displayName})".</div>`;

      $divTag.classList.add('update-user-info-box');
      $divTag.innerHTML = message;
      $targetTag.appendChild($divTag);
      $targetTag.scrollTop = $targetTag.scrollHeight;
    } else if (item.payload.message) {
      console.log('한 유저가 메세지를 수정했습니다.');
      var text = item.payload.message.text;
      var message = `<div>"message(before)" to ${text}(after)</div>`;
      
      $divTag.classList.add('update-user-message-box');
      $divTag.innerHTML = message;
      $targetTag.appendChild($divTag);
      $targetTag.scrollTop = $targetTag.scrollHeight;
    }
  } else if (item.payload.type === 'delete') {
    console.log('메세지를 삭제했습니다.');
    var textId = item.payload.message.id;
    var message = `<div>No.${textId} message has been removed.</div>`;

    $divTag.classList.add('delete-user-message-box');
    $divTag.innerHTML = message;
    $targetTag.appendChild($divTag);
    $targetTag.scrollTop = $targetTag.scrollHeight;
    
  } else if (item.payload.type === 'disconnect') {
    console.log('유저가 나갔습니다.');
    var userName = item.payload.user.user_name.toUpperCase();
    var displayName = item.payload.user.display_name;
    var message = `<div>${userName}(${displayName}) has left the chat!</div>`;

    $divTag.classList.add('user-disconnection-box');
    $divTag.innerHTML = message;
    $targetTag.appendChild($divTag);
    $targetTag.scrollTop = $targetTag.scrollHeight;
  }
}
