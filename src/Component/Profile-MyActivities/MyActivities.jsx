import React from "react";
import CardMyActivites from "../Profile-CardMyActivies/CardMyActivies";
import "./MyActivites.css"
const MyActivites=()=>{
    const textComment = " Simply dummy text of the printing and is simply dummy text of the printing and is simply dummy text of the printing and text of the printing and is simply dummy text of the printing and the printing "
    const imageComment = "../../images/garden1.jpg"
    const location = "สวนจตุจักร"
    const date = "12/05/2022"
    const time = "08:00"
    const unitTime= "AM"
    console.log(textComment.length)
    return(
        <div className='show-card-activities'>
            <CardMyActivites textComment={textComment} imageComment={imageComment} location={location}
                date = {date} time = {time} unitTime={unitTime}/>
            <CardMyActivites/>
            <CardMyActivites/>
            <CardMyActivites/>
            <CardMyActivites/>
        </div>
    )
}
export default MyActivites