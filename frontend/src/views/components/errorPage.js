import React from 'react';

export default function ErreurBox(props) {
  return (
    <div>
    <div className={`alert alert-${props.variant || 'info'}`}>{props.children}</div>
   <div >  <img style={{width:"100%",height:"47.76rem"}} src="/images/erreur.png" alt="erreur" /> </div>
    </div>
  );
}