import React from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="bg-black/50 fixed inset-0">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col p-5 m-5 bg-gradient-to-r from-blue-200 to-cyan-200 w-1/2 p-s rounded-xl">
              <button
                onClick={() => setShowModal(false)}
                className="flex flex-col items-end text-2xl mb-3 px-2 rounded-full"
              >
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
