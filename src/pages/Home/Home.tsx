import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import './Home.css'

function Home() {
  return (
    <div className="Home">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Unit testing and Surrounding</h1>

      <ul>
        <li>
          <Link to="/example-one">Example One</Link>
        </li>
        <li>
          <Link to="/example-two">Example Two</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
