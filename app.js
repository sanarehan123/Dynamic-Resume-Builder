// Input Elements
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

const educationInput = document.getElementById("educationInput");
const addEducationButton = document.getElementById("addEducationButton");
const educationList = document.getElementById("educationList");

const workInput = document.getElementById("workInput");
const addWorkButton = document.getElementById("addWorkButton");
const workList = document.getElementById("workList");

const skillInput = document.getElementById("skillInput");
const addSkillButton = document.getElementById("addSkillButton");
const skillList = document.getElementById("skillList");

const generateResumeButton = document.getElementById("generateResumeButton");
const resumePreview = document.getElementById("resumePreview");

// Event Listeners for Adding Items
addEducationButton.addEventListener("click", () => addListItem(educationInput, educationList));
addWorkButton.addEventListener("click", () => addListItem(workInput, workList));
addSkillButton.addEventListener("click", () => addListItem(skillInput, skillList));

// Function to Add List Items
function addListItem(inputField, list) {
    if (inputField.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = inputField.value;
        listItem.setAttribute("contenteditable", "true");
        list.appendChild(listItem);
        inputField.value = "";
    }
}

// Generate Resume Preview
generateResumeButton.addEventListener("click", () => {
    resumePreview.innerHTML = `
        <h3 contenteditable="true">${nameInput.value || "Your Name"}</h3>
        <p contenteditable="true">Email: ${emailInput.value || "example@email.com"}</p>
        <p contenteditable="true">Phone: ${phoneInput.value || "123-456-7890"}</p>

        <h4>Education</h4>
        <ul>${generateEditableList(educationList)}</ul>

        <h4>Work Experience</h4>
        <ul>${generateEditableList(workList)}</ul>

        <h4>Skills</h4>
        <ul>${generateEditableList(skillList)}</ul>
    `;
});

// Helper Function for Generating Editable Lists
function generateEditableList(list) {
    let html = "";
    list.querySelectorAll("li").forEach((item) => {
        html += `<li contenteditable="true">${item.textContent}</li>`;
    });
    return html;
}
