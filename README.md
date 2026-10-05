# Fretwork Guitar Course

A self-contained, 32-week interactive guitar course for beginner-to-intermediate players, focused on jazz, soul, funk, rock, blues and math rock. Everything runs in the browser: interactive fretboards, chord and voicing finders, a metronome, an ear trainer, playable tab, a mini real book and a daily practice glossary.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole course (fonts, styles and scripts are embedded) |
| `manifest.webmanifest` | Lets phones and tablets install it to the Home Screen |
| `sw.js` | Caches the site so it works offline after the first visit |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App icons |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Publish on GitHub Pages

1. Create a new public repository and upload these files to its root.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Install on an iPad or phone

Open the site in Safari, tap **Share → Add to Home Screen**, then open it once while online. It works offline after that.

## Updating

Replace `index.html` and change `VERSION` in `sw.js` (for example `fretwork-v4`) so installed copies fetch the new version.

## Progress

Progress (checklists, quiz bests, change-timer logs) is stored in the browser's local storage for the site's address. Use **Handbook → Offline & Backup** to move it between devices.

## Credits

Embedded fonts: Big Shoulders Display, Instrument Sans and JetBrains Mono, each licensed under the SIL Open Font License 1.1.
