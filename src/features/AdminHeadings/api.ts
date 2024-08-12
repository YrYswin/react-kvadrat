import { apiRoot, axiosWithFile } from "../../app/api";
import { PostHeadingState, PatchHeadingState } from "./store/types";

export const getHeadingsReq = () => {
  return apiRoot.get("/headings/");
};
export const getHeadingsByIdReq = (id: number) => {
  return apiRoot.get(`/headings/${id}`);
};
export const postHeadingReq = (data: PostHeadingState) => {
  return axiosWithFile.post("/headings/", data);
};

export const patchHeadingReq = (data: PatchHeadingState) => {
  return axiosWithFile.patch(`/headings/${data.id}/`, data);
};

export const deleteHeadingReq = (id: number) => {
  return apiRoot.delete(`/headings/${id}`);
};
