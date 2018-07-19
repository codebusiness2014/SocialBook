import React from "react";
import { Link } from "react-router-dom";

export default props => {
  if (props.friends) {
    let friends = Object.keys(props.friends).map(friendId => {
      let friend = props.friends[friendId];
      return (
        <div className="friends-list-item">
          <Link to={`/users/${friendId}`}>
            <img
              className="friends-list-item-image"
              src={friend.image}
              alt=""
            />
            <div className="friends-list-item-content">
              <div className="friends-list-item-content-name">
                {friend.first_name} {friend.last_name}
              </div>
              <button className="friends-list-item-content-button">
                <i class="fa fa-check" aria-hidden="true">
                  Friends
                </i>
              </button>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className="friends-container">
        <div className="friends-list-header">Friends</div>
        <div className="friends-list-container">{friends}</div>
      </div>
    );
  } else {
    return <div>DID NOT LOAD</div>;
  }
};
