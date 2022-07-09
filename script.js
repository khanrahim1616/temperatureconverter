const calculatetemp=()=>{
    
    const numbertemp=document.getElementById('temp').value;
    const tempselected=document.getElementById('temp_diff');
    const  valuetemp=temp_diff.options[tempselected.selectedIndex].value;

    const celtofah=(cel)=>{
        let Fahrenheit=((cel*9/5)+32)
        return Fahrenheit;
    }
   
    const fahtocel=(fehr)=>{
        let celcius=((fehr-32)*5/9)
        return celcius;
    }
   
    let result;

    if(valuetemp=='cel'){
        result=celtofah(numbertemp);
        document.getElementById('resultcontainer').innerHTML =`${result}°F`;
    }else{
        result=fahtocel(numbertemp);
        document.getElementById('resultcontainer').innerHTML =`${result}°C`;
    }

    
}
// calculatetemp()  