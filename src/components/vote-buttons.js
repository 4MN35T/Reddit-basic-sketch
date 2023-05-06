import React, { useEffect, useState } from 'react';

const VoteButtons = ({ vote, upVotes, downVotes }) => {
    return (
        <>
            <div className={'votecontent'}>
                <button
                    className={vote.disable === false ? 'uparrow' : 'disabled'}
                    onClick={() => upVotes(vote.id)}
                    disabled={vote.disable}>
                    &#x2191;
                </button>
                <span className={'text-comment '}>{vote.upVotes}</span>
            </div>
            <div className={'votecontent'}>
                <button
                    className={vote.disable === false ? 'downarrow' : 'disabled'}
                    onClick={() => downVotes(vote.id)}
                    disabled={vote.disable}>
                    &#x2193;
                </button>
                <span className={'text-comment'}>{vote.downVotes}</span>
            </div>
        </>
    );
};

export default VoteButtons;
