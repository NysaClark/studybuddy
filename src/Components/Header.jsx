const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between py-3 px-4">
      <a href="/" className="text-primary">
        <h1 className="fw-bold">StudyBuddy</h1>
      </a>
      <div className="d-flex align-items-center gap-4">
        <a id="addBtn" href="/create" className="text-white d-flex align-items-center justify-content-center rounded-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </a>
        <p
          // onClick={logout()}
          role="button"
          className="fw-semibold fs-5"
        >
          Logout
        </p>
      </div>
    </header>
  );
};

export default Header;
