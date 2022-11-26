import React from 'react'
import { Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getDatabase, child, get, ref, onValue } from "firebase/database";
import { app } from './firebaseConfig'

const styles = {
    block: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        zIndex: 4,
        padding: 25,
        background: "rgb(255, 255, 255, 95%",
        transform: "translate(-50%, -50%)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}

const TableComponent = (props) => {
    const [data, setData] = React.useState(null)
    const database = getDatabase(app);
    var rows = null
    console.log(data)
    if (props.data && !data) {
        onValue(ref(database, '/shops/' + props.data._id +'/checkIns'), (snapshot) => {
            if (snapshot.val()) {
                setData(snapshot.val())
                console.log(snapshot.val())
            }
            // ...
        });
    }
   
    return (
        <div id="tableComponent" style={styles.block}>
            <div>
                Таблица Check-in-ов
            </div>
            <div>
                { data ? 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>UserId</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">IsNegative</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {Object.keys(data).map((row) => (
                            <TableRow
                            key={row}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row}
                            </TableCell>
                            <TableCell align="right">{data[row].date}</TableCell>
                            <TableCell align="right">{data[row].isNegative ? 'true' : 'false'}</TableCell>
                            <TableCell align="right">{data[row].isNegative 
                                ?   <Button onClick={() => {
                                        window.document.getElementById('checkInInput').style.visibility = "visible"
                                }}> 
                                        Open
                                    </Button>
                                : ''}
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                :""
                }
            </div>
            <Button onClick={() => {
                window.document.getElementById('tableComponent').style.visibility = 'hidden'
                setData(null)
            }}>
                Close
            </Button>
        </div>
    )
}

export default TableComponent;