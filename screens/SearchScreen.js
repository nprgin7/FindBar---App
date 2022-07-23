import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
  {
    id: 1,
    name: 'New York',
  },
  {
    id: 2,
    name: 'Slavonski Brod',
  },
  {
    id: 3,
    name: 'Restoran Dukat',
  },
  {
    id: 4,
    name: 'Soho bar',
  },
  {
    id: 5,
    name: 'Metropolis',
  },
  {
    id: 6,
    name: 'Elite',
  },
  {
    id: 7,
    name: 'Fast Food Ruby',
  },
  {
    id: 8,
    name: 'Swift',
  },
];

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ]
    }
  }
  render() {
  return (
        <Fragment>
          {/* Single */}
          <SearchableDropdown
            onItemSelect={() => this.props.navigation.navigate("New York")}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            resetValue={false}
            textInputProps={
              {
                placeholder: "Search",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
  );
  }
}