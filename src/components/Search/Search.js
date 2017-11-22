import React, {PureComponent} from 'react';
import {searchRequest} from '../../actions/searchActions';
import {getIsFetching, getResult, getError} from '../../reducers/search';
import ResultItem from '../ResultItem/ResultItem';
import {connect} from 'react-redux';
import './Search.css';

class Search extends PureComponent {
  state = {
    value: ''
  };

  handleChange = event => {
    const {value} = event.target;

    this.setState({value});
  };

  handleClickSearchRequest = () => {
    const {value} = this.state;
    const {searchRequest} = this.props;

    if (value.length) {
      searchRequest(value);
    }
  };

  render() {
    const {value} = this.state;
    const {isFetching, error, result} = this.props;

    if (isFetching) {
      return <p>Идет загрузка</p>;
    }

    if (error !== null) {
      return <p style={{color: 'red'}}>Ошибка! {error}</p>;
    }

    return (
      <div className="search">
        <div className="search__input">
          <input
            type="text"
            placeholder="Название сериала"
            value={value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClickSearchRequest}>Найти</button>
        </div>
        <div className="result_items">
          {result.map(item => {
            const {id} = item;
            return <ResultItem key={id} {...item} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({search}) => ({
  isFetching: getIsFetching(search),
  result: getResult(search),
  error: getError(search)
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
