import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React,{ forwardRef } from 'react';
import InputOprion from './InputOprion';
import './Post.css';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOprion Icon={ThumbUpAltOutlined} title="Like"/>
                <InputOprion Icon={ChatOutlined} title="Comment"/>
                <InputOprion Icon={ShareOutlined} title="Share"/>
                <InputOprion Icon={SendOutlined} title="Send"/>
            </div>
      </div>
    )
})


export default Post;