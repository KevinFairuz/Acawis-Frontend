import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import CarouselDefault from './Carousel/Carousel.jsx';
import CardDefault from './Benefit/Benefit.jsx';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      if (error.response) {
        navigate('/');
      }
    }
  };
  return (
    <div>
      <div className="absolute bottom-0 left-0">
        <Sidebar />
      </div>
      <div className="absolute top-0 right-0">
        <Header />
      </div>
      <div className="absolute top-20 left-[300px]">
        <CarouselDefault />
      </div>
      <div className="relative mt-60">
        <CardDefault />
      </div>
    </div>
  );
};

export default Dashboard;
