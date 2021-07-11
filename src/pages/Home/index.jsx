import React, { useEffect, useState } from 'react';
import './Home.scss';
import '../../components/Card/index';
import CardButton from '../../components/Card/index';
import NavBar from '../../components/Navbars/index';
import SideBar from'../../components/SideBar/index';
import rawData from '../../components/Card/raw_data';
import Pagination from '@material-ui/lab/Pagination';
import footer from '../../components/footer';

export default function Home() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    setTimeout(setCard(rawData), 2000);
  }, [cards]);

  const listItems = () => {
    return cards.map((currCard, index) => {
      return (<CardButton key={index} index={index} details={currCard}></CardButton>);
    });
  };
  

  return (
    <body>
      <React.Fragment>
        <NavBar></NavBar>
        <div className='container'>
          <div className='row'>{listItems()}</div>
        </div>
      </React.Fragment>
      <Pagination count={10} variant='outlined'/>
      <footer/>
    </body>
  );
}
