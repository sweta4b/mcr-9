import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display:'flex',
  flexDirection:'column',
  gap:'20px',
  justifyContent:'center',
  p: 4,
};

export default function EditNote({editNote, setEditNote, notes, setNoteData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setEditNote(!editNote);
  const [editedNote, setEditedNote] = React.useState(notes)

  const handleClick = () => {
    setNoteData([editedNote])
    handleClose()
  }

  return (
    <div>
     
      <Modal
        open={editNote}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Note
          </Typography>
        
                    <textarea
                    style={{
                        width:'300px',
                        borderRadius: '5px',
                        border: '0.5px solid grey',
                        margin:'auto',
                        display:'block',
                        padding:'5px',
                        marginTop:'20px'
                        
                    }}
                    cols={30}
                    rows={10}
                    value={editedNote}
                    onChange={(event) => setEditedNote(event.target.value)}
                   ></textarea>
                   <Button variant='contained' onClick={handleClick}>Update</Button>
                
             
        </Box>
      </Modal>
    </div>
  );
}
