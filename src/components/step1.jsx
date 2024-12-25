import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Step 1</h2>
      <p>Ви на першому степі степперу</p>
      <button onClick={() => navigate('/step2')}>Наступний степ</button>
    </div>
  );
};

export default Step1;