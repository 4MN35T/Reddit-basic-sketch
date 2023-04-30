import React, { useEffect, useState } from 'react';

const VoteButtons = ({ vote, upVotes, downVotes }) => {
    return (
        <>
            <div className={'votecontent'}>
                <button
                    className={vote.upVotes === 0 ? 'uparrow' : 'disabled'}
                    onClick={() => upVotes(vote.id)}
                    disabled={vote.upVotes === 1 ? true : false}>
                    &#x2191;
                </button>
                <span className={'text-comment '}>{vote.upVotes}</span>
            </div>
            <div className={'votecontent'}>
                <button
                    className={vote.downVotes === 0 ? 'downarrow' : 'disabled'}
                    onClick={() => downVotes(vote.id)}
                    disabled={vote.downVotes === 1 ? true : false}>
                    &#x2193;
                </button>
                <span className={'text-comment'}>{vote.downVotes}</span>
            </div>
        </>
    );
};

export default VoteButtons;
