import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import './index.scss';
import {AtButton, AtCard, AtList, AtListItem, AtToast} from "taro-ui";

@connect(({index}) => ({
  ...index,
}))
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {flag: false, text: ''}
  }

  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
  };

  handleClick(item, e) {
    console.log("item--->" + item);
    this.setState({flag: true, text: item})
  }

  getData() {
    this.props.dispatch({
      type: 'index/getData'
    })
  }

  render() {
    const data = this.props.data;
    return (
      <View className="index-page">
        <AtButton type='primary' size='normal' onClick={this.getData}>获取数据</AtButton>
        {/*<AtButton type='secondary' size='small' onClick={this.getData}>获取数据</AtButton>*/}
        {
          data && <AtList>
            {this.props.data.map(item => <AtListItem key={item} title={item}
                                                     onClick={this.handleClick.bind(this, item)}/>)}
          </AtList>
        }
        <AtToast isOpened={this.state.flag} text={this.state.text} duration={1500}/>
      </View>
    )
  }
}
