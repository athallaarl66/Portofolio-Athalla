# DESIGN.md — Athalla Arli Portfolio

Design system untuk athalla-works.my.id. Experience portfolio beridentitas sinematik dan engineer-first: komposisi fokus pada hasil kerja, navigasi ringkas, serta kontrol langsung tanpa dekorasi berlebih.

Palet aktif dari Color Hunt: `#0B192C` navy sebagai latar, `#1E3E62` biru sebagai surface, `#FF6500` oranye sebagai aksen aksi, dan `#000000` hitam untuk area media. Abu-biru terang dipakai untuk teks agar terbaca di atas navy dan biru.

---

## 1. Color tokens

### Raw palette

| Token         | Hex       | Asal                                                      |
| ------------- | --------- | --------------------------------------------------------- |
| `navy-950`    | `#0B192C` | Color Hunt, latar utama                                   |
| `blue-800`    | `#1E3E62` | Color Hunt, surface                                       |
| `orange-500`  | `#FF6500` | Color Hunt, aksen aksi                                    |
| `black`       | `#000000` | Color Hunt, media                                         |
| `text-strong` | `#F4F6FA` | Turunan netral terang untuk heading                      |
| `text`        | `#D0D9E4` | Turunan biru pucat untuk body                             |
| `text-muted`  | `#AEBED0` | Turunan biru pucat untuk metadata                        |

### Semantic tokens (yang dipakai di komponen)

```css
:root {
  /* surfaces */
  --bg: #0B192C;
  --surface: #1E3E62;
  --surface-raised: #142d49;
  --border: rgb(208 217 228 / 0.2);
  --border-strong: #FF6500;

  /* text */
  --text-strong: #F4F6FA;
  --text: #D0D9E4;
  --text-muted: #AEBED0;

  /* actions & accents */
  --accent: #FF6500;
  --accent-soft: #FF6500;
  --accent-contrast: #000000;
  --accent-2: #1E3E62;
  --accent-2-alt: #142d49;

  /* status */
  --danger: #FF6500;
  --danger-text: #FF6500;

  /* atmosphere (bukan untuk teks) */
  --glow-berry: rgb(30 62 98 / 0.28);
  --glow-crimson: rgb(11 25 44 / 0.35);
  --glow-plum: rgb(255 101 0 / 0.08);
}
```

### Contrast (sudah dihitung, WCAG)

| Kombinasi                                  | Rasio | Pakai untuk                                   |
| ------------------------------------------ | ----- | --------------------------------------------- |
| `--text-strong` on `--bg`                  | 16.4  | Heading                                       |
| `--text-strong` on `--surface`             | 10.0  | Heading di card                               |
| `--text` on `--bg`                          | 12.0  | Body                                          |
| `--text` on `--surface`                      | 7.3   | Body di card                                  |
| `--text-muted` on `--bg`                    | 8.0   | Caption                                       |
| `--text-muted` on `--surface`               | 4.8   | Caption di card                               |
| `--accent` on `--bg`                        | 5.98  | Aksen/link, memenuhi WCAG AA                  |
| `--accent` on `--surface`                    | 3.70  | Jangan teks kecil; gunakan teks terang         |
| `--accent` on `#000000`                      | 7.11  | Aksen/link di area media hitam                 |
| `--accent-contrast` on `--accent`             | 6.2   | Label tombol primary                          |

### Aturan warna

1. **Oranye dipakai selektif sebagai aksen.** Teks oranye pada navy memenuhi WCAG AA; pada biru hanya teks besar atau elemen non-teks.
2. **Navy dan biru membentuk bidang utama.** Hitam khusus area media; teks memakai netral terang.
3. **Jangan tambah warna baru tanpa cek kontras dan pemakaian aktual.**

---

## 2. Typography

Pertahankan font yang sudah dipakai di project. Kalau mau ganti, rekomendasi:

- Heading dan nav: Space Grotesk (600)
- Body: Inter (400, 500)
- Tag, label, angka section: JetBrains Mono (400)

Skala (fluid, pakai `clamp`):

| Role                                               | Size                             | Weight               | Line height | Tracking |
| -------------------------------------------------- | -------------------------------- | -------------------- | ----------- | -------- |
| Display (hero H1)                                  | `clamp(2.5rem, 6vw, 4.5rem)`     | 600                  | 1.05        | -0.02em  |
| H2 (section title)                                 | `clamp(1.75rem, 3.5vw, 2.75rem)` | 600                  | 1.15        | -0.015em |
| H3 (card title)                                    | `1.25rem`                        | 600                  | 1.3         | -0.01em  |
| Body                                               | `1rem` / `1.0625rem`             | 400                  | 1.65        | 0        |
| Small / caption                                    | `0.875rem`                       | 400                  | 1.5         | 0        |
| Overline (label section: "About me", "Tech stack") | `0.75rem`                        | 500, mono, uppercase | 1.4         | 0.12em   |

Batas lebar teks: `max-w-prose` (sekitar 65ch) untuk paragraf.

---

## 3. Spacing, radius, elevation

- Base unit 4px. Pakai skala Tailwind default.
- Section padding vertikal: `py-20` mobile, `py-28` desktop.
- Container: `max-w-6xl`, gutter `px-5` mobile, `px-8` desktop.
- Radius: `rounded-xl` (12px) untuk card, `rounded-lg` (8px) untuk tombol dan input, `rounded-full` untuk chip.
- Elevation lewat **border + perbedaan surface**, bukan shadow tebal. Satu-satunya shadow: glow tipis pada card saat hover, `0 0 0 1px var(--border-strong), 0 12px 32px -12px rgb(0 0 0 / 0.6)`.

