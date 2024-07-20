import React from 'react';
import cl from "./Loader.module.scss"

function Loader() {
  return (
    <div className={cl.myLoader}>
        <div className={cl.first}></div>
        <div className={cl.second}></div>
        <div className={cl.third}></div>
        <div className={cl.four}></div>
        <div className={cl.five}></div>
        <div className={cl.six}></div>
    </div>
  )
}

export default Loader