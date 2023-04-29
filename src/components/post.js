import React from 'react';
import VoteButtons from './vote-buttons';

const Post = ({ list, upVotes, downVotes }) => {
    // console.log(list)
    return (
        <>
            {list.map((post, i) => {
                return (
                    <div className="postContainer">
                        <div className="postcontent">
                            <VoteButtons
                                vote={post}
                                upVotes={upVotes}
                                downVotes={downVotes}
                            />
                            <div className="box">{post.postText}</div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Post;
