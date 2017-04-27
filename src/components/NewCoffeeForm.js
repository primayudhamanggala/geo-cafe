import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addCoffee } from '../actions';

const styles = {
  form: {
    padding: 10,
  },
};


class NewCoffeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      flavour: '',
      description: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const submittedState = {};
    submittedState[e.target.name] = e.target.value;
    this.setState(submittedState);
  }

  render() {
    const { name, image, flavour, description } = this.state;
    const { addCoffee } = this.props;
    return (
      <div>
        {this.state.submitted && <Redirect to={{ pathname: '/products' }} />}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addCoffee(this.state);
            this.setState(
              { name: '', image: '', flavour: '', description: '', submitted: true },
            );
          }}
          style={styles.form}
        >
          <Form.Group widths="equal">
            <Form.Input
              label="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="coffee name..."
            />
            <Form.Input
              label="image"
              name="image"
              value={image}
              onChange={this.handleChange}
              placeholder="image url..."
            />
            <Form.Input
              label="flavour"
              name="flavour"
              value={flavour}
              onChange={this.handleChange}
              placeholder="flavour..."
            />
            <Form.Input
              label="description"
              name="description"
              value={description}
              onChange={this.handleChange}
              placeholder="description"
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoffee: newCoffee => dispatch(addCoffee(newCoffee)),
});

export default connect(null, mapDispatchToProps)(NewCoffeeForm);
