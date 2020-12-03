
import React,{Component,Fragment} from "react"
class Xiaojiejie extends Component{
    constructor(props){
       super(props)
        this.state = {
            inputValue :"吉泽明步",
            list:[
                '口爆',
                '胸推'
            ]
        }
    };
  

    render(){
        return (
            <Fragment>
                <div> <input  value={this.state.inputValue} onChange={this.chanageValue.bind(this)}/><button>增加服务</button></div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </Fragment>                
        )
    };
    chanageValue(e){
        console.log(e)
        this.setState({
            inputValue:e.target.value
        })
    }


}
export default Xiaojiejie