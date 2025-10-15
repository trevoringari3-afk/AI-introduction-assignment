const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the structure of web pages using HTML.",
    lessons: ["Introduction", "Tags & Elements", "Forms"],
    completed: false
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Style your web pages with CSS.",
    lessons: ["Selectors", "Box Model", "Flexbox"],
    completed: false
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Make your web pages interactive with JS.",
    lessons: ["Variables", "Functions", "DOM Manipulation"],
    completed: false
  }
];

const courseListEl = document.getElementById("course-list");
const courseDetailEl = document.getElementById("course-detail");
const loginSection = document.getElementById("login-section");
const courseSection = document.getElementById("course-section");
const loginError = document.getElementById("login-error");

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple hardcoded credentials
  if (username === "student" && password === "learn123") {
    loginSection.classList.add("hidden");
    courseSection.classList.remove("hidden");
    renderCourses();
  } else {
    loginError.classList.remove("hidden");
  }
}

function renderCourses() {
  courseListEl.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
    card.onclick = () => showCourseDetail(course.id);
    courseListEl.appendChild(card);
  });
}

function showCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  courseDetailEl.classList.remove("hidden");
  courseDetailEl.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <h4>Lessons:</h4>
    <ul>${course.lessons.map(lesson => `<li>${lesson}</li>`).join("")}</ul>
    <p>Status: <strong>${course.completed ? "✅ Completed" : "❌ Not Completed"}</strong></p>
    <button onclick="markCompleted(${course.id})">Mark as Completed</button>
  `;
}

function markCompleted(courseId) {
  const course = courses.find(c => c.id === courseId);
  course.completed = true;
  showCourseDetail(courseId);
}

