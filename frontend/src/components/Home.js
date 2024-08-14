import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './firebase-init'; // Firebase 初期化をインポート
import './Register.css'; // 会員登録画面と同じCSSを使用

function Home({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(); // ログイン成功時に onLogin 関数を呼び出す
      navigate('/form'); // フォームページに遷移
    } catch (error) {
      console.error('Error during login:', error);
      setError('ログインに失敗しました。メールアドレスまたはパスワードを確認してください。');
    }
  };

  return (
    <div className="register-container"> {/* デザインの統一のためにクラス名を一致 */}
      <img src={`${process.env.PUBLIC_URL}/images/AI.png`} alt="Header" className="header-image" /> {/* 会員登録画面と同じヘッダー画像 */}
      <h2>ログイン</h2>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="register-form"> {/* デザインの統一のためにクラス名を一致 */}
        <div className="form-group"> {/* デザインの統一 */}
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* デザインの統一 */}
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">ログイン</button> {/* デザインの統一 */}
      </form>
    </div>
  );
}

export default Home;
