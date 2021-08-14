import React, { Component } from 'react';

class ChangeImages extends Component {
  state ={
  img: '',

  };

  changeImg = (e) => {
      this.setState({
          img: e.target.value
      })
  }

    render() {
        const{ img} = this.state;
        return (
            <div className="ChangeImages">
                <img src={require(`../assets/${img}`).default}  value={img} onChange={this.changeImg} />
            </div>
        );
    }
};

export default ChangeImages;