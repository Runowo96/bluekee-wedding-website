const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://bluekeedesign.com' }); // replace with your website's URL

  // Define the URLs for your landing page and any other relevant sections
  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.write({ url: '/#packages', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#product-lines', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#the-artists', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#contact-us', changefreq: 'monthly', priority: 0.8 });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', data.toString());
}

generateSitemap();
