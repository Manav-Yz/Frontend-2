

  
// Select the table
const table = document.getElementById('books-table');

// Adjust Row Height
function adjustRowHeight(height) {
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(row => {
    row.style.height = `${height}px`;
  });
}

// Adjust Column Width
function adjustColumnWidth(columnIndex, width) {
  const cells = table.querySelectorAll(`tbody td:nth-child(${columnIndex}), thead th:nth-child(${columnIndex})`);
  cells.forEach(cell => {
    cell.style.width = `${width}px`;
  });
}

// Example Usage
// Adjust row height to 50px
adjustRowHeight(50);

// Adjust the first column width to 80px
adjustColumnWidth(1, 80);






// Upcoming Section Data
const futurePlans = [
  {
    title: "Reality Cube: Fate",
    description: `Jay and his friends embark on an exciting world tour organized by 
      the mysterious company Curiosity, aiming to study human behavior. However, 
      the trip takes a sinister turn when they accidentally fall into a river and 
      find themselves lost in a dense, uncharted forest. Struggling to survive, they 
      are eventually captured by the enigmatic and terrifying AFS. What secrets will 
      be uncovered, and how will they escape their captors? This gripping sequel is 
      filled with suspense, friendship, and unexpected twists!`,
    icon: "📖",
  },
  {
    title: "Event Announcement",
    description: `Mark your calendars! On February 20, 2025, join us for an exclusive 
      Author-Reader Interaction Program. Here’s what to expect:`,
    details: [
      "💬 Ask the author your burning questions.",
      "🎁 Access exclusive merchandise and collectibles.",
      "📚 Get a sneak peek at deleted scenes and extended content from your favorite books.",
    ],
    icon: "📅",
  },
];

// Render Upcoming Section
const renderUpcomingSection = () => {
  const upcomingContainer = document.getElementById("upcoming");

  // Add a document-style container
  upcomingContainer.innerHTML = `
    <div class="document-page">
      <h2>Upcoming Plans</h2>
    </div>
  `;

  const documentPage = upcomingContainer.querySelector(".document-page");

  // Add future plans dynamically
  futurePlans.forEach((plan) => {
    const contentBlock = document.createElement("div");
    contentBlock.classList.add("content-block");

    contentBlock.innerHTML = `
      <h3>${plan.icon} ${plan.title}</h3>
      <p>${plan.description}</p>
    `;

    if (plan.details) {
      const detailsList = document.createElement("ul");
      plan.details.forEach((detail) => {
        const listItem = document.createElement("li");
        listItem.textContent = detail;
        detailsList.appendChild(listItem);
      });
      contentBlock.appendChild(detailsList);
    }

    documentPage.appendChild(contentBlock);
  });
};

// Call the function to render the section
renderUpcomingSection();


document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email-input").value.trim();
  if (emailInput) {
    document.getElementById("newsletter-form").style.display = "none";
    document.getElementById("success-message").style.display = "block";
  }
});
