import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001 ";

export const callExternalEndpoint = async (token) =>
  axios.get(`${API_URL}/api/external`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
