<<<<<<< HEAD
# Aniket Mohite — Developer Portfolio

A responsive React + Vite portfolio with a day/night theme switch, gradients, CSS animations, project cards, skills, education timeline, and a contact form.

## Requirements
- Node.js LTS installed
- VS Code (recommended)
- Git and a GitHub account for deployment

## Run locally

1. Extract the ZIP.
2. Open the extracted `aniket-mohite-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Build check

```bash
npm run build
npm run preview
```

## Customize before publishing

Open `src/App.jsx` and update:
- Email: replace both occurrences of `your.email@example.com` with your real email address
- GitHub and LinkedIn URLs with your real profile links
- Project links: replace the sample `https://github.com/` URLs with each project repository
- Education details and current study status if anything needs correction
- Skills and project descriptions to match what you have actually built

### Add your resume PDF
1. Replace the draft PDF in the `public` folder with your final resume PDF, keeping the name `Aniket-Mohite-Resume.pdf`.
2. Add a link in `src/App.jsx`, for example:
   `<a href="/Aniket-Mohite-Resume.pdf" download>Download Resume</a>`

Do not publish a fake email or claim a project is production-ready if it is still in progress.

## Deploy free on Vercel

### Option A — GitHub import (recommended)
1. Create a GitHub repository named `aniket-mohite-portfolio`.
2. Upload all extracted project files to the repository (keep `package.json`, `index.html`, `vite.config.js`, `src`, and `public` at repository root).
3. Visit https://vercel.com/ and sign in with GitHub.
4. Click **Add New → Project**, then import `aniket-mohite-portfolio`.
5. Vercel should detect Vite. Confirm:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**.
7. When deployment finishes, Vercel gives you a public `*.vercel.app` link.
8. Whenever you push changes to the connected GitHub repository, Vercel can redeploy automatically.

### Option B — Vercel CLI
Install Node.js, then in the project terminal:

```bash
npm install
npm run build
npm install -g vercel
vercel
```

Follow the prompts and use `vercel --prod` for production deployment.

## Configure the contact form (FormSubmit)
The contact form uses FormSubmit so visitors can send a message without you building a backend.
1. In `src/App.jsx`, find `https://formsubmit.co/your.email@example.com` and replace the placeholder with your real email address.
2. Replace the other `your.email@example.com` text/link with that same email address.
3. Deploy the site, then submit a test message using your own email address. FormSubmit sends a verification email to the destination inbox the first time; open it and confirm the address.
4. After verification, submit another test message and check your inbox/spam folder. FormSubmit is a third-party service, so delivery depends on its service and spam filters.

The day/night toggle is in the top navigation and remembers the visitor's choice in their browser. No database is required. Google Fonts require an internet connection; fallback fonts are defined.


## Add your profile photo and LinkedIn
- Rename your chosen photo to `aniket-photo.jpg` and place it in `public/`. The profile card uses this image automatically; if it is absent, the initials remain visible.
- In `src/App.jsx`, replace `https://www.linkedin.com/` with your actual LinkedIn profile URL.
- Replace the FormSubmit endpoint and displayed email with your real email, then complete FormSubmit verification as described above.
- The “Let’s talk” and “Get in touch” links now explicitly smooth-scroll to the Contact section.
=======
# Portfolio-Frontend
>>>>>>> 0be2a3c6706e9d99f82f2bdb1ef348f28951c912
