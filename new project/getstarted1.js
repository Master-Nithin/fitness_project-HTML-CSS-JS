document.getElementById('exerciseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var height = parseInt(document.getElementById('height').value);
    var weight = parseInt(document.getElementById('weight').value);
    
    var result = document.getElementById('exerciseResult');
    result.innerHTML = '';
    
    if (isNaN(height) || isNaN(weight)) {
      result.innerHTML = '<p>Please enter valid height and weight.</p>';
      return;
    }
    
    if (height < 120 || weight < 30) {
      result.innerHTML = '<p>Sorry, we cannot provide exercise recommendations for individuals with extreme height or weight.</p>';
      return;
    }
    
    var exercise = 'you can do that whatever you need in your own way';
    
    if (height >= 180 && weight >= 80) {
      exercise = 'You should focus on strength training exercises like weightlifting and bodyweight exercises such as push-ups, squats, and pull-ups.';
    } else if (height >= 160 && weight >= 60) {
      exercise = 'You can benefit from a combination of cardio exercises like running or cycling, along with strength training exercises such as lunges, deadlifts, and bench presses.';
    } else {
      exercise = 'You may want to start with light cardio exercises like walking or swimming, and gradually incorporate strength training exercises such as planks, bicep curls, and shoulder presses.';
    }
    
    result.innerHTML = '<p>' + exercise + '</p>';
  });
  
  function clearForm() {
    document.getElementById('exerciseForm').reset();
    document.getElementById('exerciseResult').innerHTML = '';
  }
  