# Rudra Tours PWA Report

Added PWA files:

- manifest.webmanifest
- sw.js
- offline.html
- icons/icon-192.png
- icons/icon-512.png
- icons/icon-192-maskable.png
- icons/icon-512-maskable.png

Updated all HTML pages with manifest and mobile app tags.
Updated js/main.js to register the service worker.

PWA behavior:

- Installable from supported browsers
- Standalone display mode
- App icon support
- Offline fallback page
- Core pages and common assets cached
- Runtime image/CSS/JS caching

No notification system or install button has been added.


## Install button update

A browser-controlled PWA install button has been added in the topbar and as a floating button. It appears only after the `beforeinstallprompt` event is available and hides after installation.
