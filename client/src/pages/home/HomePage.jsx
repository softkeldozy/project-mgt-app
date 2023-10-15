import React from 'react';
import AddClientModal from "../../components/addClientModel/AddClientModal";
import Projects from "../../components/projects/Projects";
import Clients from "../../components/clients/Clients";


const HomePage = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}

export default HomePage