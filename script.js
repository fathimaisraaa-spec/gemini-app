const activityForm = document.getElementById('activity-form');
const activityInput = document.getElementById('activity-input');
const durationInput = document.getElementById('duration-input');
const activityList = document.getElementById('activity-list');

activityForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const activity = activityInput.value;
    const duration = durationInput.value;

    if (activity && duration) {
        addActivity(activity, duration);
        activityInput.value = '';
        durationInput.value = '';
    }
});

function addActivity(activity, duration) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${activity} - ${duration} minutes</span>
    `;
    activityList.appendChild(li);
}