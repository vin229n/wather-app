const geocode = require('./utils/geocode')
const forecast = require('./utils/forcast')

const address = process.argv[2]

if(!address)
    console.log('Please provide the location')
else{
    geocode(process.argv[2],(error,{latitude,longitude,location})=>{
        if(error)
            return console.log('Error:',error)
        else{
            forecast(latitude,longitude,(error,forecastdata) => {
                if(error)
                    return console.log('Error: ',error)
                else{
                    console.log(location)
                    console.log(forecastdata)
                }
            })
        }
    })  
}


