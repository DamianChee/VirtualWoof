import React, { useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";

const OverLay = (props) => {
  const fetchData = useFetch();
  const userCtx = useContext(UserContext);

  const handleOkButton = () => {
    props.setShowUpdateModal(false);
    props.deleteDog();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <h1>You dog ran away</h1>
        <br />
        <button onClick={handleOkButton} className="col-md-3">
          Ok
        </button>
      </div>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          setShowUpdateModal={props.setShowUpdateModal}
          deleteDog={props.deleteDog}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
