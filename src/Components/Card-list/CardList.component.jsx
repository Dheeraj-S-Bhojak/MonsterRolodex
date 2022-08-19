import PropTypes from 'prop-types';

import Card from "../Card/Card.component";

import "./CardList.styles.css"

/**
 * Card List 
 *  Card list responsible for takes a array data and return card object
 * @param {Array} 
 * @returns {object}
 */

const CardList = (props) => {
    return (
        <div className="card-list">
            {props.filterMonsterData.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
};

 CardList.propTypes = {
    filterMonsterData: PropTypes.array.isRequired
};

export default CardList;