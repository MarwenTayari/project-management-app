import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BasicModal({ open, setOpen }: Props) {
  interface Project {
    title: string;
    description: string;
    admin_list: string;
    user_list: string;
  }
  const [newProject, setNewProject] = React.useState<Project>({
    title: '',
    description: '',
    admin_list: '',
    user_list: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
    console.log(newProject);
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Adding the project : </h2>
        <form>
          <label>Title : </label>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={newProject.title}
          />
          <br />
          <label> Description : </label>
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={newProject.description}
          />
          <br />
          <label> Admin list : </label>
          <input
            type="text"
            onChange={handleChange}
            name="admin_list"
            value={newProject.admin_list}
          />
          <br />
          <label> Users list </label>
          <input
            type="text"
            onChange={handleChange}
            name="user_list"
            value={newProject.user_list}
          />
        </form>
        <button onClick={() => {}}>Confirm</button>
        <button onClick={() => setOpen(false)}>Close</button>
      </Box>
    </Modal>
  );
}
