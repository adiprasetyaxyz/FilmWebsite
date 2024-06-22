class NavBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          :root {
              --main-bg-color: #252534;
              --second-bg-color: #333445;
              --accent-color: #ff1100;
              --box-gradient: linear-gradient(135deg, #5b5c71, #888a9f, #5b5c71);
              --main-font: white;
          }
  
          .fixed-nav {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 100;
              background-color: rgba(37, 37, 52, 0.9);
              backdrop-filter: blur(10px);
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              transition: background-color 0.3s;
          }
  
          .fixed-nav ul {
              display: flex;
              gap: 2rem;
              list-style: none;
          }
  
          .fixed-nav ul li a {
              font-size: 24px;
              color: var(--main-font);
              text-decoration: none;
          }
  
          .fixed-nav ul li a:hover {
              color: var(--accent-color);
          }
  
          @media screen and (max-width: 768px){
          
            .fixed-nav ul li a {
              font-size: 14px;
          }
      .fixed-nav {
          flex-direction: column;
      }
      #logo > h1{
          font-size: 24px;
          margin-bottom: -15px;
      }

      .menu {
        display: flex;
        flex-direction: row;
        
      }
      
      
      #account {
          visibility: hidden;
      }
          }
          @media screen and (max-width: 1000px){
            .menu {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            .fixed-nav ul li a {
              font-size: 18px;
          }
            
        }
  
          
        </style>
        <nav class="fixed-nav">
          <div id="logo"><h1><span>Ars</span>Movie</h1></div>
          <ul class="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#movie">Movie</a>
            </li>
            <li>
              <a href="#movie">TV Show</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
          <div id="account"><i class="fa-solid fa-user fa-xl" style="color: #f5f5f5;"></i></div>
        </nav>
      `;
    
    }
  }
  
  customElements.define('nav-bar', NavBar);

  