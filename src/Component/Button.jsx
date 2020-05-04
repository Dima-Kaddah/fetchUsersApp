import React from 'react';

function Button({ handleBtn }) {
  return (
    <div>
      <button className="btn" onClick={handleBtn}>
        Get User
      </button>
    </div>
  );
}

export default Button;
