import React, { useState } from "react";
import { data } from "./data";
import StudentList from "./studentList";
import "../Boostrap/index.css";
// import Dark from './Dark'

export default function Students() {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [batch, setBatch] = useState("");
  const [flag, setFlag] = useState(false);
  const [updatedIndex, setupdateIndex] = useState(0);
  // for error messages
  const [errorMessage, setMessage] = useState("");
  // const innputHandler = () => {
  //   console.log("e", e.target.name);
  //   console.log("E", e.target.value);
  // }
  const deleteHandler = (index) => {
    console.log("index", index);

    let newStudents = students.filter((student, i) => {
      if (i !== index) {
        // console.log("this is delete ", index);
        return student;
      }
    });
    setStudents([...newStudents]);
    console.log("newstudents", newStudents);
  };
  // delete by name
  // const deleteHandler = (name) => {
  //   console.log("name", name);

  //   let newStudents = students.filter((student, i) => {
  //     if (student.name !== name) {
  //       return student;
  //     }

  //   });
  //   setStudents([...newStudents]);
  //   console.log("newstudents", newStudents);
  // };
  // for update items
  const updatehandler = (student, index) => {
    console.log("need to update stu", student);
    setupdateIndex(index);
    setName(student.name);
    setRollno(student.rollno);
    setBatch(student.batch);
    setFlag(true);
  };

  const ctaHandler = () => {
    setMessage("");
    if (name !== "" && batch !== "" && rollno !== "") {
      let newStudent = {
        name,
        rollno,
        batch,
      };
      console.log("New add Students", newStudent);
      // new data add in student list
      // setStudents([...studentys, newStudent]);
      setStudents([newStudent, ...students]);

      // for empty inputs
      setName("");
      setRollno("");
      setBatch("");
    } else {
      setMessage("Found Few of Params empty! Params can,t empty");
    }
  };

  // call to action for update handlers
  const ctaUpdateHandler = () => {
    setMessage("");
    if (name !== "" && batch !== "" && rollno !== "") {
      let student = {
        name,
        rollno,
        batch,
      };
      console.log("New add Students", student);

      let updatedStudents = students.map((stu, index) => {
        if (updatedIndex === index) {
          return student;
        } else {
          return student;
        }
      });
      // new data add in student list
      // setStudents([...students, newStudent]);
      setStudents([...updatedStudents]);

      // for empty inputs
      setName("");
      setRollno("");
      setBatch("");
      setFlag(false);
    } else {
      setMessage("Found Few of Params empty! Params can,t empty");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col col-x-sm-12">
          <input
            className="form-control m-4"
            maxLength={20}
            type="text"
            value={name}
            placeholder="Please Enter Your Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control m-4"
            type="text"
            maxLength={8}
            value={rollno}
            placeholder="Please Enter Your Roll No"
            name="name"
            onChange={(e) => setRollno(e.target.value)}
          />
          <input
            className="form-control m-4"
            type="text"
            value={batch}
            placeholder="Please Enter Your Batch"
            onChange={(e) => setBatch(e.target.value)}
          />
        </div>

        {/* for using flag mtlb konsa button dikhana hai usko  */}
        {flag ? (
          <button
            className="btn btn-danger w-100 ms-4"
            onClick={ctaUpdateHandler}
          >
            Update
          </button>
        ) : (
          <button className="btn btn-warning w-98 ms-4" onClick={ctaHandler}>
            Submit
          </button>
        )}

        <p
          className="d-flex justify-content-center m-4 p-2 text-black"
          style={{ backgroundColor: "blue", color: "whitesmoke" }}
        >
          {errorMessage}
        </p>
        <hr />
        <h1 className=" d-flex justify-content-center align-items-center ">
          List of Students
        </h1>
        <table class="table table-primary ms-4 ">
          <thead>
            <tr>
              <th>No:</th>
              <th scope="col">Name:</th>
              <th scope="col">RollNo:</th>
              <th scope="col">Batch</th>
              <th scope="col">Actions Perform</th>
              <th scope="col">Update Item</th>
            </tr>
          </thead>
          {students.map((item, index) => {
            return (
              <StudentList
                index={index}
                student={item}
                deleteHandler={deleteHandler}
                updatehandler={updatehandler}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}
