import React from 'react';
import { useLocation , Link} from 'react-router-dom';
import Conversion from '../Conversion'

function Index(){
    const {state}  = useLocation();
    
    return <div className='container'>
        <div className="row">
            <div className="col mb-5 d-flex justify-content-between align-items-center" >
                <h2 className='text-white'>Conversion Info</h2>
                <Link className="btn btn-info" to="/">Back to home</Link>
            </div>
        </div>
        <div className="row">
           
           {state && state.map((conversion, index)=>  <Conversion key={index} data={conversion}/>)}
          
        </div>
    </div>
}

export default Index;