function Footer() {
  return (
    <footer className="page-footer green lighten-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <span className="grey-text text-lighten-4 right">Repo</span>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
