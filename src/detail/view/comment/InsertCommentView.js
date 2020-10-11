import React, { Component } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import "../scss/comment.scss"

export default class InsertCommentView extends Component {
    
    render() {
        
        const { login, onAddComment, onSetCommentProps } = this.props;
        let comment_body; 
        return(
            <div>
                { login === "false" && <p>댓글을 남기려면 <a href="#" >로그인</a> 해주세요.</p> }
                { login === "true" &&
                    <InputGroup size="lg" className="input_comment">
                        <FormControl 
                            as="textarea" 
                            aria-label="With textarea Large" 
                            placeholder="댓글을 입력해주세요." 
                            onChange = {(e) => {onSetCommentProps(e.target.value)}}
                            // onChange = {(e) => {comment_body = (e.target.value);}}
                        />
                            <InputGroup.Append>
                                <Button 
                                    variant="outline-secondary" 
                                    class="comment_bt"
                                    onClick={onAddComment()}   
                                >등록
                                </Button>
                            </InputGroup.Append>
                    </InputGroup>
                }
            </div>
        )
    }
}
