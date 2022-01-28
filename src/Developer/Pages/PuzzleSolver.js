import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Projects.css';


const PuzzleSolver = () => {
    return (
        <div className='body'>
            <div className='content-b'>
                <Navbar />
                <div className='portfolio-content'>
                    <h1>Puzzle Solver</h1>
                    <h3>Inspiration</h3>
                    <p>
                        I was at an art fair when I found a vendor [insert vendor name] and really
                        enjoyed his wooden puzzles. I bought one and brought it home. After trying to 
                        solve it, I realized how hard the puzzle is even at its easiest. From there
                        I thought it would be a great idea to create a program to solve it. And the 
                        Puzzle Solver Project was started.
                    </p>

                    <h3>What I used to make it</h3>
                    <ul style={{listStyle:'none'}}>
                        <li>Language: Java</li>
                        <li>IED: Eclipse</li>
                    </ul>

                    <h2>Concept</h2>
                    <p>
                        In order to solve the puzzle I had to understand its elements. Number of pieces,
                        shape, number or spots, orientations, piece variation, etc. I also wanted a solution
                        to the various difficulties that I wanted to solve. So I also spent time actually
                        solving the puzzle in order to take a picture of it and use it as an example.
                    </p>
                    <p>
                        From here I realized that it may be best for me to recreate the puzzle in the program,
                        in order for it to be solved. Using the information that I learned about the elements
                        of the puzzle I started with a board, a set of puzzle pieces, a solution value, and 
                        the program that would put it all together and solve it.
                    </p>
                    <h3>The Board</h3>
                    <p>
                        I started with a double array to make a matrix, but later realized that a graph
                        might be a better solution. With a graph I could have edges and vertices that would make up
                        the spaces that pieces could be fitted into.
                    </p>
                    <h3>Piece Set</h3>
                    <p>
                        A PieceSet is an array of Pieces. Each Piece is an array of ones and zeros. Each Piece
                        has six spots represented by the ones and zeros for present and absent. Pieces also have
                        an orientation value represented as a string. This will tell the board how the piece
                        fits into place.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PuzzleSolver;