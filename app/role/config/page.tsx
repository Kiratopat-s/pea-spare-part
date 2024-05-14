"use client";
import MainStructure from "@/components/mainStructure";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface User {
  createdAt: string;
  email: string;
  emailVerified: string | null;
  id: number;
  image: string;
  name: string;
  role: string;
  updatedAt: string;
}

interface ModalRoleChange {
  id: number;
  name: string;
  currentRole: string;
}

function TextColorFromRole(role: string) {
  switch (role) {
    case "clinic-tool":
      return "text-orange-500";
    case "approver":
      return "text-blue-500";
    case "admin":
      return "text-green-500";
    case "user":
      return "text-purple-500";
    default:
      return "text-gray-500";
  }
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [modalRoleChange, setModalRoleChange] = useState<ModalRoleChange>({
    id: 0,
    name: "",
    currentRole: "",
  });

  useEffect(() => {
    fetch("/api/user/get-all")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => console.log(users));
  }, []);

  function changeRole(id: number, name: string, currentRole: string) {
    setModalRoleChange({ id, name, currentRole });
    (
      document.getElementById("role_change_modal") as HTMLDialogElement
    )?.showModal();
  }

  function changeRoleApi(id: number, newRole: string) {
    const promise = fetch("/api/user/change-account-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        newRole,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(
          users.map((user) => {
            if (user.id === data.id) {
              return { ...user, role: data.role };
            }
            return user;
          })
        );
        (
          document.getElementById("role_change_modal") as HTMLDialogElement
        )?.close();
        return data;
      });
    toast.promise(promise, {
      loading: "Loading",
      success: (data) =>
        ` Successfully changed ${data.name} to role : ${data.role}!`,
      error: (err) => err.message,
    });
  }

  return (
    <MainStructure>
      <h1 className="text-xl font-bold">
        Let me introduce you to{" "}
        <span className="bg-red-500 text-white px-2">Spare Part</span>{" "}
        Management System for{" "}
        <span className="bg-purple-500 text-white px-2">PEA</span>
      </h1>
      <label className="input input-bordered flex items-center gap-2 w-11/12 my-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="overflow-x-auto w-screen flex justify-center rounded-lg ">
        <div className="w-11/12 bg-base-100 rounded-lg">
          <table className="table ">
            {/* head */}
            <thead className="sticky top-0 z-40 bg-base-100">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Last login</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User) => (
                <tr key={user.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.image} alt="User Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <span
                          className={`badge badge-ghost badge-sm ${TextColorFromRole(
                            user.role
                          )}`}
                        >
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => changeRole(user.id, user.name, user.role)}
                    >
                      <i className="fa-solid fa-user-pen"></i> Edit
                    </button>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {user.updatedAt}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="join flex justify-center">
            <button className="join-item btn btn-active ">1</button>
            <button className="join-item btn ">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </div>
      {/* <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("role_change_modal") as HTMLDialogElement
          )?.showModal()
        }
      >
        open modal
      </button> */}
      <dialog
        id="role_change_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Select role for{" "}
            <span className="bg-base-200 text-orange-500 px-2 py-1 rounded-md">
              {modalRoleChange.name}
            </span>
          </h3>
          <p className="py-4">
            Current role is{" "}
            <span className={TextColorFromRole(modalRoleChange.currentRole)}>
              {modalRoleChange.currentRole}
            </span>
          </p>
          <div className="join flex flex-row justify-center">
            <button
              onClick={() => changeRoleApi(modalRoleChange.id, "admin")}
              className={`btn join-item ${TextColorFromRole("admin")}`}
            >
              Admin
            </button>
            <button
              onClick={() => changeRoleApi(modalRoleChange.id, "approver")}
              className={`btn join-item ${TextColorFromRole("approver")}`}
            >
              Approver
            </button>
            <button
              onClick={() => changeRoleApi(modalRoleChange.id, "clinic-tool")}
              className={`btn join-item ${TextColorFromRole("clinic-tool")}`}
            >
              Clinic Tool
            </button>

            <button
              onClick={() => changeRoleApi(modalRoleChange.id, "user")}
              className={`btn join-item ${TextColorFromRole("user")}`}
            >
              User
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </MainStructure>
  );
}
