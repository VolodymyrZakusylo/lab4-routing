import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Step 3</h2>
        <p>Ви на Третьому степі степперу</p>
        <button onClick={() => navigate('/step4')}>Наступний степ</button>
        <button onClick={() => navigate('/step2')}>Повернутися на попередній степ</button>
      </div>
    );
  };
  
  export default Step2;
  