import React from 'react';
import './Success.css'; // CSSファイルのインポート

function Success() {
  return (
    <div className="success-container">
      <img src={`${process.env.PUBLIC_URL}/images/back.jpeg`} alt="Header" className="header-image" />
      <h2>フォームの送信が完了しました</h2>
      <p>ありがとうございました。</p>
    </div>
  );
}

export default Success;
