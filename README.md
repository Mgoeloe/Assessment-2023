# ![Boef Manager 2023](https://img.icons8.com/ios-glyphs/25/000000/bandit.png) Boef Manager 2023

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Opdracht

**Maak een app die het volgende doet:**

- Toon de volgende filter opties:
  - Een lijst met unieke criminaliteitsniveau.
  - Een lijst met unieke misdaden.
  - Wanneer een waarde geselecteerd is worden de andere lijsten gefilterd.
- De lijsten worden getoond wanneer data geladen is.
- Onder het formulier wordt het resultaat van de selectie getoond.

**Technische eisen:**

- Gebruik Vue.js Framework.
- Voel je vrij om de meegeleverde Vue app te verrijken naar eigen wens, als je het maar kan uitleggen. Denk aan Nuxt of een andere bijzondere plugin.
- Zorg ervoor dat de app out of the box kan draaien, zolang de app in een browser kan draaien is het prima.
- Je toepassing moet:
  - Aantrekkelijk zijn;
  - Goed gedocumenteerd zijn;
  - Productie waardig en uitrolbaar zijn.

## Voorbeeld functionaliteit.

1. Wanneer je bijvoorbeeld criminaliteitsniveau '3' geselecteerd is, moeten alleen de criminelen met criminaliteitsniveau '3' zichtbaar zijn.
2. Wanneer een waarde in de lijsten geselecteerd is moeten de criminelen daarop gefilterd worden.
3. Wanneer een waarde in de lijsten geselecteerd is moeten de lijsten zelf ook daarop gefilterd worden.

## Mock Data

Er is een mock data server beschikbaar die je kan gebruiken om de app te vullen met data. De mock server laat willekeurig 1/5 requests falen. Zorg dat je dit juist afhandelt. De server kan worden gestart met het volgende commando:

```sh
npm run mock
```

Vervolgens kan je de data ophalen met een GET request naar `http://localhost:3001/detainees`.

## Opdracht beoordeling

Om een idee te geven wat we verwachten van de opdracht hebben we richtlijnen opgesteld per categorie. Hou te allen tijde in achterhoofd dat het om productie waardige content gaat.

### Functionaliteit

- Werkt de code wel goed genoeg?
- Werkt de code no wanneer er onverwachte zaken voordoen?
- Is er gedacht aan eventuele instructies voor de code?
- Heeft elke toevoeging aan de code ook daadwerkelijk nut?

### Kwaliteit

- Is er een logische opbouw in de code?
- Is de code flexibel genoeg om uitgebreid te worden?
- Wordt er binnen functies en componenten de juiste niveau van abstractie gebruikt?
- Worden er 'Best Practices' en eventueel 'Design Patterns' toegepast waar dat kan?
- Is de code samenhangend en consistent?
- Is de code leesbaar?
- Is de code productie waardig?

### Framework & Taal

- De app is voornamelijk geschreven met de technieken die we zelf ook hanteren.
- We verwachten daarom dat er onderandere Vue.js, Sass/SCSS, ES6/Typescript wordt gebruikt.

### Design + (S)CSS

- Hoeveel moeite is erin gestoken om de App 'mooi' te maken?
- Is UX in acht genomen bij het maken van designkeuzes?
- Hoe is de UI geïmplementeerd?
