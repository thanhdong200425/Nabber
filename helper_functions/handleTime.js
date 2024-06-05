const timeDifference = (current, previous) => {
    const msPerMinute = 60000;
    const msPerHour = 60 * msPerMinute;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerMonth * 12;

    const elapsed = current - previous;
    switch (true) {
        case elapsed < msPerMinute:
            return "A few seconds ago";
        case elapsed < msPerHour:
            return Math.round(elapsed / msPerMinute) + " minutes ago";
        case elapsed < msPerDay:
            return Math.round(elapsed / msPerHour) + " hours ago";
        case elapsed < msPerMonth:
            return Math.round(elapsed / msPerDay) + " days ago";
        case elapsed < msPerYear:
            return Math.round(elapsed / msPerMonth) + " months ago";
        default:
            return Math.round(elapsed / msPerYear) + " years ago";
    }
};

export { timeDifference };
