import SearchComponent from './SearchComponent';
import MapComponent from './MapContainer';
import MenuComponent from './MenuComponent';
import AuthComponent from './Forms/AuthComponent';

const HomePage = () => {
    return (
        <div>
            <SearchComponent />
            <MenuComponent />
            <MapComponent />
        </div>
    );
}

export default HomePage;