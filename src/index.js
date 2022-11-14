import React from 'react'
import styles from './styles.module.css'


export const Button = (props) =>{

  // default button
  if(props.type==undefined){
    return(
      <button className={`${styles.btn}`+" " +`${styles.default}`}>{props.text}</button>
    )
  }

  // primary button
  if(props.type=="primary"){
    return(
      <button className={`${styles.btn}`+" " +`${styles.primary}`}>{props.text}</button>
    )
  }
    // dashed button
    if(props.type=="dashed"){
      return(
        <button className={`${styles.btn}`+" " +`${styles.dashed}`}>{props.text}</button>
      )
    }
     // text button
     if(props.type=="text"){
      return(
        <button className={`${styles.btn}`+" " +`${styles.text}`}>{props.text}</button>
      )
    }
     // link button
     if(props.type=="link"){
      return(
        <button className={`${styles.btn}`+" " +`${styles.link}`}>{props.text}</button>
      )
    }

}
