import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <>
          <header>
            <div className='header'>
            <div className='mini'>
              
              </div>
              <div className='main'> 
                <span className='logo'><i className="fa fa-code" aria-hidden="true"></i>JYVER_FUN</span>
                <nav>
                  <Link to='#'> # О нас</Link>
                  <Link to='#'> # Связаться</Link>
                  <Link to='#'> # Поддержать</Link>
                </nav>
                </div>
            </div>
          </header>
          </>
    );
}