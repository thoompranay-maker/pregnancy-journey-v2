
export function renderDashboard(data) {
    const dashboard = document.getElementById("dashboard");

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
    <div class="progress-bar">
        <div class="progress-fill" style="width:${data.pregnancyProgress}%"></div>
    </div>
    <p>${data.pregnancyProgress}%</p>
</div>

    `;
}
