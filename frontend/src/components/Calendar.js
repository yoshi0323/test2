import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { message } = location.state || { message: 'Form submitted successfully!' };

  return (
    <div className="success-container">
      <h2>{message}</h2>
      {/* ここに画像を追加する場合 */}
      <img src="/images/success-image.jpg" alt="Success" className="success-image" />
    </div>
  );
};

export default Success;
