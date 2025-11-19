const correctPin = "17"; 
let currentPin = "";
const pinScreen = document.getElementById("pinScreen");
const mainContent = document.querySelector(".center");
const pinDigits = [
    document.getElementById("digit1"),
    document.getElementById("digit2")
];
const customKeyboard = document.getElementById("customKeyboard");

function updatePinDisplay() {
    pinDigits.forEach(digit => digit.textContent = "");
    
    for (let i = 0; i < currentPin.length; i++) {
        if (pinDigits[i]) {
            pinDigits[i].textContent = '•'; 
        }
    }
}

function showErrorFlash() {
    pinDigits.forEach(digit => {
        digit.style.backgroundColor = '#ff4d4d';
        setTimeout(() => {
            digit.style.backgroundColor = '#f0f8ff';
        }, 500);
    });

    setTimeout(() => {
        currentPin = "";
        updatePinDisplay();
    }, 500);
}

customKeyboard.addEventListener('click', (event) => {
    const key = event.target.closest('.key');
    if (!key) return;

    const value = key.getAttribute('data-value');
    const action = key.getAttribute('data-action');

    if (value && currentPin.length < 2) {
        currentPin += value;
        updatePinDisplay();
        
        if (currentPin.length === 2) {
            setTimeout(checkPin, 300);
        }
        
    } else if (action === 'delete') {
        currentPin = currentPin.slice(0, -1);
        updatePinDisplay();
    }
});

function checkPin() {
    if (currentPin === correctPin) {
        pinScreen.style.display = "none";
        mainContent.style.display = "flex";
    } else {
        showErrorFlash();
    }
}

updatePinDisplay(); 

const displayDate = "11,17,2006"; 

const fullMessage = "It’ s your day Langlangggggggg Smile ka naman po dyan nakasimangot ka nanaman 19 m kana langlangg 20 m kana next year JK HAHAHA hindi po pang asar lahat tung message na tu kaya relax omkie ? Toko lang naman sabihin na LAB NA LAB NA LAB PO KITA alagaan mo po sana palagi sarili mo langlang ha toko healthy baby ko kahit medyo tumataba na jk paka seksi at kyut kaya ng baby, ket mapang asar tu mahal at napapasakit ko rin po ulo mo minsan lab na lab ka nito kaya pag may problema ka po magsabi lang po sakin omkie ? lagi lang po ako andito sa tabi mo kakampi moko sa lahat ng bagay kaya lagi mo po tandaan na MAHAL NA MAHAL PO KITA. Again HAPPYY BIRTHDAY PO LANGLANG LOVEEEYOUSOOOMUCHHHH❤️";

const slides = [
  { src: "photo1.jpg", caption: "" },
  { src: "photo2.jpg", caption: "" },
  { src: "photo3.jpg", caption: "" },
  { src: "photo4.jpg", caption: "" },
  { src: "photo5.jpg", caption: "" },
  { src: "photo6.jpg", caption: "" },
  { src: "photo7.jpg", "caption": "" },
  { src: "photo8.jpg", "caption": "" },
  { src: "photo9.jpg", "caption": "" },
  { src: "photo10.jpg", "caption": "" },
  { src: "photo11.jpg", "caption": "" },
  { src: "photo12.jpg", "caption": "" },
  { src: "photo13.jpg", "caption": "" },
  { src: "photo14.jpg", "caption": "" },
  { src: "photo15.jpg", "caption": "" },
  { src: "photo16.jpg", "caption": "" },
  { src: "photo17.jpg", "caption": "" },
  { src: "photo18.jpg", "caption": "" },
  { src: "photo19.jpg", "caption": "" },
  { src: "photo20.jpg", "caption": "" },
  { src: "photo21.jpg", "caption": "" },
  { src: "photo22.jpg", "caption": "" },
  { src: "photo23.jpg", "caption": "" },
  { src: "photo24.jpg", "caption": "" },
  { src: "photo25.jpg", "caption": "" },
];

const birthdayDisplayElement = document.getElementById("birthdayDisplay");

birthdayDisplayElement.innerHTML = displayDate;


const msgBtn = document.getElementById("messageBtn");
const messageModal = document.getElementById("messageModal");
const closeMessageBtn = messageModal.querySelector(".close-message-btn");

const cdBtn = document.getElementById("cdBtn");
const cdMusic = document.getElementById("cdMusic");
const msgMusic = document.getElementById("msgMusic");

const confettiSFX = document.getElementById("confettiSFX"); 

const cdStatusText = document.getElementById("cdStatus");
let pauseTimeout;

let playingAnimationInterval;

const messageArea = document.getElementById("messageArea");
const audioTip = document.getElementById("audioTip");

