document.addEventListener('DOMContentLoaded', function() {
  const timeElement = document.getElementById('time');  

  function updateTime() {
    const currentTime = new Date();  

 
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

   
    timeElement.textContent = hours + ':' + minutes + ':' + seconds; 
  }

  
  setInterval(updateTime, 1000);

  
  updateTime();
});
