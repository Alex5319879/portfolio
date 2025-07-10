const announcements = [
  {
    title: "🎓 Completed Python for Everybody (Coursera)",
    date: "2025-07-01",
    message: "I’ve successfully completed the Python for Everybody certification! Check it out on my Certifications page."
  },
  {
    title: "📝 Added Contact Form",
    date: "2025-07-10",
    message: "A contact form is now available on the site. Feel free to leave a message!"
  }
];

// Render existing announcements
function renderAnnouncements() {
  const container = document.getElementById("announcement-list");
  container.innerHTML = "";

  announcements.forEach(item => {
    const box = document.createElement("div");
    box.className = "announcement";
    box.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Date:</strong> ${item.date}</p>
      <p>${item.message}</p>
    `;
    container.appendChild(box);
  });
}

// Add new announcement from form
document.getElementById("announcement-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value;

  announcements.unshift({ title, date, message }); // add to top
  renderAnnouncements();

  // Clear form
  this.reset();
});

// Initial render
renderAnnouncements();
