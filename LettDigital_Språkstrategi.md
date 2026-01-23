# LettDigital Språkstrategi
## Plan for flerspråklig støtte

---

## Problemet vi opplevde

Oversettelsesarbeidet tok lang tid fordi:

1. **Blandet arkitektur** - Noe tekst var i JSON-filer, annet var hardkodet i komponenter
2. **Ingen klar struktur** - Hub-sider, FAQ og Ordbok hadde tekst direkte i koden
3. **For mange språk på en gang** - Vi prøvde å oversette 5 språk samtidig
4. **Store filer** - 180KB JSON-filer er vanskelige å håndtere

---

## Anbefalt strategi fremover

### Fase 1: Konsolider (1-2 uker)

**Mål:** Alt innhold skal komme fra oversettelsesfilene

| Komponent | Status nå | Handling |
|-----------|-----------|----------|
| NAV, Skatt, Helse guider | ✅ I JSON | Beholdes |
| Hub-sider (bank, bolig, etc) | ✅ Nylig fikset | Beholdes |
| FAQ | ❌ Hardkodet | Flytt til JSON |
| Ordbok | ❌ Hardkodet | Flytt til JSON |

**Konkret oppgave:**
```
/messages/no.json
  - Legg til "faq.items": [...alle spørsmål/svar...]
  - Legg til "ordbok.terms": [...alle ord/definisjoner...]
```

### Fase 2: Fokuser på ett språk (2-3 uker)

**Anbefaling:** Fullfør ENGELSK 100% før andre språk

Hvorfor engelsk først:
- Størst målgruppe (turister, expats, internasjonale)
- Lettere å oversette fra norsk
- Kan brukes som "bro-språk" til andre

**Sjekkliste for komplett engelsk:**
- [ ] Alle guider (NAV, Skatt, Helse, etc)
- [ ] Alle hub-sider
- [ ] FAQ (når flyttet til JSON)
- [ ] Ordbok (når flyttet til JSON)
- [ ] Feilmeldinger og system-tekster

### Fase 3: Prioriter målgrupper (løpende)

Basert på Norges demografi, anbefalt rekkefølge:

| Prioritet | Språk | Målgruppe | Estimat |
|-----------|-------|-----------|---------|
| 1 | 🇬🇧 Engelsk | Expats, turister | ✅ Nesten ferdig |
| 2 | 🇵🇱 Polsk | Største innvandrergruppe | 3-4 uker |
| 3 | 🇺🇦 Ukrainsk | Flyktninger | 3-4 uker |
| 4 | 🇸🇴 Somalisk | Etablert minoritet | 4-5 uker |
| 5 | 🇸🇦 Arabisk | Bred dekning | 4-5 uker |

---

## Ny filstruktur (anbefalt)

### Splitt opp store filer

I stedet for én stor `no.json` (180KB), splitt per kategori:

```
/messages/
  /no/
    common.json      (navigasjon, knapper)
    nav.json         (NAV-guider)
    skatt.json       (Skatteetaten-guider)
    helse.json       (Helsenorge-guider)
    sikkerhet.json   (Sikkerhet-guider)
    bank.json        (Bank-guider)
    ...
    faq.json         (FAQ)
    ordbok.json      (Ordbok)
  /en/
    (samme struktur)
```

**Fordeler:**
- Lettere å oversette én fil om gangen
- Enklere å se hva som mangler
- Mindre merge-konflikter i Git

### Implementering

Next-intl støtter dette med `getRequestConfig`:

```typescript
// i18n/request.ts
export default getRequestConfig(async ({ locale }) => {
  const common = (await import(`../messages/${locale}/common.json`)).default;
  const nav = (await import(`../messages/${locale}/nav.json`)).default;
  // ... etc

  return {
    messages: { common, nav, /* ... */ }
  };
});
```

---

## Verktøy for oversettelse

### Alternativ 1: Manuell (gratis, tidkrevende)
- Du oversetter selv eller med hjelp fra AI
- Fordel: Full kontroll
- Ulempe: Tar lang tid

### Alternativ 2: Crowdin/Lokalise (betalt)
- Profesjonelle oversettelsesplattformer
- Fordel: Workflow, versjonskontroll, profesjonelle oversettere
- Ulempe: Koster penger (fra ~$40/mnd)

### Alternativ 3: Hybrid
- Bruk AI (Claude/GPT) for førsteutkast
- La morsmålsbrukere kvalitetssikre
- Fordel: Rask + kvalitet
- Anbefalt for LettDigital!

---

## Kvalitetssikring

### For hvert språk, lag en sjekkliste:

```markdown
## Polsk oversettelse - Sjekkliste

### Teknisk
- [ ] Alle JSON-filer er gyldige (ingen syntax-feil)
- [ ] Alle nøkler finnes (ingen manglende tekster)
- [ ] Spesialtegn vises riktig (ł, ą, ę, etc)

### Innhold
- [ ] Alle guider er oversatt
- [ ] Alle hub-sider er oversatt
- [ ] FAQ er oversatt
- [ ] Ordbok er oversatt

### Kvalitet
- [ ] Gjennomgått av morsmålsbruker
- [ ] Konsistent terminologi
- [ ] Kulturelt tilpasset (ikke bare ord-for-ord)
```

---

## Tidsestimat

| Fase | Tid | Resultat |
|------|-----|----------|
| Konsolidering | 1-2 uker | Alt i JSON-filer |
| Engelsk 100% | 1 uke | Første komplette språk |
| Polsk | 3-4 uker | Andre språk |
| Ukrainsk | 3-4 uker | Tredje språk |
| Testing | Løpende | Kvalitetssikring |

**Total tid til 3 fullt støttede språk: ~2-3 måneder**

---

## Oppsummering

### Gjør dette NÅ:
1. ✅ Norsk og Engelsk fungerer (de viktigste)
2. Flytt FAQ og Ordbok til JSON-filer
3. Fullfør engelsk 100%

### Gjør dette SENERE:
1. Splitt opp JSON-filene
2. Legg til polsk
3. Legg til ukrainsk
4. Vurder somalisk og arabisk

### IKKE gjør:
- Prøv å oversette alle språk samtidig
- Legg til nye språk før eksisterende er komplette
- Hardkod tekst i komponenter

---

*Opprettet: Januar 2026*
*For: LettDigital.no*
