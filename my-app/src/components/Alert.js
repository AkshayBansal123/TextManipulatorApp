import React from 'react'

export default function Alert(props) {
    const Capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
props.alert && (
    <div className={`alert alert-${props.alert.type}`} role="alert">
    <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
  </div>
)
  )
}
