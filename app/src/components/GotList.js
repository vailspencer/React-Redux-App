import React from 'react';
import{ connect } from 'react-redux';

import { getHouses } from '../actions/actions.js';


const HousesList = props => {
    const fetchHouses = evt => {
        evt.preventDefault();
        props.getHouses();
        console.log(props.getHouses())
    }

    return(
        <> 
        <h2>Welcome to the Game of Thrones Encyclopedia!</h2>
        <div>
            {props.house.map(house => (
                <h4 key = {house.url}> {house.name}</h4>
            ))}   
        </div>
        {props.error && <p className ='error'>{props.error}</p>}
        <button onClick={fetchHouses}> Get the Houses!</button> 
        </>
    )

}

const mapStateToProps = state => ({
    house: state.houses,
    error:state.error
}); 

export default connect(
    mapStateToProps,
    { getHouses }
) (HousesList)  