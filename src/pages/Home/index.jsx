import React, { useEffect, useState } from "react";
import './Home.scss';
import '../../components/Card/index';
import Article from '../../components/Card/index';
import NavBar from '../../components/Navbars/index';
import rawData from '../../components/Card/raw_data';


export default function Home() {

  const [cards, setCard] = useState([]);

  useEffect(() => {
    setTimeout(setCard(rawData), 2000);
  }, [cards]);

    console.log(cards);

    const listItems = () => {
      return cards.map((currCard, index) => {
        return <Article key={index} index={index} details={currCard} />;
      });
    };
    console.log(listItems);
  return (
    <React.Fragment>
      <h1 className='home'>Home 🏘</h1>
      <div className='container'>
        <div className='column'>{listItems()}</div>
      </div>
      <NavBar></NavBar>
    </React.Fragment>
  );
}

