import React from 'react'
import { TextField } from '@mui/material'
import { search } from './Functions'
import { findByLabelText } from '@testing-library/react'

const styles = {
  search: {
    position: 'absolute',
    left: 25,
    top: 12.5,
    width: "300px",
    padding: 0,
    fontWeight: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    zIndex: 2,
    outline: "none",

  },
  result: {
    position: 'absolute',
    left: 25,
    top: 70,
    backgroundColor: "transparent",
    width: "300px",
    zIndex: 3,
  },
  resultItem: {
    backgroundColor: "#fff",
    width: "300px",
    height: "50px",
    border: "1px solid #999",
    margin: "1.5px 0px",
    padding: "2px",
    display: "flex",
    fontSize: "14px",
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
}

const SearchComponent = () => {
  const [text, setText] = React.useState("")
  const [items, setItems] = React.useState([]);
  console.log(items)
  console.log(text)
  return (
    <div style={styles.navBar}>
      <TextField 
        style={styles.search} 
        label="Поиск" 
        variant="outlined" 
        onChange={(txt) => 
          {
            setText(txt.target.value)
            setItems(search(txt.target.value))
            console.log('kekw')
          }}
      />
       <div style={styles.result}>
        {items.length !== 0 
          ? items.map(item => 
            <div 
              key={item.id}
              style={styles.resultItem}
            >
              <div>{item.properties.name}</div>
              <div>{item.properties["addr:street"] 
                  ? item.properties["addr:street"] + (item.properties["addr:number"] 
                    ? item.properties["addr:number"] : "")
                  : ""
              }</div>

            </div>
          )
          : ""
        }
        </div>
    </div>

  );
}

export default SearchComponent;