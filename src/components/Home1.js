import React, {Component} from 'react'
import {Link} from 'react-router-dom';
const url="https://jsonplaceholder.typicode.com/users"
const stackurl="https://wuiki.herokuapp.com/stack"
class Home extends Component{
    constructor(){
        super()
        this.state={
            stock:''
        }
    }
   
    handleSubmit = (id) => {
        console.log("kjhd>>>",this.state.stock.filter(x=>x.id === id))
        fetch(stackurl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.stock.filter(x=>x.id === id))
                
            })
            .then(this.props.history.push('/stack'))
    }
    componentDidMount(){
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({stock:data}))
        
    }
    stocks = (data)=>{
        if(data){
             return(
                    data.map((item)=>{
                          
                        return(
                                <React.Fragment>
                                  <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name} </td>
                                        <td>{item.username}</td>
                                        <td><Link to={'/view/' + item.id}><button onClick={() => this.handleSubmit(item.id)} style={{ backgroundColor: 'blue', color: 'white', borderRadius: '10px', borderStyle: 'none', alignItems: 'center', cursor:'pointer' }}>save{item.id}</button></Link> </td>
                                        <td>{item.email}</td>
                                    </tr>
                                </React.Fragment>
                          )
                    })
             )
             
        }else{
              return(
                  <img src='/images/loader.gif' style={{height:'320px', width:'420px',marginTop:'2%'}} />
                  
              )
        }
  }
    render(){
        return(
            <>
             <div className="heading">
                <div className="left">
                    <p style={{ fontFamily: "cursive", fontSize: "20px", color: "blue", marginTop: '0px', marginLeft: '10px' }}>Quikie</p>
                    <p style={{ fontFamily: "cursive", fontSize: "10px", color: "black", position: 'relative', left: '50px', bottom: '30px' }}>Apps</p>
                </div>
            </div>
            <div className="card col-sm-3">
                <span style={{ color: 'black', position: 'relative', left: '10px', top: '0px' }}>GOOGL</span> <span><img style={{ height: '50px', width: '50px', position: 'relative', top: '20px', left: '100px' }} src="/images/GOOGL.png" /></span>
                <p style={{ position: 'relative', top: '-10px', left: '30px', fontSize: '60px' }}>1515 USD</p>
            </div>
            <div className="card col-sm-3">
                <span style={{ color: 'black', position: 'relative', left: '10px', top: '0px' }}>FB</span> <span><img style={{ height: '50px', width: '50px', position: 'relative', top: '20px', left: '100px' }} src="/images/fb.png" /></span>
                <p style={{ position: 'relative', top: '-10px', left: '30px', fontSize: '60px' }}>266 USD</p>
            </div>
            <div className="card col-sm-3">
                <span style={{ color: 'black', position: 'relative', left: '10px', top: '0px' }}>AMZN</span> <span><img style={{ height: '50px', width: '50px', position: 'relative', top: '20px', left: '100px' }} src="/images/AMZN.svg" /></span>
                <p style={{ position: 'relative', top: '-10px', left: '30px', fontSize: '60px' }}>3116 USD</p>
            </div>
            <div className="table">
                <table style={{ float: 'left', width: '100%' }} className="table table-responsive">
                    <caption style={{ width: '100%' }}>

                        <p style={{ width: '100%', height: '40px' }}>Stack Details  <input style={{ marginLeft: '200px', backgroundColor: '#f4f9f9', width: '30%', borderStyle: 'none', height: '30px' }} type="text" placeholder="🔍Search" /></p>
                    </caption>

                    <thead>
                    <tr>
                        
                        <th >COMPANY NAME</th>
                        <th style={{ marginLeft: '30px' }}>SYMBOL</th>
                        <th style={{ marginLeft: '30px' }}>MARKET CAP</th>
                        <th style={{ marginLeft: '30px' }}></th>
                        <th style={{ marginLeft: '30px' }}>CURRENT PRICE</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.stocks(this.state.stock)}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
export default Home;