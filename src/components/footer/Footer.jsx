import './footer.css';
import LogoImg from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <a href="index.html" className="footer__title">
                    <img src={LogoImg} alt="JNZega" className="logo__img" />
                </a>

                <ul className="footer__list">
                    <li>
                        <a
                            href="#about"
                            className="footer__link"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#services"
                            className="footer__link"
                        >
                            Services
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="footer__link"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://instagram.com/jnzega/"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://linkedin.com/in/jnzega"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a
                        href="https://github.com/jnzega"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Joshua Zega. Thanks to Cryptical Coder.
                </span>
            </div>
        </footer>
    )
}

export default Footer;