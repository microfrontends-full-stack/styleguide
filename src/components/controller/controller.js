import axios from "axios";
export const getUsers = async () => {
	const response = await axios.get("http://localhost:5000/users");
	if (response.status === 200) {
		return response.data;
	}
};

export const addUser = async (data) => {
	const response = await axios.post("http://localhost:5000/user", data);
	if (response.status === 200) {
		return response.data;
	}
};
export const updateUser = async (data, id) => {
	const response = await axios.put(`http://localhost:5000/user/${id}`, data);
	if (response.status === 200) {
		return response.data;
	}
};

export const deleteUser = async (id) => {
	const response = await axios.delete(`http://localhost:5000/user/${id}`);
	if (response.status === 200) {
		return response.data;
	}
};

export const getUser = async (id) => {
	const response = await axios.get(`http://localhost:5000/user/${id}`);
	if (response.status === 200) {
		return response.data;
	}
};
