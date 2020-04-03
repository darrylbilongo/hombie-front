import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = ({title, imageUrl}) => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: imageUrl }} />
    <Card.Actions>
      <Button>Select</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;