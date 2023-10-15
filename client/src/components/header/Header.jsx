import logo from '../assets/pj_icon2.jpg';

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt='logo' className='mr-2' />
            <div className="">ProjectMgt</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Header