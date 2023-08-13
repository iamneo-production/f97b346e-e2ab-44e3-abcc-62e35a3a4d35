import {React} from 'react'
import TempInput from '../../Components/TempInput'
import Header from '../../Components/Header'

function Index(){
    return(
        <div className='container ' style={{width: '80%'}}>
            <div className="row"> 
            <h1 className='mb-3 fw-bolder text-white main_title'> Temperature Converter</h1>
            <Header/>
            <TempInput/>
            </div>
        </div>
    )
}

export default Index;