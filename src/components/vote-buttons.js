import React, { useEffect, useState } from 'react';

const VoteButtons = ({ vote, upVotes, downVotes }) => {
    // console.log(vote.upVotes);
    const vot = JSON.parse(localStorage.getItem("postlist")) || [];
    return (
        <>
            <div className="votecontent">
                <button className="uparrow" onClick={() => upVotes(vote.id)} disabled={vot[vote.id].upVotes === true ? true : false}
                >
                    {' '}
                    &#x2191;
                </button>
                <span className="text-comment">{vot[vote.id].upVotes === true ? 1 : 0}</span>
            </div>
            <div className="votecontent">
                <button
                    className="downarrow"
                    onClick={() => downVotes(vote.id)} disabled={vot[vote.id].downVotes === true ? true : false}
                    >
                    {' '}
                    &#x2193;
                </button>
                <span className="text-comment">{vot[vote.id].downVotes === true ? 1 : 0}</span>
            </div>
        </>
    );
};

export default VoteButtons;
