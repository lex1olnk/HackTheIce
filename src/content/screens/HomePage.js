import { Provider } from 'react-redux';
import { useMediaQuery } from 'react-responsive'

import SearchComponent from './SearchComponent';
import MapComponent from './MapContainer';
import MenuAnim from './MenuAnim';

import store from '../store';
import CheckinComponent from './Forms/CheckinComponent';

const HomePage = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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