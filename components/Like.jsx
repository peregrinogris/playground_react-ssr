import React from 'react';
import { connect } from 'react-redux';

import { addLike } from './actions';

const mapStateToProps = state => ({
  likes: state.likes.map(() => 'Like! '),
});

const mapDispatchToProps = dispatch => ({
  onLike: () => {
    dispatch(addLike());
  },
});

const Like = ({ likes, onLike }) => (
  <div>
    Likes: {likes}
    <div>
      <button onClick={onLike}>Like Me</button>
    </div>
  </div>
);

Like.propTypes = {
  likes: React.PropTypes.arrayOf(React.PropTypes.string),
  onLike: React.PropTypes.func,
};

Like.defaultProps = {
  likes: [],
  onLike: () => true,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Like);
