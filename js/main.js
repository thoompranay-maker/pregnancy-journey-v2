
import { LMP_DATE } from "./config.js";
import { calculatePregnancyData } from "./pregnancyEngine.js";
import { renderDashboard } from "./uiRenderer.js";

const pregnancyData = calculatePregnancyData(LMP_DATE);
renderDashboard(pregnancyData);
