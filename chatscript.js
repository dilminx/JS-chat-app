var chatCon = document.getElementById("scroll");
var senderChat = document.getElementById("senderInput");
var senderBTN = document.getElementById("btnSend");
var reciverChat = document.getElementById("reciverInput");
var reciverBTN = document.getElementById("btnReciver");
// var sendMsgVisibles = document.getElementById("senderContainer");
// var reciverMsgVisibles = document.getElementById("reciverContainer");

function addSenderChat() {

    const msg = senderChat.value.trim();
    if(msg ===''){return;}
    
    const span = document.createElement("span");
    const div = document.createElement("div");
    span.innerHTML=msg;
    span.classList.add('senderMsg')
    div.appendChild(span);
    div.classList.add('senderContainer')
    chatCon.appendChild(div);
    scrollToBottom();
    senderChat.value='';
 
  }
  function addReciverChat() {
      const div = document.createElement("div");
      const span = document.createElement("span");

      const msg = reciverChat.value.trim();
      if (msg === ''){return;}

      span.innerHTML = msg;
      span.classList.add('reciverMsg');
      div.appendChild(span)
      div.classList.add('reciverContainer');
      chatCon.appendChild(div)
      scrollToBottom();
      reciverChat.value='';


  }

senderBTN.addEventListener('click',addSenderChat);
reciverBTN.addEventListener('click',addReciverChat);


function scrollToBottom() {
chatCon.scrollTop = chatCon.scrollHeight;
}
document.body.onload = scrollToBottom;


