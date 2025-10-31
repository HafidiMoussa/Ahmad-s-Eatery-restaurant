class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: var(--accent-color, #30343F);
          color: white;
          padding: 3rem 1rem;
          font-family: 'Poppins', sans-serif;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        
        .footer-logo img {
          height: 40px;
          margin-right: 10px;
        }
        
        .footer-description {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          transition: background-color 0.3s;
        }
        
        .social-links a:hover {
          background-color: var(--primary-color, #9F4733);
        }
        
        h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background-color: var(--primary-color, #9F4733);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: white;
        }
        
        .contact-info {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .contact-info i {
          color: var(--primary-color, #9F4733);
        }
        
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <div class="footer-logo">
              <img src="images/5.jpg" alt="Ahmad's Logo">
              Ahmad's Eatery
            </div>
            <p class="footer-description">
              Bringing the authentic flavors of the Middle East to your table since 2010. Our passion is sharing the rich culinary traditions of Arabia with our community.
            </p>
            <div class="social-links">
              <a href="https://www.instagram.com/ahmads_middle_eastern_eatery/" aria-label="Instagram"><img src="images/6.png" width="30" height="30" ><i data-feather="instagram"></i></a>
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            </div>
          </div>
          
          <div class="footer-links-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/menu.html">Menu</a></li>
              <li><a href="/about.html">About Us</a></li>
              <li><a href="#reservation">Reservations</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h4>Contact Us</h4>
            <div class="contact-info">
              <i data-feather="map-pin"></i>
              <span>123 Arabian Street, Food District</span>
            </div>
            <div class="contact-info">
              <i data-feather="phone"></i>
              <span>(123) 456-7890</span>
            </div>
            <div class="contact-info">
              <i data-feather="mail"></i>
              <span>info@ahmadseatery.com</span>
            </div>
            <div class="contact-info">
              <i data-feather="clock"></i>
              <div>
                <p>Mon-Fri: 11am - 10pm</p>
                <p>Sat-Sun: 10am - 11pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} Ahmad's Middle Eastern Eatery. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);