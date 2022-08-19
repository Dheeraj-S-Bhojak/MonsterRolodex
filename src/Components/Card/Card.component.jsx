import PropTypes from 'prop-types';

import "./Card.styles.css"
/**
 * Card
 * Card responsible for take object and 
 * @param {Array} props 
 * @returns {void}
 */
const Card = ({monster}) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )

}
Card.prototype = {
    id: PropTypes.number,
    name: PropTypes.string,
    email : PropTypes.any
        
    }
export default Card;