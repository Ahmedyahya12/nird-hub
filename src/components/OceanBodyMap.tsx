import React, { useState } from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaCheckCircle, FaDotCircle } from "react-icons/fa";

// Animation fade-in
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Données des organes
const ORGANS = [
  {
    id: "brain",
    title: "Cerveau — Biodiversité",
    icon: "🧠",
    desc: "Le cerveau représente la biodiversité marine : réseau complexe d'interactions.",
    impacts: ["Perte d'espèces", "Chaînes alimentaires perturbées"],
  },
  {
    id: "lungs",
    title: "Poumons — Phytoplancton",
    icon: "🌬️",
    desc: "Les poumons = phytoplancton qui produit l'oxygène terrestre.",
    impacts: ["Diminution d'oxygène", "Effets en cascade"],
  },
  {
    id: "heart",
    title: "Cœur — Courants marins",
    icon: "❤️",
    desc: "Le cœur = courants qui redistribuent chaleur et nutriments.",
    impacts: ["Modification des climats", "Perturbation des migrations"],
  },
  {
    id: "guts",
    title: "Abysses — Intestin",
    icon: "🦠",
    desc: "Les abysses : zones mystérieuses sensibles à la pollution.",
    impacts: ["Accumulation de toxines", "Perte d'habitats"],
  },
  {
    id: "skin",
    title: "Peau — Littoral",
    icon: "🏖️",
    desc: "La peau = côtes, interface entre humains et océan.",
    impacts: ["Érosion", "Perte d'habitats côtiers"],
  },
];

export default function OceanBodyMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen p-8 text-white">
      <main className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-2">

        {/* SECTION GAUCHE */}
        <section className="p-6 bg-[#1a2332] border border-[#008CBA] rounded-2xl">
          <h2 className="mb-4 text-xl font-bold">Corps-Océan Interactive</h2>
          <p className="mb-6 text-sm text-slate-300">
            Clique sur un organe pour découvrir son lien avec l'océan
          </p>

          {/* Grille des organes */}
          <div className="grid grid-cols-2 gap-4">
            {ORGANS.map((organ, index) => (
              <motion.div
                key={organ.id}
                variants={fadeIn}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.1 }}
              >
                <div
                  // options={{ max: 25, scale: 1.05, speed: 400 }}
                  className={`p-6 rounded-xl cursor-pointer bg-[#1a2332] 
                  border border-[#008CBA]/30 shadow-md
                  hover:shadow-[#008CBA]/40 transition-all duration-200
                  ${selected?.id === organ.id ? "ring-4 ring-[#008CBA]" : ""}`}
                >
                  <button
                    onClick={() => setSelected(organ)}
                    className="flex flex-col items-center w-full gap-3"
                  >
                    <span className="text-4xl">{organ.icon}</span>
                    <span className="text-sm font-semibold text-white">
                      {organ.title.split("—")[0]}
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats rapides */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="px-4 py-2 text-sm rounded-lg bg-white/10">pH: 8.05</div>
            <div className="px-4 py-2 text-sm rounded-lg bg-white/10">Temp: 15°C</div>
            <div className="px-4 py-2 text-sm rounded-lg bg-white/10">Plastique: 8.3M t/an</div>
          </div>
        </section>

        {/* PANNEAU DE DROITE */}
        <aside className="p-6 border bg-[#1a2332] border-[#008CBA]/30 rounded-2xl">
          <h2 className="mb-4 text-xl font-bold">Détails</h2>

          {selected ? (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >

              {/* Titre */}
              <div className="flex items-center gap-3">
                <span className="text-5xl">{selected.icon}</span>
                <div>
                  <h3 className="text-lg font-bold">{selected.title}</h3>
                  <span className="text-xs uppercase text-slate-400">{selected.id}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300">{selected.desc}</p>

              {/* Impacts */}
              <div>
                <h4 className="flex items-center gap-2 mb-2 font-semibold">
                  <FaExclamationTriangle className="text-yellow-400" />
                  Impacts
                </h4>

                <ul className="space-y-2">
                  {selected.impacts.map((impact, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <FaDotCircle className="mt-1 text-red-400" />
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="p-4 rounded-lg bg-white/10">
                <h4 className="flex items-center gap-2 mb-2 font-semibold">
                  <FaCheckCircle className="text-green-400" />
                  Actions simples
                </h4>

                <ol className="space-y-1 text-sm text-slate-300">
                  <li>1. Réduire le plastique</li>
                  <li>2. Créer des zones protégées</li>
                  <li>3. Soutenir les réglementations</li>
                </ol>
              </div>

              {/* Boutons */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 font-semibold text-white rounded-lg bg-[#008CBA] hover:bg-[#008CBA]/80">
                  Agir maintenant
                </button>

                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-3 border rounded-lg border-white/20 hover:bg-white/5"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="py-12 text-center text-slate-400">
              <p className="mb-4 text-6xl">🌊</p>
              <p>Sélectionne un organe pour voir son rôle dans l'océan</p>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
