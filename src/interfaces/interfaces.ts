import React, { ReactNode } from "react";

export interface ITask {
  id: number;
  name: string;
  description: string;
  isDone: boolean;
}

export interface IProviderData {
  toDoList: Array<ITask>;
  setToDoList: React.Dispatch<React.SetStateAction<Array<ITask>>>;
  getToDos: () => void;
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  displayConfirmDeleteModal: boolean;
  setDisplayConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: ITask;
  setCurrentTask: React.Dispatch<React.SetStateAction<ITask>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IMainProviderProps {
  children: ReactNode;
}
