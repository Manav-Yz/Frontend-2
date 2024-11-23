document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeImage = document.getElementById("theme-image");
  
    // Load and apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(savedTheme);
    if (savedTheme === 'light') {
      themeImage.src = "img/theme2.svg";
    } else {
      themeImage.src = "img/theme.svg";
    }
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light');
      body.classList.toggle('dark');
      
      // Save theme in localStorage
      const newTheme = body.classList.contains('light') ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
  
      // Toggle theme image
      if (newTheme === 'light') {
        themeImage.src = "img/theme2.svg";
      } else {
        themeImage.src = "img/theme.svg";
      }
    });
  });