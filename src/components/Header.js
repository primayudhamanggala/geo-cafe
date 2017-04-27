import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Button, Image } from 'semantic-ui-react';


const PageHeader = () => (
  <div>
    <Segment attached="top">
      <Image
        src="https://image.freepik.com/free-vector/realistic-coffee-logo_23-2147503980.jpg"
        size="small"
        shape="circular"
        centered
      />
      <Link to="/">
        <Header as="h3" textAlign="center">
          GEOCAFE
        </Header>
      </Link>
    </Segment>
    <Segment attached>
      <div>
        <Link to="products">
          <Button content="See All Products" icon="coffee" labelPosition="left" />
        </Link>
        <Link to="new-form">
          <Button content="Add Product" icon="plus" labelPosition="left" />
        </Link>
      </div>
    </Segment>
  </div>
);

export default PageHeader;
