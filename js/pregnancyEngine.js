export function calculatePregnancyData(lmp) {
    const today = new Date();

    const diffTime = today - lmp;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const currentWeek = Math.floor(diffDays / 7);
    const currentDay = diffDays % 7;

    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);

    const daysRemaining = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));

    const pregnancyProgress = Math.min(
        Math.floor((diffDays / 280) * 100),
        100
    );

    return {
        currentWeek,
        currentDay,
        dueDate,
        daysRemaining,
        pregnancyProgress
    };
}
