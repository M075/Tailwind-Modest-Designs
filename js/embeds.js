  // Load footer.html into the placeholder
  fetch('/components/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  });

   // Load nav into the placeholder
   fetch('/components/navbar.html')
   .then(response => response.text())
   .then(html => {
     document.getElementById('header-placeholder').innerHTML = html;
   });

   fetch('/components/addon-prices.html')
   .then(response => response.text())
   .then(html => {
     document.getElementById('addon-prices').innerHTML = html;
   });