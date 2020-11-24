// list of routes that forbidden to get cached
const routesToNotCache = [
  `/account.php`,
  `/admin`,
  `/age-verification`,
  `/api/storefront`,
  `/cart.php`,
  `/checkout.php`,
  `/contact-us`,
  `/customer`,
  `/customer-support`,
  `/finishorder.php`,
  `/giants-club`,
  `/login-as-customer`,
  `/login.php`,
  `/manage`,
  `/manual-verification`,
  `/oauth2`,
  `/order-verification`,
  `/order.html`,
  `/robots.txt`,
  `/sitemap.xml`,
  `/subscribe`,
  `/vendors`,
  `/verification-in-progress`,
  `/wishlist`,
];

export default routesToNotCache;
