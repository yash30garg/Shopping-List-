import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getItems ,deleteItem ,addItem } from "../actions/itemAction";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    const { getItems } = this.props;

    getItems();
  }

  onDelete = (id) => {
   this.props.deleteItem(id)
  }
 
  render() {
    const { items } = this.props.item;
    const {addItem} = this.props;
    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            addItem(name);
          }}
        >
          Add Item
        </Button>

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
  { getItems , deleteItem ,addItem }
)(ShoppingList);
