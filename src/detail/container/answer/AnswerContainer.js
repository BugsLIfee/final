import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import { Card } from "react-bootstrap";
import AnswerCommentListContainer from "../comment/AnswerCommentListContainer";
import AnswerInsertCommentContainer from "../comment/AnswerInsertCommentContainer";
import AnswerHeaderView from "../../view/answer/AnswerHeaderView";
import AnswerBodyView from "../../view/answer/AnswerBodyView";
import AnswerLikesContainer from "./AnswerLikesContainer";

@inject("Store")
@observer
class AnswerContainer extends Component {

    render() {

        const { answer, login } = this.props;

        const onAddAndswerComment = () => {
        }

        return (
            <div class="answer post">
                <Card>
                    <Card.Header className="post_header">
                        <AnswerHeaderView answer = {answer} />
                        <AnswerLikesContainer answer = { answer } /> 
                    </Card.Header>
                    <Card.Body>
                        <Card.Text class="post_body">
                            <AnswerBodyView answer = {answer} />
                        </Card.Text>
                        <hr />
                        <AnswerCommentListContainer comments = {answer.comments} />
                    </Card.Body>
                    <Card.Footer className="text-muted text-center post_footer">
                        <AnswerInsertCommentContainer login = {login} />
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default AnswerContainer;