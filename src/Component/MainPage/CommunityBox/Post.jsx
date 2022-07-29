import React from 'react';
import './Post.scss';

//add materialUI
import Avatar from '@mui/material/Avatar';
import comment from './img/comment.png';
import locationicon from './img/locationicon.png';
import send from './img/send.png';


export const Post = ({ profilePic, image, username, timestamp, message, location }) => {
    return (
        <div className="post">
            <div className="postLeft">
                <Avatar src={profilePic} className="postAvatar" />

                <div className="postLeftInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp).toUTCString()}</p>

                    {/* //ลบ toDate ออกไปเพราะerr */}

                </div>
            </div>

            <div className="postRight">
                <p> {message}</p>
                <div className="postImage">
                    <img src={image} alt=""/>
                </div>


                <div className="postOptions">
                    <div className="reply">
                    <p><img src={comment} alt='comment' />reply</p>
                        
                    </div>
                    <div className="privateChat">
                        <p><img src={send} alt='send' />chat</p>
                    </div>
                    <div className="location">
                        <p><img src={locationicon} alt='locationicon' />{location}Bangkok</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

