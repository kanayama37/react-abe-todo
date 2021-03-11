import React from "react";
import styles from "./TaskItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import EventIcon from "@material-ui/icons/Event";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { EventNote } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import {
  deleteTask,
  handleModalOpen,
  completeTask,
  selectIsModalOpen,
  selectTask,
} from "../taskSlice";
import TaskForm from "../taskForm/TaskForm";

interface PropsTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropsTypes> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };
  const handleClose = () => {
    dispatch(handleModalOpen(false));
  };
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => dispatch(completeTask(task))}
          className={styles.checkbox}
        />
        <button onClick={handleOpen} className={styles.edit_button}>
          <EditIcon className={styles.icon} />
        </button>
        <button
          onClick={() => dispatch(deleteTask(task))}
          className={styles.delete_button}
        >
          <DeleteForeverIcon className={styles.icon} />
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        className={styles.modal}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit</div>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
