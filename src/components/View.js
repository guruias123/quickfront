import React, {Component} from 'react'
import  {Link} from 'react-router-dom'
import './Home.css'
// const url="https://jsonplaceholder.typicode.com/users/"
const url="https://wuiki.herokuapp.com/stack1"
const url1="https://wuiki.herokuapp.com/stackremove"
class View extends Component {
    constructor(){
        super()
        this.state={
            market:""
        }
    }
    componentDidMount(){
        const ID = this.props.match.params.id
        console.log("kasjdfh>>", this.props.match.params.id)
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({market:data}))
        console.log("alskdjf>>>", this.state.market)
    }
    handle1submit=(ID)=>{
        const myobj={
              id:ID
        } 
        console.log(ID)
        fetch(url1,{
        method:'DELETE',
        headers:{
              'Content-Type':'application/json'
        },
        body:JSON.stringify(myobj)
        
        }) 
           
  }
    
    stocks = (data)=>{
        if(data){
             return(data.map((item)=>{
                          return(
                                <React.Fragment>
                                  <tr>
                                        <td  >{item.id}</td>
                                        <td  >{item.name} </td>
                                        <td  >{item.username}</td>
                                        <td><Link to><button onClick={()=>this.handle1submit(item.id)} style={{ backgroundColor: 'blue', color: 'white', borderRadius: '10px', borderStyle: 'none', alignItems: 'center', cursor:'pointer' }}>delete</button></Link> </td>
                                        <td  >{item.email}</td>
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
                <span style={{ color: 'black', position: 'relative', left: '10px', top: '0px' }}>GOOGL</span> <span><img style={{ height: '50px', width: '50px', position: 'relative', top: '20px', left: '100px' }} src="/images/fb.png" /></span>
                <p style={{ position: 'relative', top: '-10px', left: '30px', fontSize: '60px' }}>266 USD</p>
            </div>
            <div className="card col-sm-3">
                <span style={{ color: 'black', position: 'relative', left: '10px', top: '0px' }}>GOOGL</span> <span><img style={{ height: '50px', width: '50px', position: 'relative', top: '20px', left: '100px' }} src="/images/AMZN.svg" /></span>
                <p style={{ position: 'relative', top: '-10px', left: '30px', fontSize: '60px' }}>3116 USD</p>
            </div>
            
            <div className="table">
                <table style={{ float: 'left', width: '100%', marginTop:"30px" }} className="table table-responsive">
                    

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
                    {this.stocks(this.state.market)}
                    </tbody>
                </table>
            </div>
            <Link to='/'><button style={{backgroundColor:'blue',color:'white',borderRadius:'10px', borderStyle:'none',alignItems:'center',marginTop:'220px'}}>Back</button></Link>

            </>
        )
    }

}

export default View;