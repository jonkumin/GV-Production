/**
 * All routes grabbed from Giant Vapes sitemap and sorted
 * 
 * To do that, follow the steps:
 * 1. Go to https://www.giantvapes.com/xmlsitemap.php
 * 2. Run the script in browser's console:
```
  links = [];
  document.querySelectorAll('url loc').forEach(s => links.push(s));
  links.map(el => el.innerHTML).map(link => link.replace('https://www.giantvapes.com', '')).sort();
```
 */

const splat = ':splat*';

// routes you see commented out came from original sitemap,
// they're combined into one but listed just for visibility
const routesToCache = [
  // `/`,

  `/18650-battery-case${splat}`,
  `/18th-amendment${splat}`,
  `/60ml-chubby-gorilla-unicorn-bottle${splat}`,

  // `/80v-eliquid/`,
  // `/80v-originals-bundle/`,
  `/80v-${splat}`,

  // `/UWELL-crown-4-coils/`,
  // `/UWELL-crown-4-tank/`,
  // `/UWELL-valyrian-2-coils`,
  // `/UWELL/`,
  `/UWELL${splat}`,

  `/about-us${splat}`,
  `/absolute-zero${splat}`,
  `/accessories${splat}`,
  `/adam-bomb${splat}`,
  `/afternoon-delight-max-vg${splat}`,
  `/alexa${splat}`,

  // `/all-disposables/`,
  // `/all-melon/`,
  // `/all-mods-kits/`,
  // `/all-ultra-portable-vapes/`,
  // `/all-vape-tanks/`,
  `/all-${splat}`,

  // `/aloha-fusion-salt/`,
  // `/aloha-fusion/`,
  `/aloha-${splat}`,

  `/alpha${splat}`,

  // `/alpine-melon-salt/`,
  // `/alpine-melon/`,
  `/alpine-${splat}/`,

  `/amber-island${splat}`,
  `/american-patriots${splat}`,
  `/anti-lag${splat}`,
  `/aphrodite-x${splat}`,

  // `/apple-ice-salt/`,
  // `/apple-kiwi-crush-salt/`,
  // `/apple-kiwi-crush/`,
  // `/apple-tobacco-salt/`,
  `/apple-${splat}`,

  `/aqua${splat}`,
  `/arctic-blast${splat}`,
  `/arise${splat}`,
  `/artemis${splat}`,

  // `/aspire-avp-kit/`,
  // `/aspire-avp-pods/`,
  // `/aspire-avp-pro-coils/`,
  // `/aspire-avp-pro-kit/`,
  // `/aspire-avp-pro-pod/`,
  // `/aspire-breeze-nxt-coils/`,
  // `/aspire-breeze-nxt/`,
  // `/aspire-cleito-120-pro/`,
  // `/aspire-cleito-pro/`,
  // `/aspire-deco-kit/`,
  // `/aspire-minican/`,
  // `/aspire-nautilus-2s/`,
  // `/aspire-nautilus-prime-pod/`,
  // `/aspire-nautilus-prime/`,
  // `/aspire-odan-coils/`,
  // `/aspire-odan-mini-tank/`,
  // `/aspire-odan-tank/`,
  // `/aspire-tigon-coils/`,
  // `/aspire-tigon-kit/`,
  // `/aspire-usb-ego-charger/`,
  // `/aspire/`,
  `/aspire${splat}`,

  `/athena/`,

  // `/avail-conjure/`,
  // `/avail-tobacco-2-pack/`,
  // `/avail-vapor/`,
  `/avail-${splat}`,

  `/babyclouds${splat}`,
  `/balanced${splat}`,
  `/bamboozled${splat}`,

  // `/banana-de-leche/`,
  // `/banana-milk/`,
  // `/banana-muffin-salt/`,
  // `/banana-muffin/`,
  // `/banana-pudn/`,
  // `/banana-strawberry-salt/`,
  // `/banana-strawberry/`,
  `/banana-${splat}`,

  `/bands-and-bracelets${splat}`,

  // `/bantam-mango-passion-salt/`,
  // `/bantam-mango-passion/`,
  // `/bantam-menthol-salt/`,
  // `/bantam-menthol/`,
  // `/bantam-salts/`,
  // `/bantam-tobacco-salt/`,
  // `/bantam-tobacco/`,
  // `/bantam/`,
  `/bantam${splat}`,

  `/barbi${splat}`,
  `/barista${splat}`,

  // `/battery-cases/`,
  // `/battery-sleeve/`,
  `/battery-${splat}`,

  `/bean-bags${splat}`,
  `/beantown-vapor${splat}`,

  // `/beard-vape-apple-ice-disposable/`,
  // `/beard-vape-blueberry-cake-disposable/`,
  // `/beard-vape-blueberry-lemonade-disposable/`,
  // `/beard-vape-co/`,
  // `/beard-vape-pineapple-orange-tangerine-ice-disposable/`,
  // `/beard-vape-salts/`,
  // `/beard-vape-strawberry-kiwi-ice-disposable/`,
  `/beard-${splat}`,

  `/bennys-brew${splat}`,

  // `/berry-beverages-bundle/`,
  // `/berry-bliss-salt/`,
  // `/berry-bliss/`,
  // `/berry-limeade-ice/`,
  // `/berry-limeade/`,
  // `/berry/`,
  // `/berrymilk-pie/`,
  `/berry${splat}`,

  // `/best-of-beantown-bundle/`,
  // `/best-of-jimmy-the-juice-man/`,
  // `/best-of-teleos-bundle/`,
  `/best${splat}`,

  `/beta${splat}`,

  // `/betty-boo/`,
  // `/betty-chill/`,
  // `/betty/`,
  `/betty${splat}`,

  // `/bgdc-chocomint/`,
  // `/bgdc-choconana/`,
  `/bgdc-${splat}`,

  // `/big-willies-custard/`,
  // `/big-willies/`,
  `/big-${splat}`,

  `/billow${splat}`,
  `/bird-brains${splat}`,
  `/bits${splat}`,

  // `/black-blue/`,
  // `/black-flag-risen/`,
  // `/black-ice-menthol/`,
  // `/black-market/`,
  // `/blackberry-cobbler/`,
  // `/blackberry-lemonade/`,
  `/black${splat}`,

  `/blast-off${splat}`,

  // `/blazz-berry/`,
  // `/blazz-mango/`,
  // `/blazz-melon/`,
  // `/blazz-peach/`,
  `/blazz-${splat}`,

  `/blitz${splat}`,

  // `/blood-orange-banana-gooseberry/`,
  // `/blood-orange-cactus-cooler-salt/`,
  // `/blood-orange-cactus-cooler/`,
  `/blood-${splat}`,

  // `/blue-ballz/`,
  // `/blue-berries-salt/`,
  // `/blue-berries/`,
  // `/blue-pucker/`,
  // `/blue-razz/`,
  // `/blueberry-banana/`,
  // `/blueberry-duchess/`,
  // `/blueberrymilk-pie/`,
  // `/bluebird-1/`,
  `/blue${splat}`,

  // `/blunomenon-ice/`,
  // `/blunomenon-salt/`,
  // `/blunomenon/`,
  `/blunomenon${splat}`,

  // `/boo-by-teleos/`,
  // `/boostday-cake/`,
  // `/boosted-bestsellers-bundle/`,
  // `/boosted-breakfast/`,
  // `/boosted-by-boosted-ejuice/`,
  // `/boosted-chocolate-shake/`,
  // `/boosted-ejuice/`,
  // `/boosted-mint/`,
  // `/boosted-vanilla-shake/`,
  // `/boozehound-on-ice/`,
  // `/boozehound/`,
  `/boo${splat}`,

  `/boss-reserve${splat}`,

  // `/bourbon-brown-sugar-milkshake/`,
  // `/bourbon-spice-roll/`,
  `/bourbon-${splat}`,

  `/bov${splat}`,
  `/bowdens-mate${splat}`,
  `/branded-vapors${splat}`,

  // `/brands//nkd-100-salt.html`,
  // `/brands/80V-eLiquid.html`,
  // `/brands/80V-salts.html`,
  // `/brands/Accessories.html`,
  // `/brands/Adam-Bomb.html`,
  // `/brands/Aspire.html`,
  // `/brands/Batteries.html`,
  // `/brands/Beantown-Vapor.html`,
  // `/brands/Beard-Vape-Co.html`,
  // `/brands/Big-Willie%27s.html`,
  // `/brands/Blazz%21-Eliquid.html`,
  // `/brands/Bluebird-E%252dliquid.html`,
  // `/brands/Boosted-Ejuice.html`,
  // `/brands/Branded-Vapors.html`,
  // `/brands/Cassadaga-Liquids.html`,
  // `/brands/Chargers.html`,
  // `/brands/Charlie-Noble.html`,
  // `/brands/Chubby-Bubble-Vapes.html`,
  // `/brands/Cloud-Company.html`,
  // `/brands/Cold-Fusion.html`,
  // `/brands/Cuttwood.html`,
  // `/brands/Cyclops-Vapor.html`,
  // `/brands/G2-Vapor.html`,
  // `/brands/Infamous.html`,
  // `/brands/Jimmy-the-Juice-Man.html`,
  // `/brands/KangerTech.html`,
  // `/brands/Kilo-Eliquids.html`,
  // `/brands/King%27s-Crown.html`,
  // `/brands/Kings-Crest-E%252dliquid.html`,
  // `/brands/MET4-Vapor.html`,
  // `/brands/Merkury.html`,
  // `/brands/OPMH-Project.html`,
  // `/brands/P.O.E.T..html`,
  // `/brands/Pinup-Vapors.html`,
  // `/brands/Primitive-Vapor-Co..html`,
  // `/brands/Psiquid-e%252dLiquid.html`,
  // `/brands/Rebuildable-Supplies.html`,
  // `/brands/SMAX-E%252dLiquid.html`,
  // `/brands/SMOKTech.html`,
  // `/brands/SVRF.html`,
  // `/brands/Sicboy.html`,
  // `/brands/Skipfish.html`,
  // `/brands/Suicide-Bunny.html`,
  // `/brands/Teardrip-Juice-Co..html`,
  // `/brands/Teleos-Pure.html`,
  // `/brands/Teleos.html`,
  // `/brands/The-Big-100.html`,
  // `/brands/The-Fountain.html`,
  // `/brands/Tobeco.html`,
  // `/brands/Traditional-Juice.html`,
  // `/brands/Transistor.html`,
  // `/brands/UWELL.html`,
  // `/brands/Vision.html`,
  // `/brands/all-mods-kits.html`,
  // `/brands/all-ultra-portable-vapes.html`,
  // `/brands/all-vape-tanks.html`,
  // `/brands/avail-vapor.html`,
  // `/brands/bantam-salts.html`,
  // `/brands/bantam.html`,
  // `/brands/beard-vape-salts.html`,
  // `/brands/bundles.html`,
  // `/brands/cassadaga-salts.html`,
  // `/brands/cbd-flower.html`,
  // `/brands/cbdfx.html`,
  // `/brands/charlies-chalk-dust.html`,
  // `/brands/charlies-salts.html`,
  // `/brands/coastal-clouds-cbd.html`,
  // `/brands/coastal-clouds.html`,
  // `/brands/crumbz-vapor.html`,
  // `/brands/ehpro.html`,
  // `/brands/exotic-bar-disposable.html`,
  // `/brands/freemax.html`,
  // `/brands/fruitia-salts.html`,
  // `/brands/fruitia.html`,
  // `/brands/geekvape.html`,
  // `/brands/horizontech.html`,
  // `/brands/hyde-disposables.html`,
  // `/brands/i-love-salts.html`,
  // `/brands/juno-vapor.html`,
  // `/brands/lift-cbd.html`,
  // `/brands/lost-vape.html`,
  // `/brands/lyf-e-liquid.html`,
  // `/brands/lyf-salts.html`,
  // `/brands/medterra.html`,
  // `/brands/medusa-coils-and-accessories.html`,
  // `/brands/naked-100.html`,
  // `/brands/nomenon-e-liquids.html`,
  // `/brands/nomenon-salts.html`,
  // `/brands/pachamama-cbd.html`,
  // `/brands/pachamama-salts.html`,
  // `/brands/pachamama.html`,
  // `/brands/prism-e-liquids.html`,
  // `/brands/prohibition-juice-co.html`,
  // `/brands/ripe-vapes.html`,
  // `/brands/sigelei.html`,
  // `/brands/snowwolf.html`,
  // `/brands/suorin.html`,
  // `/brands/vapetasia.html`,
  // `/brands/vaporesso.html`,
  // `/brands/vaptio.html`,
  // `/brands/velvet-cloud.html`,
  // `/brands/voopoo.html`,
  // `/brands/wismec.html`,
  `/brands${splat}`,

  `/breakfast-bundle${splat}`,
  `/brigette${splat}`,

  // `/bubble-apple/`,
  // `/bubble-melon/`,
  // `/bubble-mystery/`,
  // `/bubble-purp/`,
  // `/bubble-razz/`,
  // `/bubble-strawberry/`,
  `/bubble-${splat}`,

  `/bundles${splat}`,
  `/burley-beard${splat}`,

  // `/butter-apple/`,
  // `/butter-pecan-toffee/`,
  // `/buttered-rum/`,
  // `/buttermilk-pie/`,
  // `/butterscotch-salt/`,
  // `/butterscotch/`,
  `/butter${splat}`,

  // `/buy-face-masks`,
  // `/buy-face-masks.html`,
  `/buy-${splat}`,

  // `/cactus-jackfruit-mandarin-salt/`,
  // `/cactus-jackfruit-mandarin/`,
  // `/cactus-juice/`,
  `/cactus-${splat}`,

  `/cake-shake${splat}`,

  // `/cannoli-be-breakfast-salt/`,
  // `/cannoli-be-breakfast/`,
  // `/cannoli-be-cookie-salt/`,
  // `/cannoli-be-cookie/`,
  // `/cannoli-be-graham-salt/`,
  // `/cannoli-be-graham/`,
  // `/cannoli-be-mine-salt/`,
  // `/cannoli-be-mine/`,
  // `/cannoli-be-nuts-salt/`,
  // `/cannoli-be-nuts/`,
  // `/cannoli-be-one-salt/`,
  // `/cannoli-be-one/`,
  `/cannoli-${splat}`,

  `/capone-by-villain-vapors${splat}`,
  `/captain-charleston-gray${splat}`,
  `/carmen${splat}`,
  `/carny4${splat}`,

  // `/cassadaga-classics-bundle/`,
  // `/cassadaga-liquids/`,
  // `/cassadaga-salts/`,
  `/cassadaga-${splat}`,

  // `/castle-long-reserve-edition-mmxx/`,
  // `/castle-long/`,
  `/castle-${splat}`,

  `/catatonic${splat}`,

  // `/cbd-coastal-mint/`,
  // `/cbd-cucumber-melon/`,
  // `/cbd-grape-berry/`,
  // `/cbd-guava-berries/`,
  // `/cbd-manuka-healing-cream/`,
  // `/cbd-minty-mango/`,
  // `/cbd-peach-berries/`,
  // `/cbd-strawberry-watermelon/`,
  // `/cbd-tinctures/`,
  // `/cbd-topicals/`,
  // `/cbd-tropical-lemonade/`,
  // `/cbd-vapes/`,
  // `/cbd/`,
  // `/cbdfx-blue-raspberry-cbd-vape-liquid/`,
  // `/cbdfx-blue-raspberry-disposable-cbd-vape-pen/`,
  // `/cbdfx-calming-tincture-maximum-strength-plus/`,
  // `/cbdfx-calming-tincture/`,
  // `/cbdfx-fresh-mint-disposable-cbd-vape-pen/`,
  // `/cbdfx-gelato-terpene-vape-liquid/`,
  // `/cbdfx-hemp-tincture/`,
  // `/cbdfx-honeydew-ice-disposable-cbd-vape-pen/`,
  // `/cbdfx-melon-cooler-disposable-cbd-vape-pen/`,
  // `/cbdfx-og-kush-terpene-vape-liquid/`,
  // `/cbdfx-pineapple-express-terpene-vape-liquid/`,
  // `/cbdfx-platinum-rose-terpene-vape-liquid/`,
  // `/cbdfx-strawberry-kiwi-cbd-vape-liquid/`,
  // `/cbdfx-strawberry-lemonade-disposable-cbd-vape-pen/`,
  // `/cbdfx-strawberry-milk-cbd-vape-liquid/`,
  // `/cbdfx-tropic-breeze-disposable-cbd-vape-pen/`,
  // `/cbdfx-wellness-tincture-max-strength/`,
  // `/cbdfx-wellness-tincture/`,
  // `/cbdfx-wild-watermelon-cbd-vape-liquid/`,
  // `/cbdfx/`,
  `/cbd${splat}`,

  // `/cereal-crunch-2-pack/`,
  // `/cereal-milk/`,
  `/cereal-${splat}`,

  `/chargers${splat}`,

  // `/charlie-noble/`,
  // `/charlies-chalk-dust/`,
  // `/charlies-custard/`,
  `/charlie${splat}`,

  `/chata${splat}`,

  // `/cherry-ice/`,
  // `/cherry-lime-ginger-salt/`,
  // `/cherry-lime-ginger/`,
  `/cherry${splat}`,

  `/chewy${splat}`,
  `/chillaxin${splat}`,
  `/chocolate-covered-boosted${splat}`,
  `/chrispies${splat}`,
  `/christie${splat}`,
  `/chubby-bubble-vapes${splat}`,
  `/cinnarolly${splat}`,

  // `/citrus-strawberry-menthol-salt/`,
  // `/citrus-strawberry-menthol/`,
  // `/citrus-strawberry-salt/`,
  // `/citrus-strawberry/`,
  `/citrus${splat}`,

  `/claim-your-throne${splat}`,
  `/clearance${splat}`,

  // `/cleito-120-coils`,
  // `/cleito-pro-coils/`,
  // `/cleito-replacement-coil-5-pack/`,
  `/cleito${splat}`,

  // `/coastal-clouds-apple-peach-strawberry/`,
  // `/coastal-clouds-blood-orange-mango-snow-cone/`,
  // `/coastal-clouds-blueberry-limeade/`,
  // `/coastal-clouds-bundle/`,
  // `/coastal-clouds-cbd/`,
  // `/coastal-clouds-iced-apple-peach-strawberry/`,
  // `/coastal-clouds-iced-mango-berries/`,
  // `/coastal-clouds-mango-berries/`,
  // `/coastal-clouds-passion-fruit-orange-guava/`,
  // `/coastal-clouds-sugared-nectarine/`,
  // `/coastal-clouds/`,
  `/coastal${splat}`,

  `/cobalt${splat}`,
  `/coded${splat}`,
  `/coffee-milk${splat}`,
  `/cold-fusion${splat}`,
  `/colossus${splat}`,
  `/contact-us${splat}`,
  `/coventry${splat}`,

  // `/cream-honey-salt/`,
  // `/cream-honey/`,
  // `/creamy-strawberry/`,
  `/cream${splat}`,

  `/create-ylang-holy-basil-cbd-tincture${splat}`,
  `/creme-brulee${splat}`,
  `/crisp-menthol${splat}`,
  `/crown-iii-coil-4-pack${splat}`,
  `/crumbz-vapor${splat}`,
  `/crunch${splat}`,

  // `/cuban-blend/`,
  // `/cuban/`,
  `/cuban${splat}`,

  // `/custard-by-teleos/`,
  // `/custard-lovers-bundle/`,
  // `/custard-spice/`,
  `/custard${splat}`,

  `/cuttwood${splat}`,
  `/cyclops-vapor${splat}`,
  `/d-rudd${splat}`,
  `/dahlia${splat}`,
  `/deco${splat}`,
  `/dem-melons${splat}`,
  `/derailed${splat}`,
  `/detox-black-pepper-turmeric-cbd-tincture${splat}`,
  `/deviant${splat}`,
  `/devices-kits-tanks${splat}`,
  `/dillinger${splat}`,
  `/discontinued${splat}`,
  `/dolo${splat}`,
  `/don-juan-reserve${splat}`,
  `/don-juan${splat}`,
  `/dr-green${splat}`,
  `/drizzled${splat}`,
  `/drunk-monkey${splat}`,

  // `/duchess-reserve/`,
  // `/duchess/`,
  `/duchess${splat}`,

  `/duke${splat}`,
  `/dvine${splat}`,
  `/east-coast-v-c${splat}`,

  // `/efest-luc-v2-charger/`,
  // `/efest-luc-v6-six-channel-lcd-charger/`,
  `/efest${splat}`,

  // `/ehpro-raptor-coils/`,
  // `/ehpro-raptor-tank/`,
  `/ehpro${splat}`,

  `/eight-bells${splat}`,
  `/el-fuego${splat}`,
  `/emerald${splat}`,
  `/entropy${splat}`,
  `/enygma${splat}`,

  // `/espresso-cannoli/`,
  // `/espressomilk-pie/`,
  `/espresso${splat}`,
  
  `/et-s-clearomizer${splat}`,
  `/euro-gold${splat}`,
  `/exotic-bar-disposables${splat}`,
  `/experiment-one-eliquid${splat}`,
  `/face-masks-three-layer${splat}`,
  `/fairgrounds${splat}`,
  `/faq${splat}`,
  `/first-thangs-first${splat}`,
  
  // `/five-pawns-1/`,
  // `/five-pawns/`,
  `/five-${splat}`,

  `/flakd-by-primitive${splat}`,
  `/flakey-french${splat}`,

  // `/flavor-free-salt/`,
  // `/flavor-free/`,
  `/flavor${splat}`,

  `/focus-goji-cacao-cbd-tincture${splat}`,
  `/free-fall${splat}`,

  // `/freemax-autopod50-coils/`,
  // `/freemax-autopod50-pod-kit/`,
  // `/freemax-autopod50/`,
  // `/freemax-fireluke-2/`,
  // `/freemax-fireluke-mesh-coils/`,
  // `/freemax-m-pro-2-tank/`,
  // `/freemax-m-pro-coils`,
  // `/freemax-m-pro-tank/`,
  // `/freemax-maxpod-coils/`,
  // `/freemax-maxpod/`,
  // `/freemax-maxus-100w-kit/`,
  // `/freemax-tx-mesh-coils/`,
  // `/freemax/`,
  `/freemax${splat}`,

  `/french-vanilla-brown-sugar${splat}`,

  // `/fresh-citrus-ice-salt/`,
  // `/fresh-citrus-ice/`,
  // `/fresh-fruit/`,
  `/fresh${splat}`,

  `/fritter-by-psiquid${splat}`,

  // `/fruit-and-cream-salt/`,
  // `/fruit-and-cream/`,
  // `/fruit-madness-chilled/`,
  // `/fruit-madness-ejuice/`,
  // `/fruit-tastic-bundle/`,
  // `/fruit-whip/`,
  // `/fruit-yogurt-salt/`,
  // `/fruit-yogurt/`,
  // `/fruitia-apple-kiwi-crush-disposable/`,
  // `/fruitia-blood-orange-cactus-cooler-disposable/`,
  // `/fruitia-blueberry-blast-disposable/`,
  // `/fruitia-favorites-bundle/`,
  // `/fruitia-pineapple-citrus-twist-disposable/`,
  // `/fruitia-salts/`,
  // `/fruitia-smooth-banana-ice-disposable/`,
  // `/fruitia-strawberry-guava-ice-disposable/`,
  // `/fruitia/`,
  // `/fruity-and-creamy-bundle/`,
  `/fruit${splat}`,

  `/ftw-ejuice${splat}`,

  // `/fuji-apple-strawberry-nectarine/`,
  // `/fuji-salt/`,
  `/fuji${splat}`,

  `/g2-vapor${splat}`,
  `/galil${splat}`,
  `/gambit${splat}`,
  `/gamma${splat}`,

  // `/geekvape-aegis-boost-plus-pod-and-coils/`,
  // `/geekvape-aegis-boost-plus/`,
  // `/geekvape-aegis-boost-pod/`,
  // `/geekvape-aegis-boost/`,
  // `/geekvape-aegis-hero-pod-kit/`,
  // `/geekvape-aegis-hero/`,
  // `/geekvape-aegis-kit/`,
  // `/geekvape-aegis-max-kit/`,
  // `/geekvape-aegis-max/`,
  // `/geekvape-aegis-mini-kit/`,
  // `/geekvape-aegis-mini/`,
  // `/geekvape-aegis-pod/`,
  // `/geekvape-aegis-solo-kit/`,
  // `/geekvape-aegis-solo/`,
  // `/geekvape-aegis-x-kit/`,
  // `/geekvape-aegis-x/`,
  // `/geekvape-boost-coils/`,
  // `/geekvape-g-coils/`,
  // `/geekvape-mesh-z-coils`,
  // `/geekvape-meshmellow-coils/`,
  // `/geekvape-supermesh-coils/`,
  // `/geekvape-zeus-nano-tank/`,
  // `/geekvape-zeus-tank/`,
  // `/geekvape/`,
  `/geekvape${splat}`,

  // `/genuine-ekowool-braided-with-hollow-core/`,
  // `/genuine-ekowool-braided-with-silica-core-scn/`,
  `/genuine${splat}`,

  // `/giant-prohibition-bundle/`,
  // `/giant-vapes-bands/`,
  // `/giant-vapes-hexohm-v2/`,
  // `/giant-vapes-t-shirts/`,
  // `/giants-club/`,
  `/giant${splat}`,

  // `/gold-rush/`,
  // `/gold/`,
  // `/golden-ticket/`,
  `/gold${splat}`,

  `/good-vibes${splat}`,

  // `/grandmas-lemon-cake/`,
  // `/grandmaster/`,
  // `/grandpas-choice/`,
  `/grand${splat}`,

  // `/grapenomenon-ice/`,
  // `/grapenomenon-salt/`,
  // `/grapenomenon/`,
  `/grape${splat}`,

  `/grapple${splat}`,
  `/grav-16mm-octo-taster${splat}`,
  `/gryphon${splat}`,

  // `/guava-punch/`,
  // `/guavarino/`,
  `/guava${splat}`,

  `/gv-sub-ohm-t-shirt${splat}`,

  `/hades${splat}`,

  // `/harvest-berry/`,
  // `/harvest/`,
  `/harvest${splat}`,

  // `/hawaiian-cookie/`,
  // `/hawaiian-pog-ice/`,
  // `/hawaiian-pog-salt/`,
  // `/hawaiian-pog/`,
  `/hawaiian${splat}`,

  `/head-bangin-boogie${splat}`,
  `/hiss-tank${splat}`,
  
  // `/honey-mellow-salt/`,
  // `/honey-mellow/`,
  // `/honey-milk/`,
  // `/honeydew-melon-salt/`,
  // `/honeydew-milkshake/`,
  `/honey${splat}`,
  
  // `/horizontech-falcon-2-tank/`,
  // `/horizontech-falcon-coils/`,
  // `/horizontech-falcon-king-tank/`,
  // `/horizontech-falcon-tank/`,
  // `/horizontech-sector-mesh-coils/`,
  // `/horizontech/`,
  `/horizontech${splat}`,

  `/huckleberry-pear-acai${splat}`,
  `/hunnid-k${splat}`,

  // `/hyde-banana-ice-50mg-disposable-vape-pen/`,
  // `/hyde-blue-razz-50mg-disposable-vape-pen/`,
  // `/hyde-disposables/`,
  // `/hyde-lush-ice-50mg-disposable-vape-pen/`,
  // `/hyde-pineapple-ice-50mg-disposable-vape-pen/`,
  // `/hyde-sparkling-orange-50mg-disposable-vape-pen/`,
  // `/hyde-spearmint-50mg-disposable-vape-pen/`,
  // `/hyde-strawberry-banana-50mg-disposable-vape-pen/`,
  `/hyde${splat}`,
  
  // `/i-love-salts-blue-raspberry/`,
  // `/i-love-salts-classic-menthol/`,
  // `/i-love-salts-classic-tobacco/`,
  // `/i-love-salts-grappleberry/`,
  // `/i-love-salts-luau-lemonade/`,
  // `/i-love-salts-spearmint-gum/`,
  // `/i-love-salts-strawberry-ice/`,
  // `/i-love-salts/`,
  `/i-love${splat}`,
  
  // `/iced-blood-orange-mango-snow-cone/`,
  // `/iced-grape-berries/`,
  // `/iced-melon-berries/`,
  // `/iced-passion-fruit-orange-guava/`,
  `/iced${splat}`,

  `/icy-mango-salt${splat}`,
  `/intercooler${splat}`,
  `/irreverence${splat}`,
  `/j-ho${splat}`,
  `/jamestown${splat}`,

  // `/jasmine-milk-tea-salt/`,
  // `/jasmine-milk-tea/`,
  `/jasmine${splat}`,

  `/jayne${splat}`,
  `/jimmy-the-juice-man${splat}`,
  `/juices-by-brand${splat}`,

  // `/juno-kit/`,
  // `/juno-menthol-pods/`,
  // `/juno-tobacco-pods/`,
  // `/juno-vapor/`,
  `/juno${splat}`,

  `/kannastor-gr8tr-v2-mini-grinder${splat}`,

  // `/kanthal-a-1-round-wire/`,
  // `/kanthal-ribbon-wire/`,
  `/kantnal${splat}`,

  // `/key-lime-cookie/`,
  // `/key-lime-pie-salt/`,
  `/key-lime${splat}`,
  
  `/kiberry-yogurt${splat}`,

  // `/killer-kustard-strawberry/`,
  // `/killer-kustard/`,
  `/killer${splat}`,

  // `/kilo-eliquids/`,
  // `/kilo-kiberry-yogurt-50mg-exotic-bar-disposable/`,
  `/kilo${splat}`,

  // `/king-bellman/`,
  // `/kings-crest-e-liquid/`,
  // `/kings-crown-eliquids/`,
  `/king${splat}`,

  // `/kiwi-berry-salt/`,
  // `/kiwi-berry/`,
  // `/kiwi-passion-fruit-nectarine/`,
  // `/kiwi-passionfruit-nectarine-salt/`,
  `/kiwi${splat}`,

  `/kumo${splat}`,
  `/lana${splat}`,
  `/larry${splat}`,
  `/laude${splat}`,

  // `/lava-flow-salt/`,
  // `/lava-flow/`,
  `/lava${splat}`,

  `/legend${splat}`,

  // `/lemon-meringue-pie/`,
  // `/lemon-raspberry/`,
  // `/lemonem/`,
  // `/lemonomenon-ice/`,
  // `/lemonomenon-salt/`,
  // `/lemonomenon/`,
  `/lemon${splat}`,

  `/lick-it${splat}`,

  // `/lift-cbd/`,
  // `/lift-cbn-sleep-pen-disposable-cbd-vape/`,
  // `/lift-honey-zzz-tincture/`,
  // `/lift-mango-disposable-cbd-vape-pen/`,
  // `/lift-peppermint-broad-spectrum-cbd-tincture/`,
  // `/lift-peppermint-cbd-isolate-drops/`,
  // `/lift-peppermint-disposable-cbd-vape-pen/`,
  // `/lift-strawberry-disposable-cbd-vape-pen/`,
  // `/lift-tangerine-broad-spectrum-cbd-tincture/`,
  // `/lift-tangerine-cbd-isolate-drops/`,
  // `/lift-tangerine-zzz-tincture/`,
  `/lift${splat}`,

  `/lime-time${splat}`,
  `/lindsay${splat}`,
  `/liquid-smores${splat}`,
  `/little-miss${splat}`,
  `/lola-by-traditional${splat}`,

  // `/lost-vape-lyra-coils/`,
  // `/lost-vape-orion-plus-coils/`,
  // `/lost-vape-orion-plus-pod/`,
  // `/lost-vape-orion-plus/`,
  // `/lost-vape-prana-pods/`,
  // `/lost-vape-prana/`,
  // `/lost-vape-q-pro-coils/`,
  // `/lost-vape-q-pro-pod/`,
  // `/lost-vape-q-ultra-pods/`,
  // `/lost-vape-q-ultra/`,
  // `/lost-vape-ultra-boost-coils/`,
  // `/lost-vape/`,
  `/lost-vape${splat}`,

  `/lovebird${splat}`,

  // `/lucky-7/`,
  // `/luckybird/`,
  `/luck${splat}`,

  `/lux${splat}`,

  // `/lyf-e-liquid/`,
  // `/lyf-salts/`,
  `/lyf-${splat}`,

  // `/m-b-y-c-2-pack/`,
  // `/m-b-y-c-fried/`,
  // `/m-b-y-c/`,
  `/m-b-y-c${splat}`,

  // `/mabacco-salt/`,
  // `/mabacco/`,
  `/mabacco${splat}`,

  `/madrina${splat}`,
  `/mafia-princess${splat}`,
  `/mallow-nation${splat}`,

  // `/mango-50g-exotic-bar-disposable/`,
  // `/mango-lassi/`,
  // `/mango-passion-ice/`,
  // `/mango-passion/`,
  // `/mango-pitaya-pineapple/`,
  // `/mango/`,
  `/mango${splat}`,

  `/maple-spiced-tobacco${splat}`,
  `/mardi-gras${splat}`,
  `/marilyn${splat}`,
  `/marshmel${splat}`,
  `/maui-sun${splat}`,
  `/mayfield${splat}`,

  // `/medterra-broad-spectrum-cbd-tincture-citrus/`,
  // `/medterra-broad-spectrum-cbd-tincture-strawberry-mint/`,
  // `/medterra-broad-spectrum-cbd-tincture-unflavored/`,
  // `/medterra-cbd-cooling-cream-large/`,
  // `/medterra-cbd-cooling-cream-small/`,
  // `/medterra-cbd-isolate-tincture/`,
  // `/medterra-cbg-cbd-tincture-citrus/`,
  // `/medterra-pain-cream/`,
  // `/medterra/`,
  `/medterra${splat}`,

  `/medusa-customs-wood-grinder${splat}`,
  `/mega-melons${splat}`,

  // `/melon-berries/`,
  // `/melon-kiwi/`,
  // `/melon-mash-ice/`,
  // `/melon-mash/`,
  // `/melon-strapple/`,
  // `/melon/`,
  // `/melonberry-milk/`,
  `/melon${splat}`,

  // `/menthol-by-neckbeard/`,
  // `/menthol-by-teleos-pure/`,
  // `/menthol-fruits-bundle/`,
  `/menthol${splat}`,

  `/met4-vapor${splat}`,
  `/milk-of-the-poppy${splat}`,
  `/minotaur${splat}`,
  `/mintd${splat}`,

  // `/mixed-berry-smoothie/`,
  // `/mixed-fruits-bundle/`,
  `/mixed-${splat}`,

  `/monkey-snack${splat}`,

  // `/morning-spoon-salt/`,
  // `/morning-spoon/`,
  `/morning${splat}`,

  // `/mothers-milk-cookies/`,
  // `/mothers-milk/`,
  `/mothers${splat}`,

  `/mountain-chill${splat}`,

  // `/mr-cookie/`,
  // `/mr-fritter/`,
  // `/mr-meringue/`,
  `/mr-${splat}`,

  // `/mrs-strawberry/`,
  `/mrs-${splat}`,

  `/muffcake${splat}`,
  `/naked-100${splat}`,

  // `/nana-berry-ice/`,
  // `/nana-berry/`,
  `/nana-${splat}`,

  `/native-wicks-platinum-blend${splat}`,

  // `/nautilus-mini-bvc-coil-5-pack/`,
  // `/nautilus-tank-mini/`,
  `/nautilus${splat}`,

  // `/nectar-by-merkury/`,
  // `/nectar-by-neckbeard/`,
  `/nectar${splat}`,

  // `/nectochill/`,
  // `/nectosphere/`,
  `/necto${splat}`,

  `/neon${splat}`,
  `/nickel-nr-temp-control-ni200-ni205-wire${splat}`,
  `/nicotine-salts${splat}`,
  `/night-shift${splat}`,

  // `/nkd-100-salt-berry/`,
  // `/nkd-100-salt-cuban-blend/`,
  // `/nkd-100-salt-euro-gold/`,
  // `/nkd-100-salt-melon/`,
  // `/nkd-100-salt-mint/`,
  // `/nkd-100-salt/`,
  `/nkd-${splat}`,

  // `/no-00/`,
  // `/no-05/`,
  // `/no-24/`,
  // `/no-32/`,
  // `/no-42/`,
  // `/no-64/`,
  // `/no-71/`,
  // `/no-99/`,
  `/no-${splat}`,

  // `/nomenon-e-liquids/`,
  // `/nomenon-salts/`,
  `/nomenon${splat}`,

  `/nuddy${splat}`,

  // `/nutty-caramel-salt/`,
  // `/nutty-caramel/`,
  `/nutty${splat}`,
  
  `/oatmeal-cream-pie${splat}`,

  // `/oh-face-salt/`,
  // `/oh-face/`,
  `/oh-${splat}`,

  `/opmh-project${splat}`,
  `/orchard${splat}`,

  // `/orion-0-5-replacement-pod/`,
  // `/orion-1.0-replacement-pod/`,
  `/orion${splat}`,

  `/other-1${splat}`,
  `/p-o-e-t${splat}`,

  // `/pachamama-cbd-athletic-rub/`,
  // `/pachamama-cbd/`,
  // `/pachamama-salts/`,
  // `/pachamama/`,
  `/pachamama${splat}`,
  
  `/pair-of-deuces${splat}`,
  `/pandoras-box-x${splat}`,
  `/papaya-punch${splat}`,
  `/paradise${splat}`,

  // `/passion-fruit-guava-punch-salt/`,
  // `/passion-fruit-guava-punch/`,
  // `/passion-fruit-raspberry-yuzu/`,
  `/passion${splat}`,

  `/pastry-parts${splat}`,
  `/pb-apples${splat}`,

  // `/peach-ice-50mg-exotic-bar-disposable/`,
  // `/peach-papaya-coconut-cream/`,
  // `/peach-tea/`,
  // `/peachy-strawberry/`,
  `/peach${splat}`,

  // `/pear-parfait/`,
  // `/pearamel/`,
  `/pear${splat}`,

  `/persian-winter${splat}`,

  // `/phenomenon-salt/`,
  // `/phenomenon/`,
  `/phenomenon${splat}`,

  `/phoenix${splat}`,
  `/pi-face${splat}`,
  `/pina-colada-50mg-exotic-bar-disposable${splat}`,

  // `/pineapple-berry/`,
  // `/pineapple-citrus-twist-salt/`,
  // `/pineapple-citrus-twist/`,
  // `/pineapple-express/`,
  // `/pineapple-kiwi-ice/`,
  // `/pineapple-kiwi/`,
  `/pine${splat}`,

  // `/pink-lemonade-by-coastal-clouds/`,
  // `/pink-lemonade/`,
  `/pink${splat}`,

  // `/pinup-bestsellers-bundle/`,
  // `/pinup-vapors/`,
  `/pinup${splat}`,

  `/pistachio-ry4${splat}`,
  `/plan-9${splat}`,
  `/pony-on-acid${splat}`,
  `/port-royale${splat}`,
  `/poseidon${splat}`,
  `/pound-cake${splat}`,
  `/prickly-cactus-juice${splat}`,

  // `/primitive-pies-bundle/`,
  // `/primitive-vapor-co/`,
  `/primitive${splat}`,

  `/prism-e-liquids${splat}`,
  `/privacy-policy${splat}`,
  `/prohibition-juice-co${splat}`,
  `/psiquid-e-liquid${splat}`,

  // `/puddin-bliss/`,
  // `/puddin/`,
  `/puddin${splat}`,

  `/puffy${splat}`,

  // `/purple-nurple/`,
  // `/purple-watermelon-salt/`,
  // `/purple-watermelon/`,
  `/purple${splat}`,

  `/queenside${splat}`,
  `/rainbow-road${splat}`,

  // `/raspberry-french/`,
  // `/raspberry-menthol-salt/`,
  // `/raspberry-menthol/`,
  `/raspberry${splat}`,

  `/rated-s-for-sic${splat}`,
  // `/really-berry-salt/`,
  // `/really-berry/`,
  `/really${splat}`,

  `/recover-green-tea-echinacea-cbd-tincture${splat}`,
  `/redbird${splat}`,
  `/refreshing${splat}`,
  `/relax-kava-valerian-cbd-tincture${splat}`,
  `/respek${splat}`,
  `/revel${splat}`,
  `/revenge-of-the-geeks${splat}`,
  `/ridin-shotgun${splat}`,
  `/rift-x${splat}`,

  // `/ripe-fruit/`,
  // `/ripe-vapes/`,
  `/ripe${splat}`,

  // `/rita-chill/`,
  // `/rita/`,
  `/rita${splat}`,

  // `/royal/`,
  // `/royalty-two/`,
  `/royal${splat}`,

  // `/ruby-by-prism-e-liquids/`,
  // `/ruby-red/`,
  // `/ruby/`,
  `/ruby${splat}`,

  `/ry4${splat}`,
  `/salted-caramel${splat}`,
  `/sammie-puffs${splat}`,
  `/sanctuary${splat}`,
  `/satisfying${splat}`,
  `/screwbacco${splat}`,
  `/screwberry${splat}`,
  `/sell-out${splat}`,
  `/shellback-slush${splat}`,
  `/shes-a-dime${splat}`,
  `/shipping-policy${splat}`,
  `/shock-awe${splat}`,
  `/short-straw${splat}`,

  // `/shurb/`,
  // `/shurbfol-ejuice/`,
  `/shurb${splat}`,

  // `/sicboy-industries-premium-eliquid/`,
  // `/sicker-than-most/`,
  `/sick${splat}`,

  `/sienna${splat}`,

  // `/sigelei-213-fog-kit/`,
  // `/sigelei-fog-coils/`,
  // `/sigelei-fog-pod-tank/`,
  // `/sigelei-humvee-80/`,
  // `/sigelei/`,
  `/sigelei${splat}`,

  `/silencer-drip-tip${splat}`,
  `/sin-tax${splat}`,
  `/skippermilk-pie${splat}`,
  `/sky${splat}`,
  `/slam-berry-by-charlies-chalk-dust${splat}`,

  // `/smatic-30w-mod/`,
  // `/smatic-70w-mod/`,
  `/smatic${splat}`,

  `/smax-e-liquid${splat}`,
  `/smeach${splat}`,

  // `/smok-alike/`,
  // `/smok-baby-v2-coils/`,
  // `/smok-fetch-mini-pods/`,
  // `/smok-fetch-mini/`,
  // `/smok-fetch-pro-pods/`,
  // `/smok-fetch-pro/`,
  // `/smok-gpriv-3-kit/`,
  // `/smok-morph-219-kit`,
  // `/smok-nfix-pods/`,
  // `/smok-nfix/`,
  // `/smok-nord-2-pods/`,
  // `/smok-nord-2/`,
  // `/smok-nord-coils/`,
  // `/smok-nord-pod-kit/`,
  // `/smok-nord-replacement-pod/`,
  // `/smok-nord-x-kit/`,
  // `/smok-nord-x-pods/`,
  // `/smok-novo-2-kit/`,
  // `/smok-novo-2-pods/`,
  // `/smok-novo-x-pods/`,
  // `/smok-novo-x/`,
  // `/smok-pozz-x/`,
  // `/smok-priv-n19-kit`,
  // `/smok-rgc-coils/`,
  // `/smok-rigel-kit/`,
  // `/smok-rpm-2-coils/`,
  // `/smok-rpm-2-pods/`,
  // `/smok-rpm-2/`,
  // `/smok-rpm-2s/`,
  // `/smok-rpm-coils`,
  // `/smok-rpm-lite-pods/`,
  // `/smok-rpm-lite/`,
  // `/smok-rpm160-coils/`,
  // `/smok-rpm160-pod/`,
  // `/smok-rpm160/`,
  // `/smok-rpm40-kit/`,
  // `/smok-rpm40-pods/`,
  // `/smok-rpm80-kit/`,
  // `/smok-rpm80-pods/`,
  // `/smok-rpm80-pro/`,
  // `/smok-scar-18-1/`,
  // `/smok-scar-18/`,
  // `/smok-scar-p3-pods/`,
  // `/smok-scar-p3/`,
  // `/smok-stick-80w-kit`,
  // `/smok-stick-prince-kit/`,
  // `/smok-tf-replacement-coils`,
  // `/smok-tfv16-lite-coils/`,
  // `/smok-tfv16-lite/`,
  // `/smok-tfv16-replacement-coils`,
  // `/smok-tfv16-tank/`,
  // `/smok-tfv9-coils/`,
  // `/smok-tfv9-tank/`,
  // `/smok-thallo-kit/`,
  // `/smok-thallo-pods/`,
  // `/smok-trinity-alpha-kit/`,
  // `/smok-trinity-alpha-pod/`,
  // `/smoked-banana-custard/`,
  // `/smoktech/`,
  `/smok${splat}`,

  // `/smooth-banana-ice-salt/`,
  // `/smooth-banana-ice/`,
  `/smooth${splat}`,

  // `/snowwolf-afeng-pods/`,
  // `/snowwolf-afeng-pro/`,
  // `/snowwolf-afeng/`,
  // `/snowwolf-kfeng-kit/`,
  // `/snowwolf-mark-x-coils/`,
  // `/snowwolf-mfeng-baby-kit/`,
  // `/snowwolf-mfeng-kit/`,
  // `/snowwolf-mfeng-mod/`,
  // `/snowwolf-p40-mini/`,
  // `/snowwolf-p50-kit/`,
  // `/snowwolf-taze-coils/`,
  // `/snowwolf-taze-pods/`,
  // `/snowwolf-taze/`,
  // `/snowwolf-wf-coils/`,
  // `/snowwolf-wf-mini-coils/`,
  // `/snowwolf-wicked-coils/`,
  // `/snowwolf-wocket-x-grid-coils/`,
  // `/snowwolf-zephyr-kit/`,
  // `/snowwolf/`,
  `/snowwolf${splat}`,

  `/sollers-pointe${splat}`,
  `/sophia${splat}`,
  `/sorbet-salt${splat}`,

  // `/soul-custardy-salt/`,
  // `/soul-custardy/`,
  // `/souly-cannoli/`,
  `/soul${splat}`,

  // `/sour-apple-ice-50mg-exotic-bar-disposable/`,
  // `/sour-strawberry-salt/`,
  // `/sour-strawberry/`,
  `/sour${splat}`,

  `/speakeasy${splat}`,
  `/standard-bvc-coil-5-pack${splat}`,
  `/starfruit-grape-salt${splat}`,
  `/storm-x2-coil-5-pack${splat}`,

  // `/strangeland/`,
  // `/stranomenon-ice/`,
  // `/stranomenon-salt/`,
  // `/stranomenon/`,
  // `/strapple/`,
  // `/strawb-gwab/`,
  // `/strawberry-astronaut/`,
  // `/strawberry-banana-smoothie/`,
  // `/strawberry-cereal/`,
  // `/strawberry-coconut-refresher-salt/`,
  // `/strawberry-coconut-refresher/`,
  // `/strawberry-cream-vape-bundle/`,
  // `/strawberry-guava-jackfruit/`,
  // `/strawberry-kiwi-ice-salt/`,
  // `/strawberry-lemonade/`,
  // `/strawberry-milk-by-moo/`,
  // `/strawberry-milk/`,
  // `/strawberry-parfait/`,
  // `/strawberry-pineapple-coconut/`,
  // `/strawberry-pom-salt/`,
  // `/strawberry-pom/`,
  // `/strawberry-watermelon-salt/`,
  // `/strawberry/`,
  // `/strawnana-50mg-exotic-bar-disposable/`,
  `/stra${splat}`,

  `/stroopwafel${splat}`,

  // `/subtank-coil-5-pack-occ/`,
  // `/subtank-coil-5-pack-ssocc/`,
  `/subtank${splat}`,

  `/sucker-punch${splat}`,
  `/sugar-drizzle${splat}`,
  `/suicide-bunny-eliquids${splat}`,
  `/summer-vibes${splat}`,
  `/sunrise${splat}`,

  // `/suorin-air-pods/`,
  // `/suorin-air/`,
  // `/suorin/`,
  `/suorin${splat}`,

  // `/super-tank-25mm/`,
  // `/super-tank-coil-5-pack`,
  // `/super-tank-mini/`,
  `/super${splat}`,

  `/svrf${splat}`,

  // `/sweet-black-tea/`,
  // `/sweet-dream/`,
  // `/sweet-honey-cream/`,
  // `/sweet-melons/`,
  // `/sweet-peach-soda-salt/`,
  // `/sweet-peach-soda/`,
  // `/sweet-thang/`,
  // `/sweet-tooth-bundle/`,
  `/sweet${splat}`,

  `/symmetry-six${splat}`,
  `/taffd${splat}`,

  // `/tart-lemon-salt/`,
  // `/tart-lemon/`,
  // `/tart-sweets-bundle/`,
  `/tart${splat}`,
  
  `/teardrip-juice-co${splat}`,
  
  // `/teleos-pure/`,
  // `/teleos/`,
  `/teleos${splat}`,

  `/terms-conditions${splat}`,
  `/test-category${splat}`,

  // `/tfv12-prince-coil-3-pack/`,
  // `/tfv8-baby-beast-coil-5-pack/`,
  // `/tfv8-baby-beast-tank/`,
  // `/tfv8-cloud-beast-coil-3-pack/`,
  `/tfv${splat}`,

  // `/that-new-thang/`,
  `/that-${splat}`,

  // `/the-afterparty/`,
  // `/the-cookie/`,
  // `/the-filth/`,
  // `/the-hotel-lobby/`,
  // `/the-king/`,
  // `/the-milk-2/`,
  // `/the-milk/`,
  // `/the-mint-leaf/`,
  // `/the-natural-cbd-tincture/`,
  // `/the-o-b/`,
  // `/the-one-eliquid-apple-cinnamon/`,
  // `/the-one-eliquid-blueberry/`,
  // `/the-one-eliquid-bundle/`,
  // `/the-one-eliquid-lemon-crumble-cake/`,
  // `/the-one-eliquid-marshmallow-milk/`,
  // `/the-one-eliquid-strawberry/`,
  // `/the-one-eliquid-vanilla-custard-donut/`,
  // `/the-reef/`,
  // `/the-voyage/`,
  `/the-${splat}`,

  // `/these-thangs-happen/`,
  `/these-${splat}`,

  // `/toasted-tobacco-salt/`,
  // `/toasted-tobacco/`,
  `/toast${splat}`,

  // `/tobacco-1/`,
  // `/tobacco-row/`,
  // `/tobacco-trail/`,
  `/tobacco${splat}`,

  `/tobeco${splat}`,
  `/tombstone${splat}`,

  // `/tough-cookie/`,
  // `/tougher-cookie/`,
  `/tough${splat}`,

  `/transistor${splat}`,
  `/treasure-trove${splat}`,
  `/tribe${splat}`,
  `/trill${splat}`,
  `/triple-g${splat}`,
  `/tripoli${splat}`,
  `/tropical-melon${splat}`,
  `/tru-blue${splat}`,
  `/turbo-roar${splat}`,
  `/typhoon${splat}`,
  `/ultra${splat}`,
  `/unicorn-milk${splat}`,

  // `/uwell-nunchaku-2-tank/`,
  // `/uwell-nunchaku-coils/`,
  // `/uwell-valyrian-2-tank/`,
  // `/uwell-valyrian-pod-coils/`,
  // `/uwell-valyrian-pod-kit/`,
  // `/uwell-valyrian-replacement-pod/`,
  // `/uwell-zumwalt-pods/`,
  // `/uwell-zumwalt/`,
  `/uwell${splat}`,

  `/valyrian-coil-2-pack${splat}`,
  `/vani-tea${splat}`,
  `/vanilla-almond-milk${splat}`,
  `/vape-deals${splat}`,
  `/vapetasia${splat}`,

  // `/vaporesso-barr-pods/`,
  // `/vaporesso-barr/`,
  // `/vaporesso-euc-coils`,
  // `/vaporesso-forz-tx80-kit/`,
  // `/vaporesso-gen-kit/`,
  // `/vaporesso-gen-mod/`,
  // `/vaporesso-gen-nano-kit/`,
  // `/vaporesso-gen-s-kit/`,
  // `/vaporesso-gt-coils`,
  // `/vaporesso-gtr-coils/`,
  // `/vaporesso-gtx-coils/`,
  // `/vaporesso-luxe-2-kit/`,
  // `/vaporesso-luxe-pm40/`,
  // `/vaporesso-luxe-s-kit/`,
  // `/vaporesso-nrg-s-tank/`,
  // `/vaporesso-osmall-pod/`,
  // `/vaporesso-osmall/`,
  // `/vaporesso-podstick-pods/`,
  // `/vaporesso-podstick/`,
  // `/vaporesso-qf-coils`,
  // `/vaporesso-sky-solo-starter-kit/`,
  // `/vaporesso-swag-2-mod/`,
  // `/vaporesso-swag-2/`,
  // `/vaporesso-target-mini-2/`,
  // `/vaporesso-target-pm30-pods/`,
  // `/vaporesso-target-pm30/`,
  // `/vaporesso-target-pm80-pods/`,
  // `/vaporesso-target-pm80-se/`,
  // `/vaporesso-target-pm80/`,
  // `/vaporesso-tarot-nano-kit/`,
  // `/vaporesso-xiron-pods/`,
  // `/vaporesso-xiron/`,
  // `/vaporesso-xros-pods/`,
  // `/vaporesso-xros/`,
  // `/vaporesso-xtra-unipod/`,
  // `/vaporesso-xtra/`,
  // `/vaporesso-zero-pods/`,
  // `/vaporesso-zero/`,
  // `/vaporesso/`,
  `/vaporesso${splat}`,

  // `/vaptio-cosmo-coils/`,
  // `/vaptio-cosmo/`,
  // `/vaptio-razor-pods/`,
  // `/vaptio-razor/`,
  // `/vaptio/`,
  `/vaptio${splat}`,

  `/vazilla${splat}`,
  `/vct${splat}`,

  // `/velvet-cloud-vanilla-custard/`,
  // `/velvet-cloud/`,
  `/velvet${splat}`,

  `/verna${splat}`,

  // `/very-berry-bundle/`,
  // `/very-vanilla-2-pack/`,
  `/very-${splat}`,

  `/vestige${splat}`,
  `/victoria${splat}`,
  `/vigor${splat}`,
  `/vine${splat}`,
  `/violet${splat}`,
  
  // `/vision-spinner-2/`,
  // `/vision-spinner-3/`,
  // `/vision/`,
  `/vision${splat}`,

  // `/voopoo-argus-air-pods/`,
  // `/voopoo-argus-air/`,
  // `/voopoo-argus-gt/`,
  // `/voopoo-drag-2-refresh-kit/`,
  // `/voopoo-drag-baby-trio/`,
  // `/voopoo-drag-max/`,
  // `/voopoo-drag-mini-kit/`,
  // `/voopoo-drag-mini-refresh-kit/`,
  // `/voopoo-drag-mini/`,
  // `/voopoo-drag-s/`,
  // `/voopoo-drag-x/`,
  // `/voopoo-find-trio-kit/`,
  // `/voopoo-find-trio-pods/`,
  // `/voopoo-navi-pod/`,
  // `/voopoo-navi/`,
  // `/voopoo-pnp-coils`,
  // `/voopoo-pnp-pod-tank/`,
  // `/voopoo-pnp-pods/`,
  // `/voopoo-uforce-t2-coils/`,
  // `/voopoo-vinci-air-pod/`,
  // `/voopoo-vinci-air/`,
  // `/voopoo-vinci-pods/`,
  // `/voopoo-vinci-r/`,
  // `/voopoo-vinci-x-mod-pod/`,
  // `/voopoo-vinci/`,
  // `/voopoo-vsuit/`,
  // `/voopoo/`,
  `/voopoo${splat}`,

  `/wanderlust${splat}`,
  `/warning-shot${splat}`,
  `/wastegate${splat}`,

  // `/watanomenon-ice/`,
  // `/watanomenon-salt/`,
  // `/watanomenon/`,
  `/watanomenon${splat}`,

  `/watermelon-cream${splat}`,

  // `/watson-gold/`,
  // `/watson-og/`,
  // `/watson-platinum/`,
  // `/watson-white-gold/`,
  `/watson${splat}`,

  `/wedding-crasher${splat}`,
  `/west-coast-chino${splat}`,

  // `/white-lightning-on-ice/`,
  // `/white-lightning/`,
  // `/white-peach-raspberry-salt/`,
  // `/white-peach-raspberry/`,
  // `/white-tiger/`,
  `/white-${splat}`,

  `/why-giant-vapes${splat}`,
  `/wild-cut${splat}`,

  // `/wismec-r80-pod/`,
  // `/wismec-r80/`,
  // `/wismec-reuleaux-tinker-2-kit/`,
  // `/wismec-reuleaux-tinker-2/`,
  // `/wismec-wt-mesh-coils`,
  // `/wismec-wv-coils/`,
  // `/wismec/`,
  `/wismec${splat}`,

  `/wonder-worm${splat}`,
  `/woody${splat}`,
  `/your-mom${splat}`
];

export default routesToCache;
