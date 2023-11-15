import React from "react";
import logoData from "./clientsLogosData.json";

function ClientsList() {
  return (
    <div style={container}>
      <h3 class="mb-16">
        We are <span>Trusted</span> by businesses of all sizes
      </h3>
      <div class="grid grid-cols-4 place-items-center gap-y-20 gap-x-10">
        {logoData.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo}
            alt={`Logo ${logo.id}`}
            style={logo}
          />
        ))}
      </div>
      <p class="font-lexendPetaLight text-xl font-bold tracking-tighter text-center mt-16">
        And Many More!
      </p>
    </div>
  );
}

export default ClientsList;

const container = {
  width: "90%",
  maxWidth: "1500px",
  display: "flex",
  borderRadius: "5px",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  boxShadow: "0 5px 10px #00000010",
  padding: "50px 5%",
  margin: "50px 0 50px 0",
};

const logo = {
  width: "100%",
};
