import React from "react";

import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [isOpen, isOpenSet] = React.useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => isOpenSet(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => isOpenSet(false)}>
          Fancy Modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}

export default App;
