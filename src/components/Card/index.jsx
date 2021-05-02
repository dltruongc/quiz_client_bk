
import React from "react";
import "./card.scss";
import './raw_data';
             
export default function CardButton(props){

  const details = props.details,
    styles = {
      backgroundColor: "#" + details.color,
    };
    return (
      <div className='column'>
        <button className='article'>
          <h3 className='article__category' style={styles}>
            {details.category}
          </h3>
          <h2 className='article__title'>{details.title}</h2>
          <p className='article__excerpt'>{details.excerpt}</p>
        </button>
      </div>
    );
}
