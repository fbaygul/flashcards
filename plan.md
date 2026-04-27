# YÖKDİL Fen Bilimleri Kelime Kartları - Proje Planı

Bu döküman, YÖKDİL Fen Bilimleri sınavı için geliştirilecek olan "Flashcard" (Kelime Kartı) web uygulamasının geliştirme yol haritasını, mimari kararlarını ve veri yapısını içermektedir.

## 1. Mimari ve Teknoloji Yığını (Tech Stack)
Uygulama localhost üzerinde çalışacak, ancak ileride sunucuya taşınabilir veya PWA (Progressive Web App) yapılabilir bir altyapıda kurgulanacaktır.

* **Frontend Framework:** Vite + React (Hızlı geliştirme ve bileşen tabanlı yapı için).
* **Stil Yönetimi:** Tailwind CSS (Hızlı ve responsive arayüz tasarımı).
* **Veri Depolama (Statik):** `data/words.json` (Kelime havuzu).
* **Durum Yönetimi (State):** React Context API veya Zustand (Yerel).
* **İlerleme Kaydı (Persistance):** Tarayıcı `localStorage` (Kullanıcının ezberlediği/zorlandığı kelimelerin oturumlar arası tutulması).

## 2. Veri Modeli (Data Structure)
Kelimeler statik bir JSON dosyasında aşağıdaki yapıda tutulacaktır. Bu yapı, ileride filtreleme ve istatistik tutma işlemlerini kolaylaştırır.

```json
[
  {
    "id": 1,
    "word_en": "Accelerate",
    "word_tr": "Hızlandırmak",
    "category": "Fizik",
    "difficulty": 1,
    "example_sentence": "Catalysts accelerate the chemical reaction."
  }
]