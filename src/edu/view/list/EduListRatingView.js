import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';



export class EduListRatingView extends Component {
    render() {

        const {eduList} = this.props
        //console.log(eduList.rating)
        return (

            <div className="eduItemRatingContent">
                <Rating className="eduRatingBar" name="half-rating-read" value={eduList.eduRate} precision={0.5} readOnly size="large"/>
                {/* <div>{eduList.eduRate}</div> */}
                <h3>후기&nbsp;&nbsp;<span>{eduList.reviewCnt}</span>건</h3>
            </div>
        
        )
    }
}

export default EduListRatingView
