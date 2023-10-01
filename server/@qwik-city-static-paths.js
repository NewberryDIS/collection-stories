const staticPaths = new Set(["/collection-stories/halloween/coloringbookpage.png","/collection-stories/halloween/favicon.png","/collection-stories/halloween/favicon.svg","/collection-stories/halloween/fonts/FlechaM-Regular.woff","/collection-stories/halloween/fonts/StyreneB-Bold-Web.woff","/collection-stories/halloween/fonts/StyreneB-Regular-Web.woff","/collection-stories/halloween/fonts/signifier-bold.woff2","/collection-stories/halloween/fonts/signifier-regular.woff2","/collection-stories/halloween/halloween-costumes.gif","/collection-stories/halloween/halloween-slideshow.gif","/collection-stories/halloween/manifest.json","/collection-stories/halloween/q-manifest.json","/collection-stories/halloween/robots.txt","/collection-stories/halloween/service-worker.js","/collection-stories/halloween/spooky.gif","/collection-stories/halloween/spookyshlflibrary.png"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/collection-stories/halloween/build/")) {
    return true;
  }
  if (p.startsWith("/collection-stories/halloween/assets/")) {
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