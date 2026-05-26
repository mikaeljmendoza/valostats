// All agent ability videos are taken from Blitz website (2026)

const agents = [
{
    name: "Astra",
    role: "Controller",
    image: "images/agent headshots/astra.png", // Riot Games, 2026
    abilities: {
        C: { name: "Gravity Well", desc: "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.", video: "files/ability videos/astra/cVideo.mp4", icon: "images/agent abilities/controllers/astra c.png" },
        Q: { name: "Nova Pulse", desc: "Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.", video: "files/ability videos/astra/qVideo.mp4", icon: "images/agent abilities/controllers/astra q.png" },
        E: { name: "Nebula", desc: "Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning.", video: "files/ability videos/astra/eVideo.mp4", icon: "images/agent abilities/controllers/astra e.png" },
        X: { name: "Astral Form / Cosmic Divide", desc: "ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and completely blocks audio.", video: "files/ability videos/astra/xVideo.mp4", icon: "images/agent abilities/controllers/astra x.png" }
    }
},
{
    name: "Brimstone",
    role: "Controller",
    image: "images/agent headshots/brimstone.png", // Riot Games, 2026
    abilities: {
        C: { name: "Stim Beacon", desc: "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.", video: "files/ability videos/brimstone/cVideo.mp4", icon: "images/agent abilities/controllers/brim c.png" },
        Q: { name: "Sky Smoke", desc: "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.", video: "files/ability videos/brimstone/qVideo.mp4", icon: "images/agent abilities/controllers/brim q.png" },
        E: { name: "Incendiary", desc: "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.", video: "files/ability videos/brimstone/eVideo.mp4", icon: "images/agent abilities/controllers/brim e.png" },
        X: { name: "Orbital Strike", desc: "EQUIP a tactical map. FIRE to launch a lingering orbital strike laster at the selected location, dealing high damage-over-time to players caught in the selected area.", video: "files/ability videos/brimstone/xVideo.mp4", icon: "images/agent abilities/controllers/brim x.png" }
    }
},
{
    name: "Clove",
    role: "Controller",
    image: "images/agent headshots/clove.webp", // Riot Games, 2026
    abilities: {
        C: {name: "Pick Me Up", desc: "INSTANTLY absorb the life force of a fallen enemy that Clove damaged or killed, gaining haste and temporary health.", video: "files/ability videos/clove/cVideo.mp4", icon: "images/agent abilities/controllers/clove c.png"},
        Q: {name: "Ruse", desc: "EQUIP to view the battlefield. FIRE to set the locations where Clove’s clouds (smoke) will settle. ALT FIRE to confirm, launching clouds that block vision in the chosen areas. Clove can use this ability after death.", video: "files/ability videos/clove/qVideo.mp4", icon: "images/agent abilities/controllers/clove q.png"},
        E: {name: "Meddle", desc: "EQUIP a fragment of immortality essence. FIRE to throw the fragment, which erupts after a short delay and temporarily decays all targets caught inside.", video: "files/ability videos/clove/eVideo.mp4", icon: "images/agent abilities/controllers/clove e.png"},
        X: {name: "Not Dead Yet", desc: "Upon death, when cast you’ll have a couple seconds to resurrect yourself. But you’ll need to earn a kill or assist within a short time frame to stay alive. This ability can help you cover key areas after dying or recover from overheating.", video: "files/ability videos/clove/xVideo.mp4", icon: "images/agent abilities/controllers/clove x.png"}
    }
},
{
    name: "Harbor",
    role: "Controller",
    image: "images/agent headshots/harbor.webp", // Riot Games, 2026
    abilities: {
        C: {name: "Storm Surge", desc: "EQUIP Storm Surge. FIRE to throw, creating an explosive whirlpool that Nearsights and Slows enemies within it after a short duration.", video: "files/ability videos/harbor/cVideo.mp4", icon: "images/agent abilities/controllers/clove c.png"},
        Q: {name: "High Tide", desc: "EQUIP High Tide. FIRE to send water forward along the ground. HOLD FIRE to guide the water towards your crosshair spawning a vision blocking Screen along the path. ALT FIRE to stop the water early. All players crossing High Tide are Slowed.", video: "files/ability videos/harbor/qVideo.mp4", icon: "images/agent abilities/controllers/clove q.png"},
        E: {name: "Cove", desc: "EQUIP Cove. ACTIVATE to form a water Smoke in the select location. HOLD FIRE while targeting to move the marker further away and HOLD ALT FIRE to move it closer. RELOAD to toggle targeting view. REACTIVATE to Shield the water Smoke, blocking any bullets that hit it. The Shielded water Smoke can be destroyed.", video: "files/ability videos/harbor/eVideo.mp4", icon: "images/agent abilities/controllers/clove e.png"},
        X: {name: "Reckoning", desc: "EQUIP Reckoning. FIRE to unleash the full power of your artifact, releasing a surge of water that barrels forward to Nearsight and Slow enemies that are hit.", video: "files/ability videos/harbor/xVideo.mp4", icon: "images/agent abilities/controllers/clove x.png"}
    }
},
{
    name: "Breach",
    role: "Initiator",
    image: "images/agent headshots/breach.png", // Riot Games, 2026
    abilities: {
        C: {name: "Aftershock", desc: "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does 80 damage to anyone caught in its area.", video: "files/ability videos/breach/cVideo.mp4", icon: "images/agent abilities/initiators/breach c.png"},
        Q: {name: "Flashpoint", desc: "EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.", video: "files/ability videos/breach/qVideo.mp4", icon: "images/agent abilities/initiators/breach q.png"},
        E: {name: "Fault Line", desc: "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.", video: "files/ability videos/breach/eVideo.mp4", icon: "images/agent abilities/initiators/breach e.png"},
        X: {name: "Rolling Thunder", desc: "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.", video: "files/ability videos/breach/xVideo.mp4", icon: "images/agent abilities/initiators/breach x.png"}
    }
},
{
    name: "Chamber",
    role: "Sentinel",
    image: "images/agent headshots/chamber.png", // Riot Games, 2026
    abilities: {
        C: {name: "Trademark", desc: "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.", video: "files/ability videos/chamber/cVideo.mp4", icon: "images/agent abilities/sentinels/chamber c.png"},
        Q: {name: "Headhunter", desc: "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights. You can have up to 8 bullets.", video: "files/ability videos/chamber/qVideo.mp4", icon: "images/agent abilities/sentinels/chamber q.png"},
        E: {name: "Rendezvous", desc: "PLACE a teleport anchor. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED. After post-teleport lockout, you can immediately shoot.", video: "files/ability videos/chamber/eVideo.mp4", icon: "images/agent abilities/sentinels/chamber e.png"},
        X: {name: "Tour De Force", desc: "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.", video: "files/ability videos/chamber/xVideo.mp4", icon: "images/agent abilities/sentinels/chamber x.png"}
    }
},
{
    name: "Iso",
    role: "Duelist",
    image: "images/agent headshots/iso.webp", // Riot Games, 2026
    abilities: {
        C: {name: "Contingency", desc: "EQUIP to assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets.", video: "files/ability videos/iso/cVideo.mp4", icon: "images/agent abilities/duelists/iso c.png"},
        Q: {name: "Undercut", desc: "EQUIP a molecular bolt. Fire to throw it forward, applying a brief FRAGILE to all players it touches. The bolt can pass through solid objects, including walls.", video: "files/ability videos/iso/qVideo.mp4", icon: "images/agent abilities/duelists/iso q.png"},
        E: {name: "Double Tap", desc: "START a focus timer. Once completed, enter a flow state during which downed enemies you kill or damage generate an energy orb. Shooting this orb grants you a shield which absorbs one instance of damage from any source.", video: "files/ability videos/iso/eVideo.mp4", icon: "images/agent abilities/duelists/iso e.png"},
        X: {name: "Kill Contract", desc: "EQUIP an interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.", video: "files/ability videos/iso/xVideo.mp4", icon: "images/agent abilities/duelists/iso x.png"}
    }
}
];