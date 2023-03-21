import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';

export default function ComboBox({ categoryWomen, updateWomen, flag, updateFlag }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
    onChange={(e,value)=>{
      console.log("selected :",categoryWomen)
      console.log(value)
      updateWomen(value.label)
      updateFlag(true)
    }}
      
      options={CategoryMenOrWomen}
      // inputValue={option=>option.label}
      renderOption={
        (props, option) => <Box component="li" key={option.label}  style={{ display: "flex" }} {...props}>
          {console.log(option.label)}
          <div style={{ backgroundColor:(option.type==="M"?"#DFE9F5":"#eec4dc"),textAlign:"center",marginRight:"5%",width:"10%" }} >{option.type}</div>
          <div>{option.show}</div>
        </Box>}
      // getOptionLabel={option=>option.label}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="category" />}
    />
  );
}


const CategoryMenOrWomen = [
  {
    label: "men's T-shirt ",
    show:"T-shirt",
    type: "M"
  },
  {
    label: "shirt formal",
    show:"shirt formal",
    type: "M"
  },
  {
    label: "shirt casual",
    show:"shirt casual",
    type: "M"
  },
  {
    label: "Sweatshirt",
    show:"Sweatshirt",
    type: "M"
  },
  {
    label: "jacket",
    show:"jacket",
    type: "M"
  },
  {
    label: "blazer",
    show:"blazer",
    type: "M"
  },
  {
    label: "coat",
    show:"coat",
    type: "M"
  },
  {
    label: "Jeans",
    show:"Jeans",
    type: "M"
  },
  {
    label: "Trouser casual",
    show:"Trouser casual",
    type: "M"
  },
  {
    label: "Trouser formal",
    show:"rouser formal",
    type: "M"
  },
  {
    label:"shorts",
    show:"shorts",
    type: "M"
  },
  {
    label: "trackpant and jogger",
    show:"trackpant and jogger",
    type: "M"
  },
  {
    label: "women's kurtas",
    show:"kurtas",
    type: "W"
  },
  {
    label: "sarees",
    show:"sarees",
    type: "W"
  },
  {
    label: "plazzo",
    show:"plazzo",
    type: "W"
  },
  {
    label: "women's tops",
    show:"tops",
    type: "W"
  },
  {
    label: "women's t-shirt",
    show:"t-shirt",
    type: "W"
  },
  {
    label: "women's shirt",
    show:"shirt",
    type: "W"
  },
  {
    label: "women's jeans",
    show:"jeans",
    type: "W"
  },
  {
    label: "women's trouser",
    show:"trouser",
    type: "W"
  },
  {
    label: "women's short",
    show:"short",
    type: "W"
  },
  {
    label: "skirts",
    show:"skirts",
    type: "W"
  },
  {
    label: "shrugs",
    show:"shrugs",
    type: "W"
  },
  {
    label: "women's sweaters",
    show:"sweaters",
    type: "W"
  },
  {
    label: "women's sweatshirts",
    show:"sweatshirts",
    type: "W"
  },
  {
    label: "women's jacket",
    show:"jacket",
    type: "W"
  },
  {
    label: "women's coat",
    show:"jacket",
    type: "W"
  },
  {
    label: "women's blazer",
    show:"blazer",
    type: "W"
  }
];
