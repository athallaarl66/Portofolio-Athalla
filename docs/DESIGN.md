# DESIGN.md — Athalla Arli Portfolio

Design system untuk athalla-works.my.id. Gabungan dua palette sinematik:

- **Dusk** (twin-sun sunset): maroon gelap, plum, berry, pink pucat. Dipakai untuk glow, gradient, dan surface hangat.
- **Ember** (red-teal noir): teal gelap sebagai base, coral dan crimson sebagai aksen.

Arah visual: dark theme, teal-noir sebagai dasar, coral sebagai satu-satunya warna aksi, pink pucat untuk heading, plum/berry hanya untuk atmosfer. Tetap terasa engineer-first: bersih, banyak ruang kosong, tidak ramai.

---

## 1. Color tokens

### Raw palette

| Token         | Hex       | Asal                                                      |
| ------------- | --------- | --------------------------------------------------------- |
| `teal-950`    | `#061A1D` | Ember, near-black teal                                    |
| `teal-900`    | `#031F26` | Ember, deep teal                                          |
| `teal-800`    | `#05303A` | Ember, dark teal                                          |
| `teal-500`    | `#3E7570` | Ember, muted teal                                         |
| `sage-300`    | `#B9C0A9` | Ember, pale sage                                          |
| `coral-500`   | `#E5694A` | Ember, coral                                              |
| `coral-400`   | `#EE7B5E` | Turunan coral, lebih terang untuk teks di atas `teal-800` |
| `red-600`     | `#E00000` | Ember, red                                                |
| `red-400`     | `#FF6B6B` | Turunan red, untuk teks error                             |
| `crimson-900` | `#5E0412` | Ember, deep crimson                                       |
| `crimson-950` | `#3A0005` | Ember, dark maroon                                        |
| `crimson-975` | `#240005` | Ember, near-black maroon                                  |
| `dusk-950`    | `#1C0F12` | Dusk, near-black maroon                                   |
| `dusk-900`    | `#2E1D1F` | Dusk, dark brown                                          |
| `indigo-600`  | `#45425E` | Dusk, muted indigo                                        |
| `plum-700`    | `#5A3563` | Dusk, purple                                              |
| `berry-700`   | `#86305A` | Dusk, berry                                               |
| `pink-200`    | `#FFC6E0` | Dusk, light pink                                          |
| `sage-500`    | `#8F9A8A` | Turunan sage, muted text                                  |

### Semantic tokens (yang dipakai di komponen)

```css
:root {
  /* surfaces */
  --bg: #061a1d;
  --surface: #031f26;
  --surface-raised: #05303a;
  --border: rgb(62 117 112 / 0.35); /* teal-500 @ 35% */
  --border-strong: #3e7570;

  /* text */
  --text-strong: #ffc6e0; /* heading */
  --text: #b9c0a9; /* body */
  --text-muted: #8f9a8a; /* caption, metadata */

  /* actions & accents */
  --accent: #e5694a; /* CTA, link, focus ring */
  --accent-soft: #ee7b5e; /* accent text di atas surface-raised */
  --accent-contrast: #061a1d; /* teks di atas tombol accent */
  --accent-2: #86305a; /* secondary fill (hover, badge) */
  --accent-2-alt: #5a3563; /* chip, tag */

  /* status */
  --danger: #e00000; /* ikon/border saja */
  --danger-text: #ff6b6b; /* teks error */

  /* atmosphere (bukan untuk teks) */
  --glow-berry: rgb(134 48 90 / 0.28);
  --glow-crimson: rgb(94 4 18 / 0.35);
  --glow-plum: rgb(90 53 99 / 0.25);
}
```

### Contrast (sudah dihitung, WCAG)

| Kombinasi                                  | Rasio | Pakai untuk                                   |
| ------------------------------------------ | ----- | --------------------------------------------- |
| `--text-strong` on `--bg`                  | 12.28 | Heading                                       |
| `--text-strong` on `--surface-raised`      | 9.67  | Heading di card                               |
| `--text` on `--bg`                         | 9.53  | Body                                          |
| `--text` on `--surface-raised`             | 7.50  | Body di card                                  |
| `--text-muted` on `--bg`                   | 6.10  | Caption                                       |
| `--text-muted` on `--surface-raised`       | 4.80  | Caption di card (minimum, jangan lebih redup) |
| `--accent` on `--bg`                       | 5.50  | Link, ikon, teks aksen                        |
| `--accent` on `--surface`                  | 5.25  | Link di card biasa                            |
| `--accent-soft` on `--surface-raised`      | 5.12  | Link di card yang lebih terang                |
| `--accent-contrast` on `--accent`          | 5.50  | Label tombol primary                          |
| `--text-strong` on `--accent-2` (berry)    | 5.57  | Tombol secondary saat hover                   |
| `--text-strong` on `--accent-2-alt` (plum) | 6.78  | Chip, tag                                     |
| `--danger-text` on `--bg`                  | 6.45  | Pesan error                                   |
| `--danger` on `--bg`                       | 3.55  | Hanya ikon besar dan border                   |
| `--border-strong` on `--bg`                | 3.40  | Hanya border/UI, bukan teks                   |

### Aturan warna

1. **Satu warna aksi: coral.** Primary button, link, focus ring, hover underline. Jangan campur dengan berry atau red untuk aksi yang sama.
2. **Berry dan plum tidak boleh jadi warna teks di atas `--bg`.** Kontrasnya cuma 2.20 dan 1.87 (indigo). Hanya sebagai fill, glow, atau gradient.
3. **Merah murni `#E00000` bukan warna brand.** Hanya error, status offline, atau satu dot kecil. Teks error pakai `--danger-text`.
4. **Heading pakai pink, body pakai sage.** Jangan tukar. Ini yang bikin hierarki terbaca tanpa perlu banyak ukuran font.
5. **Maksimal 2 warna hangat dalam satu viewport** di luar glow background.

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

Hero dan CTA terakhir memakai glow dari palette Dusk di atas base teal. Section lain polos `--bg`.

```css
.hero-bg {
  background:
    radial-gradient(60% 50% at 85% 0%, var(--glow-berry), transparent 70%),
    radial-gradient(50% 45% at 0% 100%, var(--glow-crimson), transparent 70%),
    var(--bg);
}
```

- Glow harus statis atau drift sangat pelan. Tanpa parallax berat.
- Section "Services" atau "Contact" boleh pakai `--glow-plum` satu sisi saja.
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

- Skala 5 tingkat dari `--surface-raised` ke `--accent`: `#05303A`, `#3E7570`, `#8F9A8A`, `#EE7B5E`, `#E5694A`. Alternatif: gradient teal ke coral. Tambahkan label legend "Less / More".
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
- Update meta: `theme-color` dan `msapplication-TileColor` ke `#061A1D`.

---

## 8. Do / Don't

**Do**

- Satu CTA primary per viewport.
- Pakai border tipis dan perbedaan surface untuk hierarki.
- Biarkan glow Dusk jadi aksen halus di hero dan penutup.

**Don't**

- Jangan pakai `#E00000` atau berry sebagai warna teks.
- Jangan pakai gradient pada teks body atau tombol.
- Jangan tambah warna baru di luar token ini tanpa cek kontras.
- Jangan bikin card dengan shadow besar atau glassmorphism berlebihan.
