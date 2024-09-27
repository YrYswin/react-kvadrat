import { apiRoot, axiosWithFile } from "../../app/api";
import TokenService from "../../utils";
import { FilterSliceState } from "../Filters/store/types";
import { HouseImageState, PostHouseState } from "./store/types";

function encodeIfInvalid(searchString: string) {
  const invalidCharacters = /[^a-zA-Z0-9-_.~]/;
  if (invalidCharacters.test(searchString)) {
    return encodeURIComponent(searchString);
  }
  return searchString;
}

export const getHousesReq = (page: number) => {
  return apiRoot.get(`/houses/?limit=8&offset=${page !== 0 ? page - 1 : page}`);
};

export const getHousesReqCategory = (page: number, category: string) => {
  return apiRoot.get(`/houses/?limit=9&offset=${page}&category=${encodeIfInvalid(category)}`);
};

export const getHousesReqFilter = (params: FilterSliceState, page: number) => {
  const { price, typeHouse, comfort } = params;
  const type = typeHouse === "Все" ? "" : typeHouse;
  const { garden, elevator, close_area, open_area, fenced_yard, playground, insulated, cross_layout } = comfort;

  return apiRoot.get(
    `/houses/?limit=9&offset=${page}&garden=${garden || ""}&elevator=${elevator || ""}&close_area=${close_area || ""}&open_area=${
      open_area || ""
    }
    &fenced_yard=${fenced_yard || ""}&playground=${playground || ""}&insulated=${insulated || ""}&cross_layout=${
      cross_layout || ""
    }&has_pool_no_gym=&category=${encodeIfInvalid(type)}&min_price=${price.min || ""}&max_price=${
      price.max || ""
    }&min_square_footage=&max_square_footage=`
  );
};

export const getHouseByIdReq = (id: number) => {
  return apiRoot.get(`/houses/${id}/`);
};

export const postHouseReq = (data: PostHouseState) => {
  const user = TokenService.getUserLS();
  const token = btoa(`${user?.username}:${user?.password}`);
  return axiosWithFile.post("/houses/", data, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

export const patchHouseReq = (data: PostHouseState, id: number) => {
  return axiosWithFile.put(`/houses/${id}/`, data);
};

export const deleteHouseReq = (id: number) => {
  return apiRoot.delete(`/houses/${id}/`);
};

export const postHouseImageReq = (data: HouseImageState) => {
  return axiosWithFile.post("/images/", data);
};
