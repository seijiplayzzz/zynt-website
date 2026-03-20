// =====================
// FACEBOOK LITE BLOCKER
// =====================
(function() {
  const ua = navigator.userAgent || "";
  const isFBLite = /FBAN|FBAV|FB_IAB|FacebookLite|FB4A/i.test(ua);
  if (isFBLite) {
    document.addEventListener("DOMContentLoaded", function() {
      document.body.innerHTML = `
        <div style="
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          min-height:100vh; background:#0f0f0f; color:#fff; font-family:sans-serif;
          text-align:center; padding:24px; box-sizing:border-box;">
          <div style="font-size:56px; margin-bottom:16px;">🚫</div>
          <h2 style="font-size:22px; font-weight:700; margin:0 0 12px;">Facebook Lite Not Supported</h2>
          <p style="font-size:15px; color:#aaa; margin:0 0 28px; max-width:320px; line-height:1.6;">
            Please open this site in <strong style="color:#fff;">Chrome</strong> or your phone's default browser for the best experience.
          </p>
          <p style="font-size:13px; color:#666;">Tap the <strong style="color:#aaa;">⋮ menu</strong> → <strong style="color:#aaa;">Open in browser</strong></p>
        </div>`;
    });
    throw new Error("Facebook Lite blocked.");
  }
})();

// =====================
// CONFIGURATION
// =====================
const FB_USERNAME = "https://www.facebook.com/synt.production/";

// =====================
// ACCOUNT PACKAGES
// =====================
const accountPackages = [
  { id:1, name:"CPM Service", price:59,  specs:"Starter Account Deal",   tags:["Top-up","Boost HP", "Customize"],        image:"photos/Service.png" },
  { id:2, name:"Package 1",   price:99,  specs:"Standard Account Deal",  tags:["Standard","Popular"],                    image:"photos/1.png" },
  { id:3, name:"Package 2",   price:199, specs:"Advanced Account Deal",  tags:["Advanced","More Features"],              image:"photos/2.png" },
  { id:4, name:"Package 3",   price:299, specs:"Premium Account Deal",   tags:["Premium","Best Value"],                  image:"photos/3.png" },
  { id:5, name:"Package 4",   price:399, specs:"Elite Account Deal",     tags:["Elite","Full Access"],                   image:"photos/4.png" },
  { id:6, name:"Package 5",   price:99,  specs:"Elite Account Deal",     tags:["Elite","Full Access"],                   image:"photos/5.png" }
];

