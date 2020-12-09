import React from 'react'
import style from './title.module.css'

const title = ({ title }) => {
    return (
        <h1 className={style.title}>{title}</h1>
    )
}
export default title