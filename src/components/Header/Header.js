import React from 'react';

const Header = () => {
  const headerStyle = {
    'textAlign': 'center',
    'fontSize': '20px',
    'fontWeight': 'bold'

  }
  return (
    <div>
      <p style={headerStyle}>Welcome to Todo</p>
    </div>
  )
}

export default Header;
