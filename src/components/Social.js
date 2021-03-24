import React from 'react';
import {facebook, telegram, twitter} from "../assets/images";

const Social = ({size = 'w42', className= 'mb3'}) => {
  return (
    <div className={`dFlex alignItemsCenter justifyContentCenter ${className}`}>
      <a href="https://twitter.com/unitedstaking" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter" className={size} />
      </a>
      <a href="https://www.facebook.com/United-Group-Capital-104752815041514/" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook" className={`${size} mx2`} />
      </a>
      <a href="https://t.me/joinchat/tetElZMIBmYzNzk0" target="_blank" rel="noreferrer">
        <img src={telegram} alt="telegram" className={size} />
      </a>
    </div>
  );
};

export default Social;
