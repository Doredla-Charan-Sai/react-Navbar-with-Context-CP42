// Write your code here
import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme(isDarkTheme)
      }
      return (
        <>
          {isDarkTheme ? (
            <nav className="nav-bar-light">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
              <ul className="links">
                <Link to="/" className="link">
                  <li key="home">
                    <p className="list-item-dark">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="link">
                  <li key="about">
                    <p className="list-item-dark">About</p>
                  </li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                type="button"
                className="theme"
                onClick={changeTheme}
              >
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="dark theme"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-bar-dark">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
              <ul className="links">
                <Link to="/" className="link">
                  <li key="home">
                    <p className="list-item-light">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="link">
                  <li key="about">
                    <p className="list-item-light">About</p>
                  </li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                type="button"
                className="theme"
                onClick={changeTheme}
              >
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="light theme"
                  onClick={changeTheme}
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Navbar)
