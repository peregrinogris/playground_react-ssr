import React from 'react';

class Like extends React.Component {

  constructor(props) {
    super(props);
    this.state = { likes: [1, 1, 1] };
    this.onLike = this.onLike.bind(this);
  }

  onLike(e) {
    e.preventDefault();
    const newLikesCount = this.state.likes.push(1);
    this.setState({ likesCount: newLikesCount });
  }

  render() {
    return (
      <div>
        Likes : {
          this.state.likes.map(() => 'Like! ')
        }
        <form action="/api/likes?redirect=1" method="POST">
          <button onClick={this.onLike}>Like Me</button>
        </form>
      </div>
    );
  }

}

export default Like;
