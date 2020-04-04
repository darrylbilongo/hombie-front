import * as React from 'react';
import { List } from 'react-native-paper';

export default ({title, items}) => {
    return (
        <List.Section>
          <List.Subheader>{title}</List.Subheader>
          {items.map(item => {
              <List.Item
              key={item.id}
              title={item.title}
              left={() => <List.Icon color="#000" icon="folder" />}
           />
          })}
       </List.Section>
      );
}
