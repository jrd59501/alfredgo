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
