import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={CategoryMenOrWomen}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="category" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const CategoryMenOrWomen = [
  { label: "men's T-shirt "},
  { label: " men's shirt formal" },
  { label: "men's shirt casual" },
  { label: "men's sweatshirt"},
  { label: "men's jacket"},
  { label: "men's blazer "},
  {label:"men's coat"},
  {label:"men's jeans"},
  {label:"men's trouser casual"},
  {label:"men's trouser formel"},
  {label:"men's shorts"},
  {label:"men's track pants and joggers"},
  {label:"women's kurtas and suits"},
  {label:"sarees"},
  {label:"plazzo"},
  {label:"dresses"},
  {label:"women's tops"},
  {label:"women's t-shirt"},
  {label:"Women's jeans"},
  {label:"women's trousers"},
  {label:"women's shorts"},
  {label:"skirts"},
  {label:"women's co-ords"},
  {label:"playsuits"},
  {label:"jumpsuits"},
  {label:"shrugs"},
  {label:"women's sweaters"},
  {label:"women's sweatshirts"},
  {label:"women's jackets"},
  {label:"women's coats"},
  {label:"women's blazers"}
];
