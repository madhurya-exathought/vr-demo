// http.js

import axios from 'axios';

const baseURL = 'https://api.example.com/'; // Set your API base URL
const defaultHeaders = {
  'Content-Type': 'application/json',
};

const http = {
  get: async (url: string) => {
    try {
      const response = await axios.get(`${baseURL}${url}`, { headers: { ...defaultHeaders } });
      return response.data;
    } catch (error) {
      console.error('Error making GET request:', error);
      throw error;
    }
  },

  post: async (url: string, data: any) => {
    try {
      const response = await axios.post(`${baseURL}${url}`, data, { headers: { ...defaultHeaders } });
      return response.data;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  },

  put: async (url: string, data: any) => {
    try {
      const response = await axios.put(`${baseURL}${url}`, data, { headers: { ...defaultHeaders } });
      return response.data;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  },

  delete: async (url: string) => {
    try {
      const response = await axios.delete(`${baseURL}${url}`, { headers: { ...defaultHeaders } });
      return response.data;
    } catch (error) {
      console.error('Error making DELETE request:', error);
      throw error;
    }
  },
};

export default http;
