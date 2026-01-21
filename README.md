# Digital Hjelper 🇳🇴

**Enkel veiledning for offentlige digitale tjenester**

Digital Hjelper gjør det enkelt for alle å bruke NAV, Skatteetaten og Helsenorge. Med steg-for-steg guider, store fonter og klart språk.

## 🎯 Målgruppe

- Eldre og pensjonister som synes digitale tjenester er vanskelige
- Nye i Norge som trenger hjelp med språk og systemer
- Pårørende som hjelper andre med digitale tjenester
- Alle som ønsker enkel veiledning

## ✨ Funksjoner

- **Steg-for-steg guider** med fremdriftsindikator
- **Justerbar tekststørrelse** (normal, stor, ekstra stor)
- **Høy kontrast-modus** for bedre lesbarhet
- **Responsivt design** som fungerer på mobil, nettbrett og PC
- **Tilgjengelig** for skjermlesere og tastaturnavigasjon

## 🚀 Kom i gang

### Forutsetninger

- Node.js 18+
- npm eller yarn

### Installasjon

```bash
# Klon prosjektet eller kopier filene
cd digital-hjelper

# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

### Bygg for produksjon

```bash
npm run build
npm start
```

## 📁 Prosjektstruktur

```
digital-hjelper/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Forside
│   │   ├── layout.tsx        # Hovedlayout
│   │   ├── globals.css       # Global CSS
│   │   ├── nav/              # NAV-veiledninger
│   │   ├── skatt/            # Skatteetaten-veiledninger
│   │   ├── helse/            # Helsenorge-veiledninger
│   │   └── om/               # Om oss-side
│   └── components/
│       ├── Header.tsx        # Navigasjon
│       ├── Footer.tsx        # Bunntekst
│       ├── ServiceCard.tsx   # Tjenestekort
│       ├── StepGuide.tsx     # Steg-for-steg komponent
│       └── AccessibilityToolbar.tsx  # Tilgjengelighetsverktøy
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Teknologier

- **Next.js 14** - React-rammeverk
- **TypeScript** - Type-sikker JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Ikoner

## 💰 Inntektsmuligheter

1. **Offentlig støtte** - Søk midler fra Digitaliseringsdirektoratet, KS eller kommuner
2. **Sponsorer** - Partnerskap med banker, forsikringsselskaper
3. **Donasjoner** - Spleis, Vipps eller lignende
4. **Kursvirksomhet** - Tilby kurs for eldre/innvandrere
5. **B2B** - Selg løsningen til kommuner som verktøy for innbyggere

## 📝 Lisens

MIT License - Fri bruk

## 🤝 Bidra

Har du forslag til forbedringer? Opprett en issue eller send en pull request!

---

Laget med ❤️ for alle nordmenn
