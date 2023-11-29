import { ErrorMessage } from './errorServices';
import { services } from './server';


const getAllData = (url: string): object | ErrorMessage => {
	return services().get(url);
};

const addData = (obj: object, url: string): object | ErrorMessage => {
	return services().post(url, obj);
};

const update = () => {

};

const delData = () => {

};
const findOne = () => {

};

export const tarefaServices = {
	getAllData,
	addData,
	update,
	delData,
	findOne
};
