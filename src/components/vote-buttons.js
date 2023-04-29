import React, { useEffect, useState } from 'react';

const VoteButtons = ({ vote, upVotes, downVotes }) => {
    console.log(vote.upVotes);
    return (
        <>
            <div className="votecontent">
                <button className="uparrow" onClick={() => upVotes(vote.id)}>
                    {' '}
                    &#x2191;
                </button>
                <span className="text-comment">{vote.upVotes}</span>
            </div>
            <div className="votecontent">
                <button
                    className="downarrow"
                    onClick={() => downVotes(vote.id)}>
                    {' '}
                    &#x2193;
                </button>
                <span className="text-comment">{vote.downVotes}</span>
            </div>
        </>
    );
};

export default VoteButtons;
