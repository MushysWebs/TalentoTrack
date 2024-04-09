"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddPost = () => {
  const Router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post("/api/posts", {
      ...input,
    })
      .then((res) => {
        console.log(res);
        setInput({});
        setShowModal(false);
        Router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-300">
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Post
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1 className="mb-10 font-bold">Add or Update a Post</h1>
          <input
            type="text"
            placeholder="Employee"
            name="employeeName"
            className="w-full p-2 mb-3 rounded-2xl"
            value={input.employeeName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Position"
            name="employeePosition"
            className="w-full p-2 mb-3 rounded-2xl"
            value={input.employeePosition}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Comments"
            name="employeeComments"
            className="w-full p-2 mb-3 rounded-2xl"
            value={input.employeeComments}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-5 py-2 rounded-full">
            submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
