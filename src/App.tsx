import React from "react";
import Header from "./components/header/Header";
import styles from "./App.module.scss";
import TaskForm from "./features/task/taskForm/TaskForm";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
      </div>
    </div>
  );
};

export default App;
