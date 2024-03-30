// src/main.ts
var machineTable = document.getElementById("coffee-machine-table");
var machines = [
  {
    picture: "https://www.svgrepo.com/show/143063/coffee-machine.svg",
    name: "Espresso Machine 1",
    price: "2000 SEK",
    info: "Espresso Machine"
  },
  {
    picture: "https://www.svgrepo.com/show/212184/kettle-coffee.svg",
    name: "Mocha Brewer",
    price: "500 SEK",
    info: "Espresso Machine"
  },
  {
    picture: "https://www.svgrepo.com/show/45185/coffee-machine.svg",
    name: "Coffee Brewer",
    price: "5000 SEK",
    info: "Espresso Machine"
  },
  {
    picture: "https://www.svgrepo.com/show/143063/coffee-machine.svg",
    name: "Espresso Machine 2",
    price: "15000 SEK",
    info: "Espresso Machine"
  }
];
machines.forEach((i) => {
  let machineRow = document.createElement("tr");
  let machineModel = document.createElement("th");
  let machinePrice = document.createElement("th");
  let machineInfo = document.createElement("th");
  let machinePicture = document.createElement("th");
  let machineImg = document.createElement("img");
  machineImg.src = i.picture;
  machineModel.textContent = i.name;
  machinePrice.textContent = i.price;
  machineInfo.textContent = i.info;
  machinePicture.appendChild(machineImg);
  machineRow.appendChild(machinePicture);
  machineRow.appendChild(machineModel);
  machineRow.appendChild(machinePrice);
  machineRow.appendChild(machineInfo);
  machineTable?.appendChild(machineRow);
});
var footer = document.querySelector("footer");
var year = new Date().getFullYear();
if (footer != null)
  footer.innerHTML = `<span>copyright \xA9 ${year} Coffe Party Company. Design by <a href="https://github.com/suny-am">Suny-Am</a></span>`;
var nav = `
<nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
<div class="container">
  <a class="navbar-brand d-flex justify-content-center align-items-center" href="/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Kafo.svg/107px-Kafo.svg.png" alt="">
    <h1>Coffee Party Company</h1>
  </a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="/products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">about</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;
var app = document.getElementById("app");
if (app)
  app.innerHTML = nav + app?.innerHTML;
