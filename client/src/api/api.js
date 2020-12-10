import axios from "axios";
import { classroomsURL, testsURL, usersURL } from "../constants/constants";

//--------------- Class API -----------------------

export const getClass = (code) => axios.get(`${classroomsURL}/${code}`);
export const createClass = (newClass) => axios.post(classroomsURL, newClass);
export const getClasses = (id) => axios.get(`${classroomsURL}/user/${id}`);
export const updateClass = (id, updatedClass) => axios.patch(`${classroomsURL}/${id}`, updatedClass);
export const getInstructor = (id) => axios.get(`${usersURL}/id/${id}`);

//--------------- Test API ------------------------

export const getTests = (code) => axios.get(`${testsURL}/class/${code}`);
export const createTest = (newTest) => axios.post(testsURL, newTest);







//export const getTest = (id) => axios.get(`${testsUrl}/${id}`);
//export const updateTest = (id, updatedTest) => axios.patch(`${testsUrl}/${id}`, updatedTest);
//export const deleteTest = (id) => axios.delete(`${testsUrl}/${id}`);
//export const getUsers = (id) => axios.get(`${classroomUrl}/${id}/users`);
//export const createClass = (newClass) => axios.post(classroomUrl, newClass);
//export const deleteClass = (id) => axios.delete(`${classroomUrl}/${id}`);