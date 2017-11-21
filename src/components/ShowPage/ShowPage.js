import React, {PureComponent} from 'react';
import {showRequest} from '../../actions/showActions';
import {getIsFetching, getResult, getError} from '../../reducers/show';
import {connect} from 'react-redux';
import './ShowPage.css';

class Show extends PureComponent {
  componentDidMount() {
    const {match, showRequest} = this.props;
    showRequest(match.params.id);
  }

  render() {
    const {isFetching, error, result} = this.props;

    if (isFetching) {
      return <p>Идет загрузка</p>;
    }

    if (error !== null) {
      return <p style={{color: 'red'}}>Ошибка! {error}</p>;
    }

    const {name, image, summary, _embedded} = result;

    return (
      <div>
        <p>{name}</p>
        <img src={image.medium} alt={name} />
        <div dangerouslySetInnerHTML={{__html: summary}} />
        <div className="show__items">
          {_embedded.cast.map(person => {
            const {id, image, name} = person.person;
            return <Person key={id} name={name} img={image.medium} />;
          })}
        </div>
      </div>
    );
  }
}

const Person = ({name, img}) => {
  return (
    <div>
      <p>{name}</p>
      <img src={img} alt={name} />
    </div>
  );
};

const mapStateToProps = ({show}) => ({
  isFetching: getIsFetching(show),
  result: getResult(show),
  error: getError(show)
});

const mapDispatchToProps = {
  showRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
