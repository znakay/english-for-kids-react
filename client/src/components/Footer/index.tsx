import './index.scss';
import Github from '../../assets/icons/github.svg';
import Telegram from '../../assets/icons/telegram.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

const Footer: React.FC = () => (
  <div className="footer">
    <div className="wrapper footer-wrapper">
      <ul className="social-networks-list">
        <li>
          <a href="https://github.com/znakay" className="social-networks-item">
            <img src={Github} alt="github" />
          </a>
        </li>
        <li>
          <a href="/" className="social-networks-item">
            <img src={Telegram} alt="telegram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/feed/"
            className="social-networks-item"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
      <h5 className="created-by">@created by Andrey Znak in 2021</h5>
    </div>
  </div>
);

export default Footer;
