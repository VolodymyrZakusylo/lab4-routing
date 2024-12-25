import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>Step 1</h4>
      <p>Ви на першому степі степперу</p>
      <button onClick={() => navigate('/step2')}>Next</button>
    </div>
  );
};

export default Step1;