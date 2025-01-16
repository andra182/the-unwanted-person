# The Unwanted Person - Dokumentasi Game Visual Novel

## Daftar Isi

1. [Ikhtisar](#ikhtisar)
2. [Struktur Proyek](#struktur-proyek)
3. [Mekanika Game](#mekanika-game)
4. [Sistem Dialog](#sistem-dialog)
5. [Manajemen Status](#manajemen-status)
6. [Menambahkan Konten Baru](#menambahkan-konten-baru)
7. [Detail Teknis](#detail-teknis)
8. [Best Practices](#best-practices)
9. [Common Issues & Solutions](#common-issues--solutions)
10. [Contributing](#contributing)
11. [Dependencies](#dependencies)
12. [Tentang Game](#tentang-game)

## Ikhtisar

"The Unwanted Person" adalah game visual novel yang dibangun dengan React menggunakan sistem narasi bercabang. Game ini melacak pilihan pemain melalui dua metrik utama: "Kesenangan" dan "Pertemanan."

Dikembangkan oleh **SingaCo**.

<img src="https://i.ibb.co.com/3yvPpf8/463866043-924201156261291-3726153224151634385-n.jpg" alt="Logo SingaCo" width="100" height="100">

Game ini bertujuan untuk **edukasi**.

## Struktur Proyek

```
src/
├── components/   # Komponen yang dapat digunakan kembali
├── context/      # Manajemen status game
├── pages/        # Adegan dan dialog game
│   ├── Day 1/
│   ├── Day 2/
│   ├── Day 3/
│   └── Day 4/
└── assets/       # Gambar, audio, dll.
```

## Mekanika Game

### Sistem Status

- **Kesenangan**: Rentang 0-100
- **Pertemanan**: Rentang 0-100
- Nilai-nilai ini menentukan percabangan cerita dan akhir game.

### Sistem Jalur

- **Jalur Positif**: Terpicu jika Kesenangan & Pertemanan ≥ 63
- **Jalur Negatif**: Terpicu jika salah satu nilai < 63

## Sistem Dialog

### Membuat Adegan Dialog Baru

1. Buat file baru di folder hari yang sesuai:

```javascript
const DialogX = () => {
  const {
    updateKesenangan,
    updatePertemanan,
    updateFeedback,
    pathCerita,
    kesenangan,
    pertemanan,
  } = useGameContext();

  // Setup status dialog
  const [dialog, setDialog] = useState(initialDialog);

  useEffect(() => {
    pathCeritaFunc();
  }, []);
};
```

### Struktur Opsi Dialog

```javascript
const options = [
  {
    text: "Teks opsi dialog",
    action: handleOptionA,
    type: "positive", // atau "negative" atau "neutral"
  },
];
```

### Menambahkan Handler Respons

```javascript
const handleOptionA = () => {
  updateKesenangan(value); // Tambahkan atau kurangi kesenangan
  updatePertemanan(value); // Tambahkan atau kurangi pertemanan
  updateFeedback("Pesan umpan balik pemain");
};
```

### Mengimplementasikan Dialog Jalur Tertentu

```javascript
const positivePath = () => {
  return (
    <PageDialog
      NamaKarakter="Nama Karakter"
      Dialog={dialog}
      gambarkarakter={["/path/to/image.png"]}
      opsi={dialogOptions}
      hari="Hari X"
      background="/path/to/background.jpg"
      status={{ kesenangan, pertemanan }}
      onCompleteNavigate="/next/dialog/path"
    />
  );
};
```

## Manajemen Status

### Penggunaan GameContext

```javascript
const GameProvider = ({ children }) => {
  const [kesenangan, setKesenangan] = useState(0);
  const [pertemanan, setPertemanan] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [pathCerita, setPathCerita] = useState(0);

  const updateKesenangan = (value) => {
    setKesenangan((prev) => Math.max(0, Math.min(100, prev + value)));
  };
};
```

### Mengakses Context dalam Komponen

```javascript
const { kesenangan, pertemanan, updateKesenangan } = useGameContext();
```

## Menambahkan Konten Baru

### 1. Membuat Hari Baru

1. Buat folder baru di `src/pages/`
2. Tambahkan konfigurasi rute
3. Buat komponen dialog

### 2. Menambahkan Dialog Baru

1. Buat file komponen dialog
2. Atur status awal dan context
3. Tentukan opsi dialog dan handler
4. Implementasikan jalur positif/negatif
5. Tambahkan logika navigasi

### 3. Menambahkan Aset

- Tempatkan gambar karakter di `/public/DAY{X}/`
- Tempatkan latar belakang di `/public/DAY{X}/`
- Tempatkan audio di `/public/audio/`

### 4. Mengkonfigurasi Rute

```javascript
const day_routes = [
  {
    path: "/dayX",
    element: <DayX />,
    children: [
      {
        path: "dialog1",
        element: <Dialog1 />,
      },
    ],
  },
];
```

## Detail Teknis

### Properti Komponen

#### Props PageDialog

```javascript
PageDialog.propTypes = {
  NamaKarakter: String, // Nama karakter
  Dialog: String, // Teks dialog
  gambarkarakter: Array, // Gambar karakter
  opsi: Array, // Opsi dialog
  hari: String, // Hari saat ini
  background: String, // Gambar latar belakang
  status: Object, // Status game
  onCompleteNavigate: String, // Rute berikutnya
};
```

### Implementasi Status Bar

```javascript
<StatusBar kesenangan={kesenangan} pertemanan={pertemanan} />
```

### Implementasi Audio

```javascript
<AudioPlayer src="/audio/bgm.mp3" />
```

### Sistem Feedback

- Pesan feedback muncul setelah pilihan pemain
- Dikontrol melalui fungsi `updateFeedback`
- Otomatis hilang setelah durasi tertentu

### Sistem Navigasi

- Menggunakan React Router untuk transisi adegan
- Mendukung progresi linier dan bercabang
- Mempertahankan status antar adegan

## Best Practices

1. Always initialize dialog state
2. Include console logs for debugging
3. Handle both positive and negative paths
4. Implement proper error handling
5. Test all dialog branches
6. Maintain consistent naming conventions
7. Document all changes

## Common Issues & Solutions

1. **Path Not Updating**: Ensure pathCeritaFunc is called in useEffect
2. **Dialog Not Showing**: Check dialog state initialization
3. **Images Not Loading**: Verify asset paths
4. **State Not Persisting**: Confirm context implementation
5. **Navigation Issues**: Check route configuration

## Contributing

1. Fork the repository
2. Create feature branch
3. Follow coding standards
4. Test thoroughly
5. Submit pull request

## Dependencies

- React
- React Router DOM
- React Circular Progressbar
- TypeIt React

## Tentang Game

"The Unwanted Person" adalah sebuah game naratif yang menggambarkan perjalanan emosional seorang remaja SMA bernama Risa dan sahabatnya, Aira, yang berjuang melawan perasaan terasing dan intimidasi dari geng sekolah. Dalam dunia yang penuh tantangan ini, pemain akan diajak untuk membantu Risa menemukan tempatnya dan mengatasi berbagai rintangan sosial.

Di sepanjang cerita, pemain akan membuat keputusan penting setiap harinya yang akan membentuk jalannya alur cerita dan menentukan akhir dari kisah mereka. Dengan alur cerita bercabang selama lima hari, pilihan-pilihan pemain akan membawa Risa ke berbagai kemungkinan akhir yang bisa bersifat positif, netral, atau negatif.

### Fitur Utama

- **Narasi Mendalam**: Setiap hari menawarkan tiga pilihan dialog yang memengaruhi hubungan dan perkembangan cerita.
- **Akhir yang Beragam**: Tiga kemungkinan akhir (positif, netral, atau negatif) yang mencerminkan perjalanan emosional Risa berdasarkan keputusan pemain.
- **Tema Relatable**: Fokus pada isu-isu remaja seperti perasaan terasing, persahabatan, dan kekuatan untuk melawan intimidasi.
- **Alur Cerita Bercabang**: Setiap keputusan membuka jalur cerita yang unik, menciptakan pengalaman bermain yang berbeda setiap kali.

Apakah Anda akan membantu Risa dan Aira menghadapi rasa keterasingan mereka dan menemukan harapan, atau akankah mereka terjebak dalam keputusasaan? Semua tergantung pada pilihan Anda.

Selamat datang di "The Unwanted Person" – sebuah kisah yang mendalam tentang perjuangan, harapan, dan pentingnya membuat keputusan yang tepat.
