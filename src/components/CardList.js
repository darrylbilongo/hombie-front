import React from 'react';
import Card from './cardview';

const cardList = ({list}) => {
    return (
        list.map((card => (
            <Card key={card.id} title={card.description} imageUri={card.imageUrl}/>
            ))
        )
    );
}

export default cardList;