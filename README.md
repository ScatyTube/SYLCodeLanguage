# SYLCodeLanguage


![SYL Logo](https://raw.githubusercontent.com/ScatyTube/SYLCodeLanguage/main/SYLLogo.svg)




SYL – Simple Yield Language

SYL, SQL’in karmaşık yapısına alternatif olarak tasarlanmış,
okunabilir, adım adım, basit bir sorgu dilidir.

Bu proje:

JavaScript (Node.js) ile yazılmıştır

.syl uzantılı dosyaları okur

SYL kodunu lexer + parser ile işler

(ileride) SQL’e dönüştürmek için altyapı sağlar

📦 Gereksinimler (ÇOK ÖNEMLİ)

❗ Kod yazmayı bilmeyen kullanıcılar için bile bu yeterli

1️⃣ Node.js kurulu olmalı

İndir:
👉 https://nodejs.org

(LTS sürüm önerilir)

Kurulumdan sonra terminale şunu yaz:

node -v


Bir sürüm numarası görüyorsan tamamdır ✅

📁 Proje Yapısı
SYL/
├── lexer.js      # SYL kodunu parçalara ayırır (token)
├── parser.js     # Token’ları anlamlı yapıya çevirir (AST)
├── syl.js        # Ana program (kullanıcı burayı çalıştırır)
├── example.syl   # Örnek SYL dosyası
└── README.md

🧠 SYL NASIL ÇALIŞIYOR? (Basit anlatım)
1️⃣ Kullanıcı .syl dosyasını yazar

Örnek: example.syl

from users
filter age >= 18
pick name, age


Bu düz metin dosyasıdır.
Excel, SYLK vs. UMRUMUZDA DEĞİL.

2️⃣ Kullanıcı terminalde şu komutu yazar
node syl.js example.syl


❗ Dosya adı istediğin gibi olabilir:

query.syl

test123.syl

benim_sorgum.syl

⚠️ Sadece şuna dikkat et:

Uzantı .syl

BÜYÜK HARF .SYL OLMASIN

3️⃣ SYL içerde ne yapıyor?

Sırayla:

🔹 a) Lexer (lexer.js)

SYL kodunu kelimelere ayırır:

from → KEYWORD
users → IDENT
>= → OP
18 → NUMBER

🔹 b) Parser (parser.js)

Bu kelimelerden anlamlı bir yapı çıkarır:

{
  "type": "query",
  "from": "users",
  "filter": {
    "left": "age",
    "op": ">=",
    "right": 18
  },
  "pick": ["name", "age"]
}


Bu yapıya AST (Abstract Syntax Tree) denir.

🔹 c) Ana dosya (syl.js)

Dosyayı okur

Lexer’a verir

Parser’a verir

Sonucu ekrana basar

Kullanıcının hiçbir kod yazmasına gerek yoktur.

▶️ Nasıl Çalıştırılır? (KOD BİLMEYEN İÇİN)
1️⃣ Projeyi indir
git clone https://github.com/kullaniciadi/syl.git
cd syl

2️⃣ SYL dosyanı yaz

ornek.syl oluştur:

from products
filter price > 100
pick name, price

3️⃣ Çalıştır
node syl.js ornek.syl

❓ Neden query.syl olmak zorunda değil?

Değil. Kesinlikle değil.

Bu sadece bir örnek isimdi.

Şunların hepsi olur:

a.syl
test.syl
users_query.syl
benimSorgum.syl


❌ Olmaması gereken:

QUERY.SYL   ← büyük harf


Sebep:

Windows + Node bazen uzantı konusunda karışıyor

Küçük harf daha güvenli

❓ Neden JavaScript / Node.js?

Çünkü:

Her sistemde çalışır (Windows / Linux / Mac)

Kurulumu kolay

Compiler yazmadan gerçek dil altyapısı sağlar

CLI yapmak kolaydır

Bu proje:

oyuncak değil, altyapıdır

🔮 Gelecek Planları

 AST → SQL çevirici

 syl komutu (node yazmadan)

 Hata mesajları

 VS Code syntax highlight

✅ Özet (kısa kısa)

Kullanıcı kod yazmaz

Sadece .syl dosyası yazar

node syl.js dosya.syl der

SYL çalışır

Uzantı çakışması önemli değil


# SYL KULLANICI KOMUTLARI (DİL TANIMI)

Kullanıcı SADECE bunları yazar:

from <tablo_adi>
filter <alan> <operator> <deger>
pick <alan1>, <alan2>, <alan3>

✔ Geçerli operatorler
=   !=   >   <   >=   <=

✔ Geçerli değerler
sayı   → 18
string → "ali"
