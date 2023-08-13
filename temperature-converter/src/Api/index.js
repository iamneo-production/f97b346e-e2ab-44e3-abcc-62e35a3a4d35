export const convertpost = async(value, unit) =>{
     let formula;
     let info ;
     if(unit === 'F'){
        formula = '(Celsius * 9/5) + 32';
        info = 'Celsius to Fahrenheit'

     }else if(unit === 'C'){
      formula = '(Fahrenheit-32) * 5/9';
      info = 'Fahrenheit to Celsius'
     }

        
       await fetch('https://ide-bcfbefcdfbfaaacdfdaceeebddadf.project.examly.io/proxy/8080/converter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({formula: formula, units: value, unittype: unit, info}),
      })
}

export const allposts = async() =>{     
   return  await fetch('https://ide-bcfbefcdfbfaaacdfdaceeebddadf.project.examly.io/proxy/8080/converter').then(res=>res.json()).then(data=> data)
  }

 