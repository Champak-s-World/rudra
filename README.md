# Rudra Tours Clean Remake

This is a simplified static remake of the Rudra Tours website.

## Main files

- `index.html` - homepage
- `header.html` - common header and menu
- `footer.html` - common footer
- `css/style.css` - all styling
- `js/main.js` - menu, includes and WhatsApp form
- `sitemap.xml` and `robots.txt` included

Test on a local server or live hosting because the header and footer are loaded through JavaScript fetch.


## Folder / index.html URL system

Public pages now use clean folder URLs. Examples:

- `/` for Home
- `/varanasi/` for Varanasi
- `/chardham/` for Chardham
- `/kashmir/` for Kashmir

Each public page is stored as `folder-name/index.html`. Common files remain at the root:

- `/header.html`
- `/footer.html`
- `/css/style.css`
- `/js/main.js`
- `/img/...`

Deploy this at the root of `https://rudratour.in/` so root-relative asset and include paths work correctly.
