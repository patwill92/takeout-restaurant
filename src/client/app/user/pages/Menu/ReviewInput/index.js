import React from "react";
import * as util from "../util"

const call = util.call;

const ReviewInput = (props) => {
    const renderedStars = call(null, util.renderStarsDynamically, {
        ...props,
        list: [1, 2, 3, 4, 5],
        whichStar: util.whichStar
    })
    return (
        <div>
            {util.promptReviewOfferConditionally(props)}
            {util.renderReviewsButtonConditionally(props)}
            <br/>
            {util.renderInputReviewFieldsDynamically({...props, renderedStars})}
            <br/>
            {util.sayThankYouFor6thOfSecondAfterSubmission(props)}
        </div>
    )
}
export default ReviewInput