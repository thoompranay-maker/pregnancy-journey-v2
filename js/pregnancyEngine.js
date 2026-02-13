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
    pregnancyProgress,
    trimester
};
}
