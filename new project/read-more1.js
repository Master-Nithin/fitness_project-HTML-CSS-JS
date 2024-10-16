function getRecommendation() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const weight = parseFloat(weightInput.value.trim());
    const height = parseFloat(heightInput.value.trim());

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid weight and height.");
        return;
    }

    let recommendation = "";
    if (weight < 60 && height < 160) {
        recommendation = "Recommendation for your profile: \n1. Squats (3*150 \n2. Lunges (3*15) \n3. Push-ups (3*15) \n4. Dumbbell Rows (3*15)";
    } else if (weight >= 60 && weight < 80 && height >= 160 && height < 180) {
        recommendation = "Recommendation for your profile: \n1. Deadlifts (3*15) \n2. Bench Press (3*15) \n3. Pull-ups (3*15) \n4. Overhead Press (3*15)";
    } else {
        recommendation = "Recommendation for your profile: \n1. Barbell Squats \n2. Barbell Deadlifts\n3. Bench Press\n4. Pull-ups";
    }

    document.getElementById("recommendation").innerText = recommendation;
}
