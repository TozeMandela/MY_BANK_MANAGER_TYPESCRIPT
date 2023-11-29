import axios from 'axios';

export const services = () => {
	return axios.create({
		baseURL:'http://localhost:3000'
	});
};
