
export function renderDashboard(data) {
const dashboard = document.getElementById("screen-container");

    dashboard.innerHTML = `
<div class="card">
    <h2>Week ${data.currentWeek}</h2>
    <p>Day ${data.currentDay}</p>
    <p><strong>${data.trimester}</strong></p>
</div>


        <div class="card">
            <h3>Due Date</h3>
            <p>${data.dueDate.toDateString()}</p>
        </div>

        <div class="card">
            <h3>Days Remaining</h3>
            <p>${data.daysRemaining} days</p>
        </div>

<div class="card">
    <h3>Pregnancy Progress</h3>
    <div class="progress-circle">
        <svg width="150" height="150">
            <circle
                cx="75"
                cy="75"
                r="65"
                class="circle-bg"
            />
            <circle
                cx="75"
                cy="75"
                r="65"
                class="circle-progress"
                style="stroke-dashoffset: ${440 - (440 * data.pregnancyProgress) / 100}"
            />
        </svg>
        <div class="circle-text">
            ${data.pregnancyProgress}%
        </div>
    </div>
</div>


    `;
}
