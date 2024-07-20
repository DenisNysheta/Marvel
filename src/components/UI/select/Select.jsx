import React, { useState } from 'react'
import cl from  "./Select.module.scss"

function Select(props) {

    const {value,options, onChange} = props

    return (
    <select className={cl.select} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => {
            return <option key={option.value} value={option.value} >{option.name}</option>
        })}
    </select>
  )
}

export default Select