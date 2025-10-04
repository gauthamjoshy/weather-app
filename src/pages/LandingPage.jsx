import React, { useState } from 'react'

function LandingPage() {
    const API_KEY = "51c099ccf47509cf8b8b04c32ab38b47"
    // const city = "London"
    const [city, setCity] = useState({
        name : "",
        data : "" // to store API response
    })

    const fetchWeather = ()=>{
        if(city.name){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`).then((response)=>{
        // console.log(response);
        response.json().then((result)=>{
            console.log(result);
            if(result.cod == 200){
                setCity({...city, data: result})
            }else{
                alert(`Please Enter a Valid city Name...!`)
            }
            
        })
        
    })
    }else{
        alert(`Please Enter a Valid City Name...!`)
    }
    }

    
  return (
    <>
  
        <div style={{backgroundImage:"url('https://www.severe-weather.eu/wp-content/uploads/2023/08/SST_World_Map.png')", width:"100%", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='container-fluid'>
            <div  className="container">
                
                    <h1 className='text-center text-light fw-bolder pt-5'>Weather Now</h1>
                    
                <div className="row p-5">
                    <div className="col-2"></div>
                    <div className="col-8 border shadow rounded-5 d-flex gap-3 justify-content-center align-items-center p-3">
                        <label className='fs-5 fw-bold text-white' htmlFor="">Enter The City Name : </label>
                        <input id='cityName' value={city.name} onChange={(e)=>setCity({...city, name: e.target.value})} type="text" className='form form-control w-50' />
                        <button onClick={fetchWeather} className='btn btn-primary'>Search</button>
                    </div>
                    <div className="col-2"></div>
                </div>
    
                {
                    city.data &&(
                        <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 border shadow rounded-5 p-5 ">
                        <h2 className='text-primary text-center'>City : {city.data? city.data.name : ""}</h2>
                        <h1 className='text-center text-warning fw-bolder'>Temprature : {city.data? city.data.main.feels_like: ""}°C </h1>
                        <h4 className='text-primary-emphasis text-center'>Country : {city.data? city.data.sys.country : ""}</h4>
                        <h4 className='text-primary text-center'>Humidity : {city.data? city.data.main.humidity : ""}%</h4>
                        <h4 className='text-primary text-center'>Wind Speed : {city.data? city.data.wind.speed : ""}m/s</h4>
                        <h4 className='text-info text-center '>{city.data? city.data.weather[0].description : ""}</h4>
                    </div>
                    <div className="col-2"></div>
                </div>
                    )
                }
            </div>
        </div>

    </>
  )
}

export default LandingPage