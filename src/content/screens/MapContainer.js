import {
    MapContainer, TileLayer, GeoJSON
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react'
import shop from '../geojson/shop.json'
import { customPopup } from './Functions'


import CheckinComponent from './Forms/CheckinComponent';

const MapComponent = () => {
    const [map, setMap] = React.useState();
    const [data, setData] = React.useState()
    
    const onResult = (feature, layer) => {
        layer.bindPopup(customPopup(feature));
        layer.on({
            click: (function(ev){
                const address = feature.properties["addr:street"] + feature.properties["addr:housenumber"] ? feature.properties["addr:housenumber"] : '';
                const id = feature.id
                const name = feature.properties.name

                var _id = ""
                for (var i = 0; i < id.length; i++) {
                    if (id[i] >= '0' && id[i] <= '9') _id += id[i]
                }
                setData({address, _id, name})
            }).bind(this)
          })
        
    }
    return (
        <div>
            <MapContainer
            style={{
                height: "100vh",
                width: "100%",
                backgroundColor: 'white',
                position: 'absolute',
                zIndex: 0,
            }}
            ref={setMap}
            center={{
                lat: 62.01671935259849,
                lng: 129.704032757926,
            }}
            zoom={16}
            minZoom={15}
            maxZoom={21}
            zoomControl={false}
            >
            <TileLayer
                maxZoom={21}
                attribution='copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}@2x.png?key=e65VFhNaAEo0l5tGguVF"
            />
            <GeoJSON 
                data={shop} 
                key={shop} 
                onEachFeature={onResult}
            />
        </MapContainer>
            <CheckinComponent
                bruh='kekw'
                data={data}
                photo={null}
            />

        </div>
        
    )
};

export default MapComponent;