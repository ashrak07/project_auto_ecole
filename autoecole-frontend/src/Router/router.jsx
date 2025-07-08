import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import UserComponent from "../Components/User/UserComponent";
import CourseComponent from "../Components/Courses/CourseComponent";
import SheduleComponent from "../Components/ScheduleComponent";
import TeacherComponent from "../Components/Teacher/TeacherComponent";
import Dashboard from "../Components/Dashboard";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="/admin/client" element={<UserComponent />} />
          <Route path="/admin/course" element={<CourseComponent />} />
          <Route path="/admin/schedule" element={<SheduleComponent />} />
          <Route path="/admin/teacher" element={<TeacherComponent />} />
          <Route path="/admin/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default router;
