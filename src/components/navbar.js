import React, { useState } from 'react';
import AddNewPost from './add-new-post';
import Post from './post';

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
                postList[i].disable = true;
            }
        }
        window.location.reload();
        localStorage.setItem('postlist', JSON.stringify(postList));
    };
    const downVotes = (postId) => {
        for (let i = 0; i < postList.length; i++) {
            if (postList[i].id === postId) {
                postList[i].downVotes = 1;
                postList[i].disable = true;
            }
        }
        window.location.reload();
        localStorage.setItem('postlist', JSON.stringify(postList));
    };
    const logout = () => {localStorage.clear(); window.location.reload();}
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="addnew">
                        <button onClick={() => setOpenPost(true)}>
                            {' '}
                            Add new post
                        </button>
                    <button style={{marginLeft:"20px"}} onClick={()=> logout()}>logout</button>
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
            {postList.length > 0 ? (
                <Post list={postList} upVotes={upVotes} downVotes={downVotes} />
            ) : (
                <>
                    <div className="postContainer">
                        <div className="postcontent">
                            <div className="box">Before you explore the platform, click&nbsp;<a href="https://scribehow.com/shared/How_to_use_this_platform__72AgOTEKQ-yXa4bWRw2j7g" target='blank'>here</a>.</div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
