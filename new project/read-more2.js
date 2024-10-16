document.getElementById('exerciseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var age = parseInt(document.getElementById('age').value);
    var fitnessLevel = document.getElementById('fitness-level').value;
    
    var result = document.getElementById('exerciseResult');
    result.innerHTML = '';
    
    if (isNaN(age)) {
      result.innerHTML = '<p>Please enter a valid age.</p>';
      return;
    }
    
    if (fitnessLevel === '') {
      result.innerHTML = '<p>Please select your fitness level.</p>';
      return;
    }
    
    var exercise = '';
    
    if (age < 18) {
      exercise = 'As you are under 18, it is recommended to consult with a fitness professional before starting any exercise regimen.';
    } else {
      if (fitnessLevel === 'beginner') {
        exercise = 'For cardio, you can start with brisk walking, jogging, or cycling for about 30 minutes, 3 times a week.';
      } else if (fitnessLevel === 'intermediate') {
        exercise = 'For intermediate level, you can try activities like running, swimming, or aerobics for 45 minutes to an hour, 4-5 times a week.';
      } else if (fitnessLevel === 'advanced') {
        exercise = 'For advanced level, you can incorporate high-intensity interval training (HIIT), running sprints, or intense cycling sessions for 60 minutes, 5-6 times a week.';
      }
    }
    
    result.innerHTML = '<p>' + exercise + '</p>';
  });
  
  function clearForm() {
    document.getElementById('exerciseForm').reset();
    document.getElementById('exerciseResult').innerHTML = '';
  }
  