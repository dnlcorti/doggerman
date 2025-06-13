# doggerman
1. Generare un’app Angular modulare, responsive, Material-based e pronta anche per il packaging mobile con Capacitor.

You are an expert full-stack developer.  
Generate the complete source code (Angular 17+) for a project named **“k9-trainer”** that manages dog-training activities for three roles: **Admin, Trainer, Pet Owner**.

---

🛠 1. PROJECT SET-UP  
• Run `ng new k9-trainer --routing --style=scss --standalone false`  
• Add Capacitor for Android/iOS: `npm i @capacitor/core @capacitor/cli && npx cap init "K9 Trainer" com.example.k9trainer`  
• Install UI libs:  
  ```bash
  ng add @angular/material
  npm i @angular/flex-layout
  npm i chart.js @james-coyle/angular-chart-js  # for dashboards
• Enable PWA support with ng add @angular/pwa.

🏗 2. APP ARCHITECTURE
Create feature-based, lazy-loaded modules under src/app/:

Module folder	Route path	Components (C) / Pages (P)	Guards / Services
core/	—	HeaderC, FooterC, SideNavC	AuthService, RoleGuard
shared/	—	reusable pipes, directives, Material wrappers	—
auth/	/auth	LoginP, RegisterP, ForgotPasswordP	—
profile/	/profile	ProfileP, EditProfileP, MyAnimalsP, AnimalDetailP, TrainingCardP, DashboardP	UserService, AnimalService
training-types/	/training-types	TrainingTypesListP	TrainingTypeService
training-detail/	/training/:id	TrainingDetailP	—
calendar/ (extra)	/calendar	SessionsCalendarP	CalendarService
messaging/ (extra)	/messages	ConversationsP, ChatP	MessagingService
admin/ (extra)	/admin	UsersMgmtP, StatsP	AdminGuard, AdminService

Routing must use stand-alone page components and inject() APIs. Guard access by role.

🎨 3. UI & THEMING
• Use Angular Material + Material Icons everywhere (buttons, form-fields, dialogs, tables).
• Apply a custom SCSS theme with primary #1e88e5, accent #ffb300.
• Achieve full responsiveness via @angular/flex-layout breakpoints; favour CSS grid for dashboards.
• Each card/list item must support touch gestures (swipe-to-delete/edit).

📊 4. DASHBOARDS & CHARTS
Inside DashboardP (owner) and StatsP (admin) embed responsive charts (line, bar, pie) using angular-chart-js, showing:
• sessions completed vs goal
• skill acquisition trend per dog
• trainer performance ranking.

🔐 5. AUTH & STATE
• Implement JWT-based auth; store token in localStorage.
• AuthInterceptor attaches token to HTTP calls.
• Provide mock REST services (/assets/mocks/*.json) behind environment.mock = true, switchable via environment.ts.

📲 6. MOBILE BUILD
• Expose status-bar color and splash via Capacitor config.
• Add DeepLinking for k9trainer://training/:id.
• Ensure hardware back-button handling on Android.

🧩 7. FUTURE-PROOFING (WRITE STUBS, DON’T IMPLEMENT FULL LOGIC)
• Billing module stub (in-app purchases for premium lessons)
• Push notifications service using Capacitor Push.
• Multispecies support: make Animal model generic (species, breed).
• Internationalisation ready: add @angular/localize and create i18n/en.json, i18n/it.json.

📐 8. CODE QUALITY
• Enable strict mode in tsconfig.json.
• Add ESLint with Angular-recommended rules.
• Provide unit tests for one component per module using Jest.
• Include basic e2e test using Cypress for the login flow.

Return the entire project tree with properly formatted code, comments in English, and install/build instructions at the end.

yaml
Copia
Modifica

---

### Sezioni extra consigliate (da mettere subito in backlog)
1. **Calendar** - pianificazione e reminder delle sessioni.  
2. **Messaging** - chat trainer⇄cliente.  
3. **Admin Dashboard** - gestione utenti, razze, statistiche globali.  
4. **Knowledge Base** - articoli e video training consultabili.  
5. **Billing & Subscriptions** - piani premium per lezioni avanzate.  
6. **Notifications** (push/e-mail) - avvisi su progressi, vacinazioni imminenti, ecc.  

---

💡 **Consigli d’uso**

* Mantieni il prompt così come sopra: è già strutturato per guidare Codex a generare file, dipendenze e struttura modulare.  
* Se ti serve solo parte del progetto, riduci la sezione corrispondente prima di lanciare Codex.  
* Dopo la generazione, esegui sempre `npm install` e `ng serve` per verificare che compili, quindi `npx cap add android/ios` per i build mobile.

Rileggi e adatta le parti in corsivo secondo le policy della tua codebase; il resto è pronto da incollare. Buon coding!







