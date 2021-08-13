import { react, Component } from "react";
import Stack from "./Stack.js";
const url="https://jsonplaceholder.typicode.com/users"
class Data extends Component{
    constructor(){
        super()
        this.state={
            stock:''
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({stock:data}))
        console.log("aksdj>>>", this.state.stock)
    }
    render(){
        return(
            <>
            <Stack remedy={this.state.stock} />
            </>
        )
    }
}
export default Data;