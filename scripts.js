document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.getElementById("current-time");
  const currentDayElement = document.getElementById("current-day");

  function updateTimeAndDay() {
    const now = new Date();
    currentTimeElement.textContent = now.toUTCString();
    currentDayElement.textContent = now.toLocaleDateString(undefined, {
      weekday: "long",
    });
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});