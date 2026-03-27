// ============================================
// 1. DARK MODE TOGGLE
// ============================================
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Load saved theme preference
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
}

// ============================================
// 2. INITIALIZE AOS (Animate On Scroll)
// ============================================
AOS.init({
  duration: 800,
  once: false,
  offset: 100,
  easing: "ease-in-out"
});

// ============================================
// 3. TYPED.JS - Animated Hero Text
// ============================================
const typingElement = document.getElementById("typing");
if (typingElement) {
  new Typed(typingElement, {
    strings: [
      "B.E. CSE (AIML) Student",
      "Sports Player",
      "AI Enthusiast",
      "Web Developer",
      "Quantum Explorer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    superSubscriptDelay: 1000,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "|"
  });
}

// ============================================
// 4. COUNTER ANIMATION (Stats Section)
// ============================================
const counters = document.querySelectorAll(".counter");
let hasAnimated = false;

const animateCounters = () => {
  if (hasAnimated) return;

  const statSection = document.getElementById("stats");
  if (!statSection) return;

  const sectionPos = statSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    hasAnimated = true;

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      const duration = 1500; // ms
      const start = Date.now();

      const updateCounter = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(target * progress);
        counter.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });

    window.removeEventListener("scroll", checkCounterScroll);
  }
};

const checkCounterScroll = () => animateCounters();
window.addEventListener("scroll", checkCounterScroll);
animateCounters();

// ============================================
// 5. SKILLS CHART (Chart.js)
// ============================================
const skillsChartCanvas = document.getElementById("skillsChart");
if (skillsChartCanvas) {
  const ctx = skillsChartCanvas.getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Python", "C/C++", "ML/AI", "Qiskit", "Web Dev", "Problem Solving"],
      datasets: [
        {
          label: "Proficiency Level",
          data: [88, 82, 84, 75, 86, 90],
          borderColor: "rgb(225, 29, 116)",
          backgroundColor: "rgba(225, 29, 116, 0.2)",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "rgb(225, 29, 116)",
          pointHoverRadius: 7,
          fill: true,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            font: { size: 12 }
          },
          grid: { color: "rgba(225, 29, 116, 0.1)" }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom"
        }
      }
    }
  });
}

// ============================================
// 6. FLOATING ACTION BUTTON (FAB)
// ============================================
const mainFab = document.getElementById("mainFab");
const fabMenu = document.getElementById("fabMenu");
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (mainFab && fabMenu) {
  mainFab.addEventListener("click", () => {
    fabMenu.classList.toggle("open");
  });
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (fabMenu) fabMenu.classList.remove("open");
  });
}

// Hide FAB when scrolling to top
window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    if (fabMenu) fabMenu.classList.remove("open");
  }
});

// ============================================
// 7. RESUME DOWNLOAD (html2pdf)
// ============================================
const downloadResumeBtn = document.getElementById("downloadResume");
if (downloadResumeBtn) {
  downloadResumeBtn.addEventListener("click", () => {
    const resumeContent = `
      <h1>Subhasini Ravikumar</h1>
      <h2>B.E. CSE (AIML) Student | Sports Player</h2>
      
      <h3>Contact Information</h3>
      <p>Email: rtsubhasini978@gmail.com | Location: Namakkal, India</p>
      
      <h3>Education</h3>
      <p>B.E. CSE (AIML), 3rd Year, 6th Semester
      K.S. Rangasamy College of Technology, Tiruchengode
      Future Goal: M.E. AIML in Germany</p>
      
      <h3>Technical Skills</h3>
      <p>Languages: Python (88%), C (82%), C++ (80%)
      Specialization: Machine Learning & AI (84%), Qiskit (75%), HTML/CSS/JS (86%)
      Tools: VS Code, AWS, Git, GitHub</p>
      
      <h3>Achievements</h3>
      <p>• University Gold Medalist - Weight Lifting
      • University Gold Medalist - Cricket
      • Recognized for dual sports achievements
      • Active in AI/ML, Web, and Cloud certifications</p>
      
      <h3>Projects</h3>
      <p>1. T-shirt Design App (AWS, AI/ML Integration)
      2. Quantum Circuit Simulation (Python, Qiskit)
      3. Portfolio Website (Node.js, Express, React)</p>
      
      <h3>Goals</h3>
      <p>Short-term: Complete B.E. with strong projects
      Mid-term: Pursue M.E. AIML in Germany
      Long-term: Work in AI/ML research or full-stack development</p>
    `;

    const element = document.createElement("div");
    element.innerHTML = resumeContent;
    element.style.padding = "20px";
    element.style.fontFamily = "Poppins, sans-serif";

    const opt = {
      margin: 10,
      filename: "Subhasini_Ravikumar_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" }
    };

    html2pdf().set(opt).from(element).save();
  });
}

// ============================================
// 8. EXISTING FEATURES (Menu, Navigation, Form)
// ============================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const navAnchors = document.querySelectorAll(".nav-links a");
const hasHashNavigation = Array.from(navAnchors).some((link) =>
  (link.getAttribute("href") || "").startsWith("#")
);

if (hasHashNavigation) {
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  const setActiveByScroll = () => {
    let currentId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });

    navAnchors.forEach((anchor) => {
      const href = anchor.getAttribute("href") || "";
      anchor.classList.toggle("active", href === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", setActiveByScroll);
  setActiveByScroll();
} else {
  const pathname = window.location.pathname.split("/").pop() || "index.html";
  navAnchors.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === pathname) {
      link.classList.add("active");
    }
  });
}

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const note = document.getElementById("formNote");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);

    if (!payload.name || !payload.message || !isEmailValid) {
      note.textContent = "Please fill all fields with valid details.";
      note.style.color = "#b00045";
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        note.textContent = result.message || "Unable to send message now.";
        note.style.color = "#b00045";
        return;
      }

      note.textContent = "Message sent successfully. Thank you!";
      note.style.color = "#127a40";
      contactForm.reset();
    } catch (error) {
      note.textContent = "Server is not reachable. Please run backend and try again.";
      note.style.color = "#b00045";
    }
  });
}

