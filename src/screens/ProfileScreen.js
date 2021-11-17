import React from 'react'
import './ProfileScreen.css'
import Nav from '../Navbar'
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import {selectUser} from '../features/userSlice'

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav/>
            <div className='profileScreen-body'>
                <h1>Edit Profile</h1>
                <div className='profieScreen_info'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                        </div>
                        <div className='profileScreen_plans'>
                            <button onClick={()=>auth.signOut()} className="profileScreen_signout">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
