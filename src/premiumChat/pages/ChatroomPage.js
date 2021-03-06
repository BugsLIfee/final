import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import qs from "qs";

class ChatroomPage extends Component{

  constructor(){
    this.state={
      messages:[],
    }
 
  }


  componentWillUnmount(){
  if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
    }
}

componentDidMount(){
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }
}

componentDidUpdate(){
      if (socket) {
      socket.on("newMessage", (message) => {
        console.log("newMessage" , message);
        const newMessages = [...messages, message];
        this.setState({Messages:newMessages});
      });
    }
}

render(){
  const socket = this.props.socket;
  console.log("socket---있냐고",socket)
  const searchObj = qs.parse(this.porps.location.search, {
    ignoreQueryPrefix: true,
  });

  const {questionId, questionUserId, answerUserId,nowUserId} =searchObj;
  console.log("chatroompage 입니다.",searchObj);
  console.log("user:",nowUserId);
  const chatroomId = searchObj.questionId;
  const messageRef = React.useRef();
  const userId = nowUserId;

  
  
  const sendMessage = () => {
  console.log("전송버튼 눌렀나요?")

  console.log("socket:", socket);
  if (socket) {
    console.log("message:", chatroomId, userId, messageRef.current.value,);
      socket.emit("chatroomMessage", {
        chatroomId: chatroomId,
        user: userId,
        message: messageRef.current.value,
      });
      messageRef.current.value = "";
    }
  };

  return (
    <div className="chatroomPage">
      <div className="chatroomSection">
        {/* <div className="cardHeader">모두의 채팅방</div> */}
        <div className="chatroomContent">
          {messages.map((message, i) => (
            <div key={i} className="message">
              <span
                className={
                  userId === message.userId ? "ownMessage" : "otherMessage"
                }
              >
                {message.name}:
              </span>{" "}
              {message.message}
            </div>
          ))}
        </div>
        <div className="chatroomActions">
          <div>
            <input
              type="text"
              name="message"
              placeholder="메세지 입력"
              ref={messageRef}
            />
          </div>
          <div>
            <button className="join" onClick={sendMessage}>
              전송
            </button>

          </div>
        </div>
      </div>
   
    </div>
  );
              }
};

export default ChatroomPage
