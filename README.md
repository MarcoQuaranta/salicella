# Caseificio Salicella

Sito web per il Caseificio Salicella - Mozzarelle fresche e prodotti caseari artigianali dal 1952.

## Tecnologie

- **Next.js 15** con App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## Struttura del Progetto

```
/app
  /components          # Componenti riutilizzabili
    - TimelineSection.tsx
    - ProductCarousel.tsx
  /chi-siamo          # Pagina Chi Siamo
  /prodotti           # Pagina Prodotti
  /contatti           # Pagina Contatti
  - page.tsx          # Home page
  - layout.tsx        # Layout principale
  - globals.css       # Stili globali
  - home.css          # Stili specifici home
```

## Funzionalità Implementate

- ✅ Home page con sezioni:
  - Hero section con animazioni
  - Timeline storia aziendale (interattiva)
  - Sezione "Il Nostro Metodo"
  - Carousel prodotti più amati
  - CTA finale
- ✅ Pagine vuote per Chi Siamo, Prodotti, Contatti
- ✅ Metadata SEO ottimizzate
- ✅ Design responsive (mobile, tablet, desktop)
- ✅ Animazioni e transizioni fluide
- ✅ Componenti client-side per interattività

## Sviluppo in Locale

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

3. Apri [http://localhost:3000](http://localhost:3000) nel browser

## Deploy su Vercel

### Opzione 1: Deploy automatico via GitHub

1. Fai push del codice su GitHub:
```bash
git add .
git commit -m "Initial commit - Caseificio Salicella website"
git push origin main
```

2. Vai su [vercel.com](https://vercel.com) e accedi
3. Clicca "Add New Project"
4. Importa il repository da GitHub
5. Vercel rileverà automaticamente Next.js e configurerà il deploy
6. Clicca "Deploy"

### Opzione 2: Deploy via CLI Vercel

1. Installa Vercel CLI:
```bash
npm install -g vercel
```

2. Login su Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Per il deploy in produzione:
```bash
vercel --prod
```

## Configurazione Vercel

Le impostazioni predefinite funzionano perfettamente. Vercel rileverà automaticamente:
- **Framework**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Variabili d'Ambiente

Quando integrerai il database PostgreSQL su NeonDB, dovrai aggiungere le seguenti variabili d'ambiente nelle impostazioni del progetto Vercel:

```env
DATABASE_URL=your_neondb_connection_string
```

## Prossimi Passi

1. ✅ Struttura base e home page
2. 🔄 Compilare pagine Chi Siamo, Prodotti, Contatti
3. 🔄 Integrare database PostgreSQL (NeonDB)
4. 🔄 Creare sistema di gestione prodotti
5. 🔄 Implementare carrello e checkout
6. 🔄 Aggiungere autenticazione utenti

## Note

- Il sito è ottimizzato per Vercel e utilizzerà automaticamente le funzionalità di Edge Runtime
- Le immagini utilizzano URL esterni (Unsplash) - considera di migrare su Vercel Blob Storage in futuro
- Il componente ProductCarousel contiene dati mock - sostituire con dati reali dal database

## Supporto

Per problemi o domande, consultare la [documentazione Next.js](https://nextjs.org/docs) o [Vercel](https://vercel.com/docs).
