import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
    episodes: PropTypes.array
}

const defaultProps = {
    episodes: []
}

const Episodes = ({ episodes }) => {
    const [episodeNames, setEpisodeNames] = useState([]);

    useEffect(() => {
        if (_.size(episodes) > 0) {
            Promise.all(episodes.map(url => fetch(url)
                                .then(res => res.json())
                                .then(e => e.name)))
                .then(names => setEpisodeNames(names));
        }
    }, []);

    if (_.size(episodeNames) === 0) {
        return (
            <div>-</div>
        )
    }

    return (
        <div>
            {_.join(episodeNames, ', ')}
        </div>
    )
}

Episodes.propTypes = propTypes;
Episodes.defaultProps = defaultProps;

export default Episodes;
