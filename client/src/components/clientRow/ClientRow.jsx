import { FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../../mutations/clientMutations.js';
import { GET_CLIENTS } from '../queries/clientQueries.js';
import { GET_PROJECTS } from '../queries/projectQueries.js';
import { Modal, Button } from 'react-bootstrap';

const ClientRow = ({ client }) => {
  // modal pop up
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    //* variables was passed in as a second parameter so we can pass in the id of the client about to be deleted
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    //* fetching back the client data after delete so the table displays the current client details without making a whole new request.
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: { clients: clients.filter(client => client.id !== deleteClient.id) }
    //   });
    // }
  });
  return (

    <>
      <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={handleShow}>
            <FaTrash />
          </button>
        </td>
      </tr>

      <Modal centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteClient}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClientRow