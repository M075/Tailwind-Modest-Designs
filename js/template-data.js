// This file is for template.html
// Allows for fetching template data from multiple JSON files and updating the page with the data

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// List of JSON files to search
const templateJsonFiles = [
    "js/visionary-info-templates.json",
    "js/essentials-store-templates.json",
    "js/standard-templates.json"
];

// Try to find the template in each JSON file
async function fetchTemplateData(templateKey) {
    for (const file of templateJsonFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) continue;
            const data = await response.json();
            if (data[templateKey]) {
                return data[templateKey];
            }
        } catch (e) {
            // Ignore errors and try next file
            continue;
        }
    }
    return null;
}

window.onload = async function () {
    const templateKey = getQueryParam("template"); // Get 'template' from URL

    if (!templateKey) {
        console.warn("No template specified in URL.");
        return;
    }

    const templateData = await fetchTemplateData(templateKey);

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
        console.error("Template not found in any JSON file.");
    }
};