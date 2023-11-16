// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
              <h1 className="home-txt-dark">Home</h1>
            </div>
          ) : (
            <div className="not-found-cont-light">
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
              <h1 className="home-txt-light">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
