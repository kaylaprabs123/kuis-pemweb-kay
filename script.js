document.addEventListener("DOMContentLoaded", function() {
    const dataSiswa = [
        { no: 1, nama: "Dillara", nilai: 87, keterangan: "Merajut", link: "dillara.html" },
        { no: 2, nama: "Harry", nilai: 90, keterangan: "Berlari", link: "harry.html" },
        { no: 3, nama: "Adrien", nilai: 88, keterangan: "Boxing", link: "adrien.html" },
        { no: 4, nama: "Marin", nilai: 90, keterangan: "Swimming", link: "marin.html" },
        { no: 5, nama: "Edin", nilai: 85, keterangan: "Farming", link: "edin.html" }
    ];

    const studentTable = document.getElementById("studentTable");
    const searchInput = document.getElementById("searchInput");
    const addStudentBtn = document.getElementById("addStudentBtn");

    // Fungsi untuk membuat baris tabel
    function buatTabel() {
        studentTable.innerHTML = "";  // Mengosongkan tabel sebelumnya
        dataSiswa.forEach(siswa => {
            const tr = document.createElement("tr");

            const noTd = document.createElement("td");
            noTd.textContent = siswa.no;
            tr.appendChild(noTd);

            const namaTd = document.createElement("td");
            namaTd.textContent = siswa.nama;
            tr.appendChild(namaTd);

            const nilaiTd = document.createElement("td");
            nilaiTd.textContent = siswa.nilai;
            tr.appendChild(nilaiTd);

            const keteranganTd = document.createElement("td");
            keteranganTd.textContent = siswa.keterangan;
            tr.appendChild(keteranganTd);

            const aksiTd = document.createElement("td");
            const link = document.createElement("a");
            link.href = siswa.link;
            link.textContent = "Lihat Profil";
            link.classList.add("btn", "btn-info", "btn-sm");
            link.target = "_blank"; // Membuka link di tab baru
            aksiTd.appendChild(link);
            tr.appendChild(aksiTd);

            // Event klik pada nama
            namaTd.classList.add("clickable");
            namaTd.addEventListener("click", function() {
                alert("Kamu mengklik nama: " + siswa.nama);
            });

            // Event hover untuk baris
            tr.addEventListener("mouseover", function() {
                tr.style.backgroundColor = "#FFF"; // Mengubah warna saat hover
            });

            tr.addEventListener("mouseout", function() {
                tr.style.backgroundColor = ""; // Mengembalikan warna saat mouse keluar
            });

            // Event double-click untuk menghapus baris
            tr.addEventListener("dblclick", function() {
                tr.remove();
                alert("Baris " + siswa.nama + " dihapus.");
            });

            studentTable.appendChild(tr);
        });
    }

    // Panggil fungsi untuk membuat tabel
    buatTabel();

    // Event pencarian nama
    searchInput.addEventListener("input", function() {
        const filter = searchInput.value.toLowerCase();
        const rows = studentTable.getElementsByTagName("tr");

        Array.from(rows).forEach(row => {
            const nama = row.getElementsByTagName("td")[1].textContent.toLowerCase();
            if (nama.indexOf(filter) > -1) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // Event untuk menambah siswa baru
    addStudentBtn.addEventListener("click", function() {
        const noBaru = dataSiswa.length + 1;
        const namaBaru = prompt("Masukkan nama siswa baru:");
        const nilaiBaru = prompt("Masukkan nilai siswa:");
        const keteranganBaru = prompt("Masukkan keterangan siswa:");

        if (namaBaru && nilaiBaru && keteranganBaru) {
            const siswaBaru = {
                no: noBaru,
                nama: namaBaru,
                nilai: parseInt(nilaiBaru),
                keterangan: keteranganBaru,
                link: "#" // Ganti dengan link jika diperlukan
            };

            dataSiswa.push(siswaBaru);
            buatTabel();
        }
    });

    // Event 1: Menampilkan alert saat menekan tombol enter
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            alert("Menekan tombol Enter. Mencari: " + this.value);
        }
    });

    // Event 2: Fokus dan blur pada input pencarian
    searchInput.addEventListener("focus", function() {
        this.style.borderColor = "#4CAF50";
    });
    searchInput.addEventListener("blur", function() {
        this.style.borderColor = "";
    });

    // Event 3: Klik pada tombol tambah siswa
    addStudentBtn.addEventListener("click", function() {
        alert("Tombol untuk menambah siswa diklik");
    });

    // Event 4: Hover pada baris tabel
    const rows = document.querySelectorAll("tr");
    rows.forEach(row => {
        row.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#1E2A5E";
        });
        row.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
        });
    });
});
