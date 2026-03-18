// =====================
// CONFIGURATION
// TODO: Replace with your actual Facebook username
// =====================
const FB_USERNAME = "https://www.facebook.com/synt.production/";

// =====================
// ACCOUNT PACKAGES
// =====================
const accountPackages = [
  { id:1, name:"Package 1", price:59,  specs:"Starter Account Deal",   tags:["Top-up","Boost HP", "Customize"],        image:"photos/Service.png" },
  { id:2, name:"Package 2", price:99,  specs:"Standard Account Deal",  tags:["Standard","Popular"],      image:"photos/1.png" },
  { id:3, name:"Package 3", price:199, specs:"Advanced Account Deal",  tags:["Advanced","More Features"],image:"photos/2.png" },
  { id:4, name:"Package 4", price:299, specs:"Premium Account Deal",   tags:["Premium","Best Value"],    image:"photos/3.png" },
  { id:5, name:"Package 5", price:399, specs:"Elite Account Deal",     tags:["Elite","Full Access"],     image:"photos/4.png" },
  { id:6, name:"Service", price:99, specs:"Elite Account Deal",     tags:["Elite","Full Access"],     image:"photos/5.png" }
];

// =====================
// CAR DATA — All ₱30
// =====================
const cars = [
  { id:1,  name:"Toyota GR Yaris",             category:"sports",  price:30, specs:"Modified · Wide Body Kit · Race Spec",         tags:["Sports","Modified","Toyota"],      image:"cars/Toyota Yaris.png" },
  { id:2,  name:"Toyota GR Yaris (Monster)",   category:"sports",  price:30, specs:"Monster Energy · Liberty Walk · Full Kit",     tags:["Sports","Monster","Toyota"],       image:"cars/Toyota Yaris (2).png" },
  { id:3,  name:"Toyota GR Yaris (Black)",     category:"sports",  price:30, specs:"Matte Black · Yellow DRL · Wide Kit",          tags:["Sports","Toyota","Modified"],      image:"cars/Toyota Yaris (3).png" },
  { id:4,  name:"Ferrari LaFerrari (Dark Red)", category:"sports", price:30, specs:"Hypercar · V12 Hybrid · Custom Build",         tags:["Sports","Ferrari","Hypercar"],     image:"cars/LaFerrari (3).png" },
  { id:5,  name:"Ferrari LaFerrari (Red)",     category:"sports",  price:30, specs:"Hypercar · Red · Yellow Brakes",               tags:["Sports","Ferrari","Hypercar"],     image:"cars/LaFerrari.png" },
  { id:6,  name:"Ferrari LaFerrari (Teal)",    category:"sports",  price:30, specs:"Hypercar · Teal · Custom Build",               tags:["Sports","Ferrari","Hypercar"],     image:"cars/LaFerrari (4).png" },
  { id:7,  name:"Ferrari LaFerrari (Blue)",    category:"sports",  price:30, specs:"Hypercar · Blue · Yellow Brakes",              tags:["Sports","Ferrari","Hypercar"],     image:"cars/LaFerrari (2).png" },
  { id:8,  name:"Ferrari F12 Berlinetta",      category:"sports",  price:30, specs:"V12 · Yokohama Tires · Race Build",            tags:["Sports","Ferrari","Race Build"],   image:"cars/Ferrari F12.png" },
  { id:9,  name:"Ferrari 458 Italia",          category:"sports",  price:30, specs:"Red · Wide Body · GT Wing",                    tags:["Sports","Ferrari","Modified"],     image:"cars/Ferrari.png" },
  { id:10, name:"Koenigsegg Agera (Pink DRL)", category:"sports",  price:30, specs:"Red · Pink LED DRL · Custom Build",            tags:["Sports","Koenigsegg","Hypercar"],  image:"cars/Koenigsegg (2).png" },
  { id:11, name:"Koenigsegg Agera RS",         category:"sports",  price:30, specs:"White/Black · Carbon Kit · Full Build",        tags:["Sports","Koenigsegg","Hypercar"],  image:"cars/Koenigsegg.png" },
  { id:12, name:"Koenigsegg Agera (Red/Black)",category:"sports",  price:30, specs:"Matte Red · Black Stripe · Convertible",       tags:["Sports","Koenigsegg","Hypercar"],  image:"cars/Koenigsegg (3).png" },
  { id:13, name:"McLaren 720S",                category:"sports",  price:30, specs:"Carbon Fiber · Matte Black · Full Custom",     tags:["Sports","McLaren","Carbon"],       image:"cars/Mclaren 720s (2).png" },
  { id:14, name:"Aston Martin Vantage",        category:"sports",  price:30, specs:"Racing Green · Wide Body · Performance Kit",   tags:["Sports","Aston Martin","Modified"],image:"cars/Aston martin.png" },
  { id:15, name:"Porsche Carrera GT",          category:"sports",  price:30, specs:"Navy Blue · Convertible · Classic Rims",       tags:["Sports","Porsche","Classic"],      image:"cars/Porsche (2).png" },
  { id:16, name:"Nissan GTR R35 (Red Bull)",   category:"sports",  price:30, specs:"Red Bull Drift · Full Livery · Wide Kit",      tags:["Sports","Nissan","GTR"],           image:"cars/GTR R35 (4).png" },
  { id:17, name:"Nissan GTR R35 (Black)",      category:"sports",  price:30, specs:"Matte Black · Nismo · Yellow Brakes",          tags:["Sports","Nissan","GTR"],           image:"cars/GTR R35 (3).png" },
  { id:18, name:"Toyota AE86 Trueno",          category:"sports",  price:30, specs:"JDM · Wide Body · APEX Twin Cam",              tags:["Sports","JDM","Toyota"],           image:"cars/Toyota AE86.png" },
  { id:19, name:"Toyota 86 / FR-S",            category:"sports",  price:30, specs:"Matte Red · Wide Body · Custom Exhaust",       tags:["Sports","Toyota","Modified"],      image:"cars/Toyota.png" },
  { id:20, name:"Ford Mustang GT (Blue)",      category:"sports",  price:30, specs:"Blue · Black Stripes · Custom Rims",           tags:["Sports","Ford","Muscle"],          image:"cars/Mustang.png" },
  { id:21, name:"Ford Mustang GT (Pink)",      category:"sports",  price:30, specs:"5.0 V8 · Wide Body · Gold Rims",               tags:["Sports","Ford","Muscle"],          image:"cars/Mustang (2).png" },
  { id:22, name:"Ford Mustang GT (Green)",     category:"sports",  price:30, specs:"Dark Green · Classic Build · Red Brakes",      tags:["Sports","Ford","Muscle"],          image:"cars/BMW (6).png" },
  { id:23, name:"Mazda Miata",                 category:"sports",  price:30, specs:"Maroon · Graffiti Wrap · Drift Build",         tags:["Sports","Mazda","JDM"],            image:"cars/Miata.png" },
  { id:24, name:"BMW M5 (Mansory)",            category:"sedan",   price:30, specs:"Mansory Kit · Camo Wrap · Aggressive",         tags:["Sedan","BMW","Mansory"],           image:"cars/BMW.png" },
  { id:25, name:"BMW M5 G90",                  category:"sedan",   price:30, specs:"Red Grille · Custom Rims · Widebody",          tags:["Sedan","BMW","Modified"],          image:"cars/BMW (8).png" },
  { id:26, name:"BMW M5 E28",                  category:"sedan",   price:30, specs:"Classic · Matte Black · BBS Wheels",           tags:["Sedan","Classic","BMW"],           image:"cars/BMW (3).png" },
  { id:27, name:"BMW M5 E39",                  category:"sedan",   price:30, specs:"Orange Angel Eyes · Custom Exhaust",           tags:["Sedan","BMW","JDM Style"],         image:"cars/BMW (4).png" },
  { id:28, name:"BMW M5 F10",                  category:"sedan",   price:30, specs:"Matte Black · Full Custom · Track Ready",      tags:["Sedan","BMW","Matte Black"],       image:"cars/BMW (9).png" },
  { id:29, name:"BMW M3 Touring",              category:"sedan",   price:30, specs:"Gray · Blue DRL · Race Spec",                  tags:["Sedan","BMW","Touring"],           image:"cars/BMW (10).png" },
  { id:30, name:"BMW M3 Touring (Blue DRL)",   category:"sedan",   price:30, specs:"Dark Gray · Blue DRL · Red Hood Stripe",       tags:["Sedan","BMW","Modified"],          image:"cars/BMW (5).png" },
  { id:31, name:"BMW M4 (Graffiti)",           category:"sedan",   price:30, specs:"Graffiti Wrap · Twin Turbo · Blue DRL",        tags:["Sedan","BMW","Custom"],            image:"cars/BMW (7).png" },
  { id:32, name:"Mercedes-Maybach S580",       category:"sedan",   price:30, specs:"V12 · Two-Tone · Luxury Build",               tags:["Sedan","Mercedes","Luxury"],       image:"cars/Mercedes (3).png" },
  { id:33, name:"Mercedes C63 AMG",            category:"sedan",   price:30, specs:"Military Green · AMG · Full Build",            tags:["Sedan","Mercedes","AMG"],          image:"cars/Mercedes.png" },
  { id:34, name:"Mercedes AMG GT63",           category:"sedan",   price:30, specs:"Matte Black · GT63 · V8 Biturbo",              tags:["Sedan","Mercedes","AMG"],          image:"cars/Mercedes (3).png" },
  { id:35, name:"Lexus IS300",                 category:"sedan",   price:30, specs:"Bagged · Wide Body · Custom Build",            tags:["Sedan","Bagged","Lexus"],          image:"cars/Lexus.png" },
  { id:36, name:"Toyota Altezza",              category:"sedan",   price:30, specs:"Red · Custom Suspension · Altezza Badge",      tags:["Sedan","JDM","Toyota"],            image:"cars/Altezza.png" },
  { id:37, name:"Toyota Crown (Red)",          category:"sedan",   price:30, specs:"Red · Gold Crown Badge · Custom Rims",         tags:["Sedan","Toyota","Modified"],       image:"cars/Toyota Crown.png" },
  { id:38, name:"Toyota Crown (White)",        category:"sedan",   price:30, specs:"White · Bagged · 3-Spoke Rims",                tags:["Sedan","Toyota","Bagged"],         image:"cars/Toyota Crown (2).png" },
  { id:39, name:"Honda Civic FD Type R",       category:"sedan",   price:30, specs:"Silver · Type R · JDM Build",                 tags:["Sedan","Honda","JDM"],             image:"cars/Honda FD.png" },
  { id:40, name:"Mitsubishi Lancer Evo 9",     category:"sedan",   price:30, specs:"Army Green · FQ-320 · RAYS Wheels",           tags:["Sedan","Mitsubishi","JDM"],        image:"cars/Evo 9.png" },
  { id:41, name:"Chrysler 300C SRT8",          category:"sedan",   price:30, specs:"Matte Black · SRT8 · Custom Rims",             tags:["Sedan","Chrysler","Modified"],     image:"cars/Chrysler.png" },
  { id:42, name:"Dacia Logan",                 category:"sedan",   price:30, specs:"Matte Black · Bagged · Custom Rims",           tags:["Sedan","Dacia","Bagged"],          image:"cars/Dacia.png" },
  { id:43, name:"Peugeot 406",                 category:"sedan",   price:30, specs:"Matte Black · Classic Build · Custom Rims",    tags:["Sedan","Peugeot","Classic"],       image:"cars/Peugeot.png" },
  { id:44, name:"Chevrolet Camaro SS (Gray)",  category:"sports",  price:30, specs:"Matte Gray · SS · Big Wing",                  tags:["Sports","Chevy","Muscle"],         image:"cars/Chevrolet (2).png" },
  { id:45, name:"Chevrolet Camaro ZL1 (Teal)", category:"sports",  price:30, specs:"Teal · ZL1 · Red DRL",                        tags:["Sports","Chevy","Muscle"],         image:"cars/Chevrolet.png" },
  { id:46, name:"Dodge RAM 1500",              category:"pickup",  price:30, specs:"Bighorn · 4x4 · Custom Rims",                  tags:["Pickup","4x4","Dodge"],            image:"cars/Ram (3).png" },
  { id:47, name:"Toyota Hilux (Pink)",         category:"pickup",  price:30, specs:"BNGarage · Pink · Custom Sound System",        tags:["Pickup","Modified","Toyota"],      image:"cars/Toyota Hilux (6).png" },
  { id:48, name:"Toyota Hilux (Blue)",         category:"pickup",  price:30, specs:"BNGarage · Cyan DRL · Custom Build",           tags:["Pickup","Modified","Toyota"],      image:"cars/Toyota Hilux (7).png" },
  { id:49, name:"Toyota Hilux (Orange)",       category:"pickup",  price:30, specs:"Orange · Carbon Hood · MBR Build",             tags:["Pickup","Modified","Toyota"],      image:"cars/Toyota hilux (5).png" },
  { id:50, name:"Fiat Doblo",                  category:"suv",     price:30, specs:"White · Lowered · Custom Wheels",              tags:["Van","Fiat","Modified"],           image:"cars/Fiat.png" },
  { id:51, name:"Toyota Fortuner",             category:"suv",     price:30, specs:"BBS · Blue DRL · Drag Diesel Build",           tags:["SUV","Toyota","Modified"],         image:"cars/Fortuner.png" },
  { id:52, name:"Toyota 4WD GXL (Teal)",       category:"suv",     price:30, specs:"Teal · Roof Rack · Off-Road Build",            tags:["SUV","4WD","Toyota"],              image:"cars/Toyota 4wd (2).png" },
  { id:53, name:"Toyota 4WD GXL (White)",      category:"suv",     price:30, specs:"White · Land Cruiser · ARB Off-Road",          tags:["SUV","4WD","Toyota"],              image:"cars/Toyota 4wd.png" },
  { id:54, name:"Toyota 4WD GXL (Silver)",     category:"suv",     price:30, specs:"Silver · Full Time 4WD · Off-Road",            tags:["SUV","4WD","Toyota"],              image:"cars/Toyota 4wd (3).png" },
  { id:55, name:"Toyota Land Cruiser 200",     category:"suv",     price:30, specs:"Black · Full Custom · Premium Build",          tags:["SUV","Toyota","Luxury"],           image:"cars/Toyota L200.png" },
  { id:56, name:"Range Rover (Blue Edition)",  category:"suv",     price:30, specs:"Blue · Orange Stripe · Custom Build",          tags:["SUV","Land Rover","Luxury"],       image:"cars/Land Rover.png" },
  { id:57, name:"Range Rover (Black)",         category:"suv",     price:30, specs:"Gloss Black · XV8 · Full Build",               tags:["SUV","Land Rover","Luxury"],       image:"cars/Land Rover (2).png" },
  { id:58, name:"Range Rover (Matte Gray)",    category:"suv",     price:30, specs:"Matte Gray · Green Badge · Custom",            tags:["SUV","Land Rover","Luxury"],       image:"cars/Land Rover (3).png" },
  { id:59, name:"Cadillac Escalade",           category:"suv",     price:30, specs:"Orange · Cadillac 600 · Full Size SUV",        tags:["SUV","Cadillac","Luxury"],         image:"cars/escalande.png" },
  { id:60, name:"Jeep Grand Cherokee (Hawk)",  category:"suv",     price:30, specs:"Pink Camo · Dragon Wrap · Custom Build",       tags:["SUV","Jeep","Custom"],             image:"cars/Hawk.png" }
];

