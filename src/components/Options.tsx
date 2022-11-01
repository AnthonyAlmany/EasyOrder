import React, {useState} from 'react'
import '../styles/options.css'
import { v4 as uuidv4 } from 'uuid';

import { Button, Popover, Modal, Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { newItemInput, optionsType } from '../types';

const theme = createTheme({
  palette:{
    primary: {
      main: '#0E2489',
    }  
  }
})

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

 
function Options({inventory, setInventory, supplierName, supplierDetails, deleteToggle, setDeleteToggle, setSearch}: optionsType) {

  // Handle Add item feature
  const [input, setInput] = useState<newItemInput>({name:'',pack:''})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput( (prev) => ({ ...prev, [event.target.name]: event.target.value}))
  }
  const addNewItem = () => {
    setInventory([...inventory, {name: input.name, pack:input.pack, type:'', qty:0, id:uuidv4()}]);
    setInput({name:'',pack:''})
  }

  // Handle Search feature


  // Display Modal Infos
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Display bin icons
  const showDeleteIcons = () =>{
    setDeleteToggle((prev) => !prev)
  } 

  // Add Item Popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {setAnchorEl(event.currentTarget)};
  const handleCloseAddItem = () => {setAnchorEl(null)};
  const opened = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  
  return (
    <div className='options-container'>
        <p>{supplierName}</p>

        <ThemeProvider theme={theme}>

        <span><Button onClick={handleOpen} color="primary" variant="contained">Infos</Button></span>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
         >
        <Box sx={style}>
          <div className='infos-container'>
            <p>Supplier Name: {supplierName}</p>
            <p>Email: {supplierDetails.emailAddress}</p>
          </div>
        </Box>
        </Modal>

   
        <span><Button aria-describedby={id} variant="contained" onClick={handleClick} color="primary">Add Item</Button></span>
        <Popover
          id={id}
          open={opened}
          anchorEl={anchorEl}
          onClose={handleCloseAddItem}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
          }}>
           <Box
              component="form"
              sx={{'& > :not(style)': { m: 2, width: '18ch' }, }}
              noValidate
              autoComplete="off"
              display="flex"
              alignItems= "centre"        
            >
              <TextField id="outlined-basic" label="name:" variant="outlined" name="name"  value={input.name} onChange={handleChange}/>
              <TextField id="outlined-basic" label="pack: (btl, box...)" variant="outlined" name="pack" value={input.pack}    onChange={handleChange}/>
              <Button id="save-added-item" color="primary" variant="contained" disabled={input.name === '' || input.pack === ''} onClick={addNewItem}>Save</Button>
            </Box>
        </Popover>


        <span><Button color={!deleteToggle ? "primary" : "secondary"} variant="contained" onClick={showDeleteIcons} >Delete Item</Button></span>
       

        <TextField color="primary" id="standard-basic" label="Search Item" variant="standard" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
       
        </ThemeProvider>
      
        
    </div>
  )
}

export default Options

