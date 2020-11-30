import "./App.css";
import React from 'react'

import Header from "./components/Header";
import Main from "./components/Main";
import Trailer from './components/Trailer'
import {  useState } from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
function App() {
  const [MovieList, setMovieList] = useState([
    {
      id: "1",
      trailer: "https://www.youtube.com/embed/ywloQClYYGI",
      name: "Antebellum",
      desc:
        "Successful author Veronica Henley finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it's too late.",
      rating: 5,
      url:
        "https://m.media-amazon.com/images/M/MV5BOTQzYWU3NzktOGQyOC00NGNiLWE3NjAtNzQ0YzRkOTc5ODUzXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
    },
    {
      id: "2",
      trailer: "https://www.youtube.com/embed/Ub9EikTkrTk",
      name: "Sniper: Assassin's End",
      desc:
        "Legendary sniper Thomas Beckett and his son, Special Ops Sniper Brandon Beckett, are on the run from the CIA, Russian Mercenaries, and a Yakuza-trained assassin with sniper skills that rival both legendary sharp shooters.",
      rating: 2,
      url:
        "https://m.media-amazon.com/images/M/MV5BNzNlNzBhNzMtNWNiOC00MGMxLWI3YjktNWMwNzJjMDEyZGQ3XkEyXkFqcGdeQXVyNzY1ODU1OTk@._V1_SX300.jpg",
    },
    {
      id: "3",
      trailer: "https://www.youtube.com/embed/jKCj3XuPG8M",
      name: "Bad Boys for Life",
      desc:
        "The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.",
      rating: 5,
      url:
        "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    },
    {
      id: "4",
      trailer: "https://www.youtube.com/embed/VfjoofUEcy0",
      name: "Escape from Pretoria",
      desc:
        "Based on the real-life prison break of two political captives, Escape From Pretoria is a race-against-time thriller set in the tumultuous apartheid days of South Africa.",
      rating: 4,
      url:
        "https://m.media-amazon.com/images/M/MV5BOWRhYWFkMDEtNTFjZC00OWJkLWJmMWQtNzI2OWRjZjVjOGYyXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg",
    },
    {
      id: "5",
      trailer: "https://www.youtube.com/embed/WHXxVmeGQUc",
      name: "The Irishman",
      desc:
        "A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.",
      rating: 5,
      url:
        "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
    },
    {
      id: "6",
      trailer: "https://www.youtube.com/embed/km_L0v3C0ms",
      name: "Rambo: Last Blood",
      desc:
        "Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission.",
      rating: 3,
      url:
        "https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
    },
  ]);
  const [Keyword, setKeyword] = useState("");
  const [Rating, setRating] = useState("0");
  const Search = (word) => setKeyword(word);
  const SearchR = (el) => {
    setRating(el);
  };
  const AddToMovieList = (name, desc, rating, url) =>
    setMovieList([...MovieList, { name, desc, rating, url }]);



  return (
    <Router>
      <div className="App">
        <Header
          AddToMovieList={AddToMovieList}
          Search={Search}
          SearchR={SearchR}
          Rating={Rating}
        />
        
          <Route
            exact
            path="/movie-app"
            render={() => (
              <Main Movies={MovieList} Keyword={Keyword} Rating={Rating} />
            )}
          />
          <Route path="/movie-app/:Ntitle" component={(props)=><Trailer {...props} MovieList={MovieList}/>} />
      </div>
    </Router>
  );
}

export default App;
