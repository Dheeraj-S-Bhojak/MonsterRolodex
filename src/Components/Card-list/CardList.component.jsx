import { Component } from "react";
import "./CardList.styles.css"
import Card from "../Card/Card.component";

class CardList extends Component{
    render() {
        return ( 
            <div className="card-list">
                { this.props.filterMonsterData.map(monster => ( 
                    <Card key={monster.id} monster={monster} />
                ))};
            </div> 
        )
    }
    }

export default CardList;