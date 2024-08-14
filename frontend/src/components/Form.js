import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Link をインポート
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '', 
    property: '',
    date: '',
    details: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://test3636-b14ba.web.app/api/form', {
        email: formData.email,
        name: formData.name, 
        property: formData.property,
        move_in_date: formData.date,
        details: formData.details
      });
      console.log('サーバーからのレスポンス:', response.data);
      console.log('送信したフォームデータ:', formData);
      navigate('/success');
    } catch (error) {
      console.error('Error submitting form', error);
      setError('フォームの送信に失敗しました。サーバーが動作しているか確認してください。');
    }
  };

  return (
    <div className="form-container">
      <h2>研修動画</h2>
      <p>この動画はサンプルです。<br />動画で学んだことを下記フォームに入力し送信してください。</p>

      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/4mTucRaGP8s?si=joNc-SQ5f5Utbk7d" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
      </div>

      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">メールアドレス <span className="required">必須</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mail@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">氏名 <span className="required">必須</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="氏名"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="property">部署名 <span className="required">必須</span></label>
          <input
            type="text"
            id="property"
            name="property"
            placeholder="部署名"
            value={formData.property}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">動画視聴日 <span className="required">必須</span></label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">感じたこと、学んだこと</label>
          <textarea
            id="details"
            name="details"
            placeholder="詳細"
            value={formData.details}
            onChange={handleChange}
          />
        </div>
        <button type="submit">送信</button>
      </form>

      {/* ページ2へのリンクボタンを追加 */}
      <div className="link-buttons">
        <Link to="/page2" className="link-button">2</Link>
        {/* 必要に応じて3、4のリンクボタンも追加できます */}
        <Link to="/page3" className="link-button">3</Link>
        <Link to="/page4" className="link-button">4</Link>
      </div>
    </div>
  );
};

export default Form;
