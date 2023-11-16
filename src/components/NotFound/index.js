// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="not-found-cont-dark">
              <img
                className="not-found"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="lost-dark">Lost Your Way!</h1>
              <p className="txt-dark">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          ) : (
            <div className="not-found-cont-light">
              <img
                className="not-found"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="lost-light">Lost your way</h1>
              <p className="txt-light">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
