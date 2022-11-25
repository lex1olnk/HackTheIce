import React, { useState } from 'react'
import { TextField, Button, Input, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux';
import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref } from "firebase/storage";
import randomstring from "randomstring"
import { writeCommData } from "./WriteCommData"
import { app } from './firebaseConfig'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const styles = {
    form: {
        color: 'black',
        fontSize: "20px",
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "390px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(255,255,255, 0.8)",
        borderRadius: "10px",
        zIndex: 4,
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
    },
    field: {
        backgroundColor: "#fff",
        width: "360px",
        margin: "12px"
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: "360px",
        justifyContent: 'space-between',
        marginTop: '6px'
    }
}

// Get the default bucket from a custom firebase.app.App
const storage1 = getStorage(app);



const CheckinComponent = props => {
    const pwd = randomstring.generate()
    const [comm, setComm] = useState("")
    const [file, setFile] = useState("");
    const [isNegative, setNegative] = useState(false)
    const [pressed, setPressed] = useState(false)
    const number = useSelector((state) => state.data.number);
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const storage = getStorage(app, "gs://hacktheice-44bd8.appspot.com");

    const PhotoUpload = (file, filename) => {
        console.log(filename)
        
        if (!file) {
            alert("Please upload an image first!");
        } else {
            const imagesRef = ref(storage, filename);
            const spaceRef = ref(imagesRef, filename);
            uploadBytes(imagesRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                console.log(imagesRef)
                setPressed(false)
                document.getElementById('checkIn').style.visibility= 'hidden'
            });
        }
        return true  
    };

    const isNegativeContent = () => {
        return(
            <div>
                <TextField 
                    style={styles.field} 
                    label="Комментарий" 
                    variant="outlined" 
                    rows="3"
                    onChange={(txt) => { setComm(txt.target.value) }}
                />
                <Input 
                    type="file" 
                    onChange={handleChange} 
                    accept="image/*"
                />
            </div>
        )
    }

    console.log(props, number)
    return (
        <div style={styles.form} id='checkIn'>
            {(pressed)  ? <CircularProgress /> : ''}
            <p>Check in</p>
            
            <TextField 
                style={styles.field} 
                label={props.data ? props.data.name : 'undefined'} 
                variant="outlined" 
                disabled="true"
            />
            {(isNegative) 
                ? isNegativeContent()
                : ""
            }
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Способ оплаты</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel 
                        value="paper" 
                        control={<Radio />} 
                        label="Наличным" 
                        onChange={() => setNegative(false)}
                    />
                    <FormControlLabel 
                        value="card" 
                        control={<Radio />} 
                        label="Бесконтактным" 
                        onChange={() => setNegative(false)}
                    />
                    <FormControlLabel 
                        value="mobile" 
                        control={<Radio />} 
                        label="Мобильным банком" 
                        onChange={() => setNegative(true)}
                    />

                </RadioGroup>
            </FormControl>
            <div style={styles.buttons}>
                <Button 
                    variant="contained"
                    
                    onClick={() => {
                        PhotoUpload(file, pwd)
                        setPressed(writeCommData(props.data._id, number, comm, pwd, isNegative))
                    }
                }
                >
                    Принять
                </Button>
                <Button 
                    variant="contained"
                    onClick={() => {
                        document.getElementById('checkIn').style.visibility= 'hidden'
                    }}
                >Отмена</Button>
            </div>
        </div>
    )
}

export default CheckinComponent;