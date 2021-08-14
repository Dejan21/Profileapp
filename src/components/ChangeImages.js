import React, { Component } from 'react';

class ChangeImages extends Component {
  state ={
  img: '',

  };

  handleChangeImg = (e) => {
      this.setState({
          img: this.state.img
      })
  }

    render() {
        const{ img} = this.state;
        return (
            <div className="ChangeImages">
                <img src={require(`../assets/${img}`).default}  value={img} />
            </div>
        );
    }
};

export default ChangeImages;