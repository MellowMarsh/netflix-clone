import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone React JS</h1>
      <Row title= "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title= "Trending Now" fetchUrl={requests.fetchTrendingNow}/>
      {/*} <Row title= "Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title= "Action Movies" fetchUrl={requests.fetchActionMovies} />
  <Row title= "Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> */}
     
    </div>
  );
}

export default App;
