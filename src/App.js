import React, { useState } from 'react';
import './App.css';
import { getUser, getUserEvents } from './data.js'
let currentUser = getUser()
let userEventsRoles = getUserEvents()

function App() {
  const [userName, setUserName] = useState(currentUser.name);
  const [userEvents, setUserEvents] = useState(userEventsRoles);
  const [selectedEvent, setSelectedEvent] = useState(userEvents[0].title);
  const [selectedRole, setSelectedRole] = useState(userEvents[0].roles[0].title);
  const [selectedEventRoles, setSelectedEventRoles] = useState(userEvents[0].roles);
  const [selectedRoleSubRoles, setSelectedRoleSubRoles] = useState(userEvents[0].roles[0].subRoles);
  const [isSubRolesVisible, setIsSubRolesVisible] = useState(true);

  function handleEventChange(e) {
    setSelectedEvent(e.target.value);
    const selectedEventData = userEvents.find(event => event.title === e.target.value);
    setSelectedEventRoles(selectedEventData.roles);
  }

  function handleRoleChange(title) {
    setSelectedRole(title);
    const selectedRoleData = userEvents.find(event => event.title === selectedEvent)
      .roles.find(role => role.title === title);
    setSelectedRoleSubRoles(selectedRoleData.subRoles);
    setIsSubRolesVisible(isSubRolesVisible);
  }

  return (
    <div className="app-container" >
      <div className="right-column">
        <div className="logo-container">
          <img src="/icons/LogoW.png" alt="logo" className='logo' />
        </div>
        <div className='user-data'>
          <h3>{userName}</h3>
          <select value={selectedEvent} onChange={handleEventChange}>
            {userEvents.map((event, index) => (
              <option key={index} value={event.title}>{event.title}</option>
            ))}
          </select>
        </div>
        <div>
          <ul>
            {selectedEventRoles.map((role, index) => (
              <li key={index} className={`role ${selectedRole === role.title ? 'selected' : ''}`} onClick={() => { handleRoleChange(role.title); }}>
                <div className="role-top">
                  <div className="role-icon-circle">
                    <img src="icons/roleIcon.svg" alt="role-icon" className="role-icon" />
                  </div>
                  <h3 className="role-title">{role.title}</h3>
                </div>
                {isSubRolesVisible && selectedRole === role.title && (
                  <div className="role-bottom">
                    <ul className={`subRoles-ul ${isSubRolesVisible ? 'show' : ''}`}>
                      {role.subRoles.map((subRole, index) => (
                        <li key={index} className="subRoles-li">
                          <div className='sub-role-icon-circle'><img src={subRole.icon} alt="sub-role-icon" className="sub-role-icon" /></div>
                          <h3>{subRole.title}</h3>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='btn-signout' onClick={() => { setUserName(''); setSelectedEvent([]) }}>
          <div className='btn-signout-icon'><img src="icons/signoutIcon.svg" alt="signout"></img></div>
          <p3>התנתק מהמערכת</p3>
        </div>
      </div>
      <div className="left-column">
        <div className="selected-role">
          <p>{selectedRole}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
