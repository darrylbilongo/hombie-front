import React from 'react';
import Card from './cardview';

export default ({ list, selectedCards, onSelect, onUnselect }) => {
  return (
    list.map(card => (
        <Card 
          key={card.id} 
          id={card.id} 
          description={card.description} 
          title={card.name} 
          imageUri={card.imageUrl} 
          selected={selectedCards.includes(card.id)} 
          onSelect={onSelect} 
          onUnselect={onUnselect} 
        />
      )
    )
  );
}