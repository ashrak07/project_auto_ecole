import React from "react";
import CreateCourse from "./CreateCourse";
import ManagerCoursesOverview from "./ManagerCoursesOverview";
import { useSelector } from "react-redux";

const CourseComponent = () => {
  const courseList = useSelector((state) => state.courses.selectedCourse);

  return (
    <div className="p-2">
      {courseList ? <ManagerCoursesOverview /> : <CreateCourse />}
    </div>
  );
};

export default CourseComponent;
