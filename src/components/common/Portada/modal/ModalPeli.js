import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../Header.css";

const Example = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a onClick={handleShow}> Trailer</a>

      <Modal show={show} onHide={handleClose}>
        <iframe
          width="496"
          height="325"
          src="https://www.youtube.com/embed/1dnaQjFL67k"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
};

export default Example;
