import React, { useState, useEffect } from "react";
import Blog from "../components/blog";

const Dashboard = () => {
  const [save, setSave] = useState("Send")
  const [editItemId, setEditItemId] = useState(null);
  const user = localStorage.getItem("user");
  const firstname = JSON.parse(user).fristname


  const [formdata, setFormdata] = useState({
    title: "",
    discription: "",
  });
  const [blogData, setBlogData] = useState([]);
  const update = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const postdata = async () => {
    setSave("save")
    try {
      if (formdata.title == " " && formdata.discription == " ") {
      }
      else {
        if (save === "Send") {
          const response = await fetch("http://localhost:8001/allblogs", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: formdata.title,
              discription: formdata.discription,
              firstname: firstname
            }),
          });
          const responseData = await response.json();
          setBlogData(responseData);
        }
        else if (save === "update" && editItemId) {
          const response = await fetch(`http://localhost:8001/updateblog/${editItemId}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata),
          });
          const responseData = await response.json();
          setBlogData(responseData);
        }
        setFormdata({
          title: "",
          discription: "",
        });
      }
    }
    catch (error) {
      console.log("Mongoose error:", error);
      res.status(500).send("An error occurred while saving the product.");
    }
  };
  return (
    <div>
      <div>
        <div className="dash-form">
          <h2 className="dashtitle">Dashboard</h2>
          <input
            type="text"
            value={formdata.title}
            placeholder="Title"
            name="title"
            onChange={update}
          />
          <textarea
            id=""
            value={formdata.discription}
            cols="30"
            rows="5"
            name="discription"
            placeholder="Discription"
            onChange={update}
          />
          <div className="dashbtn">
            <input type="button" value={save} onClick={postdata} />
          </div>
        </div>
      </div>
      <Blog formdata={blogData} setsave={setSave} setFormdata={setFormdata} setEditItemId={setEditItemId}/>
    </div>
  );
};

export default Dashboard;
