import { Component } from "react";
import "./SearchBar.styles.css"


class SearchBar extends Component{
    render() {
        return(
            <input type={"search"} className="search" placeholder="Search A Monster" onKeyUp={this.props.function}     />
        )
    };

};

export default SearchBar;