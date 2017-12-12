import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './styles.css';

class GenericListItem extends Component {
  constructor(props) {
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute() {
    this.props.onClick();
    this.props.history.push(`${this.props.to}`);
  }

  render() {
    return (
      <div className="GenericListItem" onClick={this.changeRoute}>
        <CardHeader title={this.props.name} />
        <CardActions>
          <RaisedButton
          label={this.props.buttonText}
          primary={true}
          containerElement={<Link
            className="Link"
            to={this.props.to}
            onClick={this.props.onClick}
            />}
          />
        </CardActions>
      </div>
    );
  }
}

GenericListItem.propTypes = {
  buttonText: PropTypes.string,
  history: PropTypes.object,
  name: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
}

export default GenericListItem;
