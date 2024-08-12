import { apiRoot } from "../../app/api";
import { getUserLS } from "../../utils";
import { DateParams } from "./store/types";

function formatDate(date: Date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date object");
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const getMetricsReq = async (params: DateParams) => {
  try {
    const { monday, sunday } = params;

    if (!(monday instanceof Date) || !(sunday instanceof Date)) {
      throw new Error("Invalid date parameters");
    }

    const { username, password } = getUserLS();
    const token = btoa(`${username}:${password}`);

    const response = await apiRoot.get(
      `/metrics/visits-statistics/?end_date=${formatDate(sunday)}&start_date=${formatDate(monday)}`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching metrics:", error);
    throw error;
  }
};
