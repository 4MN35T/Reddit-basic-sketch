import React, { useState } from 'react'
import Login from './login'

const Home = () => {
    const [open, setOpen] = useState(false);
    const islogin = JSON.parse(localStorage.getItem('isLogin'))
    const signin = () => {
        setOpen(true);
    }
  return (
    <>{open || islogin ? <Login /> :
    <div>
     <div className="navbar">
                <div className="container">
                    <div className="addnew">
                        <button onClick={() => signin()}>
                            {' '}
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
            <div className="postContainer">
                        <div className="postcontent">
                            <div className="box">Before you explore the platform, click&nbsp;<a href="https://scribehow.com/shared/How_to_use_this_platform__72AgOTEKQ-yXa4bWRw2j7g" target='blank'>here</a>.</div>
                        </div>
                    </div>
                    </div>
                    }        
    </>
  )
}

export default Home