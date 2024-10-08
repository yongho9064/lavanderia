import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Item {
  id: number
  name: string
  description: string
  price: number
  city: string
  region: string
  subregion?: string // 선택적 속성
  imgUrl: string
}

const GoogleMaps = () => {
  const [list, setList] = useState('')
  const [trades, setTrades] = useState<Item[]>([])
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY // 발급받은 Google API 키

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const getLocation = async () => {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&language=ko&key=${API_KEY}`,
          )
          // filter 확인용!
          const data = response.data
          // 렌더링 주소 확인용!
          const location = response.data.results[3].formatted_address
          console.log(data)
          console.log(location, 'asdasd')
          const usdTradeResponse = await axios.get('/mock/usdTrade.json')
          const usdData = usdTradeResponse.data
          const filteredData = usdData.filter((value: any) => {
            return (
              value.city.trim() ===
              data.results[0].address_components[2].long_name.trim()
            )
          })

          console.log(filteredData, 'filter')
          setTrades(filteredData)
          setList(location)
        } catch (e) {
          console.log(e)
        }
      }
      getLocation()
    })
  }, [])

  return (
    <div className="m-auto max-w-6xl p-5">
      {list}
      {trades.map((value) =>
        trades ? (
          <p>{value.city}주소 맞다 새끼야</p>
        ) : (
          <p>123 주소 틀리잖아 새끼야</p>
        ),
      )}
      <h1>사용자 위치 기반 주소 정보</h1>
    </div>
  )
}

export default GoogleMaps
