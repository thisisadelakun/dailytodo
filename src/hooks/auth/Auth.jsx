import React, { useState, useEffect, useRef } from 'react';
import './Auth.css';
import { authorInfos, icons } from '../database/db';
import { auth, firebase } from '../firebase/Firebase';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignInOut = () => {
        if (user) {
            auth.signOut();
        } else {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
                .then((result) => {
                    const authUser = result.user;
                    setUser(authUser);

                    // Close the dropdown after signing in
                    setShowDropdown(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };


    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const getInitials = (displayName) => {
        if (!displayName) return '';

        const firstName = displayName.split(' ')[0];
        return firstName.charAt(0);
    };

    return (
        <div className='auth_col'>
            <div className="user-profile" onClick={toggleDropdown}>
                <div className="user-icon">
                    {user ? (
                        <p>{getInitials(user.displayName)}</p>
                    ) : (
                        <p>{icons.profile}</p>
                    )}
                </div>
            </div>

            {showDropdown && (
                <div className="dropdown" ref={dropdownRef}>
                    <div className="dropdown-content">
                        {user ? (
                            <>
                                <p>
                                    Signed in as:
                                    <span> {user?.email}</span>
                                </p>
                                <button onClick={handleSignInOut}>Sign out</button>
                            </>
                        ) : (
                            <button onClick={handleSignInOut}>{icons.google} Continue with Google</button>
                        )}

                        <div className="dropdown-content-footer">

                            <div className='nav_link_div'>
                                <NavLink
                                    to='/how-to-use-dailytodo'
                                    className="nav_link"
                                >
                                    How to use
                                </NavLink>
                                <NavLink
                                    to='/privacy'
                                    className="nav_link"
                                >
                                    Privacy
                                </NavLink>
                                <NavLink
                                    to='/privacy'
                                    className="nav_link"
                                >
                                    Privacy
                                </NavLink>
                            </div>

                            <div className="designed">
                                <p>
                                    Designed by
                                    <a href={authorInfos.website}> {authorInfos.nick}</a> for your daily use.
                                    <a href={authorInfos.bmc}
                                        target="_blank" rel="noopener noreferrer" className='shaking-link'
                                        title="Buy me a coffee.">
                                        <img src={icons.bmc} alt="buy-me-coffee" width={16} />
                                    </a>
                                </p>
                            </div>

                            <div className="copyRight">
                                <p>
                                    &copy; {authorInfos.name} {new Date().getFullYear()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Auth;
