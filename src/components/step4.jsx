import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Step 4</h2>
        <p>Ви на четвертому степі степперу</p>
        <button onClick={() => navigate('/')}>Повернутися на перший степ</button>
        <button onClick={() => navigate('/step3')}>Повернутися на попередній степ</button>
      </div>
    );
  };
  
  export default Step2;
  