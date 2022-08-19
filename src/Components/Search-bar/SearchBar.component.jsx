import PropTypes from 'prop-types';

import "./SearchBar.styles.css"

/**
 * Search Bar
 * Search bar take string and a onkeyup function 
 * @param {function} props 
 * @returns void
 */

const SearchBar = (props) => {
    return (
        <input type={"search"}
            className={"search"}
            placeholder="Search a Monster"
            onKeyUp={props.function} />
    );
};

SearchBar.propTypes = {
    function : PropTypes.func.isRequired
      
};
export default SearchBar;