class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--primary-color, #9F4733);
          display: flex;
          align-items: center;
        }
        
        .logo img {
          height: 40px;
          margin-right: 10px;
        }
        
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        a {
          color: var(--accent-color, #30343F);
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          transition: color 0.3s;
          position: relative;
        }
        
        a:hover {
          color: var(--primary-color, #9F4733);
        }
        
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary-color, #9F4733);
          transition: width 0.3s;
        }
        
        a:hover::after {
          width: 100%;
        }
        
        .active {
          color: var(--primary-color, #9F4733);
        }
        
        .active::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--accent-color, #30343F);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          ul {
            display: none;
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }
          
          ul.open {
            display: flex;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="nav-container">
          <a href="/" class="logo">
            <img src="images/5.jpg" alt="Ahmad's Logo">
            Ahmad's Eatery
          </a>
          
          <button class="mobile-menu-btn">
            <i data-feather="menu"></i>
          </button>
          
          <ul>
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#reservation">Reservations</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;
    
    // Initialize mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navMenu = this.shadowRoot.querySelector('ul');
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileMenuBtn.innerHTML = navMenu.classList.contains('open') ? 
        '<i data-feather="x"></i>' : '<i data-feather="menu"></i>';
      feather.replace();
    });
    
    // Update active link based on current page
    const links = this.shadowRoot.querySelectorAll('a');
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);