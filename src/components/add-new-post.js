import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddNewPost = ({
    closeModal,
    postTitle,
    setPostTitle,
    postList,
    setPostList,
}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const click = () => {
        if (postTitle !== '') {
            const posts = {
                id: uuidv4(),
                postedBy: user.name,
                postText: postTitle,
                upVotes: 0,
                downVotes: 0,
            };
            const newPostList = [...postList, posts].reverse();

            setPostList(newPostList);
            localStorage.setItem('postlist', JSON.stringify(newPostList));
            setPostTitle('');
            closeModal(false);
        }
    };
    console.log(postList);
    return (
        <div className="modal">
            <div className="modalBody">
                <div className="heading">
                    Add New post
                    <button onClick={() =>{  setPostTitle(''); closeModal(false);}}>&#x2613;</button>
                </div>
                <textarea
                    className="post-title"
                    rows="4"
                    cols="50"
                    placeholder="Post Title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />

                <div className="button-group">
                    <button onClick={() =>{  setPostTitle(''); closeModal(false);}}>cancel</button>
                    <button onClick={click}>post</button>
                </div>
            </div>
        </div>
    );
};
export default AddNewPost;
