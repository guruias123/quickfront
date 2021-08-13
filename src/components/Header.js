import react from 'react';
import './Home.css'

const Header = () => {
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
                <span style={{ color: 'black', position: 'relative', left: '10px', top: '0px' }}>GOOGL</span> <span><img style={{ height: '50px', width: '50px', position: 'relative', top: '20px', left: '100px' }} src="/images/fb.png" /></span>
                <p style={{ position: 'relative', top: '-10px', left: '30px', fontSize: '60px' }}>266 USD</p>
            </div>
            <div className="card col-sm-3">
                <span style={{ color: 'black', position: 'relative', left: '10px', top: '0px' }}>GOOGL</span> <span><img style={{ height: '50px', width: '50px', position: 'relative', top: '20px', left: '100px' }} src="/images/AMZN.svg" /></span>
                <p style={{ position: 'relative', top: '-10px', left: '30px', fontSize: '60px' }}>3116 USD</p>
            </div>
            <div className="table">
                <table style={{ float: 'left', width: '100%' }}>
                    <caption style={{ width: '100%' }}>

                        <p style={{ width: '100%', height: '40px' }}>Stack Details  <input style={{ marginLeft: '200px', backgroundColor: '#f4f9f9', width: '30%', borderStyle: 'none', height: '30px' }} type="text" placeholder="🔍Search" /></p>
                    </caption>


                    <tr>
                        <th >COMPANY NAME</th>
                        <th style={{ marginLeft: '30px' }}>SYMBOL</th>
                        <th style={{ marginLeft: '30px' }}>MARKET CAP</th>
                        <th style={{ marginLeft: '30px' }}></th>
                        <th style={{ marginLeft: '30px' }}>CURRENT PRICE</th>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Header;