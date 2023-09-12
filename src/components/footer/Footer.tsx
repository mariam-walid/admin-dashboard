import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <span>Admin Dashboard</span>
      <span>Created by <Link to='https://www.linkedin.com/in/mariam--walid'>Mariam Walid</Link> </span>
    </div>
  )
}

export default Footer
