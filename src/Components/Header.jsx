const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between py-3 px-4">
        <a href="/" className="text-primary"><h1 className="fw-bold">StudyBuddy</h1></a>
        <p 
          // onClick={logout()}
          role="button"
          className="fw-semibold fs-5"
        >
          Logout
        </p>
      </header>
  )
}

export default Header