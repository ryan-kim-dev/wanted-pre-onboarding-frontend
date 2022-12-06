import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTEPATH } from '../constants';

function Todos() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.access_token) return navigate(ROUTEPATH.ROOT);
  }, [navigate]);

  return <div>Todos</div>;
}

export default Todos;
