import React, { useEffect, useState } from 'react';
import './App.css';
import Title from '../Title/Title';
import Tmdb from '../../Tmdb';
import List from '../List/List';
import SliderIndex from '../SliderIndex/SliderIndex';


function App() {

const [movieList, setMovies] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovies(list);
      
    }

    loadAll();
  }, [])


  return (
    <div className="App">
      <Title />
      
      {movieList.map((elem, key) => {
        return (
          <div key={key}>
            <div className='slide-index'>
              <h1>{elem.title}</h1>
              <SliderIndex />
            </div>
            
            <List items={elem.items.results} />

          </div>
        )
      })}
      
    </div>
  );
}

export default App;
