import React from 'react';

class Like extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likes : [1, 1, 1]};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likes.push(1);
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Likes : {
          this.state.likes.map(() => 'Like! ')
        }
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default Like;
