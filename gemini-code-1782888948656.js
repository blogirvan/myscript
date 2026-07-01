// 1. Cover Interaktif & Play Musik
function openInvitation() {
    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const musicControl = document.getElementById('musicControl');
    const bgMusic = document.getElementById('bgMusic');

    // Animasi cover naik ke atas
    cover.style.transform = 'translateY(-100vh)';
    
    // Tampilkan konten utama dan tombol musik
    setTimeout(() => {
        cover.style.display = 'none';
        mainContent.style.display = 'block';
        musicControl.style.display = 'flex';
        
        // Play music
        bgMusic.play();
        
        // Inisialisasi animasi scroll setelah cover hilang
        initScrollAnimations();
    }, 1000);
}

// 2. Kontrol Musik Latar
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicControl');
    
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.style.animationPlayState = 'running';
    } else {
        bgMusic.pause();
        musicBtn.style.animationPlayState = 'paused';
    }
}

// 3. Hitung Mundur (Countdown)
// Format tanggal: Tahun, Bulan (0-11), Tanggal, Jam, Menit, Detik
const countDownDate = new Date("Dec 25, 2026 08:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Acara Sedang Berlangsung / Selesai";
    }
}, 1000);

// 4. Animasi Scroll Mulus (Intersection Observer)
function initScrollAnimations() {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach((reveal) => {
        observer.observe(reveal);
    });
}

// 5. Galeri Lightbox
function openLightbox(src) {
    document.getElementById('lightbox').style.display = "block";
    document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// 6. Copy ke Clipboard (Dompet Digital)
function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin: " + text);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
}

// 7. RSVP WhatsApp
function sendRSVP() {
    // Ganti dengan nomor WhatsApp Anda (Gunakan kode negara, misal: 62812...)
    const noWA = "6281234567890"; 
    
    const nama = document.getElementById('name').value;
    const kehadiran = document.getElementById('attendance').value;
    const pax = document.getElementById('pax').value;
    const pesan = document.getElementById('message').value;

    if(!nama || !kehadiran || !pax) {
        alert("Mohon lengkapi Nama, Kehadiran, dan Jumlah Orang.");
        return;
    }

    const textWA = `Halo, saya ${nama}.%0A%0ASaya mengkonfirmasi bahwa saya *${kehadiran}* pada acara pernikahan Anda, dengan jumlah rombongan *${pax} orang*.%0A%0APesan/Doa: ${pesan}`;
    
    const urlWA = `https://api.whatsapp.com/send?phone=${noWA}&text=${textWA}`;
    window.open(urlWA, '_blank');
}