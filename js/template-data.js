// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load template data from JSON file
window.onload = function () {
    const templateKey = getQueryParam("template"); // Get 'template' from URL

    if (!templateKey) {
        console.warn("No template specified in URL.");
        return;
    }

    fetch("/js/templates.json")
        .then(response => response.json())
        .then(data => {
            const templateData = data[templateKey]; // Get the corresponding template

            if (templateData) {
                document.querySelectorAll("#title").forEach(element => {
                    element.innerText = templateData.title;
                });
                document.getElementById("pageTitle").innerText = templateData.title;
                document.querySelectorAll("#template-description").forEach(element => {
                    element.innerText = templateData.description;
                });
                document.getElementById("price").innerText = templateData.price;

                // document.getElementById("metaDescription").setAttribute("content", templateData.description);
                // document.getElementById("image").src = templateData.image;
                document.getElementById("image").alt = templateData.title;
            } else {
                console.error("Template not found.");
            }
        })
        .catch(error => console.error("Error loading templates:", error));
};
