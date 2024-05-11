import React from 'react'

function App() {
  return (
    <div>
        <header>
       <nav>
        <div className="logo"><img src="logo.png"></img></div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Pages</li>
          <li>Testimonials</li>
        </ul>
      <button id="nav-btn">Contact Support</button>
        
        </nav>
          <div className="head-txt">
         <h1>
          Get<span> ready</span> for your business & upgrade<span> all aspects</span>
         </h1>
         <span id="line">___</span>
         <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum fugit molestiae quo amet quae. Asperiores optio sint reiciendis.
         </p>
         <div className="head-btn">
          <button id="left-btn">Discover More</button>
          <button id="right-btn">Conatact Us</button>
         </div>
           </div>
            </header>
        
           <div className="services">
            <div className='servic-item'><i class="bi bi-archive-fill"></i><div><h3> CSS Templates</h3> <p>TemplateMo website is the best for you to explore and download free website templates.</p></div></div>
            <div className='servic-item'><i class="bi bi-cloud-fill"></i><div><h3>HTML5 Web Pages</h3><p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p></div></div>
            <div className='servic-item'><i class="bi bi-battery-charging"></i><div><h3>Responsive Designs</h3><p>All of our CSS templates are 100% free to use for commercial or business websites.</p></div></div>
            <div className='servic-item'><i class="bi bi-briefcase-fill"></i><div><h3>Mobile and Tablet ready!</h3><p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p></div></div>
            <div className='servic-item'><i class="bi bi-buildings"></i><div><h3>Fast Customer Support</h3><p>Do not be hesitated to contact us if you have any question or concern about our templates.</p></div></div>
            <div className='servic-item'><i class="bi bi-puzzle-fill"></i><div><h3>Fully Customizable</h3><p>If you have any idea or suggestion about new templates, feel free to let us know.</p></div></div>
         </div>
         <div className="discover">
          <div className="left"><h1>Business <span id="solition">Solutions</span> and <span id="crypto">Crypto</span> Investments</h1></div>
          <div className="right">
          <button id="left-btn">Discover More</button>
          <button id="right-btn">Conatact Us</button>
          </div>
         </div>
       
      </div>
      
      
    

  
  )
}

export default App