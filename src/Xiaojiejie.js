
import React,{Component,Fragment} from "react"
import XiaojiejieItem from "./XiaojiejieItem"
import "./style.css"
import Axios from "axios"
import "./mock/Mock.js"
import {CSSTransition , TransitionGroup} from 'react-transition-group'
class Xiaojiejie extends Component{
    constructor(props){
       super(props)
        this.state = {
            inputValue :"吉泽明步",
            list:[
                
            ],
            isShow : true
        }
        this.togger = this.togger.bind(this)
    };
  
    //  lall
    render(){
        console.log('父组件的render')
        return (
            <Fragment>

                <div>
                    
                    <label htmlFor="jspang">加入服务：</label>
                    <input
                        ref={(input) =>{this.input = input}}
                    id="jspang" className="input"  value={this.state.inputValue} onChange={this.chanageValue.bind(this)}/><button onClick={this.addValue.bind(this)}>增加服务</button>
                </div>
                
                <ul ref={(ul) => {this.ul = ul}}>
                    
                    <TransitionGroup>
                            {   
                            
                                this.state.list.map((item,index)=>{
                                    return (
                                        <CSSTransition
                                            timeout={1000}
                                            classNames='boss-text'
                                            unmountOnExit
                                            appear={true}
                                            key={index+item}  
                                        >
                                             <XiaojiejieItem
                                                content={item}
                                                index={index}
                                                delValue = {this.delValue.bind(this)}
                                                key={index+item}
                                            />
                                        </CSSTransition>  
                                       
                                    )
                                })
                                
                        }
                    </TransitionGroup>
                   
                </ul>


                <CSSTransition
                    in={this.state.isShow}
                    timeout={1000}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div >齐天大圣来也</div>
                </CSSTransition>
                
                <div><button onClick={this.togger}>Togger</button></div>
            </Fragment>                
        )
    };
    //改动动画
    togger(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    chanageValue(){
    
        this.setState({
            inputValue:this.input.value
        })
    };
    addValue(){
       this.setState({
            list:[...this.state.list,this.state.inputValue]
       })
      
    };
 
    delValue(i){
        let list = this.state.list
        list.splice(i,1)
        this.setState({
            list:list
        })
       
    };
   
    componentDidMount(){
        Axios.get('/test')
        .then((res) => {
        
            this.setState({
                list:res.data.list
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }


}
export default Xiaojiejie