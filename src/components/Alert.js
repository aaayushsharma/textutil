import React from 'react'

export default function Alert(props) {
    const capitalise=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
        }
  return (

     props.alert&&<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{capitalise(props.alert.type)}</strong> :  {props.alert.msg}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>

    </div>
  )
}
