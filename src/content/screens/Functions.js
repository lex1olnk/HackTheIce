import shop from '../geojson/shop.json'
import { useDispatch, useSelector } from 'react-redux';
import { setObject } from '../store/tasks';

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


  export const customPopup = (feature) => {
    const address = feature.properties["addr:street"] + feature.properties["addr:housenumber"] ? feature.properties["addr:housenumber"] : '';
    const id = feature.properties.id
    const name = feature.properties.name
    return (
     `<div style="border-radius: 2px; height: 100%; margin: auto; font-size: 12px; display: flex; flex-direction: column; justify-content: space-between; align-items: center">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div>
              Информация о магазине
            </div>
            <div style="width: 300px;">
              <div style="display: flex; flex-direction: row; justify-content: space-between; margin: 5px 0px">
                  <div>Название предприятия: </div><div>${feature.properties.name}</div>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: space-between; margin: 5px 0px">
                  <div>
                    Местоположение: 
                  </div>
                  <div>
                    ${address}
                  </div>
              </div>
            </div>
            <div>
            </div>
            <div>
              <button 
                class="popupButton"
                id="popupButton1"
                disabled
                onclick="document.getElementById('checkIn').style.visibility= 'visible'"
              >
                Check-in
              </button>
              <button 
                class="popupButton"
                id="popupButton2"
                disabled
                onclick="document.getElementById('tableComponent').style.visibility= 'visible'"
              >
                Table
              </button>
            </div>
        </div>
      </div>`
    )
}

export const buttonsCheck = (level) => {
  if (level > 0) {
    window.document.getElementById('popupButton1').disabled = false;
    window.document.getElementById('popupButton2').disabled = false;
  }
  if (level == 0) {
      window.document.getElementById('popupButton1').disabled = false;
      window.document.getElementById('popupButton2').disabled = true;
  }
  if (level == -1) {
      window.document.getElementById('popupButton1').disabled = true;
      window.document.getElementById('popupButton2').disabled = true;
  }
}

