import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState('SP.POP.TOTL')

  useEffect(() => {
    axios
      .get(
        `https://data.nasdaq.com/api/v3/datatables/WB/DATA?series_id=${data}&country_code=CUB&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => console.log(res.data))
  }, [])

  return <div className='App'>YO</div>
}

export default App
