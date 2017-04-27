import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Button, Icon, Modal, Form } from 'semantic-ui-react';

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
      modalOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const updateCoffeeState = {};
    updateCoffeeState[e.target.name] = e.target.value;
    const newUpdatedState = Object.assign({}, this.state.editForm, updateCoffeeState);
    this.setState({ editForm: newUpdatedState });
  }

  handleOpen(data) {
    this.setState({
      editForm: { ...data },
      modalOpen: true
    });
  }

  handleClose(e) {
    this.setState({ modalOpen: false })
  }

  render() {
    const { coffees, deleteCoffee, updateCoffee } = this.props;
    const { name, image, flavour, description } = this.state.editForm;
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
                <div>
                  <Modal
                    trigger={
                      <Button onClick={() => this.handleOpen(coffee)} color="yellow" icon circular floated="right">
                        <Icon name="edit" />
                      </Button>
                    }
                  >
                    <Modal.Header>Edit Form</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            updateCoffee(this.state.editForm);
                          }}
                        >
                          <Form.Field>
                            <Form.Input
                              label="Name"
                              name="name"
                              value={name}
                              onChange={this.handleChange}
                              placeholder="Coffee Name"
                            />
                          </Form.Field>
                          <Form.Field>
                            <Form.Input
                              label="Image"
                              name="image"
                              value={image}
                              onChange={this.handleChange}
                              placeholder="Image URL"
                            />
                          </Form.Field>
                          <Form.Field>
                            <Form.Input
                              label="Flavour"
                              name="flavour"
                              value={flavour}
                              onChange={this.handleChange}
                              placeholder="flavour"
                            />
                          </Form.Field>
                          <Form.Field>
                            <Form.TextArea
                              label="Description"
                              name="description"
                              value={description}
                              onChange={this.handleChange}
                              placeholder="description"
                            />
                          </Form.Field>
                          <Button onClick={() => this.handleClose} type="submit">Submit</Button>
                        </Form>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </div>
              </Card.Content>
            </Card>,
          )}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coffees: state.coffees,
});

const mapDispatchToProps = dispatch => ({
  deleteCoffee: coffeeId => dispatch(removeCoffee(coffeeId)),
  updateCoffee: editedCoffee => dispatch(editCoffee(editedCoffee)),
});

export default connect(mapStateToProps, mapDispatchToProps)(coffeeBeanList);
