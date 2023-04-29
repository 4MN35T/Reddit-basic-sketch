import React, { useState } from 'react';
let id = 0;
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
                id: id,
                postedBy: user.name,
                postText: postTitle,
                upVotes: 0,
                downVotes: 0,
            };
            setPostList([...postList, posts]);
            localStorage.setItem(
                'postlist',
                JSON.stringify([...postList, posts])
            );
            setPostTitle('');
            closeModal(false);
        }
    };
    console.log(postTitle, postList);
    return (
        <div className="modal">
            <div className="modalBody">
                <div className="heading">
                    Add New post
                    <button onClick={() => closeModal(false)}>&#x2613;</button>
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
                    <button onClick={() => closeModal(false)}>close</button>
                    <button onClick={click}>Save</button>
                </div>
            </div>
        </div>
    );
};
export default AddNewPost;
