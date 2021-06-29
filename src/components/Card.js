import React from 'react';

const Card = (props)=>{
    const {id, name, email} = props;
    return(
        <div className="bg-light-green dib br3 tc ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}/?set=set4&size=220x220`} alt="robo"/>
            <div>
                <h2>{name}</h2>
                <p> {email} </p>
            </div>
        </div>
    );
}
export default Card;