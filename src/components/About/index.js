// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="not-found-cont-dark">
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
              <h1 className="home-txt-dark">About</h1>
            </div>
          ) : (
            <div className="not-found-cont-light">
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
              <h1 className="home-txt-light">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
