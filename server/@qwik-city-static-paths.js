const staticPaths = new Set(["/coloringbookpage.png","/favicon.png","/favicon.svg","/fonts/FlechaM-Regular.woff","/fonts/StyreneB-Bold-Web.woff","/fonts/StyreneB-Regular-Web.woff","/fonts/signifier-bold.woff2","/fonts/signifier-regular.woff2","/halloween-costumes.gif","/halloween-slideshow.gif","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/spooky.gif","/spookyshlflibrary.png"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };