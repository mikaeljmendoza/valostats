const container = document.querySelector("#homeAgentList");

document.addEventListener("DOMContentLoaded", () => {
    renderTopAgents();
});

function renderTopAgents() {

    container.innerHTML = "";

    const topAgents = agentData.slice(0, 4);

    topAgents.forEach(agent => {

        const row = document.createElement("div");
        row.className = "agent";

        row.innerHTML = `
            <span style="display:flex; align-items:center; gap:10px;">
                <img src="${agent.image}" alt="${agent.name}">
                ${agent.name}
            </span>
            <span>${agent.win}%</span>
            <span>${agent.kd}</span>
            <span>${agent.acs}</span>
        `;

        container.appendChild(row);
    });
}