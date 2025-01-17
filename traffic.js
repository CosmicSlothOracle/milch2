// traffic.js

document.addEventListener('DOMContentLoaded', () => {
    const sessionStart = Date.now();

    // Increment visitor count (localStorage approach)
    const visitorCountKey = 'visitorCount';
    let visitorCount = parseInt(localStorage.getItem(visitorCountKey)) || 0;
    visitorCount += 1;
    localStorage.setItem(visitorCountKey, visitorCount);

    console.log(`Visitor #${visitorCount}`);

    // Track time spent on the page
    window.addEventListener('beforeunload', () => {
        const sessionEnd = Date.now();
        const timeSpent = Math.round((sessionEnd - sessionStart) / 1000); // in seconds
        console.log(`Time spent on this session: ${timeSpent} seconds`);
    });
});
