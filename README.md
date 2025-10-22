Dynamic Portfolio Template
==========================

Files included:
- index.html — main single-page site (Tailwind CDN used)
- projects.json — list of projects (edit this file to add/remove projects)
- scripts/projects.js — loads projects.json dynamically
- scripts/theme.js — dark/light toggle (uses localStorage)
- scripts/contact.js — contact form handler (replace form action with your Formspree endpoint)
- assets/ — put your cv.pdf and images here

How to use:
1. Replace 'Your Name' and copy text in index.html.
2. Edit projects.json to include your projects.
3. Put your CV at assets/cv.pdf (replace the placeholder).
4. (Optional) Sign up at https://formspree.io and set the form action in index.html to your Formspree endpoint to receive messages.
5. Create a GitHub repository named <username>.github.io, push all files to the default branch, and enable GitHub Pages (source: main branch, /root).
6. Your site will be live at https://<username>.github.io

Free custom domain options:
- If you don't want to buy a domain, consider free subdomain providers like is-a.dev or eu.org and point them to your GitHub Pages site.

Customization tips:
- Replace the Tailwind CDN with a custom build if you need advanced Tailwind features.
- Add images to assets/ and reference them in projects.json by adding an 'image' field.

Enjoy — edit and deploy!