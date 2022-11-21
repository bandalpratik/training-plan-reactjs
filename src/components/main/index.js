import React from "react";
import CourseCard from "../card";
import ReactJS from "../../assets/images/ReactJS.jpeg";
import HTMLCSS from "../../assets/images/HTMLCSS.png";
import NodeJS from "../../assets/images/Nodejs.png";
import "./Main.css";

function Main() {
  const courses = [
    {
      heading: "HTML and CSS",
      subHeading:
        "In this course, you will be introduced to the concepts of HTML and CSS",
      img: HTMLCSS,
      chapters: [
        {
          name: "Go to course material",
          url: "html/css/1",
        },
      ],
    },
    {
      heading: "React JS",
      subHeading:
        "In this course, you will be introduced to the concepts of HTML CSS",
      img: ReactJS,
      chapters: [
        {
          name: "Introduction to React JS",
          url: "introduction-reactjs/1",
        },
        {
          name: "Understanding React Concepts",
          url: "reactjs-part1/1",
        },
        {
          name: "Exercise",
          url: "reactjs-part1/5",
        },
      ],
    },
    {
      heading: "Node JS",
      subHeading:
        "In this course, you will be introduced to the concepts of Node JS",
      img: NodeJS,
      chapters: [
        {
          name: "Go to course material",
          url: "introduction-nodejs/1",
        },
      ],
    },
  ];
  return (
    <div className="main">
      <div className="main-cards">
        {courses.map((dt) => {
          return <CourseCard course={dt} />;
        })}
      </div>
    </div>
  );
}

export default Main;
