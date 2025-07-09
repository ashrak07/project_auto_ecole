import { AxiosInstance } from "./AxiosInstance";

export const createUser = async (form) => {
  try {
    console.log("-- invoking createUser --");
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

export const createCourse = async () => {
  console.log("-- invoking createCourse --");
  const response = await AxiosInstance.post("");
};
