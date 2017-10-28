import React,{PureComponent} from 'react';
import './main.css';
export default class GoogleMaterilIcons extends PureComponent{
  render() {
    return  <i className="material-icons"
                      style={{fontSize: this.props.size||24}}>{this.props.icon}</i>;
  }
};
