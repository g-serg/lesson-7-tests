import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './ResultItem.css';

export default class ResultItem extends PureComponent {
  render() {
    const {id, name, image, summary} = this.props;

    return (
      <div className="result_item">
        <div className="result_item__link">
          <Link to={`/shows/${id}`}>
            <h3>{name}</h3>
          </Link>
          {image && <img src={image.medium} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{__html: summary}} />
      </div>
    );
  }
}
