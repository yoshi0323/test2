import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom'; // Linkをインポート
import './Register.css'; // CSS ファイルをインポート

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        setError('このメールアドレスは既に使用されています。ログインページにリダイレクトします。');
        setTimeout(() => {
          navigate('/login');
        }, 2000); // 2秒後にログインページへリダイレクト
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/login'); // 登録後ログインページへリダイレクト
      }
    } catch (error) {
      console.error('エラー詳細:', error); // 追加: エラーメッセージをコンソールに出力
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <img src={`${process.env.PUBLIC_URL}/images/AI.png`} alt="Header" className="header-image" />
      <h2>会員登録</h2>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">登録</button>
      </form>
      <p className="login-link">
        <Link to="/login">ログインはこちら</Link> {/* ログインページへのリンク */}
      </p>
    </div>
  );
}

export default Register;
