
import { LMP_DATE } from "./config.js";
import { calculatePregnancyData } from "./pregnancyEngine.js";
import { renderDashboard } from "./uiRenderer.js";

const pregnancyData = calculatePregnancyData(LMP_DATE);
renderDashboard(pregnancyData);

if (pregnancyData.trimester === "First Trimester") {
    document.body.style.background =
        "linear-gradient(to bottom, #fde2e4, #f8edeb)";
} else if (pregnancyData.trimester === "Second Trimester") {
    document.body.style.background =
        "linear-gradient(to bottom, #e0c3fc, #8ec5fc)";
} else {
    document.body.style.background =
        "linear-gradient(to bottom, #ffecd2, #fcb69f)";
}

const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active class from all
        navButtons.forEach(btn => btn.classList.remove("active"));

        // Add active to clicked
        button.classList.add("active");

        const screen = button.getAttribute("data-screen");

        if (screen === "dashboard") {
            updateDashboard();
        }

        if (screen === "timeline") {
            document.getElementById("screen-container").innerHTML = `
                <div class="card">
                    <h3>Pregnancy Timeline</h3>
                    <p>Week ${calculatePregnancyData(LMP_DATE).currentWeek} of 40</p>
                </div>
            `;
        }

        if (screen === "milestones") {
            document.getElementById("screen-container").innerHTML = `
                <div class="card">
                    <h3>Milestones</h3>
                    <p>✨ 12 Weeks Completed</p>
                    <p>👶 First Trimester Done</p>
                </div>
            `;
        }
    });
});