function clearCdStatus() {
    cdStatusText.textContent = "";
    cdStatusText.classList.remove("visible");
    clearInterval(playingAnimationInterval);
}

function setCdStatus(text) {
    cdStatusText.textContent = text;
    cdStatusText.classList.add("visible");
    clearTimeout(pauseTimeout); 
    clearInterval(playingAnimationInterval);
}

function startPlayingAnimation() {
    setCdStatus("Playing.");
    let dotCount = 1;
    
    clearInterval(playingAnimationInterval); 

    playingAnimationInterval = setInterval(() => {
        dotCount++;
        if (dotCount > 3) {
            dotCount = 1;
        }
        cdStatusText.textContent = "Playing" + ".".repeat(dotCount);
        cdStatusText.classList.add("visible");
    }, 500);
}

msgBtn.addEventListener("click", () => {
  clearCdStatus();
  slideshowModal.style.display = "none"; 
  cdMusic.pause();
  cdMusic.currentTime = 0;
  
  messageArea.innerHTML = fullMessage;
  messageModal.style.display = "flex";
  audioTip.style.opacity = 1;
  
  msgMusic.play(); 
});

closeMessageBtn.addEventListener("click", () => {
  messageArea.innerHTML = ""; 
  audioTip.style.opacity = 0;

  messageModal.style.display = "none";
  msgMusic.pause();
  msgMusic.currentTime = 0;
});

cdBtn.addEventListener("click", () => {
  msgMusic.pause();
  msgMusic.currentTime = 0;
  
  messageArea.innerHTML = "";
  audioTip.style.opacity = 0;

  messageModal.style.display = "none"; 
  slideshowModal.style.display = "none";
  
  clearTimeout(pauseTimeout);

  if (cdMusic.paused) {
    cdMusic.play();
    startPlayingAnimation();
    
  } else {
    cdMusic.pause();
    cdMusic.currentTime = 0;
    
    setCdStatus("Pause"); 
    
    pauseTimeout = setTimeout(clearCdStatus, 1500); 
  }
});

let slideIndex = 0;
const slideshowModal = document.getElementById("slideshowModal");
const slideshowBtn = document.getElementById("slideshowBtn");
const closeSlideshowBtn = slideshowModal.querySelector(".close-slideshow-btn");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slideshowImage = document.getElementById("slideshowImage");
const captionText = document.getElementById("captionText");

function showSlide(n) {
  slideIndex = n;
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}

  const currentSlide = slides[slideIndex];
  slideshowImage.src = currentSlide.src;
  
  captionText.innerHTML = `Photo ${slideIndex + 1} of ${slides.length}`; 
}

slideshowBtn.addEventListener("click", () => {
  clearCdStatus();
  
  messageArea.innerHTML = "";
  audioTip.style.opacity = 0;

  slideshowModal.style.display = "flex";
  messageModal.style.display = "none"; 
  
  showSlide(0); 
  
  cdMusic.pause();
  msgMusic.pause();
  cdMusic.currentTime = 0;
  msgMusic.currentTime = 0;
});

closeSlideshowBtn.addEventListener("click", () => {
  slideshowModal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  showSlide(slideIndex + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(slideIndex - 1);
});

window.addEventListener("click", (event) => {
  if (event.target == slideshowModal) {
    slideshowModal.style.display = "none";
  } else if (event.target == messageModal) {
    messageArea.innerHTML = "";
    audioTip.style.opacity = 0;
    
    messageModal.style.display = "none";
    msgMusic.pause();
    msgMusic.currentTime = 0;
  }
});

const partyBtn = document.getElementById("partyBtn");
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
});

function random(min,max){ return Math.random()*(max-min)+min; }

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = random(0,W);
    this.y = random(-20, -200);
    this.size = random(6,14);
    this.velocity = random(2,5);
    this.angle = random(0, Math.PI*2);
    this.spin = random(-0.1, 0.1);
    this.color = `hsl(${Math.floor(random(0,360))}, 80%, 60%)`;
  }
  update() {
    this.y += this.velocity;
    this.x += Math.sin(this.angle)*2;
    this.angle += this.spin;

    if (this.y > H + 20) return false;
    return true;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size*0.6);
    ctx.restore();
  }
}

let particles = [];
let running = false;

function animate(){
  ctx.clearRect(0,0,W,H);
  particles = particles.filter(p => p.update());
  particles.forEach(p => p.draw(ctx));
  if (particles.length > 0) {
    requestAnimationFrame(animate);
  } else {
    running = false;
  }
}

partyBtn.addEventListener("click", () => {
  confettiSFX.currentTime = 0;
  confettiSFX.play();
  
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }

  if (!running) {
    running = true;
    animate();
  }
});
