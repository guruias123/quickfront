import { Link } from "react-router-dom"

import './Home.css'
const stackurl="http://localhost:8600/stack"

const Stack= (props) => {

  
    const market = ({ remedy }) => {
        if (remedy) {
            return (
                
                remedy.map((item) => {
                    
                    return (
                        <>
            
                                 
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name} </td>
                                        <td>{item.username}</td>
                                        <td><Link to={'/view/' + item.id}><button onClick={this.handleSubmit}  style={{ backgroundColor: 'blue', color: 'white', borderRadius: '10px', borderStyle: 'none', alignItems: 'center' }}>save</button></Link> </td>
                                        <td>{item.email}</td>
                                    </tr>
                                  


                            
                        </>
                    )
                })
            )
        }
        else {
            return (
                <img src='/images/loader.gif' style={{ height: '320px', width: '420px', marginTop: '2%' }} />

            )
        }
    }
    return (
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
                        {market(props)}
                    </tbody>
                </table>
            </div>
            
        </>
    )

}



export default Stack;