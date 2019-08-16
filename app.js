const geocode = require('./utils/geocode')
const forecast = require('./utils/forcast')

const address = process.argv[2]

if(!address)
    console.log('Please provide the location')
else{
    geocode(process.argv[2],(error,data)=>{
        if(error)
            return console.log('Error:',error)
        else{
            forecast(data.latitude,data.longitude,(error,forecastdata) => {
                if(error)
                    return console.log('Error: ',error)
                else{
                    console.log(data.location)
                    console.log(forecastdata)
                }
            })
        }
    })  
}


