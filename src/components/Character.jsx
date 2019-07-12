import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Character.scss';
import Location from './Location.jsx';
import Episodes from './Episodes.jsx';

const propTypes = {
    character: PropTypes.object
}

const defaultProps = {
    character: null
}

const Character = ({ character }) => {
    if (character) {
        const {
            image,
            name,
            status,
            species,
            gender,
            origin,
            location,
            episode
        } = character;

        return (
            <div className="character">
                <img
                    src={image}
                    alt="Profile image" />
                <table className="character-data">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <td>Species</td>
                        <td>{species}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Origin</td>
                        <td>
                            <Location
                                name={origin.name}
                                url={origin.url} />
                        </td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>
                            <Location
                                name={location.name}
                                url={location.url} />
                        </td>
                    </tr>
                    <tr>
                        <td>Episodes</td>
                        <td className="episodes">
                            <Episodes
                                episodes={episode} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div>Character data is empty</div>
        );
    }
};

Character.propTypes = propTypes;
Character.defaultProps = defaultProps;

export default Character;