import {
  Modal,
  ModalMaterial,
  ModalTitle,
  ModalLock,
  ModalBody,
  Input,
  DivSaveCancel,
  YesButton,
  NoButton,
  FormModal,
  ErrorSpan,
  DivIsDone,
  InputCheckIsDone,
  Textarea,
  Span,
} from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMainContext } from "../../Providers";
import api from "../../services/api";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  description: string;
  isDone: boolean;
};

const RegisterModal = () => {
  const { setDisplayModal, getToDos, isEditing, currentTask } =
    useMainContext();

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required").max(50),
    description: yup.string().required("Description is required").max(200),
    isDone: yup.boolean(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: isEditing ? currentTask.name : "",
      description: isEditing ? currentTask.description : "",
      isDone: isEditing ? currentTask.isDone : false,
    },
  });

  const onSubmitFunction: SubmitHandler<FormValues> = (data) => {
    if (isEditing) {
      api
        .put(`/toDos/${currentTask.id}`, data)
        .then((response) => {
          getToDos();
          setDisplayModal(false);
        })
        .catch((err) => console.error(err));
    } else {
      api
        .post("/toDos", data)
        .then((response) => {
          getToDos();
          setDisplayModal(false);
        })
        .catch((err) => {
          console.error(err);
          toast.error("Something wrong happend!");
        });
    }
  };

  return (
    <Modal
      onClick={(e) => e.target === e.currentTarget && setDisplayModal(false)}
    >
      <ModalMaterial>
        <ModalTitle>
          {isEditing ? <h2>{currentTask.name}</h2> : <h2>New To-Do</h2>}

          <ModalLock onClick={() => setDisplayModal(false)}>&times;</ModalLock>
        </ModalTitle>
        <ModalBody>
          <FormModal onSubmit={handleSubmit(onSubmitFunction)}>
            <Span>
              <b>Name: </b>
            </Span>
            {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}

            <Input placeholder={"Name"} {...register("name")} />

            <Span>
              <b>Description: </b>
            </Span>
            {errors.description && (
              <ErrorSpan>{errors.description.message}</ErrorSpan>
            )}
            <Textarea
              placeholder={"Description"}
              {...register("description")}
            />
            <DivIsDone>
              <span>Is done</span>
              <InputCheckIsDone type={"checkbox"} {...register("isDone")} />
            </DivIsDone>
            <DivSaveCancel>
              <YesButton type={"submit"}>Save</YesButton>
              <NoButton onClick={() => setDisplayModal(false)}>Cancel</NoButton>
            </DivSaveCancel>
          </FormModal>
        </ModalBody>
      </ModalMaterial>
    </Modal>
  );
};

export default RegisterModal;
