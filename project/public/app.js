// ── Academic Calendar ──────────────────────────────────────────
// List of important dates for the current academic year
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

// Colors and labels used for each event type in the strip
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

// Returns the next few upcoming events from today
function getUpcomingEvents() {
  // Set today to midnight so time-of-day doesn't affect comparisons
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate what day is 7 days from now
  const in7Days = new Date(today);
  in7Days.setDate(today.getDate() + 7);

  const upcoming = ACADEMIC_EVENTS
    .map(e => ({ ...e, dateObj: new Date(e.date + "T00:00:00") })) // convert date string to Date object
    .filter(e => e.dateObj >= today)                                // remove past events
    .sort((a, b) => a.dateObj - b.dateObj);                        // sort soonest first

  // If there are at least 2 events within the next 7 days, show those
  // Otherwise just show the next 5 upcoming events regardless of date
  const within7 = upcoming.filter(e => e.dateObj <= in7Days);
  return within7.length >= 2 ? within7 : upcoming.slice(0, 5);
}

// Formats a date as "Today", "Tomorrow", or a short date like "May 9"
function formatEventDate(dateObj) {
  // Get today and tomorrow at midnight for clean comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (dateObj.getTime() === today.getTime()) return "Today";
  if (dateObj.getTime() === tomorrow.getTime()) return "Tomorrow";

  // Format as "May 9", "Jan 20", etc.
  return dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// Builds and renders the upcoming events strip at the top of the page
function renderUpcoming() {
  const strip = document.getElementById("upcomingStrip"); // the scrollable row of event cards
  const sub   = document.getElementById("upcomingSub");   // the "next X events" label
  const events = getUpcomingEvents();

  // If no upcoming events, show a placeholder message and exit
  if (events.length === 0) {
    strip.innerHTML = '<p class="upcoming-empty">No upcoming events — enjoy the break!</p>';
    sub.textContent = "";
    return;
  }

  // Update the count label next to "Coming Up"
  sub.textContent = `next ${events.length} event${events.length !== 1 ? "s" : ""}`;
  strip.innerHTML = ""; // clear any previously rendered cards

  // Build and append a card for each upcoming event
  events.forEach(({ name, dateObj, type }) => {
    const style = EVENT_STYLE[type] ?? EVENT_STYLE.classes; // fall back to "classes" style if type is unknown

    const card = document.createElement("div");
    card.className = "event-card";
    card.setAttribute("role", "listitem");

    // Pass the event color and background into CSS via custom properties
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

// Grab references to the main UI elements we'll be updating
const searchInput  = document.getElementById("searchInput");
const toolsGrid    = document.getElementById("toolsGrid");
const categoryTabs = document.getElementById("categoryTabs");

let allTools      = [];         // full list of tools for the current role
let activeCategory = "All";     // which category tab is selected
let currentRole    = "student"; // which role is selected in the toggle

// Lucide icon names mapped to each tool by ID
// Full icon list at lucide.dev/icons
const TOOL_ICONS = {
  // Student — Academics
  1:  "book-open",        // My Learning
  3:  "graduation-cap",   // Degree Works
  4:  "calendar-check",   // Schedule Planner
  5:  "calendar",         // Class Schedule
  28: "users",            // Tutor Request
  29: "book-marked",      // Alfred Catalogue
  30: "library",          // Hinkle Library
  31: "shopping-cart",    // Order Your Books
  32: "briefcase",        // LinkedIn Learning
  33: "award",            // Apply To Graduate
  // Student — Finance
  6:  "banknote",         // Financial Aid
  7:  "credit-card",      // Student Billing
  35: "star",             // ScholarshipUniverse
  36: "file-text",        // FAFSA Application
  37: "scroll",           // NYS TAP Application
  38: "trophy",           // Excelsior Scholarship
  39: "medal",            // NYS Scholarships
  40: "book-open",        // Financial Aid Guides
  // Student — Campus Life
  8:  "utensils",         // Dining Services
  9:  "home",             // Housing Portal
  34: "party-popper",     // Commencement Info
  41: "flag",             // Pioneer Link
  42: "dumbbell",         // Intramurals
  43: "dumbbell",         // Fitness Center
  44: "shopping-bag",     // Campus Store
  45: "car",              // Rental Cars
  // Student — Communication
  2:  "mail",             // Email
  51: "message-square",   // Microsoft Teams
  // Student — Career
  46: "search",           // JobLink
  47: "zap",              // Skills First
  // Student — Support
  10: "wrench",           // IT Help Desk
  48: "heart-pulse",      // Health Portal
  49: "bell-ring",        // RAVE Alerts
  50: "phone",            // 988 Hotline
  // Staff
  11: "mail",             // Outlook
  12: "message-square",   // Microsoft Teams
  13: "layout-dashboard", // BannerWeb
  52: "shield-check",     // Veteran Certification
  14: "wrench",           // IT Help Desk
  15: "printer",          // Pharos Packages
  16: "book-open",        // Pharos Help
  53: "shield",           // Veteran Services
  17: "briefcase",        // LinkedIn Learning
  18: "bell-ring",        // RAVE Alerts
  19: "car",              // Campus Parking
  20: "shield",           // University Police
  21: "flag",             // Pioneer Link
  22: "activity",         // Health Portal
  // Admin extras
  23: "star",             // Starfish
  24: "clock",            // Clockwork
  54: "credit-card",      // Pay Commencement Fee
  25: "scale",            // Title IX
  26: "file-text",        // Academic Complaint Form
  27: "clipboard",        // Administrative Complaint Form
};

// Color and background for each category badge on tool cards
const CATEGORY_STYLE = {
  "Academics":        { color: "#0369a1", bg: "#e0f2fe" },
  "Finance":          { color: "#047857", bg: "#d1fae5" },
  "Campus Life":      { color: "#b45309", bg: "#fef3c7" },
  "Communication":    { color: "#7c3aed", bg: "#ede9fe" },
  "Career":           { color: "#0891b2", bg: "#e0f9ff" },
  "Support":          { color: "#b91c1c", bg: "#fee2e2" },
  "Operations":       { color: "#0369a1", bg: "#e0f2fe" },
  "Professional Dev": { color: "#047857", bg: "#d1fae5" },
  "Safety":           { color: "#b91c1c", bg: "#fee2e2" },
  "Campus":           { color: "#b45309", bg: "#fef3c7" },
  "Compliance":       { color: "#be185d", bg: "#fce7f3" },
};

// Builds the category filter tabs from the current tool list
// Runs every time the role changes so tabs always match what's loaded
function buildCategoryTabs(tools) {
  // Pull unique category names from the tool list, prepend "All"
  const categories = ["All", ...new Set(tools.map(t => t.category))];

  categoryTabs.innerHTML = ""; // clear old tabs before building new ones

  // Create a button for each category
  categories.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.className = "tab" + (i === 0 ? " active" : ""); // first tab ("All") starts active
    btn.dataset.category = cat;                          // store category name on the element
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
    btn.textContent = cat;
    categoryTabs.appendChild(btn);
  });
}

// Creates a single tool card element and returns it
function createToolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");              // makes the card keyboard-focusable
  card.setAttribute("aria-label", `Open ${tool.name}`);

  // Look up the category color, fall back to Alfred State blue if category is unknown
  const style = CATEGORY_STYLE[tool.category] ?? { color: "#0f4c81", bg: "#dbeafe" };

  // Pass the accent color into CSS so the top border and icon match the category
  card.style.setProperty("--card-accent", style.color);

  // Look up the Lucide icon name, fall back to a generic link icon
  const icon = TOOL_ICONS[tool.id] ?? "link";

  // Build the card's inner HTML
  card.innerHTML = `
    <span class="tool-icon" aria-hidden="true"><i data-lucide="${icon}"></i></span>
    <h2 class="tool-name">${tool.name}</h2>
    <p class="tool-desc">${tool.description}</p>
    <span class="tool-category" style="color:${style.color};background:${style.bg}">${tool.category}</span>
  `;

  // Open the tool's link in a new tab when clicked or activated by keyboard
  const handleAction = () => {
    if (tool.link && tool.link !== "#") {
      window.open(tool.link, "_blank", "noopener,noreferrer"); // noopener prevents the new tab from accessing this page
    } else {
      alert(tool.name); // fallback for tools without a link yet
    }
  };

  card.addEventListener("click", handleAction);

  // Allow keyboard users to activate cards with Enter or Space
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // prevent Space from scrolling the page
      handleAction();
    }
  });

  return card;
}

