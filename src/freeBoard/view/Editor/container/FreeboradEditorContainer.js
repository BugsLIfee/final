import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom";
import FreeboardEditorView from "../view/FreeboradEditorView"

// @withRouter
@inject('Store')
@observer
class FreeboardEditorContainer extends Component {
    

    render() {
        const { freeboard_cate } = this.props.Store.freeboard;
        const onCreatePost =(post)=>{
            this.props.Store.freeboard.onCreatePost(post)
        }
        return (
            <div>
                <FreeboardEditorView onCreatePost={onCreatePost} category={freeboard_cate}/>
            </div>
        );
    }
}

export default FreeboardEditorContainer