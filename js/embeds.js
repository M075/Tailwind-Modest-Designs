// Load footer into the placeholder
fetch("components/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-placeholder").innerHTML = html;
  });

// Load nav into the placeholder
fetch("components/navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("header-placeholder").innerHTML = html;
  });

// Load pricing into the placeholder
fetch("components/addon-prices.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("addon-prices").innerHTML = html;
  });

// Load pricing tables into the placeholder
fetch("components/pricing-tables.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("pricing-tables").innerHTML = html;
  });

// Load feature comparison of diff plans into the placeholder
fetch("components/informative-features.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("informative-features").innerHTML = html;
  });
fetch("components/ecomm-feature-comparison.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("ecomm-feature-comparison").innerHTML = html;
  });


fetch("components/gradient-background.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelectorAll("#gradient-background").forEach(element => {
      element.innerHTML = html;
  });
  });

// Policies
fetch("components/terms.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("terms").innerHTML = html;
  });
fetch("components/refunds.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("refunds").innerHTML = html;
  });
fetch("components/delivery.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("delivery").innerHTML = html;
  });
fetch("components/billing.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("billing").innerHTML = html;
  });
fetch("components/privacy.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("privacy").innerHTML = html;
  });