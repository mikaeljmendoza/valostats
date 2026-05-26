const params = new URLSearchParams(window.location.search);

const defaultAgent = params.get("agent") || "Jett";

let currentRole = "Duelist";
let currentAgent = null;

/* ELEMENTS */
const agentImage = document.getElementById("agentImage");
const agentName = document.getElementById("agentName");
const agentRole = document.getElementById("agentRole");

const abilitiesGrid = document.getElementById("abilitiesGrid");

const abilityVideo = document.getElementById("abilityVideo");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

const agentSwitcher = document.getElementById("agentSwitcher");

const roleButtons = document.querySelectorAll(".role-btn");

/* LOAD AGENT */
function loadAgent(agentNameValue) {

    const agent = agents.find(
        a => a.name.toLowerCase() === agentNameValue.toLowerCase()
    );

    if (!agent) return;

    currentAgent = agent;
    currentRole = agent.role;

    /* HERO */
    agentImage.src = agent.image;
    agentName.textContent = agent.name;
    agentRole.textContent = agent.role;

    /* ABILITIES */
    renderAbilities(agent);

    /* UPDATE ACTIVE ROLE BUTTON */
    roleButtons.forEach(btn => {

        btn.classList.remove("active");

        if (btn.dataset.role === agent.role) {
            btn.classList.add("active");
        }
    });

    /* RENDER SWITCHER */
    renderAgentSwitcher(agent.role);
}

/* RENDER ABILITIES */
function renderAbilities(agent) {

    abilitiesGrid.innerHTML = "";

    const abilityKeys = Object.keys(agent.abilities);

    abilityKeys.forEach((key) => {

        const ability = agent.abilities[key];

        const card = document.createElement("div");

        card.classList.add("ability-card");

        /* DEFAULT SELECTED = C */
        if (key === "C") {
            card.classList.add("active");
        }

        card.innerHTML = `
            <div class="ability-icon-wrapper">

                <img src="${ability.icon}" alt="${ability.name}">

                <div class="ability-letter">
                    ${key}
                </div>

            </div>
        `;

        /* CLICK */
        card.addEventListener("click", () => {

            document
                .querySelectorAll(".ability-card")
                .forEach(c => c.classList.remove("active"));

            card.classList.add("active");

            switchAbility(agent, key);
        });

        abilitiesGrid.appendChild(card);

        /* PRELOAD VIDEO */
        const preloadVideo = document.createElement("video");

        preloadVideo.src = ability.video;
        preloadVideo.preload = "auto";
    });

    /* DEFAULT VIDEO */
    switchAbility(agent, "C");
}

/* SWITCH ABILITY */
function switchAbility(agent, key) {

    const ability = agent.abilities[key];

    modalTitle.textContent = ability.name;
    modalDesc.textContent = ability.desc;

    abilityVideo.src = ability.video;

    abilityVideo.load();

    abilityVideo.play();
}

/* RENDER AGENT SWITCHER */
function renderAgentSwitcher(role) {

    agentSwitcher.innerHTML = "";

    const filteredAgents = agents.filter(
        agent => agent.role === role
    );

    filteredAgents.forEach(agent => {

        const mini = document.createElement("div");

        mini.classList.add("agent-mini");

        /* ACTIVE AGENT */
        if (currentAgent && agent.name === currentAgent.name) {
            mini.classList.add("active");
        }

        mini.innerHTML = `
            <img src="${agent.image}" alt="${agent.name}">
        `;

        /* SWITCH AGENT */
        mini.addEventListener("click", () => {
            loadAgent(agent.name);
        });

        agentSwitcher.appendChild(mini);
    });
}

/* ROLE BUTTONS */
roleButtons.forEach(button => {

    button.addEventListener("click", () => {

        roleButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const role = button.dataset.role;

        currentRole = role;

        const roleAgents = agents.filter(
            agent => agent.role === role
        );

        /* LOAD FIRST AGENT OF ROLE */
        if (roleAgents.length > 0) {
            loadAgent(roleAgents[0].name);
        }
    });
});

/* INITIAL LOAD */
loadAgent(defaultAgent);