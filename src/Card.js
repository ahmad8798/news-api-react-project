import React from 'react'

export default function Card(props) {
  return (

    <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center p-4'>
    
    <div className="card">
  <img src={props.imagesource} className="card-img-top img-fluid" alt="image not found"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
   
  </div>
  <a href={props.newsLink} className="btn btn-outline-secondary m-5">read more</a>
  </div>
   
    </div>
    
    
        
  )
}
