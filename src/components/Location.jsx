import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
}

const defaultProps = {
    name: '',
    url: ''
}

const Location = ({ name, url}) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then(data => setLocation(data));
        }
    }, []);

    if (!location) {
        return (
            <div>Location info not found</div>
        )
    }

    const { dimension, residents } = location

    return (
        <div>
            {`${name} / ${dimension} / ${residents.length} residents`}
        </div>
    )
}

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

export default Location;