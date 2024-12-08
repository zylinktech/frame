window.addEventListener("load", () => {
  const images = document.querySelectorAll("#background img");
  let currentIndex = 0;

  // Function to switch images
  function switchImage() {
    // Remove 'active' class from the current image
    images[currentIndex].classList.remove("active");

    // Calculate the next index
    currentIndex = (currentIndex + 1) % images.length;

    // Add 'active' class to the new image
    images[currentIndex].classList.add("active");
  }

  // Set an interval to change the background every 10 seconds
  setInterval(switchImage, 10000);

  // Announcements cycling functionality
  const announcements = [
    "This is one out of 4 example announements!",
    "We hope you enjoy this project",
    "Announement 3",
    "Announcement 4",
  ];
  let currentAnnouncementIndex = 0;

  const announcementText = document.getElementById("announcement-text");

  // Function to update announcements
  function updateAnnouncement() {
    announcementText.textContent = announcements[currentAnnouncementIndex];
    currentAnnouncementIndex = (currentAnnouncementIndex + 1) % announcements.length;
  }

  // Start cycling announcements
  updateAnnouncement(); // Set the initial announcement
  setInterval(updateAnnouncement, 30000); // Update every 30 seconds

  // Clock function
  clock();

  function clock() {
    const today = new Date();

    let hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const hourTime = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    const ampm = hours < 12 ? "AM" : "PM";
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const date = `${monthList[month]} ${day}, ${year}`;
    const time = `${hourTime}:${minute}:${second} ${ampm}`;
    const dateTime = `${date} - ${time}`;

    const clockElement = document.getElementById("date-time");
    if (clockElement) {
      clockElement.innerHTML = dateTime;
    } else {
      console.error("Clock element with ID 'date-time' not found.");
    }

    setTimeout(clock, 1000);
  }
});
