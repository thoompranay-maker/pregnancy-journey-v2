export function renderDashboard(data) {
    const container = document.getElementById("screen-container");

    container.innerHTML = `
        <div class="dashboard-grid">

            <!-- Trimester -->
            <div class="card">
            <div class="icon-wrapper">
            <div><img src="assets/icons/3d-flower.png" class="icon-3d" /> </div>
            </div>
                <h3>Trimester</h3>
                <p class="sub-text">🌸 Your journey stage</p>
                <div class="main-value">${data.trimester}</div>
            </div>

                        <!-- Current Age -->
            <div class="card">
            <div class="icon-wrapper">
            <div><img src="assets/icons/3d-pregnant.png" class="icon-3d" /> </div>
            </div>
                <h3>Current Age</h3>
                <p class="sub-text">👶 Growing every day</p>
                <div class="main-value">
                    ${data.currentWeek} Weeks ${data.currentDay} Days
                </div>
            </div>

        <div class="card">
            <div class="icon-wrapper">
            <div><img src="assets/icons/3d-calender.png" class="icon-3d" /> </div>
            </div>
            <h3> Due Date</h3>
            <p>${data.dueDate.toDateString()}</p>
        </div>

                    <!-- LMP Date -->
            <div class="card">
            <div class="icon-wrapper">
            <div><img src="assets/icons/3d-plant.png" class="icon-3d" /> </div>
            </div>
                <h3>LMP Date</h3>
                <p class="sub-text">🌱 Where it all began</p>
                <div class="main-value">
                    ${data.lmpDateString}
                </div>
            </div>

           <!-- Days Since LMP -->
            <div class="card">
            <div class="icon-wrapper">
            <div><img src="assets/icons/3d-date.png" class="icon-3d" /> </div>
            </div>
                <h3>Days Since LMP</h3>
                <p class="sub-text">⏳ Love in progress</p>
                <div class="main-value">
                    ${data.daysSinceLMP}
                </div>
                <p class="bottom-text">days completed</p>
            </div>

            <!-- Days to Due Date -->
            <div class="card">
            <div class="icon-wrapper">
            <div><img src="assets/icons/3d-countdown.png" class="icon-3d" /> </div>
            </div>
                <h3>Days to Due Date</h3>
                <p class="sub-text">🎀 Until we meet</p>
                <div class="main-value">
                    ${data.daysRemaining}
                </div>
                <p class="bottom-text">days remaining</p>
            </div>

        <!-- Separate Progress Section -->
        <div class="progress-section">
            <div class="card">
                <h3>Pregnancy Progress</h3>
                <div class="progress-circle">
                    <svg width="150" height="150">
                        <circle cx="75" cy="75" r="65" class="circle-bg"/>
                        <circle cx="75" cy="75" r="65"
                            class="circle-progress"
                            style="stroke-dashoffset: ${440 - (440 * data.pregnancyProgress) / 100}"
                        />
                    </svg>
                    <div class="circle-text">
                        ${data.pregnancyProgress}%
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderTimeline(data) {
    const container = document.getElementById("screen-container");

    container.innerHTML = `
        <div class="card">
            <h3>Pregnancy Timeline</h3>
            <p>Current Week: ${data.currentWeek} / 40</p>
            <div class="progress-bar">
                <div class="progress-fill"
                    style="width:${data.pregnancyProgress}%">
                </div>
            </div>
        </div>
    `;
}

export function renderMilestones(data) {
    const container = document.getElementById("screen-container");

    container.innerHTML = `
        <div class="card">
            <h3>Milestones</h3>
            ${data.currentWeek >= 12 ? "<p>✨ First Trimester Completed</p>" : ""}
            ${data.currentWeek >= 20 ? "<p>👶 Halfway There!</p>" : ""}
            ${data.currentWeek >= 28 ? "<p>💓 Third Trimester Begins</p>" : ""}
            ${data.currentWeek >= 36 ? "<p>🍼 Almost Delivery Time!</p>" : ""}
        </div>
    `;
}

export function renderPhotos() {
    const container = document.getElementById("screen-container");

    container.innerHTML = `
        <div class="card">
            <h3>Our Pregnancy Photos</h3>
            <div class="photo-grid">
                <img src="assets/photo1.jpg" />
                <img src="assets/photo2.jpg" />
                <img src="assets/photo3.jpg" />
                <img src="assets/photo4.jpg" />
            </div>
        </div>
    `;
}
