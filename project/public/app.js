// ── Academic Calendar ──────────────────────────────────────────
const ACADEMIC_EVENTS = [
  // Fall 2025
  { date: "2025-08-18", name: "Residence Halls Open — New Students",        type: "housing"      },
  { date: "2025-08-21", name: "Residence Halls Open — Continuing Students", type: "housing"      },
  { date: "2025-08-22", name: "Final Registration Day",                      type: "registration" },
  { date: "2025-08-25", name: "Classes Begin",                               type: "classes"      },
  { date: "2025-09-01", name: "Labor Day — No Classes",                      type: "break"        },
  { date: "2025-09-03", name: "Last Day to Add/Drop 1st 7-Week Course",      type: "deadline"     },
  { date: "2025-09-08", name: "Last Day to Add a Full-Term Course",          type: "deadline"     },
  { date: "2025-09-15", name: "Census Date",                                 type: "deadline"     },
  { date: "2025-10-02", name: "Last Day to Withdraw from 1st 7-Week Course", type: "deadline"     },
  { date: "2025-10-04", name: "Academic Mini-Break",                         type: "break"        },
  { date: "2025-10-07", name: "Academic Mini-Break Ends",                    type: "break"        },
  { date: "2025-10-20", name: "2nd 7-Week Courses Begin",                    type: "classes"      },
  { date: "2025-10-29", name: "Last Day to Add/Drop 2nd 7-Week Course",      type: "deadline"     },
  { date: "2025-11-17", name: "Course Registration for Spring Opens",        type: "registration" },
  { date: "2025-11-19", name: "Last Day to Withdraw from Full-Term Course",  type: "deadline"     },
  { date: "2025-11-26", name: "Thanksgiving Break",                          type: "break"        },
  { date: "2025-11-28", name: "Thanksgiving Break Ends",                     type: "break"        },
  { date: "2025-12-03", name: "Last Day to Withdraw from 2nd 7-Week Course", type: "deadline"     },
  { date: "2025-12-05", name: "Last Day to Withdraw/LOA from College",       type: "deadline"     },
  { date: "2025-12-05", name: "Classes End — Alfred Campus",                 type: "classes"      },
  { date: "2025-12-08", name: "Final Exams Begin",                           type: "exam"         },
  { date: "2025-12-12", name: "Final Exams End",                             type: "exam"         },
  { date: "2025-12-16", name: "Final Grades Posted",                         type: "grades"       },
  // Spring 2026
  { date: "2026-01-15", name: "Residence Halls Open — New Students",        type: "housing"      },
  { date: "2026-01-16", name: "Final Registration Day",                      type: "registration" },
  { date: "2026-01-20", name: "Classes Begin",                               type: "classes"      },
  { date: "2026-01-28", name: "Last Day to Add/Drop 1st 7-Week Course",      type: "deadline"     },
  { date: "2026-02-02", name: "Last Day to Add a Full-Term Course",          type: "deadline"     },
  { date: "2026-02-09", name: "Census Date",                                 type: "deadline"     },
  { date: "2026-02-26", name: "Last Day to Withdraw from 1st 7-Week Course", type: "deadline"     },
  { date: "2026-02-27", name: "Interim Grade Period Ends",                   type: "grades"       },
  { date: "2026-03-05", name: "Interim Grades Posted on Banner",             type: "grades"       },
  { date: "2026-03-07", name: "Spring Break",                                type: "break"        },
  { date: "2026-03-15", name: "Spring Break Ends",                           type: "break"        },
  { date: "2026-03-16", name: "2nd 7-Week Courses Begin",                    type: "classes"      },
  { date: "2026-03-25", name: "Last Day to Add/Drop 2nd 7-Week Course",      type: "deadline"     },
  { date: "2026-04-06", name: "Course Registration for Fall Opens",          type: "registration" },
  { date: "2026-04-10", name: "Course Registration for Fall Closes",         type: "registration" },
  { date: "2026-04-20", name: "Last Day to Withdraw from Full-Term Course",  type: "deadline"     },
  { date: "2026-04-28", name: "Last Day to Withdraw from 2nd 7-Week Course", type: "deadline"     },
  { date: "2026-05-01", name: "Last Day to Withdraw/LOA from College",       type: "deadline"     },
  { date: "2026-05-01", name: "Classes End — Alfred Campus",                 type: "classes"      },
  { date: "2026-05-04", name: "Final Exams Begin",                           type: "exam"         },
  { date: "2026-05-08", name: "Final Exams End",                             type: "exam"         },
  { date: "2026-05-09", name: "Commencement • 1:00 PM",                      type: "ceremony"     },
  { date: "2026-05-09", name: "Residence Halls Close • 7:00 PM",             type: "housing"      },
  { date: "2026-05-13", name: "Final Grades Posted",                         type: "grades"       },
  { date: "2026-05-20", name: "Final Graduation Lists Due to Registrar",     type: "deadline"     },
];

const EVENT_STYLE = {
  deadline:     { color: "#ea580c", bg: "#fff7ed", label: "Deadline"     },
  break:        { color: "#16a34a", bg: "#dcfce7", label: "Break"        },
  exam:         { color: "#dc2626", bg: "#fee2e2", label: "Exams"        },
  registration: { color: "#7c3aed", bg: "#ede9fe", label: "Registration" },
  classes:      { color: "#0369a1", bg: "#e0f2fe", label: "Classes"      },
  grades:       { color: "#0f4c81", bg: "#dbeafe", label: "Grades"       },
  housing:      { color: "#b45309", bg: "#fef3c7", label: "Housing"      },
  ceremony:     { color: "#b45309", bg: "#fef3c7", label: "Ceremony"     },
};

function getUpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const in7Days = new Date(today);
  in7Days.setDate(today.getDate() + 7);

  const upcoming = ACADEMIC_EVENTS
    .map(e => ({ ...e, dateObj: new Date(e.date + "T00:00:00") }))
    .filter(e => e.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj);

  const within7 = upcoming.filter(e => e.dateObj <= in7Days);
  return within7.length >= 2 ? within7 : upcoming.slice(0, 5);
}

function formatEventDate(dateObj) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (dateObj.getTime() === today.getTime()) return "Today";
  if (dateObj.getTime() === tomorrow.getTime()) return "Tomorrow";
  return dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function renderUpcoming() {
  const strip = document.getElementById("upcomingStrip");
  const sub   = document.getElementById("upcomingSub");
  const events = getUpcomingEvents();

  if (events.length === 0) {
    strip.innerHTML = '<p class="upcoming-empty">No upcoming events — enjoy the break!</p>';
    sub.textContent = "";
    return;
  }

  sub.textContent = `next ${events.length} event${events.length !== 1 ? "s" : ""}`;
  strip.innerHTML = "";

  events.forEach(({ name, dateObj, type }) => {
    const style = EVENT_STYLE[type] ?? EVENT_STYLE.classes;
    const card  = document.createElement("div");
    card.className = "event-card";
    card.setAttribute("role", "listitem");
    card.style.setProperty("--event-color", style.color);
    card.style.setProperty("--event-bg",    style.bg);
    card.innerHTML = `
      <span class="event-date">${formatEventDate(dateObj)}</span>
      <span class="event-name">${name}</span>
      <span class="event-badge">${style.label}</span>
    `;
    strip.appendChild(card);
  });
}

// ── Tools ──────────────────────────────────────────────────────
const searchInput = document.getElementById("searchInput");
const toolsGrid = document.getElementById("toolsGrid");
const categoryTabs = document.getElementById("categoryTabs");

let allTools = [];
let activeCategory = "All";

const TOOL_ICONS = {
  1:  "✉️",
  2:  "🎓",
  3:  "📋",
  4:  "📅",
  5:  "💰",
  6:  "💳",
  7:  "🍽️",
  8:  "🏠",
  9:  "📚",
  10: "🛠️",
};

const CATEGORY_STYLE = {
  "Communication": { color: "#7c3aed", bg: "#ede9fe" },
  "Academics":     { color: "#0369a1", bg: "#e0f2fe" },
  "Finance":       { color: "#047857", bg: "#d1fae5" },
  "Campus Life":   { color: "#b45309", bg: "#fef3c7" },
  "Support":       { color: "#b91c1c", bg: "#fee2e2" },
};

function createToolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Open ${tool.name}`);

  const style = CATEGORY_STYLE[tool.category] ?? { color: "#0f4c81", bg: "#dbeafe" };
  card.style.setProperty("--card-accent", style.color);

  const icon = TOOL_ICONS[tool.id] ?? "🔗";

  card.innerHTML = `
    <span class="tool-icon" aria-hidden="true">${icon}</span>
    <h2 class="tool-name">${tool.name}</h2>
    <p class="tool-desc">${tool.description}</p>
    <span class="tool-category" style="color:${style.color};background:${style.bg}">${tool.category}</span>
  `;

  const handleAction = () => {
    if (tool.link && tool.link !== "#") {
      window.open(tool.link, "_blank", "noopener,noreferrer");
    } else {
      alert(tool.name);
    }
  };

  card.addEventListener("click", handleAction);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleAction();
    }
  });

  return card;
}

function renderTools(tools) {
  toolsGrid.innerHTML = "";

  if (tools.length === 0) {
    toolsGrid.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon" aria-hidden="true">🔍</span>
        <p class="empty-state-text">No tools found</p>
        <p class="empty-state-sub">Try a different search or category</p>
      </div>
    `;
    return;
  }

  tools.forEach((tool) => toolsGrid.appendChild(createToolCard(tool)));
}

function filterTools(query, category) {
  const q = query.trim().toLowerCase();
  return allTools.filter((tool) => {
    const inCategory = category === "All" || tool.category === category;
    if (!q) return inCategory;
    const nameMatch = tool.name.toLowerCase().includes(q);
    const tagMatch = tool.tags.some((tag) => tag.toLowerCase().includes(q));
    return inCategory && (nameMatch || tagMatch);
  });
}

function applyFilters() {
  renderTools(filterTools(searchInput.value, activeCategory));
}

categoryTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  activeCategory = tab.dataset.category;
  categoryTabs.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t === tab);
    t.setAttribute("aria-selected", t === tab ? "true" : "false");
  });
  applyFilters();
});

searchInput.addEventListener("input", applyFilters);

async function loadTools() {
  try {
    const res = await fetch("/api/tools");
    if (!res.ok) throw new Error("Failed to load tools");
    allTools = await res.json();
    renderTools(allTools);
  } catch (err) {
    toolsGrid.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon" aria-hidden="true">⚠️</span>
        <p class="empty-state-text">Unable to load tools</p>
        <p class="empty-state-sub">Please try again later</p>
      </div>
    `;
    console.error(err);
  }
}

loadTools();
renderUpcoming();
