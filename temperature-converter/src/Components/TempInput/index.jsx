import React from 'react'
import {convertpost} from '../../Api'
function Index(){
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState('');
   const [tempUnitF, setTempunitF] = React.useState(true);
   const [tempUnit,setTempUnit] = React.useState('')
   const [displayTemp, setDisplaytemp] = React.useState(0);
   
// input value update
const handleChange = (e)=>{
    let inputValue  = e.target.value;
    if( inputValue === ''){
      setError('Can\'t be empty');
      setValue('');
      return;
    }
    if(!Number(inputValue)){
      setError('Enter numeric unit value');
      setValue('');
      return;
    }
    setValue(inputValue);
}

const toggleUnits = ()=>{
  setTempunitF(!tempUnitF);
  setValue('')
  setDisplaytemp(0);
}

const handleUnits = ()=>{
  let unitsF;
  
  if(value.length <= 0){
    setError('Enter a unit value');
    
  }
  if(tempUnitF && value.length > 0 ){
     unitsF  = (value*9/5) + 32;
     setTempUnit('F')
  }else if(!tempUnitF && value.length > 0){
      unitsF = (value-32) * 5/9 ;
      setTempUnit('C')
      }else{
        unitsF = 0;
      }
  setDisplaytemp(Number(unitsF).toFixed());
  console.log(unitsF)
}

React.useEffect(()=>{
  
  if(displayTemp && value.length > 0 ){
    convertpost(displayTemp, tempUnit)
  }
},[displayTemp])


  return <>
  <div className="input_container container mb-5">
      <div className="mb-3 col-12">
        <label htmlFor="temperatureValue" className='text-white fw-thin label_text'>Temperature in <i>{tempUnitF?`Celceius`: `Fahrenheit`}</i></label>
        <input type="text" id="temperatureValue" className="form-control" placeholder='Enter a value' value={value} onChange={handleChange} onBlur={handleChange} />
        <div className={error && value=== '' ? `alert alert-danger mt-2`: `d-none`}>{error}</div>
      </div>
      <div className="flex justify-content-center">
      <button className="btn btn-primary btn_danger_color" type="button" onClick={handleUnits}>Convert</button>
      <button className="btn btn-primary ms-2 btn_danger_color" type="button" onClick={toggleUnits}>Toggle</button>
      </div>
  </div>
   <div className="result_container text-center">
    <p className='text-white'>Temperature in <i>{tempUnitF ? `Fahrenheit`: `Celceius`}</i></p>
    <h1 className="result_value">
      {displayTemp} <span><sup>{tempUnitF ?`°F`:`°C`}</sup></span>
    </h1>
   </div>
  </>
}
export default Index;

// In general, a safe ambient temperature range is between 60 degrees and 75 degrees Fahrenheit or 15 degrees and 24 degrees Celsius.