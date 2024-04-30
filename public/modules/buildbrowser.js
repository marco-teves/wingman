export async function buildInfoBrowser() {
    const infoDiv = document.getElementById('browseInfo');
    const playlistOptions = document.getElementById('playlistOptionsTemplate');

    const response = await fetch('/getInfoPageData');
    if (!response.ok) {
        throw new Error('Failed to fetch info page data');
    }
    const infoPageData = await response.json();
    
    for (const activity of infoPageData) {
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('workoutDescriptions');

        const nameParagraph = document.createElement('p');
        nameParagraph.id = 'workoutInfoName';
        nameParagraph.textContent = activity.activity_name;
        activityDiv.appendChild(nameParagraph);

        const durationParagraph = document.createElement('p');
        durationParagraph.id = 'workoutInfoDuration';
        durationParagraph.textContent = `Duration: ${activity.activity_duration} Seconds`;
        activityDiv.appendChild(durationParagraph);

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.id = 'workoutInfoDescription';
        descriptionParagraph.textContent = activity.activity_description; // Access activity_description property
        activityDiv.appendChild(descriptionParagraph);

        infoDiv.appendChild(activityDiv);
    }
};

