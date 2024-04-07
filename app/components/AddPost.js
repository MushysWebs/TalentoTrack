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
      employeeWage: parseInt(input.employeeWage, 10) || null
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
    <div>
      <button
        onClick={() => setShowModal(true)}
        className=" bg-gradient-to-r from-rose-400 to-red-500 text-white p-3 cursor-pointer rounded-full"
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
            placeholder="Wage"
            name="employeeWage"
            className="w-full p-2 mb-3 rounded-2xl"
            value={input.employeeWage}
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
