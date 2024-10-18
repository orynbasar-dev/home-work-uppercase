import React from 'react';

import userLogo from '../assets/icons/userLogo.svg';

export interface HeaderProps {
  onLogoClick?: () => void;
  actionCenter?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ actionCenter, onLogoClick }) => {
  return (
    <header className="container mx-auto max-w-screen-xl flex justify-between items-center my-10">
      <img src="logo.png" alt="Upper case logo" className="h-14 cursor-pointer" onClick={onLogoClick}/>
      {actionCenter}
      <div className="flex gap-3">
        <img src={userLogo} className="" />
        <p>Orynbasar Kosbay</p>
      </div>
    </header>
  );
};

export default Header;