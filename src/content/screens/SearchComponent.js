import React from 'react'
import { TextField } from '@mui/material'
import { search } from './Functions'
import { findByLabelText } from '@testing-library/react'

const styles = {
  search: {
    position: 'absolute',
    right: 37.5,
    top: 12.5,
    backgroundColor: '#fff',
    borderRadius: 5,
    zIndex: 2,
    outline: "none",

  },
  result: {
    position: 'absolute',
    right: 25,
    top: 70,
    backgroundColor: "#fff",
    width: "250px",
    zIndex: 3,
  },
  resultItem: {
    width: "250px",
    height: "50px",
    border: "1px solid #999",
    display: "flex",
    justifyContent: "center"
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
              <p>{item.properties.name}</p>
              <p>{item.properties["addr:street"] 
                  ? item.properties["addr:street"] + item.properties["addr:number"]
                  : ""
              }</p>

            </div>
          )
          : ""
        }
        </div>
    </div>

  );
}

export default SearchComponent;