import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="portfolio">
    <header class="hero">
      <h1>Hello, I'm [Your Name]</h1>
      <p class="subtitle">Frontend Developer & Creative Problem Solver</p>
    </header>
    
    <section class="intro">
      <div class="intro-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who loves creating beautiful and functional web experiences. 
          With a focus on modern technologies and clean code, I enjoy turning ideas into reality 
          through thoughtful design and development.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
          or enjoying a good cup of coffee while brainstorming the next exciting project.
        </p>
      </div>
    </section>
    
    <section class="contact">
      <h3>Let's Connect</h3>
      <p>I'm always interested in new opportunities and collaborations.</p>
      <div class="contact-links">
        <a href="mailto:your.email@example.com">Email</a>
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
      </div>
    </section>
  </div>
`
