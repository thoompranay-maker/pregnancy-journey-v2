
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
