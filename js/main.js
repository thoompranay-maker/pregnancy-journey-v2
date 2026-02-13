import { LMP_DATE } from "./config.js";
import { calculatePregnancyData } from "./pregnancyEngine.js";
import {
    renderDashboard,
    renderTimeline,
    renderMilestones
} from "./uiRenderer.js";

const navButtons = document.querySelectorAll(".nav-btn");

function updateScreen(screen) {
    const data = calculatePregnancyData(LMP_DATE);

    if (screen === "dashboard") {
        renderDashboard(data);
    }

    if (screen === "timeline") {
        renderTimeline(data);
    }

    if (screen === "milestones") {
        renderMilestones(data);
    }
}

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        navButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const screen = button.getAttribute("data-screen");
        updateScreen(screen);
    });
});

// Default load
updateScreen("dashboard");

// Auto refresh every second for dashboard only
setInterval(() => {
    const active = document.querySelector(".nav-btn.active")
        .getAttribute("data-screen");

    if (active === "dashboard") {
        updateScreen("dashboard");
    }
}, 1000);
