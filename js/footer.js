const footer = document.querySelector("footer");

function showDesktopFooter() {
  const footerContainer = document.createElement('div');
  footerContainer.className = "footer-container"  
  footerContainer.innerHTML = `
        <div class="footer-block">
          <div class="footer-logo">
            <a href="#"><img src="./img/logo-dark.svg" alt="logo" /></a>
          </div>
          <div class="footer-apps">
            <img src="./img/play.png" alt="google" />
            <img src="./img/App Store.png" alt="apple" />
          </div>
          <div class="footer-copyright">
            <p>2018 © Copyrights, All rights reserved.</p>
          </div>
        </div>
        <div class="footer-menu">
          <nav class="footer-nav">
            <ul class="footer-nav-list">
              <li><a href="#">About us</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
            <ul class="footer-nav-list">
              <li><a href="#">Features</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Online Shop</a></li>
              <li><a href="#">Influences</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Brands</a></li>
            </ul>
            <ul class="footer-nav-list">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Terms & conditions </a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </nav>
          <div class="footer-lang">
            <img src="./img/world.svg" alt="world" />
            <p>English</p>
            <img src="./img/arrow-down.svg" alt="arrow" />
          </div>
        </div>`;

footer.append(footerContainer)
}

showDesktopFooter();
