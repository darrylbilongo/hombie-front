import React from 'react';
import Card from './cardview';

let data = require('../../data.json');

const cardList = (data) => {
    return (
        data.map((card => (
            <Card title={card.title} imageUri={card.imageUri}/>
                    ))
            )
    );
}

export default cardList;