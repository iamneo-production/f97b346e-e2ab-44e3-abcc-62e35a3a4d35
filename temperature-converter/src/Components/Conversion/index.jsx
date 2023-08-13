import React from 'react';


function Index({data}){

    return   <div className="col-md-6 col-sm-12 mb-3">
        <ul className='list-group'>
                <li className="list-group-item">Info: {data.info} </li>
                <li className="list-group-item">Units: {data.units} <sup>{data.unittype}°</sup></li>
                <li className="list-group-item">Formula: {data.formula}</li>
              </ul>
            </div>
}

export default Index;