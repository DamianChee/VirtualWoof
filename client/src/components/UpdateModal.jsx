import React, { useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";
import Button from "./Button";

const OverLay = (props) => {
  const fetchData = useFetch();
  const userCtx = useContext(UserContext);

  const handleOkButton = () => {
    props.setShowUpdateModal(false);
    props.deleteDog();
    props.getDogByOwner();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>You dog has ran away</h2>
        <h6>
          Because {props.selectedDog.name} is not feeling loved, well-behaved
          and well-fed, it has decided to find a new owner!
        </h6>

        <Button onClick={handleOkButton} className="col-md-3">
          Ok
        </Button>
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
          getDogByOwner={props.getDogByOwner}
          selectedDog={props.selectedDog}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
