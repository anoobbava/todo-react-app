import React from 'react';

const Header = () => {
  const headerStyle = {
    'backgroundColor': 'Black',
    'padding': '30px 40px',
    'color': 'white',
    'textAlign': 'center',
    'fontSize': '25px'
  }

  return (
    <div>
      <p style={headerStyle}>Welcome to Todo</p>
    </div>
  )
}

export default Header;
