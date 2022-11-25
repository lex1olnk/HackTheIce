import shop from '../geojson/shop.json'


export const search = (item) => {
    const result = []
    if (item.length > 0 && result.length < 5) {
      shop.features.map(place => {
          if (place.properties.name) {
            if (place.properties.name.includes(item)) {
              result.push(place)
            }
        }
      })

      }
    return result
  }
  
  export const customPopup = (feature, info) => {
    return (
     `<div style="width: 200px; height: 100%; margin: auto; font-size: 12px; display: flex; flex-direction: column; justify-content: space-between">
        <div style="display: flex; flex-direction: column; justify-content: space-between; margin: 2px 0px">
            <div>
                <b>${feature.properties.name}</b>
            </div>
            <div>
                ${feature.properties["addr:street"]}
            </div>
            <div>
                ${feature.properties["addr:housenumber"]}
            </div>
            <div>
                Кнопочка для репорта
            </div>
        </div>
      </div>`
    )
}