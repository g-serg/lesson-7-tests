import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './SearchItem.css';

export default class SearchItem extends PureComponent {
  render() {
    const {id, name, img, summary} = this.props;

    return (
      <div className="search__item">
        <div className="search__item__link">
          <Link to={`/shows/${id}`}>
            <h3>{name}</h3>
          </Link>
          <img src={img} alt={name} />
        </div>
        <div dangerouslySetInnerHTML={{__html: summary}} />
      </div>
    );
  }
}
