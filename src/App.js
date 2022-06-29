
import { useState } from 'react';

import './App.css';
import data from "./data";

import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
    const [cardData, setCardData] = useState(data);

    console.log(cardData);

    const CardModel = cardData.map(eachCard => <Card key={eachCard.id} data={eachCard} />);

    return (
        <>
            <Navbar />
            <Hero />

            <div className="cards">
                {CardModel}
            </div>
        </>
    );
}

export default App;
