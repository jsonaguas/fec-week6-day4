import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=0341cd0c30b09ddc69922058cf2819ef&hash=c2c4592f3b2eb488b52ea8b5e7d70c59');
                setCharacters(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching heroes:', error);
            }
        };

        fetchHeroes();

    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
            {characters.map(character => (
                <div key={character.id} style={{ cursor: 'pointer' }}>
                    <Link to={`/character/${character.id}`}>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} style={{ width: '100%' }} />
                        <h3>{character.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};



export default BrowseCharacters;

