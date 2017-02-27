import React from 'react';
import { connect } from 'react-redux';

import { changeView } from './actions';

const mapStateToProps = state => ({
  selected: state.view,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    dispatch(changeView(e.target.value));
  },
});

const ViewToggle = ({ selected, onChange, options }) => (
  <select onChange={onChange} value={selected}>
    {
      options.map(elem => (
        <option value={elem.value} key={elem.value}>
          {elem.text}
        </option>
      ))
    }
  </select>
);

ViewToggle.propTypes = {
  selected: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

ViewToggle.defaultProps = {
  selected: '',
  onChange: () => true,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewToggle);
