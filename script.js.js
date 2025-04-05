document.addEventListener('DOMContentLoaded', function() {
  const timeElement = document.getElementById('time');  // Получаем элемент для отображения времени

  function updateTime() {
    const currentTime = new Date();  // Получаем текущее время

    // Форматируем время, чтобы всегда было 2 цифры
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    // Обновляем содержимое элемента с временем
    timeElement.textContent = hours + ':' + minutes + ':' + seconds;  // Используем обычное соединение строк
  }

  // Обновляем время каждую секунду
  setInterval(updateTime, 1000);

  // Запуск функции сразу при загрузке страницы
  updateTime();
});