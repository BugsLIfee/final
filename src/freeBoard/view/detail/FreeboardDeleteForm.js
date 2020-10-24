import React, { Component } from 'react'
import "./scss/FreeboarDetailComm.scss"

export default class Freeboarddeleteform extends Component {
    constructor(props){
        super(props);
        this.state={pwd : "", confirm_pwd: ""}

        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleConfirmPwdChange = this.handleConfirmPwdChange.bind(this)
        // this.onCommentDelete=this.onCommentDelete.bind(this);
    }
    
    handlePwdChange(event) {
        // console.log(this.state)
        this.setState({pwd : event.target.value})
      }

    handleConfirmPwdChange(event){
        this.setState({confirm_pwd : event.target.value})
    }


    onCommentDelete=()=>{
        let {pwd} = this.state;
        let {confirm_pwd} = this.state;
        let {user_pwd} = this.props;
       
        if((user_pwd== pwd) && (pwd == confirm_pwd)){
         alert("댓글을 삭제하시겠습니까?")
        }else{
            alert("비밀번호가 맞지 않습니다.")
        }
     
    }


    render() {
        const {delete_com, cur_id, select_id} = this.props;
        console.log(this.state)

        return (
        <div>
            {delete_com && (cur_id ===select_id) ?
                <div className="freeboard_delete_userInfo">
                    <input className= "delete_userinfo" onChange={this.handlePwdChange}  type="password" placeholder="비밀번호"/>
                    <input className= "delete_userinfo" onChange={this.handleConfirmPwdChange}  type="password" placeholder="비밀번호 확인"/>
                    <button onClick={this.onCommentDelete} className="delete_userinfo_btn">삭제</button>
                </div> : ""
            } 
        </div>
        )
    }
}
