function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <span className="brand-logo">React Movies</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <span>Repo</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Header }
