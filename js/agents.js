const searchInput = document.getElementById("searchInput");
const roleButtons = document.querySelectorAll(".role-btn");
const agents = document.querySelectorAll(".agent-card");

let selectedRole = "All";

// SEARCH FUNCTION
function filterAgents() {
    const searchValue = searchInput.value.toLowerCase();

    agents.forEach(agent => {
        const name = agent.dataset.name.toLowerCase();
        const role = agent.dataset.role;

        const matchesSearch = name.includes(searchValue);
        const matchesRole = selectedRole === "All" || role === selectedRole;

        if (matchesSearch && matchesRole) {
            agent.style.display = "block";
        } else {
            agent.style.display = "none";
        }
    });
}

// SEARCH INPUT
searchInput.addEventListener("input", filterAgents);

// ROLE FILTER BUTTONS
roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        roleButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        selectedRole = btn.dataset.role;
        filterAgents();
    });
});
