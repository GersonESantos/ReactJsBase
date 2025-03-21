import { useState } from 'react';

const LoginForm = ({ email, password, setEmail, setPassword, handleLogin, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary min-vh-100">
      <main className="form-signin w-100 m-auto" style={{ maxWidth: '330px', padding: '1rem' }}>
        <form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal text-center">Faça login</h1>
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            className="mb-4 d-block mx-auto"
            height="54"
            width="72"
          />

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="nome@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Endereço de e-mail</label>
          </div>
          <div className="form-floating position-relative mb-3">
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="form-control pe-5"
              id="floatingPassword"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Senha</label>
            <button
              type="button"
              className="btn btn-outline-secondary position-absolute end-0 top-50 translate-middle-y"
              style={{ border: 'none', background: 'transparent' }}
              onMouseDown={() => setPasswordVisible(true)}
              onMouseUp={() => setPasswordVisible(false)}
              onMouseLeave={() => setPasswordVisible(false)}
            >
              <span className="eye-icon">{passwordVisible ? '👁️‍🗨️' : '👁️'}</span>
            </button>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Lembrar-me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Entrar
          </button>
          {error && <p className="mt-3 text-danger text-center">{error}</p>}
          <p className="mt-5 mb-3 text-body-secondary text-center">© 2025</p>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;