// =====================
// CAR DATA — All ₱30
// =====================
const cars = [

  // ── TOYOTA ──────────────────────────────────────────────
  { id:1,   name:"Toyota GR Yaris",        category:"sports",  price:30, specs:"Modified · Wide Body Kit · Race Spec",              tags:["Sports","Modified","Toyota"],            image:"cars/Toyota Yaris.png" },
  { id:2,   name:"Toyota Altezza",         category:"jdm",     price:30, specs:"Modified · Sport Sedan · JDM Spec",                 tags:["JDM","Modified","Toyota"],               image:"cars/Altezza.png" },
  { id:3,   name:"Toyota Fortuner",        category:"suv",     price:30, specs:"Modified · Drag Build · Turbo Swap",                tags:["SUV","Modified","Toyota"],               image:"cars/Fortuner.png" },

  // ── NISSAN / SKYLINE GTR ─────────────────────────────────
  { id:4,   name:"Nissan Skyline GTR (Classic)", category:"jdm", price:30, specs:"Classic · Vintage GTR · Modified",               tags:["JDM","Classic","Nissan"],                image:"cars/GTR old.png" },
  { id:5,   name:"Nissan Skyline GTR R32 (Monster)",category:"jdm",price:30,specs:"R32 · Monster Livery · Wide Body",              tags:["JDM","R32","Nissan"],                    image:"cars/GTR R32.png" },
  { id:6,   name:"Nissan Skyline GTR R32 (LBWK)", category:"jdm", price:30, specs:"R32 · Liberty Walk · Race Spec",                tags:["JDM","R32","Liberty Walk"],              image:"cars/GTR R32 (2).png" },
  { id:7,   name:"Nissan Skyline GTR R33",  category:"jdm",    price:30, specs:"R33 · Carbon Livery · Modified",                   tags:["JDM","R33","Nissan"],                    image:"cars/GTR R33.png" },
  { id:8,   name:"Nissan Skyline GTR R34 (Cyan)", category:"jdm", price:30, specs:"R34 · Race Build · IDRC Livery",                tags:["JDM","R34","Nissan"],                    image:"cars/GTR R34.png" },
  { id:9,   name:"Nissan Skyline GTR R34 (Green)",category:"jdm", price:30, specs:"R34 · Wide Body · Turbo Engine Bay",            tags:["JDM","R34","Nissan"],                    image:"cars/GTR R34 (2).png" },
  { id:10,  name:"Nissan Skyline GTR R34 (Red)",  category:"jdm", price:30, specs:"R34 · Slammed · Nismo Build",                   tags:["JDM","R34","Nismo"],                     image:"cars/GTR R34 (3).png" },
  { id:11,  name:"Nissan Skyline GTR R34 (FNF)",  category:"jdm", price:30, specs:"R34 · Fast & Furious · NX Livery",              tags:["JDM","R34","FNF"],                       image:"cars/GTR R34 (4).png" },
  { id:12,  name:"Nissan 240SX",            category:"jdm",    price:30, specs:"Modified · Wide Body · JDM Drift Build",           tags:["JDM","Drift","Nissan"],                  image:"cars/240sx.png" },
  { id:13,  name:"Nissan Fairlady 240Z",    category:"jdm",    price:30, specs:"Classic · Stance Build · JDM",                     tags:["JDM","Classic","Nissan"],                image:"cars/240z.png" },

  // ── BMW ──────────────────────────────────────────────────
  { id:14,  name:"BMW i7 M70 (Orange)",     category:"luxury",  price:30, specs:"i7 M70 · Two-Tone · Wide Body",                   tags:["Luxury","BMW","Modified"],               image:"cars/BMW (2).png" },
  { id:15,  name:"BMW M5 E28 (Black)",      category:"classic", price:30, specs:"E28 · Matte Black · BBS Wheels",                  tags:["Classic","BMW","E28"],                   image:"cars/BMW (3).png" },
  { id:16,  name:"BMW M5 E39 (Black)",      category:"classic", price:30, specs:"E39 · Angel Eyes · Sport Tune",                   tags:["Classic","BMW","E39"],                   image:"cars/BMW (4).png" },
  { id:17,  name:"BMW Mustang (Green)",     category:"muscle",  price:30, specs:"Muscle · Race Spec · Modified",                   tags:["Muscle","Modified","BMW"],               image:"cars/BMW (6).png" },
  { id:18,  name:"BMW M4 (Blue Graffiti)",  category:"sports",  price:30, specs:"M4 · Twin Turbo · Graffiti Wrap",                 tags:["Sports","BMW","M4"],                     image:"cars/BMW (7).png" },
  { id:19,  name:"BMW M5 G90 (White)",      category:"sports",  price:30, specs:"G90 · Red Grille · M5 Build",                     tags:["Sports","BMW","M5"],                     image:"cars/BMW (7).png" },
  { id:20,  name:"BMW M5 F10 (Matte Black)",category:"sports",  price:30, specs:"F10 · Matte Black · M5 Tune",                    tags:["Sports","BMW","M5"],                     image:"cars/BMW (9).png" },
  { id:21,  name:"BMW M3 Touring (Gray)",   category:"sports",  price:30, specs:"M3 Touring · Slammed · Blue DRL",                 tags:["Sports","BMW","M3"],                     image:"cars/BMW (10).png" },
  { id:22,  name:"BMW E36 (Teal Livery)",   category:"drift",   price:30, specs:"E36 · Race Livery · Drift Spec",                  tags:["Drift","BMW","E36"],                     image:"cars/BMW (11).png" },
  { id:23,  name:"BMW M5 F10 (Dark)",       category:"sports",  price:30, specs:"F10 · Dark Build · Red Calipers",                 tags:["Sports","BMW","M5"],                     image:"cars/BMW (12).png" },
  { id:24,  name:"BMW M4 (Black/Red)",      category:"sports",  price:30, specs:"M4 · Matte Black · Red Accents",                  tags:["Sports","BMW","M4"],                     image:"cars/BMW (13).png" },
  { id:25,  name:"BMW M3 Touring (Red)",    category:"sports",  price:30, specs:"M3 Touring · Race Build · Engine Bay",            tags:["Sports","BMW","M3"],                     image:"cars/BMW (14).png" },
  { id:26,  name:"BMW i7 M70 (Black)",      category:"luxury",  price:30, specs:"i7 M70 · Black · Red Accents",                    tags:["Luxury","BMW","i7"],                     image:"cars/BMW (15).png" },
  { id:27,  name:"BMW M5 E39 (Red)",        category:"classic", price:30, specs:"E39 · Red · Yellow Angel Eyes",                   tags:["Classic","BMW","E39"],                   image:"cars/BMW (16).png" },
  { id:28,  name:"BMW M4 (Gold/Yellow)",    category:"sports",  price:30, specs:"M4 · Gold Wrap · Black Wheels",                   tags:["Sports","BMW","M4"],                     image:"cars/BMW (17).png" },
  { id:29,  name:"BMW i7 M70 (Mint Green)", category:"luxury",  price:30, specs:"i7 M70 · Mint · Lowered",                         tags:["Luxury","BMW","i7"],                     image:"cars/BMW (18).png" },
  { id:30,  name:"BMW M5 G90 (Mansory)",    category:"sports",  price:30, specs:"G90 · Mansory Kit · Camo Hood",                   tags:["Sports","BMW","Mansory"],                image:"cars/BMW.png" },
  { id:31,  name:"BMW M4 (Gray Touring)",   category:"sports",  price:30, specs:"M4 Touring · Gray · Blue DRL",                    tags:["Sports","BMW","M4"],                     image:"cars/BMW (5).png" },

  // ── AUDI ─────────────────────────────────────────────────
  { id:32,  name:"Audi RS2 (Silver Wagon)", category:"classic", price:30, specs:"RS2 · Slammed Wagon · Modified",                  tags:["Classic","Audi","RS2"],                  image:"cars/Audi.png" },
  { id:33,  name:"Audi RS6 (Purple)",       category:"sports",  price:30, specs:"RS6 · Wide Body · Purple Build",                  tags:["Sports","Audi","RS6"],                   image:"cars/Audi (2).png" },
  { id:34,  name:"Audi RS6 (Blue/Carbon)",  category:"sports",  price:30, specs:"RS6 · Carbon Fenders · Blue Build",               tags:["Sports","Audi","RS6"],                   image:"cars/Audi (3).png" },
  { id:35,  name:"Audi R8 (Police)",        category:"sports",  price:30, specs:"R8 · Police Livery · Race Spec",                  tags:["Sports","Audi","R8"],                    image:"cars/Audi (4).png" },
  { id:36,  name:"Audi R8 (Orange)",        category:"sports",  price:30, specs:"R8 · Orange · Sparco Build",                      tags:["Sports","Audi","R8"],                    image:"cars/Audi (5).png" },
  { id:37,  name:"Audi S5 (Dark Blue)",     category:"sports",  price:30, specs:"S5 · Dark Blue · ABT Build",                      tags:["Sports","Audi","S5"],                    image:"cars/Audi (6).png" },

  // ── BENTLEY ──────────────────────────────────────────────
  { id:38,  name:"Bentley Continental (Gold)", category:"luxury", price:30, specs:"Continental GT · Gold/Black · Modified",        tags:["Luxury","Bentley","Continental"],        image:"cars/Bentley.png" },
  { id:39,  name:"Bentley Continental (Black)",category:"luxury", price:30, specs:"Continental GT · Black · Silver Wheels",        tags:["Luxury","Bentley","Continental"],        image:"cars/Bentley (2).png" },

  // ── BUGATTI ──────────────────────────────────────────────
  { id:40,  name:"Bugatti Chiron",           category:"supercar",price:30, specs:"Chiron · Blue/Carbon · NOS Build",               tags:["Supercar","Bugatti","Chiron"],           image:"cars/Bugatti.png" },

  // ── CADILLAC ─────────────────────────────────────────────
  { id:41,  name:"Cadillac CTS-V (Black/Gold)",category:"muscle",price:30, specs:"CTS-V · Black/Gold · Yokohama Tires",            tags:["Muscle","Cadillac","CTS-V"],             image:"cars/Cadillac.png" },
  { id:42,  name:"Cadillac CTS-V (Matte Black)",category:"muscle",price:30,specs:"CTS-V · Matte Black · White Wheels",             tags:["Muscle","Cadillac","CTS-V"],             image:"cars/Cadillac (2).png" },
  { id:43,  name:"Cadillac Escalade (Orange)",category:"suv",    price:30, specs:"Escalade · Orange · Sport Build",                tags:["SUV","Cadillac","Escalade"],             image:"cars/escalande.png" },
  { id:44,  name:"Cadillac Escalade (Black)", category:"suv",    price:30, specs:"Escalade · Black · Pink Accents",                tags:["SUV","Cadillac","Escalade"],             image:"cars/esclande.png" },

  // ── CHEVROLET ────────────────────────────────────────────
  { id:45,  name:"Chevrolet Camaro SS (Gray)",category:"muscle", price:30, specs:"Camaro · Matte Gray · Race Wing",                tags:["Muscle","Chevrolet","Camaro"],           image:"cars/Chevrolet.png" },
  { id:46,  name:"Chevrolet Camaro ZL1 (Purple)",category:"muscle",price:30,specs:"Camaro ZL1 · Purple · Black Wheels",            tags:["Muscle","Chevrolet","Camaro"],           image:"cars/Chevrolet (2).png" },
  { id:47,  name:"Chevrolet Camaro SS (Red)", category:"muscle", price:30, specs:"Camaro SS · Red · Slammed",                      tags:["Muscle","Chevrolet","Camaro"],           image:"cars/Chevrolet (3).png" },
  { id:48,  name:"Chevrolet Camaro ZL1 (Red)",category:"muscle", price:30, specs:"Camaro ZL1 · Red · Bronze Wheels",               tags:["Muscle","Chevrolet","Camaro"],           image:"cars/Chevrolet (4).png" },
  { id:49,  name:"Chevrolet Camaro ZL1 (Teal)",category:"muscle",price:30, specs:"Camaro ZL1 · Teal · Wide Body",                  tags:["Muscle","Chevrolet","Camaro"],           image:"cars/Chevrolet (5).png" },
  { id:50,  name:"Chevrolet Impala 427",      category:"classic",price:30, specs:"1967 Impala · Lowrider · Dark Red",              tags:["Classic","Chevrolet","Impala"],          image:"cars/Chevrolet impala.png" },
  { id:51,  name:"Chevrolet Silverado (Blue)",category:"truck",  price:30, specs:"Silverado · Blue · Engine Show",                 tags:["Truck","Chevrolet","Silverado"],         image:"cars/Engine.png" },

  // ── CORVETTE ─────────────────────────────────────────────
  { id:52,  name:"Corvette ZR1 (Red)",        category:"sports", price:30, specs:"C6 ZR1 · Red · Race Wing",                       tags:["Sports","Corvette","ZR1"],               image:"cars/Corvette.png" },
  { id:53,  name:"Corvette C3 (Classic)",     category:"classic",price:30, specs:"C3 · Gray · Classic Build",                      tags:["Classic","Corvette","C3"],               image:"cars/Corvette (2).png" },
  { id:54,  name:"Corvette Z06 (White)",      category:"sports", price:30, specs:"C8 Z06 · White · Carbon Kit",                    tags:["Sports","Corvette","Z06"],               image:"cars/Corvette (3).png" },
  { id:55,  name:"Corvette Stingray (Black)", category:"sports", price:30, specs:"C7 Stingray · Black · Red Accents",               tags:["Sports","Corvette","Stingray"],          image:"cars/Corvette (4).png" },
  { id:56,  name:"Corvette Stingray (White)", category:"sports", price:30, specs:"C7 Stingray · White · Sport Build",               tags:["Sports","Corvette","Stingray"],          image:"cars/Corvette (5).png" },
  { id:57,  name:"Corvette Z06 (Gray)",       category:"sports", price:30, specs:"C6 Z06 · Gray · Silver Wheels",                  tags:["Sports","Corvette","Z06"],               image:"cars/Corvette (6).png" },
  { id:58,  name:"Corvette Stingray (Blue)",  category:"sports", price:30, specs:"C7 Stingray · Blue · Race Wing",                  tags:["Sports","Corvette","Stingray"],          image:"cars/Corvette (7).png" },

  // ── CHRYSLER ─────────────────────────────────────────────
  { id:59,  name:"Chrysler 300C SRT8",        category:"muscle", price:30, specs:"300C · Black · Dark Wheels",                     tags:["Muscle","Chrysler","300C"],              image:"cars/Chrysler.png" },

  // ── DACIA ────────────────────────────────────────────────
  { id:60,  name:"Dacia Logan",               category:"jdm",    price:30, specs:"Logan · Black · Stanced",                        tags:["Modified","Dacia","Stance"],             image:"cars/Dacia.png" },

  // ── DODGE ────────────────────────────────────────────────
  { id:61,  name:"Dodge Challenger (Purple Demon)",category:"muscle",price:30,specs:"Challenger · Purple/Black · Demon Build",     tags:["Muscle","Dodge","Challenger"],           image:"cars/Dodge.png" },
  { id:62,  name:"Dodge Challenger (Black Panther)",category:"muscle",price:30,specs:"Challenger · Black · Panther Wrap",          tags:["Muscle","Dodge","Challenger"],           image:"cars/Dodge (2).png" },
  { id:63,  name:"Dodge Challenger SRT (Purple)", category:"muscle",price:30, specs:"Challenger SRT · Purple Hellcat · Race Tires",tags:["Muscle","Dodge","SRT Hellcat"],          image:"cars/Dodge (3).png" },
  { id:64,  name:"Dodge Challenger (Jaja Wrap)", category:"muscle",price:30,  specs:"Challenger · Purple/White · Custom Wrap",     tags:["Muscle","Dodge","Challenger"],           image:"cars/Dodge (4).png" },
  { id:65,  name:"Dodge Challenger (Gray/Panther)",category:"muscle",price:30, specs:"Challenger · Gray · Panther Graphic",        tags:["Muscle","Dodge","Challenger"],           image:"cars/Dodge (5).png" },
  { id:66,  name:"Dodge Diplomat",            category:"classic", price:30, specs:"Diplomat · Lowrider · Wood Panel",              tags:["Classic","Dodge","Diplomat"],            image:"cars/Dodge Diplomat.png" },

  // ── ASTON MARTIN ─────────────────────────────────────────
  { id:67,  name:"Aston Martin Vantage",      category:"supercar",price:30, specs:"Vantage · Racing Green · Wide Body",            tags:["Supercar","Aston Martin","Vantage"],     image:"cars/Aston martin.png" },

  // ── FERRARI ──────────────────────────────────────────────
  { id:68,  name:"Ferrari 458 Italia (Red)",  category:"supercar",price:30, specs:"458 · Red · Race Spec",                         tags:["Supercar","Ferrari","458"],              image:"cars/Ferrari.png" },
  { id:69,  name:"Ferrari 458 Italia (Red 2)",category:"supercar",price:30, specs:"458 · Red · Sport Tune",                        tags:["Supercar","Ferrari","458"],              image:"cars/Ferrari (2).png" },
  { id:70,  name:"Ferrari 250 GT (Classic)",  category:"classic", price:30, specs:"250 GT · Dark Red · Vintage Roadster",          tags:["Classic","Ferrari","250 GT"],            image:"cars/Ferrari (3).png" },
  { id:71,  name:"Ferrari LaFerrari",         category:"supercar",price:30, specs:"LaFerrari · Red · Race Wing",                   tags:["Supercar","Ferrari","LaFerrari"],        image:"cars/Ferrari (4).png" },
  { id:72,  name:"Ferrari F12 (Green)",       category:"supercar",price:30, specs:"F12 · Racing Green · Wide Body",                tags:["Supercar","Ferrari","F12"],              image:"cars/Ferrari F12.png" },
  { id:73,  name:"Ferrari F12 (Blue)",        category:"supercar",price:30, specs:"F12 · Matte Blue · Yokohama Build",             tags:["Supercar","Ferrari","F12"],              image:"cars/Ferrari F12 (2).png" },
  { id:74,  name:"Ferrari F40 (Red)",         category:"supercar",price:30, specs:"F40 · Red · Classic Supercar",                  tags:["Supercar","Ferrari","F40"],              image:"cars/Ferrari F40.png" },
  { id:75,  name:"Ferrari F40 (Dark Red)",    category:"supercar",price:30, specs:"F40 · Dark Red · Modified",                     tags:["Supercar","Ferrari","F40"],              image:"cars/Ferrari F40 (2).png" },
  { id:76,  name:"Ferrari F40 (Green)",       category:"supercar",price:30, specs:"F40 · Green · Italian Spec",                    tags:["Supercar","Ferrari","F40"],              image:"cars/Ferrari F40 (3).png" },
  { id:77,  name:"Ferrari F40 (JPS Livery)",  category:"supercar",price:30, specs:"F40 · John Player Special · Race Livery",       tags:["Supercar","Ferrari","F40"],              image:"cars/Ferrari F40 (4).png" },

  // ── FIAT ─────────────────────────────────────────────────
  { id:78,  name:"Fiat Doblo",                category:"van",     price:30, specs:"Doblo · White · Stanced Build",                 tags:["Van","Fiat","Stance"],                   image:"cars/Fiat.png" },

  // ── FAST & FURIOUS ───────────────────────────────────────
  { id:79,  name:"Mitsubishi Eclipse (FNF Green)",category:"fnf", price:30, specs:"Eclipse · FNF Livery · Paul Walker Tribute",    tags:["FNF","Mitsubishi","Eclipse"],            image:"cars/FNF.png" },
  { id:80,  name:"Mazda RX-7 (FNF Red)",      category:"fnf",     price:30, specs:"RX-7 · FNF Tokyo Drift · Race Build",           tags:["FNF","Mazda","RX-7"],                    image:"cars/FNF (2).png" },
  { id:81,  name:"Nissan Silvia S15 (FNF)",   category:"fnf",     price:30, specs:"S15 · FNF Livery · Drift Spec",                 tags:["FNF","Nissan","S15"],                    image:"cars/FNF (3).png" },
  { id:82,  name:"Toyota Supra (FNF Orange)",  category:"fnf",     price:30, specs:"Supra · FNF Orange · Race Spec",               tags:["FNF","Toyota","Supra"],                  image:"cars/FNF (4).png" },
  { id:83,  name:"Mitsubishi Evo 9 (FNF Red)", category:"fnf",     price:30, specs:"Evo 9 · FNF Livery · Race Tune",               tags:["FNF","Mitsubishi","Evo 9"],              image:"cars/FNF (5).png" },
  { id:84,  name:"Nissan GTR R34 (FNF Blue)",  category:"fnf",     price:30, specs:"R34 · FNF 2 Fast 2 Furious · Race Spec",       tags:["FNF","Nissan","R34"],                    image:"cars/FNF (6).png" },
  { id:85,  name:"Nissan 350Z (FNF Tokyo)",    category:"fnf",     price:30, specs:"350Z · Tokyo Drift · VeilSide Kit",             tags:["FNF","Nissan","350Z"],                   image:"cars/FNF (7).png" },
  { id:86,  name:"Nissan GTR R33 (FNF Yellow)",category:"fnf",     price:30, specs:"R33 · FNF Livery · Robocar Build",              tags:["FNF","Nissan","R33"],                    image:"cars/FNF (8).png" },

  // ── FORD ─────────────────────────────────────────────────
  { id:87,  name:"Ford Focus RS (Dark Blue)",  category:"sports",  price:30, specs:"Focus RS · Dark Blue · Modified",              tags:["Sports","Ford","Focus RS"],              image:"cars/Ford.png" },
  { id:88,  name:"Ford Focus RS (Silver)",     category:"sports",  price:30, specs:"Focus RS · Silver · Pioneer Build",             tags:["Sports","Ford","Focus RS"],              image:"cars/Ford (2).png" },
  { id:89,  name:"Ford Explorer (Gray)",       category:"suv",     price:30, specs:"Explorer SVT · Gray · Modified",               tags:["SUV","Ford","Explorer"],                 image:"cars/Ford (3).png" },
  { id:90,  name:"Ford Explorer (Navy Wrap)",  category:"suv",     price:30, specs:"Explorer · Navy · Race Wrap",                   tags:["SUV","Ford","Explorer"],                 image:"cars/Ford (4).png" },
  { id:91,  name:"Ford F100 Ranger",           category:"truck",   price:30, specs:"F100 Ranger · Classic · Low Rider",             tags:["Truck","Ford","Classic"],                image:"cars/Ford (5).png" },
  { id:92,  name:"Ford Bronco (Camping Build)",category:"suv",     price:30, specs:"Bronco · AR Camping Edition · Off-Road",        tags:["SUV","Ford","Bronco"],                   image:"cars/Ford (6).png" },
  { id:93,  name:"Ford Explorer Thai Build",   category:"suv",     price:30, specs:"Explorer · Thai Style · Custom Wrap",           tags:["SUV","Ford","Modified"],                 image:"cars/Ford Thai.png" },
  { id:94,  name:"Ford Transit (JDM Van)",     category:"van",     price:30, specs:"Transit · Dark Red · Japanese Style Wrap",      tags:["Van","Ford","JDM"],                      image:"cars/Ford (7).png" },

  // ── MITSUBISHI EVO ───────────────────────────────────────
  { id:95,  name:"Mitsubishi Evo 9 (Dark Green)",category:"jdm",   price:30, specs:"Evo IX · Dark Green · Varis Body Kit",         tags:["JDM","Mitsubishi","Evo 9"],              image:"cars/Evo_9.png" },
  { id:96,  name:"Mitsubishi Evo 9 (Yellow)",  category:"jdm",     price:30, specs:"Evo IX · Yellow · Stock Spec",                  tags:["JDM","Mitsubishi","Evo 9"],              image:"cars/Evo 9 (2).png" },
  { id:97,  name:"Mitsubishi Evo 9 (Gray)",    category:"jdm",     price:30, specs:"Evo IX · Gray · Slammed Build",                 tags:["JDM","Mitsubishi","Evo 9"],              image:"cars/Evo 9 (3).png" },
  { id:98,  name:"Mitsubishi Evo 9 (Dark Red)",category:"jdm",     price:30, specs:"Evo IX · Dark Red · FQ-320",                    tags:["JDM","Mitsubishi","Evo 9"],              image:"cars/Evo 9 (4).png" },
  { id:99,  name:"Mitsubishi Evo 10 (Red)",    category:"jdm",     price:30, specs:"Evo X · Red · Wide Body Build",                 tags:["JDM","Mitsubishi","Evo 10"],             image:"cars/Evo 10.png" },
  { id:100, name:"Mitsubishi Evo 10 (Purple)", category:"jdm",     price:30, specs:"Evo X · Purple · Slammed",                      tags:["JDM","Mitsubishi","Evo 10"],             image:"cars/Evo 10 (2).png" },
  { id:101, name:"Mitsubishi Evo 10 (Red Race)",category:"jdm",    price:30, specs:"Evo X · Red · Race Livery",                     tags:["JDM","Mitsubishi","Evo 10"],             image:"cars/Evo 10 (3).png" },
  { id:102, name:"Mitsubishi Eclipse",         category:"jdm",     price:30, specs:"Eclipse · Yellow · Modified Wide Body",         tags:["JDM","Mitsubishi","Eclipse"],            image:"cars/eclipse.png" },

  // ── HONDA CIVIC FD (8TH GEN) ─────────────────────────────
  { id:103, name:"Honda Civic FD (Blue Mugen RR)",  category:"jdm",  price:30, specs:"FD · Mugen RR · Dark Blue · Modified",         tags:["JDM","Honda","Civic FD"],               image:"cars/Honda FD.png" },
  { id:104, name:"Honda Civic FD (Orange)",          category:"jdm",  price:30, specs:"FD · 1.8 iVTEC · Orange · Slammed",            tags:["JDM","Honda","Civic FD"],               image:"cars/Honda Fd (2).png" },
  { id:105, name:"Honda Civic FD (White Type R)",    category:"jdm",  price:30, specs:"FD · Civic Type R · White · Wide Body",        tags:["JDM","Honda","Civic FD","Type R"],      image:"cars/Honda FD (3).png" },
  { id:106, name:"Honda Civic FD (Grey Type R)",     category:"jdm",  price:30, specs:"FD · Civic Type R · Grey · Race Spec",         tags:["JDM","Honda","Civic FD","Type R"],      image:"cars/Honda Fd (4).png" },

  // ── HONDA CIVIC FK8 (TYPE R) ─────────────────────────────
  { id:107, name:"Honda Civic FK8 (White Type R)",   category:"jdm",  price:30, specs:"FK8 · Type R · White · Carbon Hood",          tags:["JDM","Honda","Civic FK8","Type R"],     image:"cars/Honda Fk8.png" },
  { id:108, name:"Honda Civic FK8 (Red RS)",         category:"jdm",  price:30, specs:"FK8 · RS · Red · Carbon Hood · Wide Body",    tags:["JDM","Honda","Civic FK8"],              image:"cars/Honda Fk8 (2).png" },
  { id:109, name:"Honda Civic FK8 (Black RS)",       category:"jdm",  price:30, specs:"FK8 · RS · Black · Gold Carbon · Wide Body",  tags:["JDM","Honda","Civic FK8"],              image:"cars/Honda Fk8 (3).png" },
  { id:110, name:"Honda Civic FK8 (Red Type R)",     category:"jdm",  price:30, specs:"FK8 · Type R · Red · Gold Badge",             tags:["JDM","Honda","Civic FK8","Type R"],     image:"cars/Honda Fk8 (4).png" },
  { id:111, name:"Honda Civic FK8 (Yellow RS Turbo)",category:"jdm",  price:30, specs:"FK8 · RS Turbo · Yellow · Wide Body",         tags:["JDM","Honda","Civic FK8"],              image:"cars/Honda Fk8 (5).png" },
  { id:112, name:"Honda Civic FK8 (Teal GODZ1LL4)", category:"jdm",  price:30, specs:"FK8 · Type R · Teal · California Plate",      tags:["JDM","Honda","Civic FK8","Type R"],     image:"cars/Honda Fk8 (6).png" },

  // ── HONDA CIVIC EK9 ──────────────────────────────────────
  { id:113, name:"Honda Civic EK9 (White Type R)",   category:"jdm",  price:30, specs:"EK9 · Type R · White · Carbon Hood",         tags:["JDM","Honda","Civic EK9","Type R"],     image:"cars/Honda Ek9.png" },
  { id:114, name:"Honda Civic EK9 (Yellow Type R)",  category:"jdm",  price:30, specs:"EK9 · Type R · Yellow · Yokohama Tires",     tags:["JDM","Honda","Civic EK9","Type R"],     image:"cars/Honda Ek9 (2).png" },

  // ── HONDA CIVIC FN2R / EK SIR ────────────────────────────
  { id:115, name:"Honda Civic FN2R (Pegasus Project)",category:"jdm", price:30, specs:"FN2R · Anime Livery · Wide Body · Stance",   tags:["JDM","Honda","Civic FN2R","Anime"],     image:"cars/Honda.png" },
  { id:116, name:"Honda Civic EK SiR (Red)",         category:"jdm",  price:30, specs:"EK · SiR · Red · Carbon Hood · Modified",    tags:["JDM","Honda","Civic EK"],               image:"cars/Honda (2).png" },

  // ── HONDA S2000 ───────────────────────────────────────────
  { id:117, name:"Honda S2000 (Red Wide Body)",       category:"jdm",  price:30, specs:"S2000 · Red · Wide Body · Intercooler",      tags:["JDM","Honda","S2000"],                  image:"cars/Honda S2k.png" },
  { id:118, name:"Honda S2000 (Red Type S Slammed)",  category:"jdm",  price:30, specs:"S2000 · Type S · Red · Slammed · RAYS",      tags:["JDM","Honda","S2000"],                  image:"cars/Honda S2k (2).png" },
  { id:119, name:"Honda S2000 (Blue Race Spec)",      category:"jdm",  price:30, specs:"S2000 · Baby Blue · Race Spec · Big Wing",   tags:["JDM","Honda","S2000"],                  image:"cars/Honda S2k (3).png" },

  // ── NISSAN GTR R34 ────────────────────────────────────────
  { id:120, name:"Nissan GTR R34 (Yellow)",           category:"jdm",  price:30, specs:"R34 · Yellow · Wide Body · RAYS Wheels",     tags:["JDM","Nissan","GTR R34"],               image:"cars/GTR R34 (5).png" },
  { id:121, name:"Nissan GTR R34 (Police Livery)",    category:"jdm",  price:30, specs:"R34 · Japan Police · Wide Body · Lights",    tags:["JDM","Nissan","GTR R34","Police"],       image:"cars/GTR R34 (6).png" },

  // ── NISSAN GTR R35 ────────────────────────────────────────
  { id:122, name:"Nissan GTR R35 (LBWK Livery)",     category:"jdm",  price:30, specs:"R35 · Liberty Walk · Race Livery",            tags:["JDM","Nissan","GTR R35","LBWK"],        image:"cars/GTR r35.png" },
  { id:123, name:"Nissan GTR R35 (Matte Black)",      category:"jdm",  price:30, specs:"R35 · Matte Black · Nismo Build",             tags:["JDM","Nissan","GTR R35","Nismo"],       image:"cars/GTR R35 (2).png" },
  { id:124, name:"Nissan GTR R35 (Red Bull)",         category:"jdm",  price:30, specs:"R35 · Red Bull Drift Livery · Wide Body",    tags:["JDM","Nissan","GTR R35","Drift"],       image:"cars/GTR R35 (3).png" },
  { id:125, name:"Nissan GTR R35 (Orange TX2K)",      category:"jdm",  price:30, specs:"R35 · TX2K Street Race · Orange · Wide",     tags:["JDM","Nissan","GTR R35"],               image:"cars/GTR R35 (4).png" },
  { id:126, name:"Nissan GTR R35 (Black Nismo)",      category:"jdm",  price:30, specs:"R35 · Black · Nismo · Yellow DRL",           tags:["JDM","Nissan","GTR R35","Nismo"],       image:"cars/GTR R35 (5).png" },

  // ── JEEP ─────────────────────────────────────────────────
  { id:127, name:"Jeep Grand Cherokee (Pink Dragon)", category:"suv",  price:30, specs:"Grand Cherokee · Pink Camo · Dragon Wrap",   tags:["SUV","Jeep","Grand Cherokee"],           image:"cars/Hawk.png" },
  { id:128, name:"Jeep Gladiator (Red)",              category:"truck",price:30, specs:"Gladiator · Red · Off-Road Build · Rack",     tags:["Truck","Jeep","Gladiator"],             image:"cars/Mercedes 4x4.png" },

  // ── KOENIGSEGG ───────────────────────────────────────────
  { id:129, name:"Koenigsegg Agera RS (Red/Black)",   category:"supercar",price:30,specs:"Agera RS · Red/Black Stripe · Open Top",   tags:["Supercar","Koenigsegg","Agera RS"],     image:"cars/Koenigsegg.png" },
  { id:130, name:"Koenigsegg Jesko (Black)",          category:"supercar",price:30,specs:"Jesko · Matte Black · Dark Knight Build",  tags:["Supercar","Koenigsegg","Jesko"],        image:"cars/Koenigsegg (2).png" },
  { id:131, name:"Koenigsegg (Purple Carbon)",        category:"supercar",price:30,specs:"Koenigsegg · Purple · Carbon Body",        tags:["Supercar","Koenigsegg"],                image:"cars/Koenigsegg (3).png" },
  { id:132, name:"Koenigsegg Agera RS (White)",       category:"supercar",price:30,specs:"Agera RS · White/Black · Carbon Details",  tags:["Supercar","Koenigsegg","Agera RS"],     image:"cars/Koenigsegg (4).png" },
  { id:133, name:"Koenigsegg Agera (Red)",            category:"supercar",price:30,specs:"Agera · Red · Black Carbon · Race Spec",   tags:["Supercar","Koenigsegg","Agera"],        image:"cars/Koenigsegg (5).png" },

  // ── FERRARI LAFERRARI ─────────────────────────────────────
  { id:134, name:"Ferrari LaFerrari (Blue)",          category:"supercar",price:30,specs:"LaFerrari · Matte Blue · Yellow Calipers", tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari (2).png" },
  { id:135, name:"Ferrari LaFerrari (Dark Red)",      category:"supercar",price:30,specs:"LaFerrari · Dark Red · Carbon Build",      tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari (3).png" },
  { id:136, name:"Ferrari LaFerrari (Teal)",          category:"supercar",price:30,specs:"LaFerrari · Teal · Black Wheels",          tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari (4).png" },
  { id:137, name:"Ferrari LaFerrari (Red)",           category:"supercar",price:30,specs:"LaFerrari · Red · Race Spec · Big Wing",   tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari (5).png" },
  { id:138, name:"Ferrari LaFerrari (Yellow)",        category:"supercar",price:30,specs:"LaFerrari · Yellow · Carbon Bottom",       tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari (6).png" },
  { id:139, name:"Ferrari LaFerrari (Red Police)",    category:"supercar",price:30,specs:"LaFerrari · Red · Police Build · Wing",    tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari (7).png" },
  { id:140, name:"Ferrari LaFerrari (White)",         category:"supercar",price:30,specs:"LaFerrari · White · Black Wheels",         tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari (8).png" },
  { id:141, name:"Ferrari LaFerrari (Crimson)",       category:"supercar",price:30,specs:"LaFerrari · Crimson Red · Race Wing",      tags:["Supercar","Ferrari","LaFerrari"],       image:"cars/LaFerrari.png" },

  // ── HUDSON HORNET ─────────────────────────────────────────
  { id:142, name:"Hudson Hornet (Classic Black)",     category:"classic",price:30,specs:"Hudson Hornet · Twin Power · Dark Green",   tags:["Classic","Hudson","Hornet"],            image:"cars/Hornet.png" },

  // ── INFINITI ──────────────────────────────────────────────
  { id:143, name:"Infiniti G37 (Matte Gray)",         category:"sports",price:30, specs:"G37 · Matte Gray · Slammed · Angel Eyes",  tags:["Sports","Infiniti","G37"],              image:"cars/Infiniti.png" },

  // ── KIA ───────────────────────────────────────────────────
  { id:144, name:"Kia Stinger GT (Red)",              category:"sports",price:30, specs:"Stinger GT · Red · Yellow Calipers",       tags:["Sports","Kia","Stinger"],               image:"cars/Kia.png" },

  // ── LEXUS ─────────────────────────────────────────────────
  { id:145, name:"Lexus GS (BAPE Blue Camo)",         category:"sports",price:30, specs:"GS · BAPE Camo Livery · Blue · Gold Wheels",tags:["Sports","Lexus","GS","Livery"],        image:"cars/Lexus.png" },
  { id:146, name:"Lexus GS (White Carbon)",           category:"sports",price:30, specs:"GS · White · Carbon Hood · Slammed",       tags:["Sports","Lexus","GS"],                  image:"cars/Lexus (2).png" },
  { id:147, name:"Lexus IS300 (Dark Red)",            category:"jdm",  price:30, specs:"IS300 · Dark Red · RAYS Wheels · Slammed",  tags:["JDM","Lexus","IS300"],                  image:"cars/Lexus (3).png" },
  { id:148, name:"Lexus LFA (Dark Green)",            category:"supercar",price:30,specs:"LFA · Matte Dark Green · Race Spec",       tags:["Supercar","Lexus","LFA"],               image:"cars/Lexus LFA.png" },

  // ── McLAREN 720S ──────────────────────────────────────────
  { id:149, name:"McLaren 720S (Matte Black)",        category:"supercar",price:30,specs:"720S · Matte Black · Carbon Body",         tags:["Supercar","McLaren","720S"],            image:"cars/Mclaren 720s.png" },
  { id:150, name:"McLaren 720S (Orange Carbon)",      category:"supercar",price:30,specs:"720S · Orange · Pure Carbon Hood",         tags:["Supercar","McLaren","720S"],            image:"cars/Mclaren 720s (2).png" },
  { id:151, name:"McLaren 720S (Red LBWK)",           category:"supercar",price:30,specs:"720S · Red · Liberty Walk · Slammed",      tags:["Supercar","McLaren","720S","LBWK"],     image:"cars/Mclaren 720s (3).png" },
  { id:152, name:"McLaren 720S (Black/Orange Livery)",category:"supercar",price:30,specs:"720S · Black/Orange Biohazard Livery",     tags:["Supercar","McLaren","720S"],            image:"cars/Mclaren 720s (4).png" },
  { id:153, name:"McLaren 720S (Pink Spider)",        category:"supercar",price:30,specs:"720S · Pink · Spider · Bronze Wheels",     tags:["Supercar","McLaren","720S","Spider"],   image:"cars/Mclaren 720s (5).png" },

  // ── MERCEDES ─────────────────────────────────────────────
  { id:154, name:"Mercedes AMG GT63 (Matte Black)",   category:"sports",price:30, specs:"GT63 · Matte Black · Red Calipers",        tags:["Sports","Mercedes","AMG GT63"],         image:"cars/Mercedes (2).png" },
  { id:155, name:"Mercedes Maybach S-Class (Red/White)",category:"luxury",price:30,specs:"Maybach S580 · Red/White Two-Tone V12",   tags:["Luxury","Mercedes","Maybach"],          image:"cars/Mercedes (3).png" },
  { id:156, name:"Mercedes E430 W210 (Teal)",         category:"classic",price:30,specs:"E430 · Dark Teal · Slammed · Carbon Hood", tags:["Classic","Mercedes","E430"],            image:"cars/Mercedes (4).png" },
  { id:157, name:"Mercedes AMG GT63S (Mansory Gray)", category:"sports",price:30, specs:"GT63S · Gray · Mansory Kit · Wide Body",   tags:["Sports","Mercedes","AMG GT63","Mansory"],image:"cars/Mercedes (5).png" },
  { id:158, name:"Mercedes CL (White Slammed)",       category:"luxury",price:30, specs:"CL · White · Slammed · Red Calipers",      tags:["Luxury","Mercedes","CL"],               image:"cars/Mercedes (6).png" },
  { id:159, name:"Mercedes C63 AMG (Yellow Wide)",    category:"sports",price:30, specs:"C63 · Yellow · Wide Body · Too Good",      tags:["Sports","Mercedes","C63 AMG"],          image:"cars/Mercedes (7).png" },
  { id:160, name:"Mercedes E63 AMG (Black/Yellow)",   category:"sports",price:30, specs:"E63 · Black · Yellow AMG Stripe",          tags:["Sports","Mercedes","E63 AMG"],          image:"cars/Mercedes (8).png" },
  { id:161, name:"Mercedes AMG GT63 (Yellow)",        category:"sports",price:30, specs:"GT63 · Yellow · Carbon Hood · V8 Turbo",   tags:["Sports","Mercedes","AMG GT63"],         image:"cars/Mercedes (9).png" },
  { id:162, name:"Mercedes S-Class V12 (Matte Gray)", category:"luxury",price:30, specs:"S-Class · V12 · Matte Gray · Teal DRL",   tags:["Luxury","Mercedes","S-Class"],          image:"cars/Mercedes (10).png" },
  { id:163, name:"Mercedes AMG GT63S (Black V12)",    category:"sports",price:30, specs:"GT63S · Black · V12 · Silver Wheels",      tags:["Sports","Mercedes","AMG GT63"],         image:"cars/Mercedes (11).png" },
  { id:164, name:"Mercedes G63 AMG 6x6 (Black/Gold)", category:"suv",  price:30, specs:"G63 AMG 6x6 · Black · Gold Accents",       tags:["SUV","Mercedes","G63","6x6"],           image:"cars/Mercedes 6x6.png" },
  { id:165, name:"Mercedes C63 AMG (Olive Green)",    category:"sports",price:30, specs:"C63 · Matte Olive · Wide Body · C63S",     tags:["Sports","Mercedes","C63 AMG"],          image:"cars/Mercedes.png" },

  // ── LAND ROVER / RANGE ROVER ─────────────────────────────
  { id:166, name:"Range Rover (Black XV8)",           category:"suv",  price:30, specs:"Range Rover · Black · XV8 · Gold Calipers", tags:["SUV","Land Rover","Range Rover"],        image:"cars/Land Rover.png" },
  { id:167, name:"Range Rover (Matte Gray)",          category:"suv",  price:30, specs:"Range Rover · Matte Gray · Red Calipers",   tags:["SUV","Land Rover","Range Rover"],        image:"cars/Land Rover (2).png" },
  { id:168, name:"Land Rover Defender (Matte Black)", category:"suv",  price:30, specs:"Defender · Matte Black · Chine Chaser",     tags:["SUV","Land Rover","Defender"],           image:"cars/Land Rover (3).png" },
  { id:169, name:"Land Rover Defender (White)",       category:"suv",  price:30, specs:"Defender · White · Off-Road · Roof Rack",   tags:["SUV","Land Rover","Defender"],           image:"cars/Land Rover (4).png" },
  { id:170, name:"Range Rover (Gray/Orange Stripe)",  category:"suv",  price:30, specs:"Range Rover · Gray · Orange Stripe · Brim", tags:["SUV","Land Rover","Range Rover"],        image:"cars/Land Rover (5).png" },

  // ── FORD MUSTANG ─────────────────────────────────────────
  { id:171, name:"Ford Mustang GT (Rose/Mauve)",      category:"muscle",price:30,specs:"Mustang GT · Rose/Mauve · 5.0 · Gold Wheels",tags:["Muscle","Ford","Mustang"],             image:"cars/Mustang.png" },
  { id:172, name:"Ford Mustang Boss 429 (Dark Red)",  category:"classic",price:30,specs:"Boss 429 · Dark Red · Classic Muscle",      tags:["Classic","Ford","Mustang","Boss 429"],  image:"cars/Mustang (2).png" },
  { id:173, name:"Ford Mustang Hennessey (Black #1)", category:"muscle",price:30,specs:"Mustang · Hennessey · Black · Race #1",      tags:["Muscle","Ford","Mustang","Hennessey"],  image:"cars/Mustang (3).png" },
  { id:174, name:"Ford Mustang GT350R (White/Blue)",  category:"muscle",price:30,specs:"Shelby GT350R · White · Blue Stripes",       tags:["Muscle","Ford","Mustang","Shelby"],     image:"cars/Mustang (4).png" },
  { id:175, name:"Ford Mustang GT500 (White)",        category:"muscle",price:30,specs:"Shelby GT500 · White · Black Stripes",       tags:["Muscle","Ford","Mustang","GT500"],      image:"cars/Mustang (5).png" },
  { id:176, name:"Ford Mustang Cobra Jet 1400",       category:"muscle",price:30,specs:"Cobra Jet 1400 · Ford Performance Livery",   tags:["Muscle","Ford","Mustang","Cobra Jet"],  image:"cars/Mustang (6).png" },
  { id:177, name:"Ford Mustang 289 (Dark Brown)",     category:"classic",price:30,specs:"Mustang 289 · Dark Brown · Classic Trim",   tags:["Classic","Ford","Mustang","289"],       image:"cars/Mustang (7).png" },
  { id:178, name:"Ford Mustang 1965 (Gold Classic)",  category:"classic",price:30,specs:"Mustang 1965 · Gold · White Roof · Classic",tags:["Classic","Ford","Mustang"],             image:"cars/Mustang old.png" },
  { id:179, name:"Ford Mustang Dark Horse (Blue)",    category:"muscle",price:30,specs:"Mustang Dark Horse · Blue · Black Stripes",  tags:["Muscle","Ford","Mustang","Dark Horse"],  image:"cars/Mustang (8).png" },

  // ── BMW M3 E46 NFS ────────────────────────────────────────
  { id:180, name:"BMW M3 E46 (NFS Most Wanted)",      category:"sports",price:30,specs:"M3 E46 · NFS Most Wanted · Blue/White Livery",tags:["Sports","BMW","M3","NFS"],            image:"cars/NFS.png" },

  // ── MAZDA MIATA NA ────────────────────────────────────────
  { id:181, name:"Mazda Miata NA (Blue JDM)",         category:"jdm",  price:30, specs:"Miata NA · Blue · Yokohama Plate · Stance",  tags:["JDM","Mazda","Miata"],                  image:"cars/Miata.png" },
  { id:182, name:"Mazda Miata NA (Red/Gray Graffiti)",category:"drift", price:30, specs:"Miata NA · Red/Gray · Graffiti Wrap · Drift",tags:["Drift","Mazda","Miata"],               image:"cars/Miata (2).png" },

  // ── HONDA NSX ────────────────────────────────────────────
  { id:183, name:"Honda NSX (Green Stanced)",       category:"jdm",     price:30, specs:"NSX · Green · Wide Body · RAYS Wheels",          tags:["JDM","Honda","NSX"],                    image:"cars/NSX.png" },
  { id:184, name:"Honda NSX (Red Widebody)",         category:"jdm",     price:30, specs:"NSX · Red · Widebody · White Wheels",            tags:["JDM","Honda","NSX"],                    image:"cars/NSX (2).png" },
  { id:185, name:"Honda NSX Type S (Dark Red)",      category:"jdm",     price:30, specs:"NSX · Type S · Dark Red · Black Wheels",         tags:["JDM","Honda","NSX","Type S"],           image:"cars/NSX (3).png" },
  { id:186, name:"Honda NSX (Yellow)",               category:"jdm",     price:30, specs:"NSX · Yellow · Black Wheels · Slammed",          tags:["JDM","Honda","NSX"],                    image:"cars/NSX (4).png" },

  // ── PAGANI ────────────────────────────────────────────────
  { id:187, name:"Pagani Zonda HH (Black Race)",     category:"supercar",price:30, specs:"Zonda HH · Black/Gold · Race #1 · Pirelli",      tags:["Supercar","Pagani","Zonda"],            image:"cars/Pagani.png" },
  { id:188, name:"Pagani Zonda (Purple Carbon)",     category:"supercar",price:30, specs:"Zonda · Purple · Carbon Body · Italian Flag",     tags:["Supercar","Pagani","Zonda"],            image:"cars/Pagani (2).png" },

  // ── PEUGEOT ───────────────────────────────────────────────
  { id:189, name:"Peugeot 406 (Matte Black)",        category:"classic", price:30, specs:"406 · Matte Black · Black Wheels · Stanced",     tags:["Classic","Peugeot","406"],              image:"cars/Peugeot.png" },

  // ── PORSCHE 911 ───────────────────────────────────────────
  { id:190, name:"Porsche 911 RWB (Black/Gold)",     category:"sports",  price:30, specs:"911 RWB · Black · Gold RWB Livery · Wide",       tags:["Sports","Porsche","911","RWB"],         image:"cars/Porsche.png" },
  { id:191, name:"Porsche Panamera (Teal)",          category:"luxury",  price:30, specs:"Panamera · Teal · Black Wheels · Red Calipers",  tags:["Luxury","Porsche","Panamera"],          image:"cars/Porsche (2).png" },
  { id:192, name:"Porsche 911 GT3 RS (White)",       category:"sports",  price:30, specs:"911 GT3 RS · White · Red Wheels · Race Spec",    tags:["Sports","Porsche","911","GT3 RS"],      image:"cars/Porsche (3).png" },
  { id:193, name:"Porsche 911 Turbo S (Red)",        category:"sports",  price:30, specs:"911 Turbo S · Red · Black Stripes · Yellow Brake",tags:["Sports","Porsche","911","Turbo S"],    image:"cars/Porsche (4).png" },
  { id:194, name:"Porsche 911 RWB (White Wave)",     category:"sports",  price:30, specs:"911 RWB 993 · White · Great Wave Livery",        tags:["Sports","Porsche","911","RWB"],         image:"cars/Porsche (5).png" },
  { id:195, name:"Porsche 911 GT3 RS (Dark/Art)",    category:"sports",  price:30, specs:"911 GT3 RS · Dark · GT3RS Art Livery",           tags:["Sports","Porsche","911","GT3 RS"],      image:"cars/Porsche (6).png" },
  { id:196, name:"Porsche 918 Spyder (Gulf #3)",     category:"supercar",price:30, specs:"918 Spyder · Gulf Blue/Orange · #3",             tags:["Supercar","Porsche","918 Spyder","Gulf"],image:"cars/Porsche (7).png" },
  { id:197, name:"Porsche 911 GT3 (Green Shark)",    category:"sports",  price:30, specs:"911 GT3 · Green Shark Livery · #80 · Motul",     tags:["Sports","Porsche","911","GT3"],         image:"cars/Porsche (8).png" },
  { id:198, name:"Porsche Carrera GT (Navy)",        category:"supercar",price:30, specs:"Carrera GT · Navy Blue · RAYS Wheels",           tags:["Supercar","Porsche","Carrera GT"],      image:"cars/Porsche (9).png" },
  { id:199, name:"Porsche 918 Spyder (Green)",       category:"supercar",price:30, specs:"918 Spyder · Green · Silver Tri-Spoke Wheels",   tags:["Supercar","Porsche","918 Spyder"],      image:"cars/POrsche (10).png" },
  { id:200, name:"Porsche 918 Spyder (White)",       category:"supercar",price:30, specs:"918 Spyder · White · Silver Wheels · Gold Badge", tags:["Supercar","Porsche","918 Spyder"],     image:"cars/Porsche (11).png" },

  // ── DODGE RAM ─────────────────────────────────────────────
  { id:201, name:"Dodge RAM Longhorn (Black)",       category:"truck",   price:30, specs:"RAM 1500 · Black · Longhorn 4x4 · Off-Road",     tags:["Truck","Dodge","RAM"],                  image:"cars/Ram.png" },
  { id:202, name:"Dodge RAM Bighorn (Red)",          category:"truck",   price:30, specs:"RAM 1500 · Red · Bighorn 4x4 · Sport Wheels",    tags:["Truck","Dodge","RAM"],                  image:"cars/Ram (2).png" },
  { id:203, name:"Dodge RAM TRX (White USMC)",       category:"truck",   price:30, specs:"RAM TRX 15000 · White · USMC Military Livery",   tags:["Truck","Dodge","RAM","TRX"],            image:"cars/Ram (3).png" },
  { id:204, name:"Dodge RAM Bighorn (Tan)",          category:"truck",   price:30, specs:"RAM 1500 · Tan · Bighorn 4x4 · Black Wheels",    tags:["Truck","Dodge","RAM"],                  image:"cars/Ram (4).png" },
  { id:205, name:"Dodge RAM RT (Olive)",             category:"truck",   price:30, specs:"RAM 1500 · Olive · Dodge RT · Hemi 5.7",         tags:["Truck","Dodge","RAM","RT"],             image:"cars/Ram (5).png" },
  { id:206, name:"Dodge RAM Hemi (Black)",           category:"truck",   price:30, specs:"RAM 1500 · Black · Hemi · Roof Rack 4x4",        tags:["Truck","Dodge","RAM"],                  image:"cars/Ram (6).png" },
  { id:207, name:"Dodge RAM TRX (Red Houston)",      category:"truck",   price:30, specs:"RAM TRX · Red · Houston TRX Livery · 4x4",      tags:["Truck","Dodge","RAM","TRX"],            image:"cars/RAm (7).png" },

  // ── FORD RAPTOR ───────────────────────────────────────────
  { id:208, name:"Ford Raptor SVT (Matte Black)",    category:"truck",   price:30, specs:"F-150 Raptor · Matte Black · SVT · Off-Road",    tags:["Truck","Ford","Raptor"],                image:"cars/Raptor.png" },
  { id:209, name:"Ford Raptor R (Camo)",             category:"truck",   price:30, specs:"F-150 Raptor R · Army Camo · Police Lights",     tags:["Truck","Ford","Raptor"],                image:"cars/Raptor (2).png" },

  // ── ROLLS-ROYCE ───────────────────────────────────────────
  { id:210, name:"Rolls-Royce Cullinan (Gray)",      category:"luxury",  price:30, specs:"Cullinan · Matte Gray · Blue DRL · Gold Brakes", tags:["Luxury","Rolls-Royce","Cullinan"],      image:"cars/Rolls_Royce.png" },

  // ── MAZDA RX-7 ────────────────────────────────────────────
  { id:211, name:"Mazda RX-7 (Yellow Redsuns)",      category:"jdm",     price:30, specs:"RX-7 FD · Yellow · Redsuns Livery · JDM",        tags:["JDM","Mazda","RX-7","Drift"],           image:"cars/Rx7.png" },
  { id:212, name:"Mazda RX-7 (Gray Seiji)",          category:"jdm",     price:30, specs:"RX-7 FD · Gray · Seiji · Widebody · Sailun",     tags:["JDM","Mazda","RX-7"],                   image:"cars/Rx7 (2).png" },
  { id:213, name:"Mazda RX-7 (Red Bull Camo Drift)", category:"drift",   price:30, specs:"RX-7 FD · Camo · Red Bull · NOS · Drift Spec",   tags:["Drift","Mazda","RX-7","Red Bull"],      image:"cars/Rx7 (3).png" },
  { id:214, name:"Mazda RX-7 (Dark Shark)",          category:"jdm",     price:30, specs:"RX-7 FD · Dark · Shark Mouth · 4-Rotor Engine",  tags:["JDM","Mazda","RX-7"],                   image:"cars/Rx7 (4).png" },

  // ── NISSAN S13 ────────────────────────────────────────────
  { id:215, name:"Nissan S13 Silvia (Dark Red)",     category:"drift",   price:30, specs:"S13 · Dark Red · Stanced · White Wheels",        tags:["Drift","Nissan","S13"],                 image:"cars/S13.png" },
  { id:216, name:"Nissan S13 Silvia (Purple LBWK)",  category:"drift",   price:30, specs:"S13 · Purple · Liberty Walk · LBWK",             tags:["Drift","Nissan","S13","LBWK"],          image:"cars/S13 (2).png" },
  { id:217, name:"Nissan S13 Silvia (Sage Green)",   category:"drift",   price:30, specs:"S13 · Sage Green · Stanced · Black Wheels",      tags:["Drift","Nissan","S13"],                 image:"cars/S13 (3).png" },
  { id:218, name:"Nissan S13 Silvia (Red Bull)",     category:"drift",   price:30, specs:"S13 · Red Bull/Speedhunters · Race Spec",        tags:["Drift","Nissan","S13","Red Bull"],      image:"cars/S13 (4).png" },

  // ── NISSAN S15 ────────────────────────────────────────────
  { id:219, name:"Nissan S15 Silvia (White Nismo)",  category:"drift",   price:30, specs:"S15 · White · Nismo R-Tune · Gold Wheels",       tags:["Drift","Nissan","S15","Nismo"],         image:"cars/S15.png" },
  { id:220, name:"Nissan S15 Silvia (Purple IDM)",   category:"drift",   price:30, specs:"S15 · Purple IDM · Widebody · Twin Turbo",       tags:["Drift","Nissan","S15"],                 image:"cars/S15 (2).png" },
  { id:221, name:"Nissan S15 Silvia (White Clean)",  category:"drift",   price:30, specs:"S15 · White · Clean Build · Turbo Intake",       tags:["Drift","Nissan","S15"],                 image:"cars/S15 (3).png" },
  { id:222, name:"Nissan S15 Silvia (Pink Drift)",   category:"drift",   price:30, specs:"S15 · Pink · Drift Spec · Yokohama · #69",       tags:["Drift","Nissan","S15"],                 image:"cars/S15 (4).png" },

  // ── SUBARU BRZ ────────────────────────────────────────────
  { id:223, name:"Subaru BRZ (Olive Flame)",         category:"sports",  price:30, specs:"BRZ · Olive · Flame Livery · Race Wing",         tags:["Sports","Subaru","BRZ"],                image:"cars/SubarBRZ.png" },
  { id:224, name:"Subaru BRZ (Teal Clean)",          category:"sports",  price:30, specs:"BRZ · Teal · Clean Build · White Wheels",        tags:["Sports","Subaru","BRZ"],                image:"cars/Subaru BRZ (2).png" },
  { id:225, name:"Subaru BRZ (White Stanced)",       category:"sports",  price:30, specs:"BRZ · White · Stanced · California Plate",       tags:["Sports","Subaru","BRZ"],                image:"cars/Subaru BRZ (3).png" },
  { id:226, name:"Subaru BRZ (Black Clean)",         category:"sports",  price:30, specs:"BRZ · Black · Mountain Plate · Sport Build",     tags:["Sports","Subaru","BRZ"],                image:"cars/Subaru BRZ (4).png" },
  { id:227, name:"Subaru BRZ (Red Widebody)",        category:"sports",  price:30, specs:"BRZ · Red · Widebody · Black Wheels",            tags:["Sports","Subaru","BRZ"],                image:"cars/Subaru BRZ (5).png" },

  // ── SUBARU IMPREZA / WRX STI ──────────────────────────────
  { id:228, name:"Subaru Impreza WRX STI (Red)",     category:"jdm",     price:30, specs:"WRX STI · Red · Gold Trim · AWD",                tags:["JDM","Subaru","WRX STI"],               image:"cars/Subaru.png" },
  { id:229, name:"Subaru WRX STI (Blue Stanced)",    category:"jdm",     price:30, specs:"WRX STI · Blue · Stanced · RAYS Wheels",        tags:["JDM","Subaru","WRX STI"],               image:"cars/Subaru (2).png" },
  { id:230, name:"Subaru WRX STI (Black Moon Chaser)",category:"jdm",    price:30, specs:"WRX STI · Black · Blue DRL · Moon Chaser",      tags:["JDM","Subaru","WRX STI"],               image:"cars/Subaru (3).png" },

  // ── TOYOTA VELLFIRE ───────────────────────────────────────
  { id:231, name:"Toyota Vellfire (JDM Van)",        category:"van",     price:30, specs:"Vellfire V6 · Black/White · JDM Race Van",       tags:["Van","Toyota","Vellfire","JDM"],        image:"cars/Toyota (2).png" },

  // ── HONDA CIVIC TYPE R (FN2) ─────────────────────────────
  { id:232, name:"Honda Civic Type R FN2 (Dark Red)", category:"jdm",   price:30, specs:"Civic Type R FN2 · Dark Red · Stanced",          tags:["JDM","Honda","Civic","Type R"],         image:"cars/Toyota (3).png" },

  // ── TOYOTA 4WD GXL ────────────────────────────────────────
  { id:233, name:"Toyota 4WD GXL (Teal Lifted)",     category:"suv",     price:30, specs:"4Runner GXL · Teal · Lifted · Beadlock Wheels", tags:["SUV","Toyota","4WD"],                   image:"cars/Toyota 4wd.png" },
  { id:234, name:"Toyota 4WD GXL (Gray Lifted)",     category:"suv",     price:30, specs:"4Runner GXL · Gray · Roof Rack · Off-Road",      tags:["SUV","Toyota","4WD"],                   image:"cars/Toyota 4wd (2).png" },
  { id:235, name:"Toyota Land Cruiser 80 (White)",   category:"suv",     price:30, specs:"Land Cruiser 80 · White · Retro Stripe · ARB",   tags:["SUV","Toyota","Land Cruiser"],          image:"cars/Toyota 4wd (3).png" },

  // ── DODGE SRT CHARGER ─────────────────────────────────────
  { id:236, name:"Dodge Charger SRT (Gray Hellcat)", category:"muscle",  price:30, specs:"Charger SRT · Matte Gray · Hellcat 300+ HP",     tags:["Muscle","Dodge","Charger","SRT"],       image:"cars/Srt.png" },
  { id:237, name:"Dodge Charger SRT (Red Widebody)", category:"muscle",  price:30, specs:"Charger SRT · Red · Widebody · Blower Motor",    tags:["Muscle","Dodge","Charger","SRT"],       image:"cars/Srt (2).png" },
  { id:238, name:"Dodge Charger SRT (Dark Gray LE)", category:"muscle",  price:30, specs:"Charger SRT · Dark Gray · Limited Edition",      tags:["Muscle","Dodge","Charger","SRT"],       image:"cars/Srt (3).png" },
  { id:239, name:"Dodge Charger SRT (Black Tribal)", category:"muscle",  price:30, specs:"Charger SRT · Black/Red Tribal · Race Livery",   tags:["Muscle","Dodge","Charger","SRT"],       image:"cars/Srt (4).png" },
  { id:240, name:"Dodge Durango SRT (Black Skull)",  category:"suv",     price:30, specs:"Durango SRT · Black/Red Skull · Gold Wheels",    tags:["SUV","Dodge","Durango","SRT"],          image:"cars/Srt (5).png" },
  { id:241, name:"Dodge Charger SRT (Red Clean)",    category:"muscle",  price:30, specs:"Charger SRT · Red · Hoosier Tires · Wide Body",  tags:["Muscle","Dodge","Charger","SRT"],       image:"cars/Srt (6).png" },
  { id:242, name:"Dodge Charger SRT (Red Knuckles)", category:"muscle",  price:30, specs:"Charger SRT 392 · Red · Knuckles Livery",        tags:["Muscle","Dodge","Charger","SRT"],       image:"cars/Srt (7).png" },

  // ── TOYOTA HILUX ──────────────────────────────────────────
  { id:243, name:"Toyota Hilux (Red Lifted)",        category:"truck",   price:30, specs:"Hilux · Red · Lifted · Beadlock Wheels",         tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux.png" },
  { id:244, name:"Toyota Hilux (Orange Carbon)",     category:"truck",   price:30, specs:"Hilux · Orange · Carbon Hood · MBR Build",       tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux (2).png" },
  { id:245, name:"Toyota Hilux (Pink BNgarage)",     category:"truck",   price:30, specs:"Hilux · Pink · BNgarage · Pink DRL · Lowered",   tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux (3).png" },
  { id:246, name:"Toyota Hilux (Light Blue Cyan)",   category:"truck",   price:30, specs:"Hilux · Light Blue · Cyan DRL · Low Ride",       tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux (4).png" },
  { id:247, name:"Toyota Hilux (Tan WDS)",           category:"truck",   price:30, specs:"Hilux · Tan · Carbon Hood · WDS Build",          tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota hilux (5).png" },
  { id:248, name:"Toyota Hilux (Black Thai Concept)",category:"truck",   price:30, specs:"Hilux · Black · Thai Concept · Gold Wheels",     tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux (6).png" },
  { id:249, name:"Toyota Hilux (Teal Gorman)",       category:"truck",   price:30, specs:"Hilux · Teal · Gorman Diesel Tuner Livery",      tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux (7).png" },
  { id:250, name:"Toyota Hilux (Red Engine Bay)",    category:"truck",   price:30, specs:"Hilux · Red · Engine Bay Show · AP Brakes",      tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux (8).png" },
  { id:251, name:"Toyota Hilux (White Guy Shop)",    category:"truck",   price:30, specs:"Hilux 2.8 · White/Carbon · Guy Shop Racing",     tags:["Truck","Toyota","Hilux"],               image:"cars/Toyota Hilux (9).png" },
  { id:252, name:"Toyota Hilux (White GR Sport)",    category:"truck",   price:30, specs:"Hilux GR Sport · White · Seiji · Beadlock",      tags:["Truck","Toyota","Hilux","GR"],          image:"cars/Toyota Hilux (10).png" },

  // ── TOYOTA LAND CRUISER 200 ───────────────────────────────
  { id:253, name:"Toyota Land Cruiser 200 (Black)",  category:"suv",     price:30, specs:"Land Cruiser 200 · Black · Red Badge · Lowered", tags:["SUV","Toyota","Land Cruiser"],          image:"cars/Toyota L200.png" },

  // ── TOYOTA MK5 SUPRA A90 ─────────────────────────────────
  { id:254, name:"Toyota Supra A90 (Red 2FAST4U)",   category:"sports",  price:30, specs:"Supra MK5 · Red/Carbon · Drag · 2FAST4U",        tags:["Sports","Toyota","Supra","A90"],        image:"cars/Toyota MK5.png" },
  { id:255, name:"Toyota Supra A90 (Orange Widebody)",category:"sports",  price:30, specs:"Supra MK5 · Orange · Extreme Wide Body · Red Trim",tags:["Sports","Toyota","Supra","A90"],      image:"cars/Toyota MK5 (2).png" },

  // ── TOYOTA MK4 SUPRA ──────────────────────────────────────
  { id:256, name:"Toyota Supra MK4 (Silver OTR)",    category:"jdm",     price:30, specs:"Supra MK4 · Silver · OTR Shop · Engine Bay",     tags:["JDM","Toyota","Supra","MK4"],           image:"cars/Toyota Supra.png" },
  { id:257, name:"Toyota Supra MK4 (Black Drag)",    category:"jdm",     price:30, specs:"Supra MK4 · Black · Widebody · Drag Build",       tags:["JDM","Toyota","Supra","MK4"],           image:"cars/Toyota Supra (2).png" },
  { id:258, name:"Toyota Supra MK4 (Red Classic)",   category:"jdm",     price:30, specs:"Supra MK4 · Red · Classic Build · White Wheels",  tags:["JDM","Toyota","Supra","MK4"],           image:"cars/Toyota Supra (3).png" },

  // ── TOYOTA AE86 ───────────────────────────────────────────
  { id:259, name:"Toyota AE86 Trueno (Red Widebody)", category:"jdm",   price:30, specs:"AE86 · Red · Widebody · Bronze Wheels",           tags:["JDM","Toyota","AE86","Drift"],          image:"cars/Toyota AE86.png" },
  { id:260, name:"Toyota AE86 Trueno (Black)",        category:"jdm",   price:30, specs:"AE86 · Black · Stanced · Pop-up Headlights",      tags:["JDM","Toyota","AE86"],                  image:"cars/Toyota AE86 (2).png" },
  { id:261, name:"Toyota AE86 Levin (Gray)",          category:"jdm",   price:30, specs:"AE86 Levin · Gray · Wide · Yellow Brakes",        tags:["JDM","Toyota","AE86","Levin"],          image:"cars/Toyota AE86 (3).png" },

  // ── TOYOTA CHASER ─────────────────────────────────────────
  { id:262, name:"Toyota Chaser Tourer V (Silver)",   category:"jdm",   price:30, specs:"Chaser JZX100 · Silver · Tourer V · Black Wheels",tags:["JDM","Toyota","Chaser"],               image:"cars/Toyota Chaser.png" },

  // ── TOYOTA CROWN ──────────────────────────────────────────
  { id:263, name:"Toyota Crown (White Stanced)",      category:"jdm",   price:30, specs:"Crown · White · Stanced · Tri-Spoke Wheels",     tags:["JDM","Toyota","Crown"],                 image:"cars/Toyota Crown.png" },
  { id:264, name:"Toyota Crown Athlete (Black)",      category:"jdm",   price:30, specs:"Crown Athlete · Black · Roof Box · Slammed",     tags:["JDM","Toyota","Crown","Athlete"],       image:"cars/Toyota Crown (2).png" },
  { id:265, name:"Toyota Crown (Red Gold)",           category:"jdm",   price:30, specs:"Crown · Red · Gold Crown Badge · Black Wheels",  tags:["JDM","Toyota","Crown"],                 image:"cars/Toyota Crown (3).png" },

  // ── TOYOTA GT86 ───────────────────────────────────────────
  { id:266, name:"Toyota GT86 (Red Stanced)",         category:"sports", price:30, specs:"GT86 · Red · Stanced · White Wheels",            tags:["Sports","Toyota","GT86"],               image:"cars/Toyota GT86.png" },

  // ── TOYOTA GR YARIS ───────────────────────────────────────
  { id:267, name:"Toyota GR Yaris (Black Yellow DRL)",category:"sports", price:30, specs:"GR Yaris · Black · Yellow DRL · Wide Body",      tags:["Sports","Toyota","GR Yaris"],           image:"cars/Toyota Yaris (2).png" },
  { id:268, name:"Toyota GR Yaris (Monster #13)",     category:"sports", price:30, specs:"GR Yaris · Monster Energy · LBWK · #13",        tags:["Sports","Toyota","GR Yaris","Monster"],  image:"cars/Toyota Yaris (3).png" },

  // ── TOYOTA SCION FR-S ─────────────────────────────────────
  { id:269, name:"Toyota Scion FR-S (Dark Red)",      category:"sports", price:30, specs:"Scion FR-S · Dark Red · Matte · Widebody",       tags:["Sports","Toyota","FR-S","Scion"],       image:"cars/Toyota.png" },

  // ── DODGE VIPER ───────────────────────────────────────────
  { id:270, name:"Dodge Viper ACR (Blue/Red)",        category:"supercar",price:30,specs:"Viper ACR · Blue · Red Stripe · Race Wing",      tags:["Supercar","Dodge","Viper","ACR"],       image:"cars/Viper.png" },
  { id:271, name:"Dodge Viper SRT (Red)",             category:"supercar",price:30,specs:"Viper SRT · Red · Silver Wheels · Race Spoiler", tags:["Supercar","Dodge","Viper","SRT"],       image:"cars/Viper (2).png" },

  // ── VOLKSWAGEN ────────────────────────────────────────────
  { id:272, name:"Volkswagen T1 Bus (Red Surf)",      category:"classic", price:30, specs:"VW T1 Bus · Red/White · Surf Board · Beach",    tags:["Classic","Volkswagen","Bus"],           image:"cars/Volkswagen.png" },
  { id:273, name:"Volkswagen Scirocco (Pink)",        category:"sports",  price:30, specs:"Scirocco · Pink · Gold Wheels · Stanced",       tags:["Sports","Volkswagen","Scirocco"],       image:"cars/Volkswagen (2).png" },
  { id:274, name:"Volkswagen Passat 2.0 TDI (Black)", category:"classic", price:30, specs:"Passat · Matte Black · 2.0 TDI · Slammed",      tags:["Classic","Volkswagen","Passat"],        image:"cars/Volkswagen (3).png" },

];

// =====================
// STATE
// =====================
let carCart = {};
let accountCart = {};
let activeFilter = "all";
let activeSection = "regular"; // "regular" or "anime"

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
  const BASE_URL = "https://raw.githubusercontent.com/seijiplayzzz/zynt-website/main/";
  const items = Object.values(accountCart);
  const msg = "Hi! I want to order the following packages:\n\n"
    + items.map((p, i) =>
        `${i + 1}. ${p.name}\n`
      + `   Price: ${formatPrice(p.price)}\n`
      + `   Details: ${p.specs}\n`
      + `   Photo: ${BASE_URL}${p.image}`
      ).join("\n\n")
    + "\n\n---\n"
    + `Total: ${formatPrice(items.reduce((s, p) => s + p.price, 0))}\n`
    + `Total Packages: ${items.length}\n\n`
    + "Kindly let me know how to proceed. Thank you!";
  const url = "https://www.facebook.com/messages/t/synt.production";
  window.open(url + "?text=" + encodeURIComponent(msg), "_blank");
}

// =====================
// CARS
// =====================
function renderGrid() {
  const grid = document.getElementById("carGrid");
  const emptyMsg = document.getElementById("emptyMsg");
  const sourceList = activeSection === "anime" ? animeCars : cars;
  const finalList = activeSection === "anime" ? sourceList : (activeFilter === "all" ? sourceList : sourceList.filter(c => c.category === activeFilter));
  if (!finalList.length) { grid.innerHTML = ""; emptyMsg.style.display = "block"; return; }
  emptyMsg.style.display = "none";
  grid.innerHTML = finalList.map(car =>
    buildCard({ ...car, inCart: !!carCart[car.id], onAdd: `addToCarCart(${car.id})` })
  ).join("");
}

function addToCarCart(id) {
  if (carCart[id]) delete carCart[id];
  else { const c = cars.find(x => x.id === id) || (typeof animeCars !== "undefined" && animeCars.find(x => x.id === id)); if (c) carCart[id] = c; }
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
  activeSection = "regular";
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGrid();
}

function showAnimeCars(btn) {
  activeSection = "anime";
  activeFilter = "all";
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
  const BASE_URL = "https://raw.githubusercontent.com/seijiplayzzz/zynt-website/main/";
  const items = Object.values(carCart);
  const msg = "Hi! I want to order the following cars:\n\n"
    + items.map((c, i) =>
        `${i + 1}. ${c.name}\n`
      + `   Price: ${formatPrice(c.price)}\n`
      + `   Specs: ${c.specs}\n`
      + `   Photo: ${BASE_URL}${c.image}`
      ).join("\n\n")
    + "\n\n---\n"
    + `Total: ${formatPrice(items.reduce((s, c) => s + c.price, 0))}\n`
    + `Total Cars: ${items.length}\n\n`
    + "Kindly let me know their availability. Thank you!";
  const url = "https://www.facebook.com/messages/t/synt.production";
  window.open(url + "?text=" + encodeURIComponent(msg), "_blank");
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
