import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'
import { style } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthVisible } from '../../store/tasks';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import axios from 'axios';

const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://hacktheice-44bd8-default-rtdb.europe-west1.firebasedatabase.app/",
  };

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const styles = {
    form: {
        color: 'black',
        fontSize: "20px",
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "350px",
        height: "480px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F1F2FF",
        borderRadius: "10px",
        zIndex: 4,
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
    },
    field: {
        backgroundColor: "#fff",
        width: "300px",
        margin: "12px"
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: "300px",
        justifyContent: 'space-between',
        marginTop: '6px'
    }
}

const writeUserData = (db, level, name, number, password) => {
    set(ref(db, 'users/' + number), {
        level: level,
        number: number,
        name: name,
        password : password
    });
    
}

const AuthComponent = props => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [press, setPress] = useState(true)
    const visible = useSelector((state) => state.data.authVisible);
    const dispatch = useDispatch();

    return (
        <div style={{...styles.form, visibility: visible ? "visible" : "hidden"}} className='auth'>
            <p>Регистрация</p>
            <TextField 
                style={styles.field} 
                label="ФИО" 
                variant="outlined" 
                onChange={(txt) => { setName(txt.target.value) }}
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
            <TextField 
                style={styles.field} 
                label="Номер телефона" 
                variant="outlined" 
                onChange={(txt) => { setNumber(txt.target.value) }}
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
            <div style={styles.buttons}>
                <Button variant="contained"
                    onClick={() => {
                        if (press) {
                            writeUserData(database, 0, name, number, password)
                            dispatch(setAuthVisible(!visible))
                        }
                    }}
                >
                    Принять
                </Button>
                <Button 
                    variant="contained"
                    onClick={() => {dispatch(setAuthVisible(!visible))}}
                >
                    Отмена
                </Button>
            </div>
        </div>
    )
}

export default AuthComponent;