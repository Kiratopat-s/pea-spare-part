"use client";
import MainStructure from "@/components/mainStructure";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

function dashboard() {
  function convertGoogleDriveURLtoSourceURL(url: string) {
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 2];
    return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  }

  const [SPName, setSPName] = useState<string>("");
  const [SPInitList, setSPInitList] = useState<any[]>([]);
  useEffect(() => {
    const promise = fetch("/api/sparepart/get-all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSPInitList(data);
      });

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function CLConvertToWord(cnnumber: number) {
    switch (cnnumber) {
      case 0:
        return "สนญ.";
      case 1:
        return "กฟน.1";
      case 2:
        return "กฟน.2";
      case 3:
        return "กฟน.3";
      case 4:
        return "กฟฉ.1";
      case 5:
        return "กฟฉ.2";
      case 6:
        return "กฟฉ.3";
      case 7:
        return "กฟก.1";
      case 8:
        return "กฟก.2";
      case 9:
        return "กฟก.3";
      case 10:
        return "กฟต.1";
      case 11:
        return "กฟต.2";
      case 12:
        return "กฟต.3";
    }
  }

  return (
    <MainStructure>
      <section className="w-full" id="table-sparepart">
        <label className="w-full input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            id="search-input"
            placeholder="Search sparepart by name"
            onChange={(e) => {
              setSPName(e.target.value);
            }}
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-white font-bold">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((cnnumber) => {
                  return <th key={cnnumber}>{CLConvertToWord(cnnumber)}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {SPInitList.map((sp, index) => {
                if (sp.name.toLowerCase().includes(SPName.toLowerCase())) {
                  return (
                    <tr
                      key={index}
                      className="hover group cursor-pointer !transition-all !ease-in-out !duration-300"
                    >
                      <th>{index + 1}</th>
                      <td>
                        <Link href={`/spare`}>{sp.name}</Link>
                      </td>
                      <td>
                        <Image
                          src={convertGoogleDriveURLtoSourceURL(sp.image)}
                          alt={sp.name}
                          className={`w-12 h-12 scale-[200%] transform group-hover:scale-[280%] transition-transform ease-in-out duration-300 cursor-pointer`}
                          width={1000}
                          height={1000}
                        />
                      </td>
                      <td>{sp.cn0}</td>
                      <td>{sp.cn1}</td>
                      <td>{sp.cn2}</td>
                      <td>{sp.cn3}</td>
                      <td>{sp.cn4}</td>
                      <td>{sp.cn5}</td>
                      <td>{sp.cn6}</td>
                      <td>{sp.cn7}</td>
                      <td>{sp.cn8}</td>
                      <td>{sp.cn9}</td>
                      <td>{sp.cn10}</td>
                      <td>{sp.cn11}</td>
                      <td>{sp.cn12}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <div className="join">
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn ">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </section>
    </MainStructure>
  );
}

export default dashboard;
