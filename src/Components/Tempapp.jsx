import React, { useEffect, useState } from 'react';
import './Tempapp.css';

import SunCloud from './suncloud.png';
const Tempapp = () => {

    const [city, setCity] = useState('Indore');

    const [tempData, setTempData] = useState({
        temp: '',
        mintemp: '',
        maxtemp: ''
    });


    useEffect(() => {

        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2eddac6931aac6a71eb62a5c3e08e6e5`).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     setTempData({
        //         temp: data.main.temp,
        //         mintemp: data.main.temp_min,
        //         maxtemp: data.main.temp_max
        //     })
        // })

       
        let fetchData =  async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2eddac6931aac6a71eb62a5c3e08e6e5`;
            const fdata = await fetch(url);
            const data = await fdata.json();
            setTempData({
                temp: data.main.temp,
                mintemp: data.main.temp_min,
                maxtemp: data.main.temp_max
            })
        }

        fetchData();
               
    }, [city]);
    
    

    return (
        <>

            <div>
                <div className='container'>
                    <div>
                        <input type="search" className='inputField' onChange={(event) => { setCity(event.target.value) }} placeholder='Enter City...' />
                    </div>

                    {!city ? <h2>Data Not Found</h2> :
                        <>
                            <div>
                                <img src={SunCloud} alt="sun" />
                            </div>
                            <div className='tempcity'>
                                <h1 style={{ textTransform: 'capitalize' }}><i className="fa-solid fa-street-view"></i> {city}</h1>
                            </div>

                            <div className='tempdata'>
                                <h2>{tempData.temp}°Cel</h2>
                                <p>Min: {tempData.mintemp}°Cel | Max: {tempData.maxtemp}°Cel</p>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    );
}

export default Tempapp;
