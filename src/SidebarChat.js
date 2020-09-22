import React from 'react';
import "./SidebarChat .css";
import { Avatar } from '@material-ui/core';
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>NaNa</h2>
                <p>KEEP IT UP !</p>
            </div>
        </div>
    );
}

export default SidebarChat;