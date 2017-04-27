import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

import { removeCoffee, editCoffee } from '../actions';

const styles = {
  products: {
    padding: 10,
  },
};

class coffeeBeanList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: {
        id: 0,
        name: '',
        image: '',
        flavour: '',
        description: '',
      },
    };
  }

  render() {
    const { coffees, deleteCoffee, editCoffee } = this.props;
    return (
      <div>
        <Card.Group style={styles.products}>
          {coffees.map(coffee =>
            <Card key={coffee.id}>
              <Image
                src={coffee.image}
              />
              <Card.Content>
                <Card.Header>
                  {coffee.name}
                </Card.Header>
                <Card.Meta>
                  <span>
                    {coffee.flavour}
                  </span>
                </Card.Meta>
                <Card.Description>
                  {coffee.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  color="red"
                  icon
                  circular
                  floated="right"
                  onClick={() => deleteCoffee(coffee.id)}
                >
                  <Icon name="trash outline" />
                </Button>
                <Button color="yellow" icon circular floated="right">
                  <Icon name="edit" />
                </Button>
              </Card.Content>
            </Card>,
          )}
        </Card.Group>
      </div>
    )
  }
}


// const coffeeBeanList = ({ coffees, deleteCoffee, editCoffee }) => (
//
// );

const mapStateToProps = state => ({
  coffees: state.coffees,
});

const mapDispatchToProps = dispatch => ({
  deleteCoffee: coffeeId => dispatch(removeCoffee(coffeeId)),
  editCoffee: editedCoffee => dispatch(editCoffee(editedCoffee)),
});

export default connect(mapStateToProps, mapDispatchToProps)(coffeeBeanList);
