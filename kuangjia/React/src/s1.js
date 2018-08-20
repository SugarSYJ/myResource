import React, { Component, PropTypes } from 'react';

const styles = require('./DoctorSchedulesCard.scss');

let startX;
export default class DoctorSchedulesCard extends Component {
  static propTypes = {
    doctorSchedules: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      touchIndex: 0, // 当前未隐藏div索引值
    };
  }

  componentDidMount() {
    // this.props.loadScheduleByDoctorName();
  }

  componentWillReceiveProps() {
  }

  touchStart(event) {
    startX = event.changedTouches[0].pageX;
  }

  // 因为无论move 还是start 都会触发end事件。所以判断方向就在end事件中
  touchEnd(event, index) {
    event.preventDefault();
    const endX = event.changedTouches[0].pageX;
    if (endX - startX > 20) {
      // alert('点击左');
      this.clickLeft(index);
    } else if (startX - endX > 20) {
      // alert('点击右');
      this.clickRight(index);
    }
  }

  clickLeft(indexParam) {
    const allItemCounts = 3; // 总共轮播个数
    const index = indexParam || this.state.touchIndex;
    console.log(index);
    this.setState({
      touchIndex: index === 0 ? allItemCounts : index - 1,
    });
  }

  clickRight() {
    const allItemCounts = 3; // 总共轮播个数
    const index = this.state.touchIndex;
    this.setState({
      touchIndex: index === allItemCounts ? 0 : index + 1,
    });
  }

  render() {
    const {touchIndex} = this.state;
    return (
      <div className={'list ' + styles.doctorSchedulesCardPage}>
        <div onClick={() => this.clickLeft()}>left</div>
        <div onClick={() => this.clickRight()}>right</div>
        <ul>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 0)}
            style={{display: touchIndex === 0 ? 'block' : 'none'}}>第0张</li>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 1)}
            style={{display: touchIndex === 1 ? 'block' : 'none'}}>第1张</li>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 2)}
            style={{display: touchIndex === 2 ? 'block' : 'none'}}>第2张</li>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 3)}
            style={{display: touchIndex === 3 ? 'block' : 'none'}}>第3张</li>
        </ul>
      </div>
    );
  }
}