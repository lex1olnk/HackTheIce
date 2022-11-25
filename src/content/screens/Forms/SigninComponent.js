import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'
import AuthComponent from './AuthComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthVisible, setAuthorized } from '../../store/tasks';
import { initializeApp } from "firebase/app";
import { getDatabase, child, get, ref, onValue } from "firebase/database";

const styles = {
    form: {
        color: 'black',
        fontSize: "20px",
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "300px",
        height: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: "10px",
        zIndex: 4,
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
        textAlign: 'center',
    },
    field: {
        backgroundColor: "#fff",
        width: "300px",
        height: "40px",
        margin: "12px",
        borderRadius: 5,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: "360px",
        justifyContent: 'space-between',
        marginTop: '6px'
    }
}



const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://hacktheice-44bd8-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const SigninComponent = () => {
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(false)
    const visible = useSelector((state) => state.data.authVisible);
    const dispatch = useDispatch();
    const getUserData = (db, number, password) => {
        const dbRef = ref(db)
        onValue(ref(db, '/users/' + number), (snapshot) => {
            if (snapshot.val() && snapshot.val().number) {
                if (snapshot.val().password === password && snapshot.val().number.toString() === number) {
                    dispatch(setAuthorized(true))
                }
            }
            // ...
          }, {
            onlyOnce: true
          });
    }

    return (
        <div>
            <div style={styles.form} className='auth'>
            <TextField 
                style={styles.field} 
                label="Номер Телефона" 
                variant="outlined" 
                InputLabelProps={{
                    style: {
                      height: 40,
                      lineHeight: "14px",
                    },
                  }}
                inputProps={{ 
                    style: { 
                        height: 40,
                        padding: '0 20px',
                    } 
                }}
                onChange={(txt) => { setNumber(txt.target.value) }}
            />
            <TextField 
                style={styles.field} 
                label="Пароль" 
                variant="outlined" 
                onChange={(txt) => { setPassword(txt.target.value) }}
                InputLabelProps={{
                    style: {
                      height: 40,
                      lineHeight: "14px",
                    },
                  }}
                inputProps={{ 
                    style: { 
                        height: 40,
                        padding: '0 20px',
                    } 
                }}
            />
            <Button 
                variant="contained"
                onClick={() => {
                    console.log(getUserData(database, number, password))
                    console.log(visible)
                }}
            >
                ВОЙТИ
            </Button>

            <p>Нет аккаунта? </p>
            <a href="#"                 
                onClick={() => {
                    dispatch(setAuthVisible(!visible))
                    console.log(visible)
                }}
            >
                Регистрируйтесь!
            </a>
            
            
        </div>
        <AuthComponent visible={visible}/>
        </div>
        
    )
}

export default SigninComponent;