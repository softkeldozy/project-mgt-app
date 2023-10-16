import React from 'react';
import AddClientModal from "../../components/addClientModel/AddClientModal";
import Projects from "../../components/projects/Projects";
import Clients from "../../components/clients/Clients";
import AddProductModal from '../../components/addProductModal/AddProductModal'


const HomePage = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProductModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}

export default HomePage