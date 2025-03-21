const ThemeToggle = ({ theme, handleThemeChange, updateThemeIcon }) => {
    return (
      <div
        className="theme-toggle dropdown"
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
      >
        <button
          className="btn btn-secondary theme-btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            fontSize: '1.2rem',
            padding: '0.5rem',
            width: '60px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {updateThemeIcon(theme)}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleThemeChange('light');
              }}
            >
              ☀️ Light
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleThemeChange('dark');
              }}
            >
              🌙 Dark
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleThemeChange('auto');
              }}
            >
              Auto
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default ThemeToggle;