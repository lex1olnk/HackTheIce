import SigninComponent from './Forms/SigninComponent';
import { IconButton } from '@mui/material';
import * as React from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import MenuComponent from './MenuComponent'
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo.png'; // gives image path

// Be sure to include styles at some point, probably during your bootstraping
import '../styles/react-sidenav.css';
const drawerWidth = 350;



const MenuAnim = (props) => {
    const [visible, setVisible] = React.useState(false)
    const authorized = useSelector((state) => state.data.authorized);
    return (
        <div>
            <div>
                <img 
                    className={visible ? "sideBarOn" : "sideBarOff"}
                    src={logo} 
                    alt="this is car image" 
                    style={{
                        backgroundColor: 'transparent',
                        position: "absolute",
                        zIndex: 3,
                        width: 150,
                        height: 100,
                        bottom: "20px",
                        left: "100px",
                    }}
                />
            </div>
            <IconButton 
                onClick={()=>{
                    setVisible(!visible)
                    console.log(visible)
                }}
                style={{
                    position: 'absolute',
                    left: 350,
                    top: 10,
                    width: "64px",
                    height: "64px",
                    background: "#fff",
                    zIndex: 1,
                }}
            >
                <ArticleIcon sx={{ fontSize: 30}}/>
            </IconButton>
            <div 
                className={visible ? "sideBarOn" : "sideBarOff"}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: "100vh",
                    width: "350px",
                    backgroundColor: "#F1F2FF",
                    zIndex: 1,
                }}
            >
                <div style={{height: "100px"}}>
                </div>
                <div>
                    
                    {authorized 
                        ? <MenuComponent db={props.db}/>
                        : <SigninComponent db={props.db}/>
                    }
                </div>
                <div>
                
                </div>
            </div>
        </div>
        
    )
}

export default MenuAnim;