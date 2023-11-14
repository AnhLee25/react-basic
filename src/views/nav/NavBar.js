import React from "react";
import "./NavBar.scss";
class NavBar extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <a class="active" href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="/friends">Friends</a>
          </li>
          <li>
            <a href="/game">Game</a>
          </li>
        </ul>
      </>
    );
  }
}
export default NavBar;
