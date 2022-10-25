import { createContext, useContext, useState } from "react";
import {
  IMainProviderProps,
  IProviderData,
  ITask,
} from "../interfaces/interfaces";
import api from "../services/api";
import { toast } from "react-toastify";

const MainContext = createContext<IProviderData>({} as IProviderData);

const useMainContext = () => {
  const context = useContext(MainContext);

  return context;
};

const MainProvider = ({ children }: IMainProviderProps) => {
  const [toDoList, setToDoList] = useState([] as Array<ITask>);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayConfirmDeleteModal, setDisplayConfirmDeleteModal] =
    useState(false);
  const [currentTask, setCurrentTask] = useState({} as ITask);
  const [isEditing, setIsEditing] = useState(false);

  function getToDos() {
    api
      .get("/toDos")
      .then((response) => {
        setToDoList(response.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something wrong happend!");
      });
  }

  return (
    <MainContext.Provider
      value={{
        toDoList,
        setToDoList,
        getToDos,
        displayModal,
        setDisplayModal,
        displayConfirmDeleteModal,
        setDisplayConfirmDeleteModal,
        currentTask,
        setCurrentTask,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, useMainContext };
