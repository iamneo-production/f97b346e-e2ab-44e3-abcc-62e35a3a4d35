import React from 'react'
import {convertpost} from '../../Api'
import { Link } from 'react-router-dom';
function Index(){
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState('');
   const [batch, setBatch] = React.useState([])
   
   
// input value update

const handleChange = (e)=>{
    let inputValue  = e.target.value;
    if( inputValue === ''){
      setError('Can\'t be empty');
      setValue('');
      return;
    }
    // if(!Number(inputValue)){
    //   setError('Enter numeric unit value');
    //   setValue('');
    //   return;
    // }
    setValue(inputValue);
}

const handleUnits = ()=>{

  
  if(value.length <= 0){
    setError('Enter a unit value');
  }
  if(value.length > 0 ){
    let batchinput = []
    let inputValues = value.split(',');
   let filterValues = inputValues.filter(input=> input)
  
    filterValues.forEach(val=>{
        
            if(!Number(val)){
                setError('Enter numeric unit value');
                setValue('');
                return;
              }
           
       
        let unitsF  = (val*9/5) + 32;
        
        batchinput.push(unitsF);
    })
    setBatch(batchinput)
  }
}


React.useEffect(()=>{if(batch.length>0){
    batch.map(b=>{convertpost(b,'F')})
}},[batch])
  return <>
  <div className="input_container container mb-5">
  <Link className="btn btn-info mb-3" to="/">Back to home</Link>
      <div className="mb-3 col-12">
        <p className='text-white'>Please enter ',' sperated numeric values</p>
        <label htmlFor="temperatureValue" className='text-white fw-thin label_text'>Temperature in <i>Celceius to Fahrenheit</i></label>
        <input type="text" id="temperatureValue" className="form-control" placeholder='Enter a value' value={value} onChange={handleChange} onBlur={handleChange} />
        <div className={error && value=== '' ? `alert alert-danger mt-2`: `d-none`}>{error}</div>
      </div>
      <div className="flex justify-content-center">
      <button className="btn btn-primary btn_danger_color" type="button" onClick={handleUnits}>Convert</button>
     
      </div>
  </div>
   <div className="result_container text-center">
    <p className='text-white'>Temperature in <i>Fahrenheit</i></p>
    {batch && batch.map((b,index)=>{
       return <h1 className="text-white fw-bold" style={{'fontSize': '18px'}} key={index}>
    
    {b} <span><sup>°F</sup></span>
  </h1>
    })}
    
   </div>
  </>
}
export default Index;

// In general, a safe ambient temperature range is between 60 degrees and 75 degrees Fahrenheit or 15 degrees and 24 degrees Celsius.