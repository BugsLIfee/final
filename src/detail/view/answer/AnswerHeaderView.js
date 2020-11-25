import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/post.scss"

export default class AnswerHeaderView extends Component {

    render() {
        const { answer, currentUserId, onDeleteAnswer , onOpenChat} = this.props;
        console.log("answer props로 뭐 받아오니..?",answer);
        return(
            <div className="post_meta">
                <div className="writer_info"> 
                    <i className="fas fa-font answer_mark"></i>
                    <img src="../logo/logo_st.png" className="writer_icon" alt="img" /> 
                    <div className="writer_info_text">
                        <div className="writer_id"> {answer.writerName} </div>
                        <div className="writer_level"> Level {answer.writerLevel} </div>
                    </div>
                    <div className="writer_chat">
                        <Button onClick={() =>onOpenChat(answer.writerId, currentUserId)}>채팅요청하기</Button>
                    </div>
                </div>
                <div className="_info">
                        <div className="upload_date"> {answer.registDate.substring(0,10)} &nbsp;</div>
                        { currentUserId !== answer.writerId ?
                            <div className="report"> <ReportModalContainer bt_text = {<div><i className="fas fa-ban"></i> | $nbsp; 신고 |&nbsp; </div>} /> </div> : <></>}
                        {currentUserId === answer.writerId ? <div className="update"> &nbsp; | &nbsp; 수정 </div> : <></>} 
                        {currentUserId === answer.writerId ? <div className="delete" onClick ={()=> {onDeleteAnswer(answer.id)}}> &nbsp; | &nbsp; 삭제</div> : <></>} 
                </div>
            </div>
        )
    }
}
