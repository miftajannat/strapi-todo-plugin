import {request} from '@strapi/helper-plugin';

const todoRequests ={
    getAllTodos: async () => {
        return await request('/todo/find', {method: 'GET'});
    },
};

export default todoRequests;