import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getItems ,deleteItem  } from "../actions/itemAction";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    const { getItems } = this.props;

    //getting the initial state items via getItems action
    getItems();
  }

  onDelete = (id) => {

    //deleteItem action
   this.props.deleteItem(id)
  }
 
  render() {
    const { items } = this.props.item;
    
    return (
      <Container>
  

        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ id, value }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    style={{ marginRight: "2rem" }}
                    color='danger'
                    size='sm'
                    onClick={this.onDelete.bind(this,id)}
                  >
                    &times;
                  </Button>
                  {value}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems , deleteItem }
)(ShoppingList);
