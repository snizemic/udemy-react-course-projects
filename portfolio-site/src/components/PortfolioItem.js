import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div>Portfolio Item {props.match.params.id}</div>
    );
};

export default PortfolioItem;