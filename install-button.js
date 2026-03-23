/* ESP Web Tools - Local Loader */
const script = document.createElement('script');
script.type = 'module';
script.src = 'https://unpkg.com';
document.head.appendChild(script);

// Dieser Code lädt das Modul dynamisch nach, 
// wodurch viele Browser die CORS-Blockade aufheben.
