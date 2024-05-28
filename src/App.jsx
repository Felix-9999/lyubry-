import React from 'react';
import './App.css';

import Booklist from './components/Booklist/Booklist';
import { createBrowserRouter } from "react-router-dom";
import BookDetails from './components/details/BookDetails';
import Footer from './components/Footer/Footer';
import Favorites from './components/Favorites/Favorites';


const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <Booklist />
      </div>
    ),
  },
  {
    path: "/:id",
    element: (
      <div className="App">
        <BookDetails />
      </div>
    ),
  },
  {
    path: "/favorites",
    element: (
      <div className="App">
        <Favorites />
      </div>
    ),
  },
]);



export default App;
