  // Load footer.html into the placeholder
  fetch('../components/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  });

   // Load nav into the placeholder
   fetch('../components/navbar.html')
   .then(response => response.text())
   .then(html => {
     document.getElementById('header-placeholder').innerHTML = html;
   });

   fetch('../components/addon-prices.html')
   .then(response => response.text())
   .then(html => {
     document.getElementById('addon-prices').innerHTML = html;
   });

    fetch('../components/feature-comparison.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('feature-comparison').innerHTML = html;
      });

      fetch('../components/ecomm-feature-comparison.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('ecomm-feature-comparison').innerHTML = html;
      });