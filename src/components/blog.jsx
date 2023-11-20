import React, { useEffect } from "react";
import { useState } from "react";
import {AiFillDelete} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"

const Blog = ({ formdata, setsave, setFormdata, setEditItemId }) => {
  const user = localStorage.getItem("user");
  const firstname = JSON.parse(user).fristname

  useEffect(() => {
    getdata();
  }, [formdata]);
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const response = await fetch(`http://localhost:8001/blogs/${firstname}`);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const datares = await response.json();
      setdata(datares);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const Delete = async (id) => {
    try {
      console.log("deleted", id)
      const deleteblogs = await fetch(`http://localhost:8001/blogs/${id}`, {
        method: "Delete",
      })
      if (deleteblogs.status === 200) {
        console.log("blogs delte successfully ")
        setdata(data.filter((items) => items._id !== id))
      } else {
        console.log("failed to delete blogs")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const update = async (id) => {
    setsave("update")
    setEditItemId(id)
    console.log("editItemId-cild", id)
    const response = await fetch(`http://localhost:8001/getupdateblog/${id}`)
    const responsedata = await response.json()
    console.log("response data", responsedata)
    setFormdata({
      title: responsedata.title,
      discription: responsedata.discription
    })
  }

  return (
    <div className="blog-conataner">
      {data && data?.map((itmes) => (
        <div className="card" key={itmes._id}>
          <div >
            <div className="profile">
              <div className="img">
                <img src="favicon.ico" alt="" />
              </div>
              <div className="about">
                <p>{firstname}</p>
                <p>02/08/2023</p>
              </div>
            </div>
            <div className="textdiv">
              <h6>{itmes.title}</h6>
              <p className="text">
                {itmes.discription}
              </p>
            </div>

          </div>
          <div className="btns">
            <button onClick={() => Delete(itmes._id)}><AiFillDelete/></button>
            <button onClick={() => update(itmes._id)}><AiOutlineEdit/></button>
          </div>
        </div>
      ))}


    </div>
  );
};

export default Blog;
