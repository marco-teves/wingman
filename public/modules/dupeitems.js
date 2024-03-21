
export function dupeWorkoutItems(workoutNames) {
    const templateItem = document.querySelector('#workoutItemTemplate'); // Update the selector to target .dropDown
    const options = document.querySelector('.options');

    // Ensure the template element is found before proceeding
    if (templateItem) {
        for (let i = 0; i < workoutNames.length; i++) {
            const clone = document.importNode(templateItem.content, true);
            const workoutNameElement = clone.querySelector('#workoutName');
            workoutNameElement.textContent = workoutNames[i];
            options.appendChild(clone);
        }
    } else {
        console.error("Workout item template not found.");
    }
}



export function dupeWorkoutSlots() {
    const template = document.getElementById('workoutSlotsTemplate');
    const workoutPlan = document.querySelector('.workoutPlan');
  
    for (let i = 0; i < 6; i++) {
        const clone = document.importNode(template.content, true);
        workoutPlan.appendChild(clone);
    }
    
}