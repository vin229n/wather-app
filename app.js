const request = require('request')

const url = "https://api.darksky.net/forecast/522bb5225180bbf1a93af4cb87c980c8/37.8267,-122.4233"

request({ url : url},(error,response) =>{
    const data = JSON.parse(response.body)
    console.log(data.currently)
})