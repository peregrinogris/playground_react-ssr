import React from 'react';
import { connect } from 'react-redux';

import ViewToggle from './ViewToggle';
import { addLike } from './actions';

const mapStateToProps = state => ({
  likes: state.likes.map(() => 'Like! '),
});

const mapDispatchToProps = dispatch => ({
  onLike: (e) => {
    e.preventDefault();
    dispatch(addLike());
  },
});

const options = [
  {
    value: 'classic',
    text: 'Classic',
  },
  {
    value: 'compact',
    text: 'Compact',
  },
];

const Like = ({ likes, onLike }) => (
  <div>
    Likes: {likes}
    <div>
      <form action="/api/likes?redirect=1" method="POST">
        <button onClick={onLike}>Like Me</button>
      </form>
    </div>
    <ViewToggle options={options} />
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
