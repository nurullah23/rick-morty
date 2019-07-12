import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/CharacterList.scss';
import Character from './Character.jsx';

const propTypes = {
    characters: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
    page: PropTypes.number,
    loadCharacters: PropTypes.func
};

const defaultProps = {
    characters: [],
    loading: true,
    error: '',
    page: 1,
    loadCharacters: () => {}
};

const CharacterList = ({ characters, loading, error, page, loadCharacters }) => {
    useEffect(() => {
        if (loading && page === 1) {
            loadCharacters();
        }
    }, []);

    if (loading) {
        return (
            <div>Loading</div>
        );
    }

    if (error) {
        return (
            <div>Error: </div>
        );
    }
    
    return (
        <div className="characters-container">
        {characters.map((character, i) => (
            <Character
                character={character}
                key={i}
                />
        ))}
        </div>
    );
};

CharacterList.propTypes = propTypes;
CharacterList.defaultProps = defaultProps;

export default CharacterList;