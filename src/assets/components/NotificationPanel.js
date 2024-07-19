import React from 'react';
import NotificationTemplate from './NotificationTemplate.js';
import './css/Notification.css';

import notificationData from '../../temp/notification.json'

function NotificationPanel() {
  return (
    <div className='notification-modle'>
        <div className='notification-header'>
            <p className='notification-title'>Updates</p>
        </div>
        <div className='notification-body'>
            {notificationData.map((data)=>(
                <NotificationTemplate data={data} />
            ))}
        </div>
    </div>
  )
}

export default NotificationPanel;