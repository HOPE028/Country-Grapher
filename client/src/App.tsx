import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  interface Data {
    [index: number]: string | number
  }

  const [data, setData] = useState<Data[]>([])

  const [dataField, setDataField] = useState('SP.POP.TOTL')

  useEffect(() => {
    axios
      .get(
        `https://data.nasdaq.com/api/v3/datatables/WB/DATA?series_id=${dataField}&country_code=CUB&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => addData(res.data))
  }, [])

  const addData = (fields: Data[]) => {
    setData(fields)
  }

  return <div className='App'></div>
}

export default App