// Clears the grid and renders a new set of tool cards
function renderTools(tools) {
  toolsGrid.innerHTML = ""; // wipe whatever was there before

  // Show a message if the search/filter returned nothing
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

  // Add a card to the grid for each tool
  tools.forEach((tool) => toolsGrid.appendChild(createToolCard(tool)));

  // Convert all data-lucide attributes into actual SVG elements
  // Must be called after the cards are in the DOM
  lucide.createIcons();
}

// Filters the tool list by search text and active category
function filterTools(query, category) {
  const q = query.trim().toLowerCase(); // normalize the search input

  return allTools.filter((tool) => {
    // Check if the tool belongs to the selected category (or "All" is selected)
    const inCategory = category === "All" || tool.category === category;

    // If no search text, just filter by category
    if (!q) return inCategory;

    const nameMatch = tool.name.toLowerCase().includes(q);

    // Tags let users search natural words like "food" instead of "Dining Services"
    const tagMatch = tool.tags.some((tag) => tag.toLowerCase().includes(q));

    // Tool must match both the category AND the search text
    return inCategory && (nameMatch || tagMatch);
  });
}

// Re-renders the grid based on the current search input and active category
function applyFilters() {
  renderTools(filterTools(searchInput.value, activeCategory));
}

// Handle category tab clicks
categoryTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab"); // find the tab button that was clicked
  if (!tab) return;                     // ignore clicks on the container itself

  activeCategory = tab.dataset.category; // update the active category

  // Update active styling and aria-selected on all tabs
  categoryTabs.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t === tab);
    t.setAttribute("aria-selected", t === tab ? "true" : "false");
  });

  applyFilters(); // re-render with the new category
});

// Re-filter the grid as the user types in the search box
searchInput.addEventListener("input", applyFilters);

// Handle role toggle clicks (Student / Staff / Admin)
document.getElementById("roleToggle").addEventListener("click", (e) => {
  const btn = e.target.closest(".role-btn"); // find the button that was clicked
  if (!btn) return;                          // ignore clicks on the container

  currentRole = btn.dataset.role; // update the current role

  // Update active styling on all role buttons
  document.querySelectorAll(".role-btn").forEach((b) => {
    b.classList.toggle("active", b === btn);
  });

  // Reset search and category so the new role starts fresh
  activeCategory = "All";
  searchInput.value = "";

  loadTools(); // fetch the tool list for the new role
});

// Fetches the tool list from the server for the current role and renders everything
async function loadTools() {
  try {
    const res = await fetch(`/api/tools?role=${currentRole}`); // request tools for this role
    if (!res.ok) throw new Error("Failed to load tools");

    allTools = await res.json(); // store the full list for filtering later

    buildCategoryTabs(allTools); // rebuild tabs to match this role's categories
    renderTools(allTools);       // render all tools initially (no filter applied yet)
  } catch (err) {
    // Show an error state if the fetch fails
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

// Kick everything off on page load
loadTools();
renderUpcoming();
