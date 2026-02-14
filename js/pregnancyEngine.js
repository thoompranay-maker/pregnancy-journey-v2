export function calculatePregnancyData(lmp) {
    const today = new Date();

    const diffTime = today - lmp;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const currentWeek = Math.floor(diffDays / 7);
    const currentDay = diffDays % 7;

    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);

    const timeRemaining = dueDate - today;

    const daysRemaining = Math.floor(
        timeRemaining / (1000 * 60 * 60 * 24)
    );

    const hoursRemaining = Math.floor(
        (timeRemaining / (1000 * 60 * 60)) % 24
    );

    const minutesRemaining = Math.floor(
        (timeRemaining / (1000 * 60)) % 60
    );

    const secondsRemaining = Math.floor(
        (timeRemaining / 1000) % 60
    );

    const pregnancyProgress = Math.min(
        Math.floor((diffDays / 280) * 100),
        100
    );

    const currentTrimesterNumber =
    data.trimester === "First Trimester" ? 1 :
    data.trimester === "Second Trimester" ? 2 : 3;

    let trimester;

    if (currentWeek <= 13) {
        trimester = "First Trimester";
    } else if (currentWeek <= 27) {
        trimester = "Second Trimester";
    } else {
        trimester = "Third Trimester";
    }

    return {
        currentWeek,
        currentDay,
        dueDate,
        daysRemaining,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining,
        pregnancyProgress,
        trimester,
        lmpDateString: lmp.toDateString(),
    daysSinceLMP: diffDays,
            totalWeeks: 40,
    totalDays: 280,
    currentDayNumber: diffDays,
    currentTrimesterNumber,
    totalTrimesters: 3
    };
}
