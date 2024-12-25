import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Step 2</h2>
        <p>Ви на другому степі степперу</p>
        <button onClick={() => navigate('/step3')}>Наступний степ</button>
        <button onClick={() => navigate('/')}>Повернутися на попередній степ</button>
      </div>
    );
  };
  
  export default Step2;
  