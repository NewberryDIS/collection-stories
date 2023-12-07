const staticPaths = new Set(["/_csh/NewberryDCLogo.svg","/_csh/autumn.webp","/_csh/coloringbookpage.png","/_csh/coloringbookpage.webp","/_csh/fonts/FlechaM-Black.woff","/_csh/fonts/FlechaM-Bold.woff","/_csh/fonts/FlechaM-Regular.woff","/_csh/fonts/StyreneB-Bold-Web.woff","/_csh/fonts/StyreneB-Regular-Web.woff","/_csh/fonts/signifier-bold.woff2","/_csh/fonts/signifier-regular.woff2","/_csh/ghosty.gif","/_csh/ghostyboy.png","/_csh/ghostyboy.webp","/_csh/halloween-costumes.gif","/_csh/halloween-costumes.webp","/_csh/halloween-slideshow.gif","/_csh/halloween-slideshow.webp","/_csh/halloween/","/_csh/manifest.json","/_csh/newberry.png","/_csh/q-manifest.json","/_csh/robots.txt","/_csh/service-worker.js","/_csh/sitemap.xml","/_csh/snow/winter-bg-snowflakes-1.png","/_csh/snow/winter-bg-snowflakes-2.png","/_csh/snow/winter-bg-snowflakes-3.png","/_csh/snow/winter-bg-snowflakes-4.png","/_csh/snow/winter-bg-snowflakes-5.png","/_csh/snow/winter-bg-snowflakes-6.png","/_csh/spooky.gif","/_csh/spookynewberry-cropped-50.jpg","/_csh/spookynewberry-cropped-overlay.jpg","/_csh/spookynewberry-cropped.png","/_csh/spookyshlflibrary.png","/_csh/winter-postcards.gif","/_csh/winter-postcards.mp4","/_csh/winter-postcards.webp","/_csh/winter/","/_csh/wintrynewberry.png","/_csh/wwinter-postcards.webp"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/_csh/build/")) {
    return true;
  }
  if (p.startsWith("/_csh/assets/")) {
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