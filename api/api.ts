import { instance } from "./axios";
import { SignInData, SignUpData } from "./type";

export const signIn = async (data: SignInData) => {
  const response = await instance.post("/auth/login", data);

  if (response.status === 401) return false;
  return true;
};

export const signUp = async (data: SignUpData) => {
  const response = await instance.post("/auth/signup", data);

  if (response.status === 409) return false;
  return true;
};
