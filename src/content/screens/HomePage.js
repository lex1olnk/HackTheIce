import { Provider } from 'react-redux';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

import SearchComponent from './SearchComponent';
import MapComponent from './MapContainer';
import MenuAnim from './MenuAnim';

import store from '../store';
import { useEffect } from 'react';


const HomePage = () => {
    return (
        <div>
            <Provider store={ store }>
                <SearchComponent />
                <MenuAnim/>
                <MapComponent />
            </Provider>
        </div>
    );
}

export default HomePage;