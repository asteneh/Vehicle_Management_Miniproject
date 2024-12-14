import axios from 'axios';

const API_URL = "http://localhost:5000/api/vehicles";

export const fetchVehicles = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const addVehicle = async (vehicle) => {
  const { data } = await axios.post(API_URL, vehicle);
  return data;
};

export const updateVehicleStatus = async (id, status) => {
  const { data } = await axios.patch(`${API_URL}/${id}`, { status });
  return data;
};
