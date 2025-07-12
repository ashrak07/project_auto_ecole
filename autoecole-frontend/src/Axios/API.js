import dayjs from "dayjs";
import { AxiosInstance } from "./AxiosInstance";

export const createUser = async (form) => {
  try {
    console.log("-- invoking createUser --");
    // const payload = {
    //   ...form,
    //   dateOfBirth: dayjs(form.dateOfBirth).format("DD-MM-YYYY"),
    // };
    console.log("payload:", form);
    const response = await AxiosInstance.post("/auth/create-user", form, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      console.log("response api", response);
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async () => {
  try {
    const response = await AxiosInstance.get("/user");
    if (response) {
      console.log("res:", response);
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTeacherUser = async () => {
  try {
    const response = await AxiosInstance.get("/user/teacher");
    if (response) {
      console.log("res =>", response);
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

export const createCourse = async (course) => {
  try {
    console.log("-- invoking createCourse --");
    const response = await AxiosInstance.post("/courses", course, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      console.log("response", response);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCourseWithStatus = async () => {
  try {
    console.log("-- invoking getCourseWithStatus --");
    const response = await AxiosInstance.get("/courses/teacher");
    if (response) {
      console.log("response", response);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getPanning = async () => {
  try {
    console.log("-- invoking getPlanning --");
    const response = await AxiosInstance.get("/courses/schedule");
    if (response) {
      console.log("response:", response);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const dashboard = async () => {
  try {
    console.log("-- invoking dashboard --");
    const response = await AxiosInstance.get("/dashboard");
    if (response) {
      console.log("response:", response);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
