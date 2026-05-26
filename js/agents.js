const cards = document.querySelectorAll(".agent-card");
const roleButtons = document.querySelectorAll(".role-btn");
const searchInput = document.getElementById("searchInput");

let activeRole = "All";

/* -----------------------------
   FILTER FUNCTION
------------------------------*/
function filterAgents() {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const role = card.dataset.role;

        const matchesRole = activeRole === "All" || role === activeRole;
        const matchesSearch = name.includes(searchValue);

        if (matchesRole && matchesSearch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

/* -----------------------------
   ROLE FILTER BUTTONS
------------------------------*/
roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        roleButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        activeRole = btn.dataset.role;
        filterAgents();
    });
});

/* -----------------------------
   SEARCH INPUT
------------------------------*/
searchInput.addEventListener("input", filterAgents);

/* -----------------------------
   CLICK → AGENT PROFILE PAGE
------------------------------*/
cards.forEach(card => {
    card.addEventListener("click", () => {
        const agentName = card.dataset.name;

        // send to a profile page with query string
        window.location.href = `agent.html?agent=${encodeURIComponent(agentName)}`;
    });
});