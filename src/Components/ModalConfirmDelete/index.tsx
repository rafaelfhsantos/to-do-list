import {
  Modal,
  ModalMaterial,
  ModalTitle,
  ModalLock,
  ModalBody,
  DivSaveCancel,
  YesButton,
  NoButton,
} from "./style";

import { useMainContext } from "../../Providers";
import api from "../../services/api";
import { toast } from "react-toastify";

const ConfirmDeleteModal = () => {
  const { setDisplayConfirmDeleteModal, getToDos, currentTask } =
    useMainContext();

  const handleYes = (id: number) => {
    api
      .delete(`/toDos/${id}`)
      .then((response) => {
        getToDos();
        setDisplayConfirmDeleteModal(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something wrong happend!");
      });
  };

  return (
    <Modal
      onClick={(e) =>
        e.target === e.currentTarget && setDisplayConfirmDeleteModal(false)
      }
    >
      <ModalMaterial>
        <ModalTitle>
          <h2>Are you sure you want to delete '{currentTask.name}'?</h2>
          <ModalLock onClick={() => setDisplayConfirmDeleteModal(false)}>
            &times;
          </ModalLock>
        </ModalTitle>
        <ModalBody>
          <DivSaveCancel>
            <YesButton onClick={() => handleYes(currentTask.id)}>YES</YesButton>
            <NoButton onClick={() => setDisplayConfirmDeleteModal(false)}>
              NO
            </NoButton>
          </DivSaveCancel>
        </ModalBody>
      </ModalMaterial>
    </Modal>
  );
};

export default ConfirmDeleteModal;
