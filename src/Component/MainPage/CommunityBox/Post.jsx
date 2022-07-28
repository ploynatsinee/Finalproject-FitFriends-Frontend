import React from 'react'
import './Post.scss'
import { Avatar } from '@material-ui/core';

export const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="post">
            <div className="postLeft">
                <Avatar src={profilePic} className="postAvatar" />

                <div className="postLeftInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="postRight">
                <p>{message}</p>
            </div>

            <div className="postImage">
                <img src={image} alt=""/>
            </div>

            <div className="postOptions">
                <div className="reply">
                    <p>reply</p>
                </div>
                <div className="privateChat">
                    <p>private chat</p>
                </div>
               
            </div>
        </div>
    )

}

