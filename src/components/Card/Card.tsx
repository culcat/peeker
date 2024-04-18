import Clases from './Card.module.css';
import React from'react';

export default function Card() {
    return (
    <div className="card">
      <div className="card-header">
        <img src="https://picsum.photos/200/200" className="card-img-top"/>
      </div>
      <div className="card-body">
          <img src="https://picsum.photos" />
          <p>marketplace name</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
      </div>
    </div>
  );
}