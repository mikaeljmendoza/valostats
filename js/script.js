let sortState = {
    key: "win",
    direction: -1
};

// DOM
const table = document.querySelector(".stats-table");
const searchInput = document.querySelector("#searchInput");
const actFilter = document.querySelector("#actFilter");
const headers = document.querySelectorAll(".stats-table-header span");

// DATA
const agents = agentData;

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {
    renderTable();
});

// =======================
// EVENTS
// =======================
searchInput.addEventListener("input", renderTable);
actFilter.addEventListener("change", renderTable);

headers.forEach(header => {
    header.addEventListener("click", () => {

        const key = header.dataset.key;
    
        // prevent sorting by rank
        if (key === "rank") return;

        if (sortState.key === key) {
            sortState.direction *= -1;
        } else {
            sortState.key = key;
            sortState.direction = -1;
        }

        renderTable();
        updateHeaderUI();
    });
});

// =======================
// FORMAT HELPERS
// =======================
function formatNumber(value, decimals = 2) {
    return Number(value).toFixed(decimals);
}

function formatInt(value) {
    return Number(value).toLocaleString();
}

// =======================
// RENDER TABLE
// =======================
function renderTable() {

    let filtered = [...agents];

    // SEARCH
    const search = searchInput.value.toLowerCase().trim();
    if (search) {
        filtered = filtered.filter(a =>
            a.name.toLowerCase().includes(search)
        );
    }

    // ACT FILTER
    const act = actFilter.value;
    if (act) {
        filtered = filtered.filter(a => a.act === act);
    }

    // SORT (FIXED NUMERIC HANDLING)
    filtered.sort((a, b) => {

        let valA = a[sortState.key];
        let valB = b[sortState.key];

        if (sortState.key === "name") {
            return valA.localeCompare(valB) * sortState.direction;
        }

        return (Number(valA) - Number(valB)) * sortState.direction;
    });

    // CLEAR ROWS
    document.querySelectorAll(".stats-table-row").forEach(el => el.remove());

    // BUILD ROWS
    filtered.forEach((agent, index) => {

    const rank = index + 1;

    const row = document.createElement("div");
    row.className = "stats-table-row";

    row.innerHTML = `
        <span class="rank">${rank}</span>

        <div class="agent-name">
            <img src="${agent.image}" alt="${agent.name}">
            <span>${agent.name}</span>
        </div>
        <span>${formatNumber(agent.win, 1)}%</span>
        <span>${formatNumber(agent.pick, 1)}%</span>
        <span>${formatNumber(agent.kd, 2)}</span>
        <span>${Math.round(agent.acs)}</span>
        <span>${formatInt(agent.matches)}</span>
    `;

    table.appendChild(row);
});
    updateHeaderUI();
}

// =======================
// HEADER UI
// =======================
function updateHeaderUI() {

    headers.forEach(header => {

        const key = header.dataset.key;
        let base = header.textContent
            .replace(" ↑", "")
            .replace(" ↓", "");

        if (key === sortState.key) {
            header.textContent =
                base + (sortState.direction === 1 ? " ↑" : " ↓");
        } else {
            header.textContent = base;
        }
    });
}