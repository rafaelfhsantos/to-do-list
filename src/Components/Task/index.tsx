import React from "react";
import { ITask } from "../../interfaces/interfaces";
import {
  DivEditButtons,
  DivInputCheckName,
  EditButton,
  InputCheck,
  SpanTaskName,
  TaskDiv,
} from "./style";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import { useMainContext } from "../../Providers";
import { toast } from "react-toastify";

type Props = {
  children?: React.ReactNode;
  task: ITask;
};

function Task({ children, task, ...rest }: Props) {
  const {
    getToDos,
    setDisplayModal,
    setDisplayConfirmDeleteModal,
    setCurrentTask,
    setIsEditing,
  } = useMainContext();

  function setChecked(id: number) {
    api
      .post(`/toDos/${id}/setDone`)
      .then((response) => {
        getToDos();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something wrong happend!");
      });
  }

  function handleEditButton(task: ITask) {
    setCurrentTask(task);
    setIsEditing(true);
    setDisplayModal(true);
  }

  function handleDeleteButton(task: ITask) {
    setCurrentTask(task);
    setDisplayConfirmDeleteModal(true);
  }

  return (
    <TaskDiv>
      <DivInputCheckName>
        <InputCheck
          type={"checkbox"}
          checked={task?.isDone && true}
          onChange={() => setChecked(task.id)}
        ></InputCheck>
        <SpanTaskName isDone={task.isDone}>{task.name}</SpanTaskName>
      </DivInputCheckName>
      <DivEditButtons>
        <EditButton onClick={() => handleEditButton(task)}>
          <FiEdit />
        </EditButton>
        <EditButton onClick={() => handleDeleteButton(task)}>
          <FiTrash2 />
        </EditButton>
      </DivEditButtons>
    </TaskDiv>
  );
}

export default Task;
