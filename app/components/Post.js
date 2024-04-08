"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const Post = ({ post }) => {
  console.log("I am in Post", post);

  const Router = useRouter();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/posts/${post.id}`, postToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowModalEdit(false);
        Router.refresh();
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostToEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowDeleteModal(false);
        Router.refresh();
      });
  };

  return (
    <div className="flex flex-col items-center">
      <li className="flex-1 overflow-y-auto p-3 rounded-xl border-2 border-gray-700" key={post.id}>
        <h1>
          <strong>Employee:</strong> {post.employeeName}
        </h1>

        <p>
          <strong>Position: </strong>{post.employeePosition}
        </p>

        <p>
          <strong>Wage: </strong>{post.employeeWage}
        </p>
        <div className="pt-5">
          <button
            className="text-white bg-blue-700 mr-3 px-5 rounded-full"
            onClick={() => {
              setShowModalEdit(true);
              setPostToEdit(post);
            }}
          >
            Edit
          </button>

          <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
            <form className="w-full px-5 pb-6" onSubmit={handleEditSubmit}>
              <h1 className="mb-10 font-bold">Add or Update a Post</h1>
              <input
                type="text"
                placeholder="Employee Name"
                name="employeeName"
                className="w-full p-2 mb-3 rounded-2xl"
                value={postToEdit.employeeName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Position"
                name="employeePosition"
                className="w-full p-2 mb-3 rounded-2xl"
                value={postToEdit.employeePosition}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Wage"
                name="employeeWage"
                className="w-full p-2 mb-3 rounded-2xl"
                value={postToEdit.employeeWage}
                onChange={handleChange}
              />
              <button type="submit" className="bg-blue-700 text-white px-5 py-2 rounded-full">
                submit
              </button>
            </form>
          </Modal>
          <button
            className="text-white bg-red-700 mr-3 px-3 rounded-full"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
          <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
            <div className="flex flex-col items-start">
              <h1 className="text-2xl pb-3">
                Are you sure you want to delete this post?
              </h1>
              <div className="space-x-4">
                <button
                  className="text-white bg-blue-700 mr-3 px-5 rounded-full"
                  onClick={() => handleDeletePost(post.id)}
                >
                  {" "}
                  Yes
                </button>
                <button
                  className="text-white bg-red-700 mr-3 px-5 rounded-full"
                  onClick={() => setShowDeleteModal(false)}
                >
                  {" "}
                  No
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </li>
    </div>
  );
};

export default Post;