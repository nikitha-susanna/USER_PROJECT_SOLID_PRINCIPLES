import React from 'react';
import style from './css/common.module.css'

function Header(props) {
   return (
      <div className={style.header}>
         <h1 className={style.title}> Dashboard </h1>
      </div>
   );
}

export default Header;