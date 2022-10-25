import { useEffect } from "react";
import "./App.css";
import RegisterModal from "./Components/Modal";
import ConfirmDeleteModal from "./Components/ModalConfirmDelete";
import Task from "./Components/Task";

import { useMainContext } from "./Providers";
import { ButtonNew } from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    getToDos();
  }, []);

  const {
    toDoList,
    getToDos,
    displayModal,
    setDisplayModal,
    displayConfirmDeleteModal,
    setIsEditing,
  } = useMainContext();

  function handleButtonNew() {
    setIsEditing(false);
    setDisplayModal(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ButtonNew onClick={() => handleButtonNew()}>New To-Do</ButtonNew>
        {toDoList.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </header>
      {displayModal && <RegisterModal />}
      {displayConfirmDeleteModal && <ConfirmDeleteModal />}
      <ToastContainer />
    </div>
  );
}

export default App;
