
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem  extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    shouldComponentUpdate(nextProps, nextState){
       if(nextProps.content !== this.props.content){
           return true
       }else{
            
           return false
       }
      
    }
    render() { 
       console.log('子组件render')
        return ( 
            <div onClick={this.handleClick.bind(this)}>
                {this.props.content}
            </div>
         );
    };
    handleClick(){
       this.props.delValue(this.props.index)
    };
   
    


}
XiaojiejieItem.propTypes = {
    content:PropTypes.string
}
 
export default XiaojiejieItem;