// =====================
// STATE
// =====================
let carCart = {};
let accountCart = {};
let activeFilter = "all";

// =====================
// NAVIGATION
// =====================
function goToSection(section) {
  document.getElementById("welcomeScreen").classList.remove("active");
  document.getElementById("accountsPage").classList.remove("active");
  document.getElementById("carsPage").classList.remove("active");
  if (section === "accounts") {
    document.getElementById("accountsPage").classList.add("active");
    renderPackages();
    updateAccountCartUI();
  } else {
    document.getElementById("carsPage").classList.add("active");
    renderGrid();
    updateCarCartUI();
  }
  window.scrollTo(0, 0);
}

function goBack() {
  document.getElementById("accountsPage").classList.remove("active");
  document.getElementById("carsPage").classList.remove("active");
  document.getElementById("welcomeScreen").classList.add("active");
  window.scrollTo(0, 0);
}

// =====================
// HELPERS
// =====================
function formatPrice(n) { return "₱" + n.toLocaleString(); }

function buildCard({ id, name, specs, tags, emoji, image, price, inCart, onAdd }) {
  const safe = name.replace(/'/g, "\\'");
  const imgHTML = image
    ? `<div class="car-img" onclick="openLightbox('${image}','${safe}')">
         <img src="${image}" alt="${name}" />
         <span class="zoom-hint">🔍 Click to expand</span>
       </div>`
    : `<div class="car-img"><span class="car-emoji">${emoji || "📦"}</span></div>`;
  return `
    <div class="card">
      ${imgHTML}
      <div class="card-body">
        <div class="car-name">${name}</div>
        <div class="car-specs">${specs}</div>
        <div class="car-tags">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="card-footer">
          <div>
            <span class="price-label">Price</span>
            <span class="price">${formatPrice(price)}</span>
          </div>
          <button class="add-btn ${inCart ? "added" : ""}" onclick="${onAdd}">
            ${inCart ? "✓ Added" : "+ Add"}
          </button>
        </div>
      </div>
    </div>`;
}

// =====================
// ACCOUNTS
// =====================
function renderPackages() {
  document.getElementById("packagesGrid").innerHTML = accountPackages.map(pkg =>
    buildCard({ ...pkg, inCart: !!accountCart[pkg.id], onAdd: `addToAccountCart(${pkg.id})` })
  ).join("");
}

function addToAccountCart(id) {
  if (accountCart[id]) delete accountCart[id];
  else { const p = accountPackages.find(x => x.id === id); if (p) accountCart[id] = p; }
  updateAccountCartUI(); renderPackages();
}

function clearAccountCart() { accountCart = {}; updateAccountCartUI(); renderPackages(); }

function updateAccountCartUI() {
  const count = Object.keys(accountCart).length;
  document.getElementById("accountCartCount").textContent = count;
  document.getElementById("accountCartSummary").innerHTML = count
    ? `<strong>${count} package${count > 1 ? "s" : ""} selected</strong> — ${Object.values(accountCart).map(p => p.name).join(", ")}`
    : "0 packages selected";
  document.getElementById("accountCartPanel").classList.toggle("visible", count > 0);
}

function showAccountModal() {
  const items = Object.values(accountCart); if (!items.length) return;
  const total = items.reduce((s, p) => s + p.price, 0);
  document.getElementById("accountModalList").innerHTML = items.map(p =>
    `<div class="modal-item"><span>${p.name}</span><span>${formatPrice(p.price)}</span></div>`
  ).join("");
  document.getElementById("accountModalTotal").textContent = formatPrice(total);
  document.getElementById("accountModalOverlay").classList.add("visible");
}

function closeAccountModal() { document.getElementById("accountModalOverlay").classList.remove("visible"); }

function goToFacebookAccounts() {
  const items = Object.values(accountCart);
  const msg = "Hi! I'm interested in the following account packages:\n"
    + items.map(p => `- ${p.name} (${formatPrice(p.price)})`).join("\n")
    + "\n\nKindly let me know how to proceed. Thank you!";
  window.open(`https://m.me/synt.production?text=${encodeURIComponent(msg)}`, "_blank");
}

// =====================
// CARS
// =====================
function renderGrid() {
  const grid = document.getElementById("carGrid");
  const emptyMsg = document.getElementById("emptyMsg");
  const filtered = activeFilter === "all" ? cars : cars.filter(c => c.category === activeFilter);
  if (!filtered.length) { grid.innerHTML = ""; emptyMsg.style.display = "block"; return; }
  emptyMsg.style.display = "none";
  grid.innerHTML = filtered.map(car =>
    buildCard({ ...car, inCart: !!carCart[car.id], onAdd: `addToCarCart(${car.id})` })
  ).join("");
}

function addToCarCart(id) {
  if (carCart[id]) delete carCart[id];
  else { const c = cars.find(x => x.id === id); if (c) carCart[id] = c; }
  updateCarCartUI(); renderGrid();
}

function clearCart() { carCart = {}; updateCarCartUI(); renderGrid(); }

function updateCarCartUI() {
  const count = Object.keys(carCart).length;
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartSummary").innerHTML = count
    ? `<strong>${count} car${count > 1 ? "s" : ""} selected</strong> — ${Object.values(carCart).map(c => c.name.split(" ").slice(0, 2).join(" ")).join(", ")}`
    : "0 cars selected";
  document.getElementById("cartPanel").classList.toggle("visible", count > 0);
}

function toggleCartPanel() {
  if (Object.keys(carCart).length > 0) document.getElementById("cartPanel").classList.toggle("visible");
}

function filterCars(type, btn) {
  activeFilter = type;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGrid();
}

function showModal() {
  const items = Object.values(carCart); if (!items.length) return;
  const total = items.reduce((s, c) => s + c.price, 0);
  document.getElementById("modalList").innerHTML = items.map(c =>
    `<div class="modal-item"><span>${c.name}</span><span>${formatPrice(c.price)}</span></div>`
  ).join("");
  document.getElementById("modalTotal").textContent = formatPrice(total);
  document.getElementById("modalOverlay").classList.add("visible");
}

function closeModal() { document.getElementById("modalOverlay").classList.remove("visible"); }

document.getElementById("modalOverlay").addEventListener("click", function(e) { if (e.target === this) closeModal(); });
document.getElementById("accountModalOverlay").addEventListener("click", function(e) { if (e.target === this) closeAccountModal(); });

function goToFacebook() {
  const items = Object.values(carCart);
  const msg = "Hi! I'm interested in the following cars:\n"
    + items.map(c => `- ${c.name} (${formatPrice(c.price)})`).join("\n")
    + "\n\nKindly let me know their availability. Thank you!";
  window.open(`https://m.me/synt.production?text=${encodeURIComponent(msg)}`, "_blank");
}

// =====================
// LIGHTBOX
// =====================
function openLightbox(src, caption) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = caption;
  document.getElementById("lightboxCaption").textContent = caption;
  document.getElementById("lightboxOverlay").classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightboxOverlay").classList.remove("visible");
  document.getElementById("lightboxImg").src = "";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") { closeLightbox(); closeModal(); closeAccountModal(); }
});

// =====================
// INIT
// =====================
document.getElementById("welcomeScreen").classList.add("active");
