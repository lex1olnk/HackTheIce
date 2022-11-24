import {
    MapContainer, TileLayer, GeoJSON
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react'
import shop from '../geojson/shop.json'
import { customPopup } from './Functions'

const onClick = (e) => {
    e.sourceTarget.openPopup()
}

const onResult = (feature, layer) => {
    layer.bindPopup(customPopup(feature));
}

const MapComponent = () => {
    const [map, setMap] = React.useState();
    return (
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
    )
};

export default MapComponent;