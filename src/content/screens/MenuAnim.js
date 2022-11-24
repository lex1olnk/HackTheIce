
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '../styles/react-sidenav.css';

const MenuAnim = () => {
    return (
    <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
        style={{zIndex: 1}}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <div style={{height: "60px"}}>
                
            </div>
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    <div style={{margin: "0px 40px"}}>
                        Home
                    </div>
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    <div style={{margin: "0px 40px"}}>
                        Charts
                    </div>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )
}

export default MenuAnim;