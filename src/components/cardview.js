import * as React from 'react';
import { Button, Card, Title } from 'react-native-paper';


export default ({ id, title, description, imageUrl, selected, onSelect, onUnselect }) => {
  const handleSelectPress = () => {
    if(selected){
      onUnselect(id)
    } else {
      onSelect(id)
    }
  }
  return (
    <Card>
      <Card.Title title={title}/>
      <Card.Content>
        <Title>{description}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: imageUrl }} />
      <Card.Actions>
        <Button onPress={handleSelectPress}>{selected ? 'Supprimer' : 'Ajouter'}</Button>
      </Card.Actions>
    </Card>
  )
}