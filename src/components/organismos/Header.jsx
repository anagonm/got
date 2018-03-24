import React from 'react';
class Header extends React.Component {

  render() {
    return(
      <ul>
        <li>
          <a href="#news">
            <img src="/img/logo.png" className="logo" alt=""/>
          </a>
        </li>
        <li><a className="active" href="#home"> Game of Thrones</a></li>
        <li><a href="#daenerys">Daenerys Targaryen</a></li>
      </ul>
    )
  }
}

export default Header;
