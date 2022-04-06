import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import Nav from './components/Nav';
import requests from './requests';

function App() {

  return (
    <div className="app">
    <Nav></Nav>
    <Banner></Banner>
      <Row title="NETFlIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}></Row>
    </div>
  );
}

export default App;
