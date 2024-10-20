import React from 'react';
import style from './amazon.module.css'; // Importing CSS module
import amazonLogo from '../../other_files/amazon_logo.png'; // Importing the image


export default function AmazonNavBar() {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.navbarLogo}>
          {/* Use the variable 'amazonLogo' here instead of the string */}
          <a href="#"><img src={amazonLogo} alt="Amazon Logo" /></a>
        </div>

        <div className={style.navbarSearch}>
          <input type="text" placeholder="Search for products" />
          <button className={style.searchBtn}>Search</button>
        </div>

        <div className={style.navbarLinks}>
          <a href="#">Account & Lists</a>
          <a href="#">Returns & Orders</a>
          <a href="#">Cart</a>
        </div>
      </nav>
    </div>
  );
}
