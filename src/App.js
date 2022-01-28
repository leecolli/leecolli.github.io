import './App.css';
import React from 'react';
import Route from './Route';
import Direct from './Direct';

import Dev from './Developer/Pages/DHome';
import Project from './Developer/Pages/Projects';
import DAbout from './Developer/Pages/DAbout';
import DContact from './Developer/Pages/DContact';
import Website from './Developer/Pages/Website';
import PetPicsBot from './Developer/Pages/PetPicsBot';
import PuzzleSolver from './Developer/Pages/PuzzleSolver';

import Create from './Artist/Pages/CHome';
import Portfolio from './Artist/Pages/Portfolio';
import CAbout from './Artist/Pages/CAbout';
import CContact from './Artist/Pages/CContact';
import InkProject from './Artist/Pages/InkProject';
import Drawings from './Artist/Pages/Drawings';
import Paintings from './Artist/Pages/Paintings';
import Feathers from './Artist/Pages/Feathers';

export default () => {
    return (
        <div >
            <Route path="/"><Direct /></Route>
            <Route path="/Artist"><Create /></Route>
            <Route path="/Developer"><Dev /></Route>

            <Route path="/Artist/Portfolio"><Portfolio /></Route>
            <Route path="/Artist/Portfolio/InkProject"><InkProject /></Route>
            <Route path="/Artist/Portfolio/Drawings"><Drawings /></Route>
            <Route path="/Artist/Portfolio/Paintings"><Paintings /></Route>
            <Route path="/Artist/Portfolio/Feathers"><Feathers /></Route>

            <Route path="/Artist/About"><CAbout /></Route>
            <Route path="/Artist/Contact"><CContact /></Route>

            <Route path="/Developer/Projects"><Project /></Route>
            <Route path="/Developer/Projects/Website"><Website /></Route>
            <Route path="/Developer/Projects/PetPicsBot"><PetPicsBot /></Route>
            <Route path="/Developer/Projects/PuzzleSolver"><PuzzleSolver /></Route>

            <Route path="/Developer/About"><DAbout /></Route>
            <Route path="/Developer/Contact"><DContact /></Route>
        </div>
    );
};

