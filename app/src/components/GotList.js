import React from 'react';
import{ connect } from 'react-redux';
import { getHouses } from '../actions/actions.js';
import styled from 'styled-components'

const HouseCard = styled.div`
display:flex;
padding:30px;
flex-direction:column;
`

const HouseInfo =styled.p`
color:white;
padding:10px;
`

/* const getOverlord = props =>{
    const theOverlord
} */

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
                <div>
                <h4 key = {house.url}> {house.name}</h4>
                <HouseCard>
                    <HouseInfo>Region: {house.region}</HouseInfo>
                    <HouseInfo>Titles: {house.titles}</HouseInfo>
                    <HouseInfo>Current Lord: {house.currentLord}</HouseInfo>
                    <HouseInfo>Ruler: {house.overlord}</HouseInfo>
                    <HouseInfo>Cool Weapons: {house.ancestralWeapons}</HouseInfo>
                    <HouseInfo>Cadet Branches: {house.cadetBranches}</HouseInfo>
                    <HouseInfo>Words: {house.words}</HouseInfo>
                </HouseCard>
                </div>
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