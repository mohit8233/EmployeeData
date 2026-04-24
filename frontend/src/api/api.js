import axios from "axios";
const BASE_URL = "https://employeedata-2.onrender.com/api/employees"

const AUTH_URL = "https://employeedata-2.onrender.com/api/authRoutes"


export const getEmployee = async(params = {})=>{
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${BASE_URL}/getEmployee?${query}`)
    return res.json()
}

// create 

export const createEmployee = (data) => {
  return axios.post(`${BASE_URL}/create`, data);
};

// UPDATE
export const updateEmployee = (id, data) => {
  return axios.patch(`${BASE_URL}/updatePartial/${id}`, data);
};

// DELETE
export const deleteEmployee = (id) => {
  return axios.delete(`${BASE_URL}/deleteEmployee/${id}`);
};


// ================= AUTH =================//
// Register //

export const registerUser = (data)=>{
  return axios.post(`${AUTH_URL}/register`,data)
}

// Login //

export const loginUser = (data)=>{
  return axios.post(`${AUTH_URL}/login`, data)
}