---

## 4. Background & atmosphere

Hero dan CTA boleh memakai glow biru/oranye yang sangat halus di atas navy. Section lain memakai bidang navy atau biru.

```css
.hero-bg {
  background:
    radial-gradient(60% 50% at 85% 0%, var(--glow-berry), transparent 70%),
    radial-gradient(50% 45% at 0% 100%, var(--glow-crimson), transparent 70%),
    var(--bg);
}
```

- Glow harus statis atau drift sangat pelan. Tanpa parallax berat.
- Section "Services" atau "Contact" boleh memakai glow oranye tipis satu sisi.
- Jangan pakai noise/grain berat. Kalau pakai, opacity maksimal 4%.
- Motif opsional: dua titik kecil (satu `--text-strong`, satu `--accent`) sebagai penanda di logo atau divider section. Ukuran 6-8px, jangan diulang di banyak tempat.

---

## 5. Components

### Navbar

- Sticky, background `--bg` @ 80% + `backdrop-blur`, border bawah `--border`.
- Link: `--text`, hover `--text-strong`, aktif ditandai underline 2px `--accent`.
- Nomor di mobile menu (01, 02, ...) pakai mono, `--text-muted`.
- "Hire me": tombol primary, ukuran kecil.

### Buttons

- **Primary**: bg `--accent`, teks `--accent-contrast`, hover bg `--accent-soft`, tanpa border.
- **Secondary**: transparan, border `--border-strong`, teks `--text-strong`; hover bg `--accent-2`, border `--accent-2`.
- **Ghost / text link**: teks `--accent`, underline offset 4px saat hover, ikon panah bergeser 2px.
- Tinggi minimal 44px. Focus ring: `outline: 2px solid var(--accent); outline-offset: 3px`.

### Cards (Services, Projects, Skills)

- bg `--surface`, border 1px `--border`, `rounded-xl`, padding `p-6`.
- Hover: border jadi `--border-strong`, naik `translateY(-2px)`, durasi 200ms.
- Project card: thumbnail di atas, tahun dan kategori sebagai overline mono `--text-muted`, judul `--text-strong`, deskripsi `--text` maksimal 3 baris (`line-clamp-3`), tech tags di bawah.

### Tags / chips (tech stack)

- bg `--accent-2-alt` @ 35%, border `--accent-2-alt`, teks `--text-strong`, `rounded-full`, `px-3 py-1`, `text-xs`, font mono.

### Skills grid

- Grup (Frontend, Backend, Database & Ops) dalam card; jumlah skill sebagai overline `--text-muted`.
- Item skill sebagai chip. Baris "Specialized & Protocols" memakai chip dengan prefix `#`.

### FAQ accordion

- Divider `--border`. Pertanyaan `--text-strong`, jawaban `--text`.
- Ikon `+` memutar 45° saat terbuka, warna `--accent`.
- Gunakan elemen `<details>` atau pola accordion dengan `aria-expanded`.

### GitHub contributions

- Skala kontribusi perlu warna lima tingkat yang diuji kontras; palet empat warna saja tidak cukup untuk mendefinisikan skala yang sudah diverifikasi.
- Loading state: skeleton `--surface-raised` dengan pulse pelan, bukan teks "Loading...".

### Forms / contact

- Kontak saat ini berupa mailto dan link sosial. Kalau nanti ada form: input bg `--surface`, border `--border`, focus border `--accent`, error border `--danger` dengan teks `--danger-text`.

---

## 6. Motion

- Durasi 150-250ms untuk hover, 400-600ms untuk reveal saat scroll. Easing `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- Reveal: fade + `translateY(12px)`, sekali saja, stagger maksimal 80ms antar item.
- Wajib hormati `prefers-reduced-motion: reduce` (matikan transform dan glow drift, sisakan fade).

---

## 7. Accessibility & responsive

- Semua teks minimal 4.5:1, kecuali teks besar (>=24px atau >=19px bold) minimal 3:1. Cek tabel contrast di atas sebelum menambah kombinasi baru.
- Jangan jadikan warna satu-satunya penanda state; tambahkan ikon, underline, atau teks.
- Focus ring terlihat di semua elemen interaktif.
- Touch target minimal 44x44px.
- Breakpoint: mulai dari mobile (360px). Grid project 1 kolom, lalu 2 kolom (`md`), 3 kolom (`xl`) bila ada ruang.
- Gambar: `next/image`, atribut `alt` deskriptif, ukuran eksplisit untuk menghindari layout shift.
- Update meta: `theme-color` dan `msapplication-TileColor` ke `#0B192C`.

---

## 8. Do / Don't

**Do**

- Satu CTA primary per viewport.
- Pakai border tipis dan perbedaan surface untuk hierarki.
- Gunakan glow biru atau oranye secara halus di hero dan penutup.

**Don't**

- Jangan pakai `#E00000` atau berry sebagai warna teks.
- Jangan pakai gradient pada teks body atau tombol.
- Jangan tambah warna baru di luar token ini tanpa cek kontras.
- Jangan bikin card dengan shadow besar atau glassmorphism berlebihan.
