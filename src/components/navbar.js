import React, { useState } from 'react';
import AddNewPost from './add-new-post';
import Post from './post';
// import AddNewPost from "./add-new-post";

const Navbar = () => {
    const [openPost, setOpenPost] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postList, setPostList] = useState(
        JSON.parse(localStorage.getItem('postlist')) || []
    );

    const upVotes = (postId) => {
        for (let i = 0; i < postList.length; i++) {
            if (postList[i].id === postId) {
                postList[i].upVotes = 1;
            }
        }
        window.location.reload();
        localStorage.setItem('postlist', JSON.stringify(postList));
    };
    const downVotes = (postId) => {
        for (let i = 0; i < postList.length; i++) {
            if (postList[i].id === postId) {
                postList[i].downVotes = 1;
            }
        }
        window.location.reload();
        localStorage.setItem('postlist', JSON.stringify(postList));
    };

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="addnew">
                        <button onClick={() => setOpenPost(true)}>
                            {' '}
                            Add new post
                        </button>
                    </div>
                </div>
            </div>
            {openPost && (
                <AddNewPost
                    closeModal={setOpenPost}
                    postList={postList}
                    postTitle={postTitle}
                    setPostList={setPostList}
                    setPostTitle={setPostTitle}
                />
            )}
            {postList.length > 0 && (
                <Post list={postList} upVotes={upVotes} downVotes={downVotes} />
            )}
        </>
    );
};

export default Navbar;
