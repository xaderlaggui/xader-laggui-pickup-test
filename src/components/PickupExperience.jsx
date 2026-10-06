import PickupLocation from "./PickupLocation"
import pe, { temperatureOptions } from "./usePickupCart"
import * as _ from "react"
import * as D from "react/jsx-runtime"
import * as Ge from "react-dom"

var y = [`matcha`, `pistachio`, `apple iced tea`, `green apple`],
  b = [`strawberry`, `berry`, `lychee`, `peach`, `watermelon`, `ube`],
  ee = [
    `caramel`,
    `honey lemon`,
    `mango`,
    `brown sugar`,
    `milk tea`,
    `boba`,
    `vanilla`,
  ],
  te = [
    `chocolate`,
    `mocha`,
    `oreo`,
    `cacao`,
    `coffee jelly`,
    `biscoff`,
    `milo`,
  ]
function ne(e, t) {
  let n = e.toLowerCase()
  return t === `pastry`
    ? n.includes(`cookie`)
      ? `honey`
      : `cream`
    : y.some((e) => n.includes(e))
      ? `matcha`
      : b.some((e) => n.includes(e))
        ? `rose`
        : ee.some((e) => n.includes(e))
          ? `honey`
          : te.some((e) => n.includes(e))
            ? `cocoa`
            : `sage`
}
var re = [`matcha`, `sage`, `rose`, `honey`, `cocoa`, `cream`]
function x(e) {
  return [...e].sort(
    (e, t) =>
      re.indexOf(e.tone) - re.indexOf(t.tone) || e.name.localeCompare(t.name),
  )
}
var S = (e, t, n, r, i, a, o, s = `coffee`, c = !1) => ({
    id: e,
    name: t,
    price: n,
    image: r,
    tone: ne(t, s),
    description: a,
    detail: o,
    category: s,
    ...(c ? { isBestSeller: !0 } : {}),
  }),
  C = `/assets/products/`,
  ie = [
    S(
      1,
      `Latte`,
      75,
      C + `menu_Latte_1024x1024_61a8cb3af8_7f4a391cee.png`,
      `rose`,
      `Smooth espresso blended with fresh milk for a creamy, balanced cup.`,
      `Espresso · fresh milk`,
      `coffee`,
      !0,
    ),
    S(
      2,
      `Americano`,
      50,
      C + `menu_Americano_1024x1024_7b202158ec_6ec9c51f27.png`,
      `rose`,
      `Rich espresso with water. Also available hot.`,
      `Double espresso · water`,
      `coffee`,
      !0,
    ),
    S(
      3,
      `Black Coffee`,
      65,
      C + `menu_Espresso_1024x1024_09b90a600f_cea8ee9c4e.png`,
      `rose`,
      `Freshly brewed black coffee with a deep aroma and full-bodied finish.`,
      `Freshly brewed · hot`,
    ),
    S(
      4,
      `Kape Kastila`,
      75,
      C + `signatures_kape_kastila_52c8296c39_2b453f1af6.png`,
      `gold`,
      `Leche condensada with creamy milk and rich espresso. Also available hot.`,
      `Condensed milk · espresso`,
      `coffee`,
      !0,
    ),
    S(
      5,
      `Caramel Macchiato`,
      89,
      C + `signatures_caramel_macchiato_83ede1a994_123679384e.png`,
      `gold`,
      `Rich espresso with creamy milk and caramel, also available hot.`,
      `Espresso · caramel`,
      `coffee`,
      !0,
    ),
    S(
      6,
      `Pickup Crème Latte`,
      95,
      C + `signatures_creme_latte_9b2aaa6b4d_a5a0f7cad1.png`,
      `rose`,
      `A latte with caramelized custard crème and Crème Brûlée foam.`,
      `Espresso · crème`,
      `coffee`,
      !0,
    ),
    S(
      7,
      `White Mocha Latte`,
      89,
      C + `signatures_white_mocha_latte_5be6ab542b_29998d088f.png`,
      `rose`,
      `White chocolate with creamy milk and rich espresso, also available hot.`,
      `White chocolate · espresso`,
    ),
    S(
      8,
      `Cappuccino`,
      75,
      C + `menu_Capuccino_1024x1024_5f9eddf1a2_50d0058cfb.png`,
      `rose`,
      `Rich espresso with hot steamed milk and foam.`,
      `Espresso · steamed milk`,
    ),
    S(
      9,
      `Brown Sugar Latte`,
      79,
      C + `menu_Kape_Mestizo_1024x1024_48acf7699b_b3cac3d4a6.png`,
      `gold`,
      `Rich espresso with creamy milk and brown molasses syrup, also available hot.`,
      `Espresso · brown sugar`,
    ),
    S(
      10,
      `Sea Salt Biscoff Latte`,
      115,
      C + `Biscoff_Latte_5937c20daa_8add35fc0f.png`,
      `gold`,
      `Rich espresso with creamy milk, Biscoff cookie bits, and sea salt cream mousse.`,
      `Espresso · Biscoff`,
    ),
    S(
      11,
      `Sea Salt Latte`,
      89,
      C + `menu_Iced_Sea_Salt_Latte_1024x1024_7da7890cc3_f5ead4030e.png`,
      `rose`,
      `Rich espresso with creamy milk, topped with sea salt milk foam.`,
      `Espresso · sea salt foam`,
    ),
    S(
      12,
      `Vietnamese Latte`,
      79,
      C + `menu_Iced_Vietnamese_Latte_1024x1024_56c7d8a77c_d3469985e5.png`,
      `gold`,
      `A strong blend of rich espresso with leche condensada.`,
      `Espresso · condensed milk`,
    ),
    S(
      13,
      `Vanilla Latte`,
      85,
      C + `menu_Iced_Vanilla_1024x1024_daa87a6e40_1f40ffe646.png`,
      `rose`,
      `A velvety blend of creamy vanilla with milk and rich espresso.`,
      `Espresso · vanilla`,
    ),
    S(
      14,
      `Dark Chocolate Latte`,
      85,
      C + `menu_Dark_Choco_1024x1024_b1d658f966_e8d1e05576.png`,
      `gold`,
      `Dark chocolate with creamy milk and rich espresso, also available hot.`,
      `Espresso · dark chocolate`,
    ),
    S(
      15,
      `Flat White`,
      75,
      C + `Flat_White_cfe4c5ac4e_106dda3f74.png`,
      `rose`,
      `Rich espresso with hot steamed milk.`,
      `Espresso · steamed milk`,
    ),
    S(
      16,
      `Espresso`,
      30,
      C + `menu_Espresso_1024x1024_09b90a600f_cea8ee9c4e.png`,
      `rose`,
      `A double shot of rich espresso.`,
      `Double espresso`,
    ),
    S(
      17,
      `Hazelnut Latte`,
      95,
      C + `menu_Nutellate_1024x1024_6843d4394b_42828bca1c.png`,
      `gold`,
      `Rich espresso with creamy milk and Nutella, also available hot.`,
      `Espresso · hazelnut`,
    ),
    S(
      18,
      `Hot Pistachio Latte`,
      119,
      C +
        `menu_POS_APP_PICKAROO_PISTACHIO_AGGREG_ADDON_hotpistlatte_f0f92e3ece_594adc4375.png`,
      `gold`,
      `Hot steamed milk with rich pistachio and bold espresso.`,
      `Espresso · pistachio`,
    ),
    S(
      19,
      `Iced Pistachio Latte`,
      119,
      C +
        `menu_POS_APP_PICKAROO_PISTACHIO_AGGREG_ADDON_PIST_98a44b1fe9_670aaf4816.png`,
      `gold`,
      `Creamy milk with rich pistachio and bold espresso, over ice.`,
      `Espresso · pistachio`,
    ),
    S(
      20,
      `White Mocha Frappe`,
      109,
      C + `menu_GRAB_WHITE_MOCHA_FRAPPE_46bfc25d35_ed272154fc.png`,
      `rose`,
      `Rich espresso and white chocolate blended with creamy milk and ice.`,
      `Espresso · white chocolate`,
    ),
    S(
      21,
      `Kape Kastila Frappe`,
      99,
      C + `menu_GRAB_KK_Frappe_b4886a7378_27cdd5f07c.png`,
      `gold`,
      `Rich espresso and leche condensada blended with creamy milk and ice.`,
      `Espresso · condensed milk`,
    ),
    S(
      22,
      `Cafe Mocha Chip Frappe`,
      115,
      C + `menu_Mocha_Chip_Frappe_344a07d5c8_979b8fe804.png`,
      `gold`,
      `Rich espresso and dark chocolate blended with chocolate chips and creamy milk.`,
      `Espresso · chocolate`,
    ),
    S(
      23,
      `Brown Sugar Coffee Jelly Frappe`,
      129,
      C + `menu_GRAB_BROWN_SUGAR_COFFEE_JELLY_FRAPPE_aec2c90ecd_a87b8a7522.png`,
      `gold`,
      `Rich espresso, brown molasses syrup, creamy milk, and coffee jelly.`,
      `Espresso · coffee jelly`,
    ),
    S(
      24,
      `Caramel Frappe`,
      99,
      C + `menu_GRAB_Caramel_Frappe_b9c9aa01c7_9a5dc45b74.png`,
      `gold`,
      `Rich espresso and buttery caramel blended with creamy milk and ice.`,
      `Espresso · caramel`,
    ),
    S(
      25,
      `Protein Latte`,
      145,
      C + `protein_latte_ff35aad77d_6759b817f1.png`,
      `rose`,
      `Bold espresso with creamy milk and a boost of Wheyl protein, over ice.`,
      `Espresso · protein`,
    ),
    S(
      26,
      `Sugar-Free Sweet Americano`,
      59,
      C + `SF_Americano_1_d9d32845e0_4424b4fda8.png`,
      `rose`,
      `Rich espresso with water and sugar-free sweetener, over ice.`,
      `Espresso · sugar-free`,
    ),
    S(
      29,
      `Chocolate Croissant`,
      89,
      C + `menu_Choco_Croissant_1024x1024_1faa5601cd_58520d3c5a.png`,
      `gold`,
      `A flaky and buttery croissant, rolled with dark chocolate.`,
      `Pickup Bites · pastry`,
      `pastry`,
    ),
    S(
      30,
      `Classic Choco Cookie`,
      109,
      C + `menu_Classic_Choco_Cookie_1024x1024_762f9e6d87_245a08b622.png`,
      `gold`,
      `An indulgent cookie with dark chocolate chunks, seasoned with sea salt.`,
      `Pickup Bites · cookie`,
      `pastry`,
    ),
    S(
      31,
      `Classic Croissant`,
      80,
      C + `menu_Classic_Croissant_1024x1024_9392d51dd3_428d62c84e.png`,
      `gold`,
      `A flaky and buttery croissant.`,
      `Pickup Bites · pastry`,
      `pastry`,
    ),
    S(
      32,
      `Triple Chocolate Cookie`,
      119,
      C + `menu_GRAB_Triple_Chocolate_Cookie_2a350da939_74b4a14d12.png`,
      `gold`,
      `An indulgent chocolate cookie with white and dark chocolate chunks.`,
      `Pickup Bites · cookie`,
      `pastry`,
    ),
    S(
      33,
      `Oatmeal Cookie`,
      99,
      C + `menu_GRAB_Oatmeal_cookie_db0cbf9979_bb7604f960.png`,
      `gold`,
      `A chewy oatmeal cookie with a sprinkle of cinnamon.`,
      `Pickup Bites · cookie`,
      `pastry`,
    ),
  ],
  w = `https://d1r9lpkrafbxq0.cloudfront.net/strapi-cms-readable-media/`,
  ae = [
    {
      id: 101,
      name: `Iced Matcha`,
      detail: `Matcha · creamy milk`,
      description: `Matcha with creamy milk.`,
      price: 85,
      image: w + `menu_OG_Matcha_GRAB_098fd9b0ae_75bf40e246.png`,
      tone: `green`,
      category: `non-coffee`,
      isBestSeller: !0,
    },
    {
      id: 102,
      name: `White Chocolate Matcha`,
      detail: `Matcha · white chocolate`,
      description: `Matcha and white chocolate blended with creamy milk, also available hot.`,
      price: 99,
      image: w + `menu_White_Chocolate_Matcha_GRAB_0104a747e8_d5bcb4df2d.png`,
      tone: `green`,
      category: `non-coffee`,
    },
    {
      id: 103,
      name: `Strawberry Matcha`,
      detail: `Matcha · strawberry · milk`,
      description: `Matcha and strawberry with creamy milk.`,
      price: 95,
      image: w + `menu_Strawberry_Matcha_GRAB_772c5a7ada_770f6c1e69.png`,
      tone: `rose`,
      category: `non-coffee`,
    },
    {
      id: 104,
      name: `Sea Salt Cream Matcha`,
      detail: `Matcha · sea salt foam`,
      description: `Matcha with creamy milk, topped with sea salt milk foam, over ice.`,
      price: 99,
      image: w + `seasalt_matcha_3_45ff351e6a_286fc33949.png`,
      tone: `green`,
      category: `non-coffee`,
    },
    {
      id: 105,
      name: `Sea Salt Pistachio Milk`,
      detail: `Pistachio · sea salt foam`,
      description: `Creamy milk with rich pistachio, topped with sea salt milk foam.`,
      price: 119,
      image:
        w +
        `menu_POS_APP_PICKAROO_PISTACHIO_AGGREG_ADDON_SEASALT_PIST_5b0ea04249_9521d9b2a6.png`,
      tone: `green`,
      category: `non-coffee`,
    },
    {
      id: 106,
      name: `Classic Milk Tea`,
      detail: `Black tea · boba · milk`,
      description: `Creamy milk with black tea and boba pearls.`,
      price: 70,
      image: w + `menu_Classic_Milk_Tea_1024x1024_1cd80b5dbf_60e1cfea63.png`,
      tone: `gold`,
      category: `non-coffee`,
      isBestSeller: !0,
    },
    {
      id: 107,
      name: `Brown Sugar Boba Milk`,
      detail: `Brown sugar · boba · milk`,
      description: `Creamy milk, brown sugar and boba pearls, topped with cream mousse.`,
      price: 75,
      image:
        w + `menu_Brown_Sugar_Milk_NEW_1024x1024_32ffcbfbe9_a95fbafb6f.png`,
      tone: `gold`,
      category: `non-coffee`,
    },
    {
      id: 108,
      name: `Milosaurus`,
      detail: `Milo · milk · cream mousse`,
      description: `Milo with creamy milk and cream mousse.`,
      price: 79,
      image: w + `menu_Milosaurus_1024x1024_5c8f4c2e05_5c90bebe10.png`,
      tone: `gold`,
      category: `non-coffee`,
    },
    {
      id: 109,
      name: `Classic Chocolate Milk`,
      detail: `Chocolate · creamy milk`,
      description: `Creamy milk with rich chocolate, also available hot.`,
      price: 75,
      image: w + `menu_Dark_Mocha_1_1024x1024_5783d3890b_1486642915.png`,
      tone: `gold`,
      category: `non-coffee`,
      isBestSeller: !0,
    },
    {
      id: 110,
      name: `Iced Ube Milk`,
      detail: `Ube · creamy milk`,
      description: `Creamy milk with rich ube, also available hot.`,
      price: 75,
      image: w + `menu_Ube_1024x1024_94aac8b93f_ab529df5bc.png`,
      tone: `rose`,
      category: `non-coffee`,
    },
    {
      id: 111,
      name: `Apple Iced Tea`,
      detail: `Black tea · apple`,
      description: `Brewed black tea infused with a refreshing apple twist.`,
      price: 79,
      image: w + `menu_Green_Apple_Tea_1024x1024_df541fdcd7_f9b20a88d8.png`,
      tone: `green`,
      category: `non-coffee`,
    },
    {
      id: 112,
      name: `Peachy Iced Tea`,
      detail: `Black tea · peach`,
      description: `Brewed black tea infused with a refreshing peach twist.`,
      price: 79,
      image: w + `menu_Peach_Tea_1024x1024_b34bbb3484_9e78c4fe2f.png`,
      tone: `rose`,
      category: `non-coffee`,
    },
    {
      id: 113,
      name: `Mixed Berries Iced Tea`,
      detail: `Black tea · mixed berries`,
      description: `Brewed black tea infused with a refreshing mixed berries twist, over ice.`,
      price: 79,
      image: w + `Mixed_Berries_1727ef4044.png`,
      tone: `rose`,
      category: `non-coffee`,
    },
    {
      id: 114,
      name: `Lychee Iced Tea`,
      detail: `Black tea · lychee`,
      description: `Brewed black tea infused with a refreshing lychee twist.`,
      price: 79,
      image: w + `menu_Lychee_Tea_1024x1024_59620742e3_6f4b2e3713.png`,
      tone: `rose`,
      category: `non-coffee`,
    },
    {
      id: 115,
      name: `Honey Lemon Iced Tea`,
      detail: `Black tea · honey lemon`,
      description: `Brewed black tea infused with a refreshing honey lemon twist, over ice.`,
      price: 79,
      image:
        w + `strapi_cms_readable_media_2_Fhoneylemon_4787974bcd_eb227992ba.png`,
      tone: `gold`,
      category: `non-coffee`,
    },
    {
      id: 116,
      name: `Watermelon Craze Yogurt`,
      detail: `Yogurt · watermelon`,
      description: `A refreshing blend of yogurt and watermelon, over ice.`,
      price: 99,
      image:
        w + `menu_PICKUP_YOGURT_WATERMELON_1024x1024_88cea1dd85_38b8f1b326.png`,
      tone: `rose`,
      category: `non-coffee`,
    },
    {
      id: 117,
      name: `Mango Madness Yogurt`,
      detail: `Yogurt · mango`,
      description: `A tropical blend of yogurt and mango.`,
      price: 95,
      image:
        w +
        `menu_PICKUP_YOGURT_MANGOMADNESS_1024x1024_a9adf21a5a_3f197ac7b1.png`,
      tone: `gold`,
      category: `non-coffee`,
    },
    {
      id: 118,
      name: `Berry Blast Yogurt`,
      detail: `Yogurt · mixed berries`,
      description: `A berrylicious yogurt blend of blueberry, cranberry, pomegranate, and black currant.`,
      price: 99,
      image:
        w + `menu_PICKUP_YOGURT_BERRYBLAST_1024x1024_81739d951d_f2f55d64f9.png`,
      tone: `rose`,
      category: `non-coffee`,
    },
    {
      id: 119,
      name: `Matcha Frappe`,
      detail: `Matcha · milk · frappe`,
      description: `Pure matcha, ice-blended with creamy milk, topped with whipped cream.`,
      price: 115,
      image: w + `menu_Matcha_Frappe_a830e3dc35_16133ed6d0.png`,
      tone: `green`,
      category: `non-coffee`,
    },
    {
      id: 120,
      name: `Oreo Frappe`,
      detail: `Oreo · milk · frappe`,
      description: `Oreo, ice-blended with creamy milk, topped with whipped cream.`,
      price: 115,
      image: w + `OREO_FRAPPE_3_eec6f9afb1_c4954c8bd6.png`,
      tone: `gold`,
      category: `non-coffee`,
    },
  ].map((e) => ({ ...e, category: e.category, tone: ne(e.name, e.category) })),
  oe = x([...ie, ...ae]),
  se = (e) => (e === `Small` ? -10 : e === `Large` ? 10 : 0),
  ce = (e, t) => (e.category === `pastry` ? e.price : e.price + se(t)),
  le = (e, t) =>
    e.filter((e) => e.category !== `pastry`).reduce(
      (e, n) => e + (t[n.id] || 0),
      0,
    ),
  ue = (e) => Object.values(e).reduce((e, t) => e + t, 0),
  de = (e, t, n) =>
    e.reduce((e, r) => e + ce(r, n[r.id] || `Medium`) * (t[r.id] || 0), 0)
function T() {
  return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
}
function fe(e) {
  return T() ? 0 : e
}
function me() {
  let [e, t] = (0, _.useState)(!1),
    [n, r] = (0, _.useState)(!1),
    [i, a] = (0, _.useState)(``),
    o = (0, _.useRef)(null),
    menuScroll = _.useRef(0),
    s = (0, _.useRef)([]),
    c = (e, t) => s.current.push(setTimeout(e, t))
  return (
    (0, _.useEffect)(() => () => s.current.forEach(clearTimeout), []),
    {
      checkout: e,
      setCheckout: t,
      confirmed: n,
      setConfirmed: r,
      transition: i,
      setTransition: a,
      navigate: (e) => {
        if (e !== `menu`) menuScroll.current = window.scrollY
        a(`leaving`),
          c(() => {
            t(e !== `menu`),
              a(`entering-${e}`),
              o.current?.scrollTo({ top: 0, behavior: `smooth` }),
              window.scrollTo({
                top: e === `menu` ? menuScroll.current : 0,
                behavior: `instant`,
              }),
              requestAnimationFrame(() =>
                document
                  .getElementById(`main-content`)
                  ?.focus({ preventScroll: true }),
              ),
              c(() => a(``), fe(500))
          }, fe(200))
      },
      appRef: o,
      later: c,
    }
  )
}
function he() {
  let [e, t] = (0, _.useState)(!1),
    [n, r] = (0, _.useState)(!1),
    [i, a] = (0, _.useState)(!1),
    o = (0, _.useRef)(null),
    s = (0, _.useRef)(null)
  return (
    (0, _.useEffect)(() => {
      let e = () => {
        t(window.scrollY > 8),
          r((o.current?.getBoundingClientRect().bottom || 0) < 94)
      }
      return (
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      )
    }, []),
    (0, _.useEffect)(() => {
      if (!s.current) return
      let e = new IntersectionObserver(([e]) => a(e.isIntersecting), {
        threshold: 0,
      })
      return e.observe(s.current), () => e.disconnect()
    }, []),
    { scrolled: e, titleCollapsed: n, barHidden: i, heroRef: o, footerRef: s }
  )
}
function ge() {
  return (0, D.jsx)(`svg`, {
    className: `glass-refract-defs`,
    "aria-hidden": `true`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, D.jsx)(`defs`, {
      children: (0, D.jsxs)(`filter`, {
        id: `glass-refract`,
        x: `-10%`,
        y: `-10%`,
        width: `120%`,
        height: `120%`,
        children: [
          (0, D.jsx)(`feTurbulence`, {
            type: `turbulence`,
            baseFrequency: `0.015 0.012`,
            numOctaves: `2`,
            seed: `4`,
            result: `noise`,
          }),
          (0, D.jsx)(`feDisplacementMap`, {
            in: `SourceGraphic`,
            in2: `noise`,
            scale: `6`,
            xChannelSelector: `R`,
            yChannelSelector: `G`,
          }),
        ],
      }),
    }),
  })
}
function _e() {
  return (0, D.jsxs)(`svg`, {
    "aria-hidden": `true`,
    viewBox: `0 0 24 24`,
    children: [
      (0, D.jsx)(`circle`, { cx: `12`, cy: `12`, r: `4` }),
      (0, D.jsx)(`path`, {
        d: `M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42`,
      }),
    ],
  })
}
function ve() {
  return (0, D.jsx)(`svg`, {
    "aria-hidden": `true`,
    viewBox: `0 0 24 24`,
    children: (0, D.jsx)(`path`, {
      d: `M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z`,
    }),
  })
}
function ye() {
  return (0, D.jsx)(`svg`, {
    "aria-hidden": `true`,
    viewBox: `0 0 24 24`,
    children: (0, D.jsx)(`path`, { d: `m9 18 6-6-6-6` }),
  })
}
function be() {
  return (0, D.jsx)(`svg`, {
    "aria-hidden": `true`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2.5`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    children: (0, D.jsx)(`path`, { d: `m15 18-6-6 6-6` }),
  })
}
function xe() {
  return (0, D.jsx)(`svg`, {
    "aria-hidden": `true`,
    viewBox: `0 0 24 24`,
    children: (0, D.jsx)(`path`, { d: `m5 12.5 4.2 4L19 7` }),
  })
}
function Se() {
  return (0, D.jsxs)(`svg`, {
    "aria-hidden": `true`,
    viewBox: `0 0 24 24`,
    children: [
      (0, D.jsx)(`circle`, { cx: `9`, cy: `21`, r: `1` }),
      (0, D.jsx)(`circle`, { cx: `20`, cy: `21`, r: `1` }),
      (0, D.jsx)(`path`, {
        d: `M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6`,
      }),
    ],
  })
}
function O() {
  return (0, D.jsx)(`svg`, {
    "aria-hidden": `true`,
    viewBox: `0 0 24 24`,
    children: (0, D.jsx)(`path`, {
      d: `M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,
    }),
  })
}
function k({
  headerRef: e,
  checkout: t,
  darkMode: n,
  scrolled: r,
  titleCollapsed: i,
  itemCount: a,
  loading: o,
  onBack: s,
  onRestart: c,
  onCart: l,
  onTheme: u,
}) {
  return (0, D.jsx)(`header`, {
    ref: e,
    className: `top-header ${r ? `scrolled` : ``} ${
      i ? `title-collapsed` : ``
    }`,
    children: (0, D.jsxs)(`div`, {
      className: `header-inner`,
      style: t ? { display: `grid`, gridTemplateColumns: `1fr auto 1fr` } : {},
      children: [
        t &&
          (0, D.jsx)(`div`, {
            style: { display: `flex`, justifyContent: `flex-start` },
            children: (0, D.jsx)(`button`, {
              className: `back-button back-icon-only`,
              onClick: s,
              "aria-label": `Go back`,
              children: (0, D.jsx)(be, {}),
            }),
          }),
        (0, D.jsx)(`button`, {
          className: `wordmark`,
          onClick: c,
          type: `button`,
          style: t
            ? { textAlign: `center`, justifySelf: `center`, gridColumn: 2 }
            : {},
          children: t
            ? (0, D.jsxs)(D.Fragment, {
                children: [`COFFEE`, (0, D.jsx)(`br`, {}), `CHECKOUT`],
              })
            : (0, D.jsxs)(D.Fragment, {
                children: [`PICKUP`, (0, D.jsx)(`br`, {}), `COFFEE`],
              }),
        }),
        (0, D.jsxs)(`div`, {
          className: `header-actions`,
          style: t ? { justifySelf: `end`, gridColumn: 3 } : {},
          children: [
            a > 0 &&
              !t &&
              (0, D.jsx)(`button`, {
                className: `desktop-cart-button`,
                "aria-label": `View cart, ${a} ${a === 1 ? "item" : "items"}`,
                onClick: l,
                type: `button`,
                disabled: o,
                "aria-busy": o,
                children: o
                  ? (0, D.jsxs)(`span`, {
                      className: `loading-dots`,
                      children: [
                        (0, D.jsx)(`i`, {}),
                        (0, D.jsx)(`i`, {}),
                        (0, D.jsx)(`i`, {}),
                      ],
                    })
                  : (0, D.jsxs)(D.Fragment, {
                      children: [
                        (0, D.jsx)(Se, {}),
                        (0, D.jsx)(`span`, {
                          className: `cart-badge`,
                          children: a,
                        }),
                      ],
                    }),
              }),
            (0, D.jsxs)(`button`, {
              "aria-label": `Switch to ${n ? `light` : `dark`} mode`,
              className: `theme-toggle`,
              onClick: u,
              type: `button`,
              children: [
                (0, D.jsx)(`span`, {
                  className: `theme-icon ${n ? `visible` : `hidden-icon`}`,
                  children: (0, D.jsx)(_e, {}),
                }),
                (0, D.jsx)(`span`, {
                  className: `theme-icon ${n ? `hidden-icon` : `visible`}`,
                  children: (0, D.jsx)(ve, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
var Ce = (e) => `₱${e}`
function we({ value: e, ...t }) {
  return (0, D.jsx)(`span`, { ...t, children: Ce(e) })
}
function Te({ value: e }) {
  let t = (0, _.useRef)(e),
    n = t.current
  return (
    (0, _.useEffect)(() => {
      t.current = e
    }, [e]),
    (0, D.jsxs)(
      `span`,
      {
        className: `rolling-number`,
        "aria-label": String(e),
        children: [
          (0, D.jsx)(`span`, {
            className: `roll-old`,
            "aria-hidden": `true`,
            children: n,
          }),
          (0, D.jsx)(`span`, {
            className: `roll-new`,
            "aria-hidden": `true`,
            children: e,
          }),
        ],
      },
      e,
    )
  )
}
function Ee({ text: e }) {
  let t = (0, _.useRef)(e),
    n = t.current
  return (
    (0, _.useEffect)(() => {
      t.current = e
    }, [e]),
    (0, D.jsxs)(
      `span`,
      {
        className: `crossfade-text`,
        "aria-label": e,
        children: [
          (0, D.jsx)(`span`, {
            className: `crossfade-old`,
            "aria-hidden": `true`,
            children: n,
          }),
          (0, D.jsx)(`span`, {
            className: `crossfade-new`,
            "aria-hidden": `true`,
            children: e,
          }),
        ],
      },
      e,
    )
  )
}
function A({ value }) {
  return D.jsx(we, { value, className: "tabular" })
}
function j({
  footerRef: e,
  itemCount: t,
  cupCount: n,
  total: r,
  limit: i,
  barHidden: a,
  loading: o,
  onCheckout: s,
}) {
  return (0, D.jsxs)(D.Fragment, {
    children: [
      (0, D.jsx)(`footer`, {
        className: `app-footer`,
        ref: e,
        children: (0, D.jsxs)(`div`, {
          className: `footer-content`,
          children: [
            (0, D.jsx)(`div`, {
              className: `footer-col footer-logo-col`,
              children: (0, D.jsx)(`img`, {
                src: `/assets/footer/pickupcoffee-vertical.svg`,
                alt: `Pickup Coffee`,
                className: `footer-logo`,
              }),
            }),
            (0, D.jsxs)(`div`, {
              className: `footer-col footer-nav-col`,
              children: [
                (0, D.jsxs)(`nav`, {
                  className: `footer-socials`,
                  "aria-label": `Social media links`,
                  children: [
                    (0, D.jsx)(`a`, {
                      href: `https://x.com/pickupcoffeeph`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      "aria-label": `X (Twitter)`,
                      children: (0, D.jsx)(`img`, {
                        src: `/assets/footer/x.svg`,
                        alt: ``,
                      }),
                    }),
                    (0, D.jsx)(`a`, {
                      href: `https://www.instagram.com/pickupcoffeeph/`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      "aria-label": `Instagram`,
                      children: (0, D.jsx)(`img`, {
                        src: `/assets/footer/instagram.svg`,
                        alt: ``,
                      }),
                    }),
                    (0, D.jsx)(`a`, {
                      href: `https://www.youtube.com/@pickupcoffeeph`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      "aria-label": `YouTube`,
                      children: (0, D.jsx)(`img`, {
                        src: `/assets/footer/youtube.svg`,
                        alt: ``,
                      }),
                    }),
                    (0, D.jsx)(`a`, {
                      href: `https://www.tiktok.com/@pickupcoffee%20`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      "aria-label": `TikTok`,
                      children: (0, D.jsx)(`img`, {
                        src: `/assets/footer/tiktok.svg`,
                        alt: ``,
                      }),
                    }),
                  ],
                }),
                (0, D.jsxs)(`div`, {
                  className: `footer-copyright`,
                  children: [
                    (0, D.jsx)(`span`, {
                      className: `footer-copyright-c`,
                      children: `©`,
                    }),
                    (0, D.jsx)(`img`, {
                      src: `/assets/footer/pickupcoffee-horizontal.svg`,
                      alt: `Pickup Coffee`,
                      className: `footer-logo-horizontal`,
                    }),
                    (0, D.jsx)(`span`, {
                      className: `footer-copyright-text`,
                      children: `all rights reserved`,
                    }),
                  ],
                }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              className: `footer-col footer-news-col footer-news-col--desktop`,
              children: [
                (0, D.jsx)(`h3`, {
                  className: `footer-news-title`,
                  children: `XADER LAGGUI`,
                }),
                (0, D.jsx)(`p`, {
                  className: `footer-news-subtitle`,
                  children: `Aspiring Web Developer`,
                }),
                (0, D.jsx)(`button`, {
                  className: `footer-news-btn`,
                  onClick: () =>
                    window.open(`https://xaderlaggui.vercel.app`, `_blank`),
                  children: `My Portfolio`,
                }),
              ],
            }),
          ],
        }),
      }),
      t > 0 &&
        (0, D.jsx)(`aside`, {
          className: `order-bar active ${i ? `at-limit` : ``} ${
            a ? `bar-hidden` : ``
          }`,
          children: (0, D.jsxs)(`div`, {
            className: `order-bar-inner`,
            children: [
              (0, D.jsx)(`div`, {
                className: `cup-progress ${i ? `limit-shake` : ``}`,
                "aria-hidden": `true`,
                children: Array.from({ length: 5 }).map((e, t) =>
                  (0, D.jsx)(`i`, { className: t < n ? `filled` : `` }, t),
                ),
              }),
              (0, D.jsxs)(`div`, {
                className: `order-copy`,
                children: [
                  (0, D.jsx)(`span`, {
                    id: `order-bar-label`,
                    children: `YOUR ORDER`,
                  }),
                  (0, D.jsx)(`strong`, {
                    "aria-live": `polite`,
                    "aria-atomic": `true`,
                    children: i
                      ? `Max 5 cups`
                      : (0, D.jsxs)(D.Fragment, {
                          children: [
                            (0, D.jsx)(Te, { value: t }),
                            ` `,
                            t === 1 ? `item` : `items`,
                            ` · `,
                            (0, D.jsx)(A, { value: r }),
                          ],
                        }),
                  }),
                ],
              }),
              (0, D.jsxs)(`button`, {
                className: `checkout-button`,
                onClick: s,
                type: `button`,
                disabled: o,
                children: [
                  o
                    ? (0, D.jsxs)(`span`, {
                        className: `loading-dots`,
                        role: `status`,
                        children: [
                          (0, D.jsx)(`i`, {}),
                          (0, D.jsx)(`i`, {}),
                          (0, D.jsx)(`i`, {}),
                        ],
                      })
                    : (0, D.jsxs)(`span`, {
                        className: `price-crossfade`,
                        children: [`Checkout · `, (0, D.jsx)(A, { value: r })],
                      }),
                  (0, D.jsx)(ye, {}),
                ],
              }),
            ],
          }),
        }),
    ],
  })
}
function De({
  checkout: e,
  loading: t,
  total: n,
  pickupClosed: r,
  hasItems: i,
  onSubmit: a,
}) {
  return e
    ? (0, D.jsxs)(`div`, {
        className: `checkout-sticky-footer`,
        children: [
          (0, D.jsxs)(`div`, {
            className: `checkout-footer-total`,
            children: [
              (0, D.jsx)(`span`, {
                className: `checkout-footer-label`,
                children: `Total`,
              }),
              (0, D.jsx)(`strong`, {
                className: `checkout-footer-price`,
                children: (0, D.jsx)(A, { value: n }),
              }),
            ],
          }),
          (0, D.jsx)(`button`, {
            type: `button`,
            className: `primary-button`,
            onClick: a,
            disabled: t || r || !i,
            "aria-busy": t,
            children: t
              ? (0, D.jsxs)(`span`, {
                  className: `loading-dots`,
                  role: `status`,
                  children: [
                    (0, D.jsx)(`i`, {}),
                    (0, D.jsx)(`i`, {}),
                    (0, D.jsx)(`i`, {}),
                  ],
                })
              : `Review order`,
          }),
        ],
      })
    : null
}
function Oe({
  quantity: e,
  setQuantity: t,
  max: n,
  onLimit: r,
  unit: i = `items`,
}) {
  let a = (0, _.useCallback)(() => {
      e > 0 && t(e - 1)
    }, [e, t]),
    o = (0, _.useCallback)(() => {
      e < n ? t(e + 1) : r()
    }, [e, n, t, r])
  return (0, D.jsxs)(`div`, {
    className: `quantity-control`,
    children: [
      (0, D.jsx)(`button`, {
        type: `button`,
        "aria-label": `Decrease quantity`,
        onClick: a,
        disabled: e <= 0,
        children: `−`,
      }),
      (0, D.jsx)(`span`, {
        className: `tabular`,
        "aria-live": `polite`,
        "aria-label": `${e} ${i}`,
        children: e,
      }),
      (0, D.jsx)(`button`, {
        type: `button`,
        "aria-label": `Increase quantity`,
        onClick: o,
        disabled: e >= n,
        children: `+`,
      }),
    ],
  })
}
function ke({
  coffee: e,
  quantity: t,
  setQuantity: n,
  onClose: r,
  onAdd: i,
  max: a,
  existing: o,
  closing: s,
  onLimit: c,
  temp: l,
  setTemp: u,
  size: d,
  setSize: f,
  note: p,
  setNote: m,
}) {
  let h = e.category === `pastry`,
    g = h ? 0 : d === `Small` ? -10 : d === `Large` ? 10 : 0,
    v = e.price + g,
    allowedTemperatures = temperatureOptions(e)
  return (
    (0, _.useEffect)(() => {
      let e = (e) => {
        e.key === `Escape` && r()
      }
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      )
    }, [r]),
    (0, D.jsxs)(`div`, {
      className: `sheet-layer ${s ? `closing` : ``}`,
      role: `presentation`,
      children: [
        (0, D.jsx)(`div`, {
          "aria-hidden": `true`,
          className: `sheet-backdrop`,
        }),
        (0, D.jsxs)(`section`, {
          "aria-labelledby": `sheet-title`,
          "aria-modal": `true`,
          className: `bottom-sheet`,
          role: `dialog`,
          children: [
            (0, D.jsx)(`div`, {
              className: `sheet-header`,
              children: (0, D.jsx)(`button`, {
                "aria-label": `Close`,
                className: `close-button`,
                onClick: r,
                type: `button`,
                children: `×`,
              }),
            }),
            (0, D.jsxs)(`div`, {
              className: `sheet-content`,
              children: [
                (0, D.jsxs)(`div`, {
                  className: `sheet-left`,
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `sheet-visual ` + e.tone,
                      children: (0, D.jsx)(`img`, {
                        className: `sheet-hero-img`,
                        src: e.image,
                        alt: e.name + ` in a PICKUP COFFEE cup`,
                      }),
                    }),
                    (0, D.jsx)(`div`, {
                      className: `sheet-title`,
                      children: (0, D.jsxs)(`div`, {
                        children: [
                          (0, D.jsx)(`p`, { children: `FRESHLY MADE` }),
                          (0, D.jsx)(`h2`, {
                            id: `sheet-title`,
                            children: e.name,
                          }),
                        ],
                      }),
                    }),
                    (0, D.jsx)(`p`, {
                      className: `sheet-description`,
                      children: e.description,
                    }),
                  ],
                }),
                (0, D.jsxs)(`div`, {
                  className: `sheet-right`,
                  children: [
                    (0, D.jsxs)(`div`, {
                      className: `sheet-price`,
                      children: [
                        (0, D.jsx)(`span`, { children: `Price` }),
                        (0, D.jsx)(`strong`, {
                          className: `tabular`,
                          children: Ce(v),
                        }),
                      ],
                    }),
                    !h &&
                      (0, D.jsxs)(`div`, {
                        className: `size-row`,
                        children: [
                          (0, D.jsx)(`span`, { children: `Size` }),
                          (0, D.jsx)(`div`, {
                            className: `size-options`,
                            children: [`Small`, `Medium`, `Large`].map((e) =>
                              (0, D.jsx)(
                                `button`,
                                {
                                  type: `button`,
                                  className: d === e ? `selected` : ``,
                                  "aria-pressed": d === e,
                                  onClick: () => f(e),
                                  children:
                                    e +
                                    (e === `Small`
                                      ? ` (−₱10)`
                                      : e === `Large`
                                        ? ` (+₱10)`
                                        : ` (included)`),
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                    !h &&
                      (0, D.jsxs)(`div`, {
                        className: `temp-row`,
                        children: [
                          (0, D.jsx)(`span`, { children: `Temperature` }),
                          (0, D.jsxs)(`div`, {
                            className:
                              `segmented-control temp-toggle ` +
                              (l === `Hot` ? `tomorrow` : ``),
                            children: [
                              (0, D.jsx)(`div`, { className: `segment-pill` }),
                              (0, D.jsx)(`button`, {
                                type: `button`,
                                className: l === `Iced` ? `selected` : ``,
                                "aria-pressed": l === `Iced`,
                                disabled: !allowedTemperatures.includes(`Iced`),
                                onClick: () => u(`Iced`),
                                children: `Iced`,
                              }),
                              (0, D.jsx)(`button`, {
                                type: `button`,
                                className: l === `Hot` ? `selected` : ``,
                                "aria-pressed": l === `Hot`,
                                disabled: !allowedTemperatures.includes(`Hot`),
                                onClick: () => u(`Hot`),
                                children: `Hot`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, D.jsxs)(`div`, {
                      className: `quantity-row`,
                      children: [
                        (0, D.jsxs)(`div`, {
                          children: [
                            (0, D.jsx)(`span`, { children: `Quantity` }),
                            (0, D.jsx)(`small`, {
                              children: h
                                ? `Choose your order quantity`
                                : `Maximum 5 cups per order`,
                            }),
                          ],
                        }),
                        (0, D.jsx)(Oe, {
                          max: a,
                          quantity: t,
                          setQuantity: n,
                          onLimit: c,
                          unit: h ? `items` : `cups`,
                        }),
                      ],
                    }),
                    (0, D.jsxs)(`div`, {
                      className: `note-row`,
                      children: [
                        (0, D.jsx)(`label`, {
                          htmlFor: `drink-note`,
                          children: `Special Instructions (optional)`,
                        }),
                        (0, D.jsx)(`textarea`, {
                          id: `drink-note`,
                          className: `note-input`,
                          placeholder: `e.g. Less ice (requests subject to availability)`,
                          maxLength: 200,
                          value: p,
                          onChange: (e) => m(e.target.value),
                          rows: 2,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              className: `sheet-footer`,
              children: [
                (0, D.jsxs)(`div`, {
                  className: `sheet-total`,
                  children: [
                    (0, D.jsx)(`span`, { children: `Total Price` }),
                    (0, D.jsx)(`strong`, {
                      className: `tabular`,
                      children: Ce(v * t),
                    }),
                  ],
                }),
                (0, D.jsx)(`button`, {
                  className: `primary-button sheet-cta`,
                  "aria-busy": s,
                  disabled: s || (o === 0 && t === 0),
                  onClick: i,
                  type: `button`,
                  children: (0, D.jsx)(Ee, {
                    text:
                      t === 0
                        ? `Remove from order`
                        : o > 0
                          ? `Update order`
                          : `Add to cart`,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  )
}
function Ae({
  coffee: e,
  max: t,
  existing: n,
  closing: r,
  onLimit: i,
  onAdd: a,
  onClose: o,
  quantity: s,
  setQuantity: c,
  temp: l,
  setTemp: u,
  size: d,
  setSize: f,
  note: p,
  setNote: m,
}) {
  return e
    ? (0, D.jsx)(ke, {
        coffee: e,
        max: t,
        existing: n,
        closing: r,
        onLimit: i,
        onAdd: a,
        onClose: o,
        quantity: s,
        setQuantity: c,
        temp: l,
        setTemp: u,
        size: d,
        setSize: f,
        note: p,
        setNote: m,
      })
    : null
}
var je = [
  {
    name: `Ynah`,
    rating: 5,
    text: `Consistently delicious drinks with balanced flavor and fast service.`,
  },
  {
    name: `Karl C.`,
    rating: 5,
    text: `Strong coffee that is always made just right.`,
  },
  {
    name: `Brendalie`,
    rating: 5,
    text: `Friendly baristas and delicious coffee.`,
  },
  {
    name: `Ina Tiongson`,
    rating: 4,
    text: `Affordable coffee and teas that are easy to enjoy.`,
  },
]
function Me({ review: e, duplicate: t = !1 }) {
  return (0, D.jsxs)(`article`, {
    className: `review-card`,
    "aria-hidden": t || void 0,
    children: [
      (0, D.jsxs)(`div`, {
        className: `review-stars`,
        "aria-label": `${e.rating} out of 5 stars`,
        children: [`★`.repeat(e.rating), `☆`.repeat(5 - e.rating)],
      }),
      (0, D.jsxs)(`p`, { children: [`“`, e.text, `”`] }),
      (0, D.jsx)(`strong`, { children: e.name }),
    ],
  })
}
function Ne() {
  return (0, D.jsxs)(`section`, {
    className: `review-strip`,
    "aria-labelledby": `review-strip-title`,
    children: [
      (0, D.jsxs)(`div`, {
        className: `review-strip-heading`,
        children: [
          (0, D.jsx)(`p`, { className: `eyebrow`, children: `CUSTOMER LOVE` }),
          (0, D.jsx)(`h2`, {
            id: `review-strip-title`,
            children: `Made for your everyday pickup.`,
          }),
        ],
      }),
      (0, D.jsx)(`div`, {
        className: `review-strip-window`,
        children: (0, D.jsxs)(`div`, {
          className: `review-strip-track`,
          children: [
            je.map((e) => (0, D.jsx)(Me, { review: e }, e.name)),
            je.map((e) =>
              (0, D.jsx)(
                Me,
                { review: e, duplicate: !0 },
                `duplicate-${e.name}`,
              ),
            ),
          ],
        }),
      }),
    ],
  })
}
var Pe = 4500
function Fe({ menuRef: e, heroRef: t, products: n }) {
  let [r, i] = (0, _.useState)(1),
    [a, o] = (0, _.useState)(!0),
    s = (0, _.useMemo)(() => n.filter((e) => e.isBestSeller).slice(0, 6), [n]),
    c = s.length > 1 ? [s[s.length - 1], ...s, s[0]] : s,
    l = s[s.length ? (r - 1 + s.length) % s.length : 0]
  ;(0, _.useEffect)(() => {
    if (s.length < 2 || T()) return
    let e,
      t = () => {
        e = window.setInterval(() => i((e) => e + 1), Pe)
      },
      n = () => {
        e !== void 0 && window.clearInterval(e)
      },
      r = () => {
        n(), document.hidden || t()
      }
    return (
      document.hidden || t(),
      document.addEventListener(`visibilitychange`, r),
      () => {
        n(), document.removeEventListener(`visibilitychange`, r)
      }
    )
  }, [s.length])
  let u = () => {
      r === c.length - 1
        ? (o(!1), i(1), requestAnimationFrame(() => o(!0)))
        : r === 0 && (o(!1), i(s.length), requestAnimationFrame(() => o(!0)))
    },
    d = (0, _.useCallback)(
      () =>
        e.current?.scrollIntoView({
          behavior: T() ? `instant` : `smooth`,
          block: `start`,
        }),
      [e],
    )
  return (0, D.jsxs)(`section`, {
    ref: t,
    className: `company-hero`,
    "aria-labelledby": `company-hero-title`,
    children: [
      (0, D.jsxs)(`div`, {
        className: `company-hero-copy`,
        children: [
          (0, D.jsx)(`h1`, {
            id: `company-hero-title`,
            children: `Premium coffee, made for every day.`,
          }),
          (0, D.jsx)(`p`, {
            className: `hero-subtitle`,
            children: `Fast, delicious, high-quality drinks and bites, ready when you are.`,
          }),
          (0, D.jsxs)(`div`, {
            className: `hero-highlights`,
            "aria-label": `Pickup Coffee offerings`,
            children: [
              (0, D.jsx)(`span`, { children: `Coffee` }),
              (0, D.jsx)(`span`, { children: `Non-coffee` }),
              (0, D.jsx)(`span`, { children: `Pickup Bites` }),
            ],
          }),
          (0, D.jsx)(`button`, {
            className: `primary-button company-hero-cta`,
            type: `button`,
            onClick: d,
            children: `Order Here`,
          }),
        ],
      }),
      (0, D.jsx)(`div`, {
        className: `company-hero-visual`,
        role: `group`,
        "aria-label": `Featured product: ${l?.name || `Pickup Coffee`}`,
        children: (0, D.jsxs)(`div`, {
          className: `hero-flip-inner`,
          children: [
            (0, D.jsxs)(`div`, {
              className: `hero-flip-front`,
              children: [
                (0, D.jsx)(`div`, {
                  className: `company-hero-orbit orbit-one`,
                }),
                (0, D.jsx)(`div`, {
                  className: `company-hero-orbit orbit-two`,
                }),
                (0, D.jsx)(`div`, {
                  className: `hero-carousel-viewport`,
                  onTransitionEnd: u,
                  children: (0, D.jsx)(`div`, {
                    className: `hero-carousel-track`,
                    style: {
                      transform: `translate3d(-${r * 100}%, 0, 0)`,
                      transition: a
                        ? `transform 520ms cubic-bezier(.72,0,.24,1)`
                        : `none`,
                    },
                    children: c.map((e, t) =>
                      (0, D.jsx)(
                        `div`,
                        {
                          className: `hero-carousel-slide`,
                          children: (0, D.jsx)(`img`, {
                            className: `company-hero-cup`,
                            src: e.image,
                            alt: e.name,
                            draggable: `false`,
                          }),
                        },
                        `${e.id}-${t}`,
                      ),
                    ),
                  }),
                }),
                (0, D.jsx)(`div`, {
                  className: `hero-featured-badge`,
                  "aria-hidden": `true`,
                  children: `★ Featured product`,
                }),
                l &&
                  (0, D.jsx)(we, {
                    className: `hero-product-price`,
                    value: l.price,
                  }),
                (0, D.jsx)(`div`, {
                  className: `hero-product-label`,
                  "aria-live": `polite`,
                  children: (0, D.jsx)(`strong`, {
                    children: l?.name || `Pickup Coffee`,
                  }),
                }),
              ],
            }),
            l &&
              (0, D.jsxs)(`div`, {
                className: `hero-flip-back`,
                children: [
                  (0, D.jsx)(`span`, {
                    className: `eyebrow`,
                    children: `Featured today`,
                  }),
                  (0, D.jsx)(`strong`, { children: l.name }),
                  (0, D.jsx)(`p`, { children: l.description }),
                  (0, D.jsx)(we, { className: `price`, value: l.price }),
                ],
              }),
          ],
        }),
      }),
      (0, D.jsx)(Ne, {}),
    ],
  })
}
var Ie = [
  { id: `best-sellers`, label: `Best Sellers` },
  { id: `coffee`, label: `Coffee` },
  { id: `non-coffee`, label: `Non-Coffee` },
  { id: `pastry`, label: `Pastry` },
]
function Le({ active: e, onChange: t }) {
  return (0, D.jsx)(`div`, {
    className: `menu-filters`,
    "aria-label": `Product categories`,
    role: `tablist`,
    children: Ie.map((n) =>
      (0, D.jsx)(
        `button`,
        {
          className: e === n.id ? `active` : ``,
          type: `button`,
          role: `tab`,
          id: `category-${n.id}`,
          tabIndex: e === n.id ? 0 : -1,
          "aria-controls": `product-panel`,
          onKeyDown: (event) => {
            const index = Ie.findIndex((category) => category.id === e)
            let next = index
            if (event.key === "ArrowRight") next = (index + 1) % Ie.length
            else if (event.key === "ArrowLeft")
              next = (index + Ie.length - 1) % Ie.length
            else if (event.key === "Home") next = 0
            else if (event.key === "End") next = Ie.length - 1
            else return
            event.preventDefault()
            t(Ie[next].id)
            document.getElementById(`category-${Ie[next].id}`)?.focus()
          },
          "aria-selected": e === n.id,
          onClick: () => t(n.id),
          children: n.label,
        },
        n.id,
      ),
    ),
  })
}
var Re = {
  29: `Flaky pastry · dark chocolate`,
  30: `Dark chocolate · sea salt`,
  31: `Flaky · buttery`,
  32: `Dark & white chocolate`,
  33: `Oats · cinnamon`,
}
function ze({ coffee: e, quantity: t, onAdd: n, index: r = 0 }) {
  let i =
      e.category === `pastry`
        ? `PICKUP BITES`
        : e.category === `non-coffee`
          ? `NON-COFFEE`
          : `COFFEE`,
    a = Re[e.id] || e.detail
  return (0, D.jsxs)(`article`, {
    className: `coffee-card ${e.tone} relative`,
    style: { animationDelay: `${Math.min(r, 12) * 55}ms` },
    children: [
      (0, D.jsx)(`button`, {
        type: `button`,
        className: `card-hitbox`,
        "aria-label": `${
          t ? `Edit ${t} in cart` : `Customize`
        } ${e.name}, from ₱${e.price}`,
        onClick: n,
      }),
      t > 0 &&
        (0, D.jsx)(
          `span`,
          { className: `count-badge tabular`, children: t },
          t,
        ),
      (0, D.jsx)(`div`, {
        className: `product-visual`,
        children: (0, D.jsx)(`img`, {
          src: e.image,
          alt: `${e.name} in a PICKUP COFFEE cup`,
          loading: `lazy`,
          decoding: `async`,
          width: `240`,
          height: `240`,
        }),
      }),
      (0, D.jsxs)(`div`, {
        className: `card-preview`,
        "aria-hidden": `true`,
        children: [
          (0, D.jsx)(`img`, { src: e.image, alt: `` }),
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(`p`, { children: i }),
              (0, D.jsx)(`strong`, { children: e.name }),
              (0, D.jsx)(`span`, {
                className: `product-card-summary`,
                children: a,
              }),
              (0, D.jsx)(we, { className: `price`, value: e.price }),
            ],
          }),
        ],
      }),
      (0, D.jsxs)(`div`, {
        className: `card-copy`,
        children: [
          (0, D.jsx)(`p`, { className: `product-detail`, children: e.detail }),
          (0, D.jsx)(`h3`, { children: e.name }),
          (0, D.jsxs)(`div`, {
            className: `price-row`,
            children: [
              (0, D.jsx)(we, { value: e.price }),
              (0, D.jsxs)(`button`, {
                className: `add-button`,
                "aria-label": `${t ? `Edit` : `Customize and add`} ${e.name}`,
                onClick: n,
                type: `button`,
                children: [
                  (0, D.jsx)(`span`, { "aria-hidden": `true`, children: `+` }),
                  t ? ` Edit` : ` Add`,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function Be({ products: e, cart: t, onAdd: n, animationSeed: r = 0 }) {
  return (0, D.jsx)(`div`, {
    className: `coffee-grid`,
    "aria-live": `polite`,
    children: e.map((e, i) =>
      (0, D.jsx)(
        ze,
        { coffee: e, index: i, onAdd: () => n(e), quantity: t[e.id] || 0 },
        `${e.id}-${r}`,
      ),
    ),
  })
}
var Ve = {
  "best-sellers": {
    title: `Our best sellers`,
    subtitle: `Customer favorites, freshly made`,
  },
  coffee: { title: `Coffee`, subtitle: `Espresso, lattes, and signature cups` },
  "non-coffee": {
    title: `Non-coffee`,
    subtitle: `Matcha, tea, milk, and yogurt drinks`,
  },
  pastry: {
    title: `Pastries`,
    subtitle: `Fresh Pickup Bites to pair with your drink`,
  },
}
function He({ products: e, cart: t, onAdd: n, menuRef: r }) {
  let [i, a] = (0, _.useState)(`best-sellers`),
    [o, s] = (0, _.useState)(0),
    c = (0, _.useMemo)(
      () =>
        i === `best-sellers`
          ? e.filter((e) => e.isBestSeller)
          : e.filter((e) => e.category === i),
      [i, e],
    ),
    l = Ve[i]
  return (0, D.jsxs)(`section`, {
    ref: r,
    className: `menu-section`,
    id: `menu`,
    "aria-labelledby": `menu-title`,
    children: [
      (0, D.jsxs)(`div`, {
        className: `menu-heading`,
        children: [
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(`p`, {
                className: `eyebrow`,
                children: `ORDER ONLINE`,
              }),
              (0, D.jsx)(`h2`, { id: `menu-title`, children: l.title }),
            ],
          }),
          (0, D.jsx)(`span`, { children: l.subtitle }),
        ],
      }),
      (0, D.jsx)(Le, {
        active: i,
        onChange: (e) => {
          a(e), s((e) => e + 1)
        },
      }),
      (0, D.jsx)(`div`, {
        id: `product-panel`,
        role: `tabpanel`,
        "aria-labelledby": `category-${i}`,
        children: (0, D.jsx)(Be, {
          products: c,
          cart: t,
          onAdd: n,
          animationSeed: o,
        }),
      }),
    ],
  })
}
function Ue({
  coffees: e,
  cart: t,
  cartTemps: n,
  cartSizes: r,
  cartNotes: i,
  cupCount: a,
  itemCount: o,
  total: s,
  swipedItem: c,
  setSwipedItem: l,
  removeItem: u,
  updateQuantity: d,
  itemPrice: f,
  onEdit,
  onBrowse,
}) {
  let p = e.filter((e) => t[e.id] > 0)
  return (0, D.jsxs)(`section`, {
    className: `cart-section`,
    children: [
      (0, D.jsx)(`div`, {
        className: `cart-scroll-area`,
        children: (0, D.jsx)(`div`, {
          className: `cart-items-list`,
          children:
            p.length === 0
              ? (0, D.jsx)(`p`, {
                  className: `cart-empty-message`,
                  role: `status`,
                  children: (0, D.jsxs)(D.Fragment, {
                    children: [
                      `Your cart is empty. Add a drink or bite to start your order.`,
                      (0, D.jsx)(`button`, {
                        type: `button`,
                        className: `schedule-edit-button`,
                        onClick: onBrowse,
                        children: `Browse menu`,
                      }),
                    ],
                  }),
                })
              : p.map((e) => {
                  let o = t[e.id],
                    s = c === e.id
                  return (0, D.jsxs)(
                    `div`,
                    {
                      className: `cart-list-item-wrap ${s ? `swiped` : ``}`,
                      onTouchStart: (e) => {
                        window.matchMedia(`(min-width: 900px)`).matches ||
                          (e.currentTarget.dataset.touchX = String(
                            e.touches[0].clientX,
                          ))
                      },
                      onTouchEnd: (t) => {
                        if (window.matchMedia(`(min-width: 900px)`).matches)
                          return
                        let n =
                          Number(t.currentTarget.dataset.touchX || 0) -
                          t.changedTouches[0].clientX
                        n > 60 && l(e.id), n < -30 && l(null)
                      },
                      children: [
                        (0, D.jsxs)(`button`, {
                          className: `swipe-delete-btn`,
                          type: `button`,
                          onClick: () => {
                            u(e.id), l(null)
                          },
                          "aria-label": `Remove item`,
                          children: [(0, D.jsx)(O, {}), `Remove`],
                        }),
                        (0, D.jsxs)(`div`, {
                          className: `cart-list-item glass-regular`,
                          children: [
                            (0, D.jsx)(`img`, {
                              src: e.image,
                              alt: e.name,
                              className: `cart-item-img`,
                            }),
                            (0, D.jsxs)(`div`, {
                              className: `cart-item-details`,
                              children: [
                                (0, D.jsx)(`h3`, { children: e.name }),
                                (0, D.jsx)(`button`, {
                                  type: `button`,
                                  className: `cart-edit-button`,
                                  onClick: () => onEdit(e),
                                  "aria-label": `Edit ${e.name}`,
                                  children: `Edit options`,
                                }),
                                (0, D.jsxs)(`p`, {
                                  className: `cart-item-meta`,
                                  children: [
                                    e.category === `pastry`
                                      ? `Pastry`
                                      : (n[e.id] || `Iced`) +
                                        ` · ` +
                                        (r[e.id] || `Medium`),
                                    i[e.id] &&
                                      (0, D.jsxs)(`span`, {
                                        children: [` · `, i[e.id]],
                                      }),
                                  ],
                                }),
                                (0, D.jsx)(`p`, {
                                  className: `cart-item-price`,
                                  children: (0, D.jsx)(we, {
                                    value: f(e, r[e.id] || `Medium`) * o,
                                  }),
                                }),
                              ],
                            }),
                            (0, D.jsx)(`div`, {
                              className: `cart-item-actions`,
                              children: (0, D.jsxs)(`div`, {
                                className: `quantity-adjuster`,
                                children: [
                                  (0, D.jsx)(`button`, {
                                    type: `button`,
                                    className: o === 1 ? `qty-trash` : ``,
                                    onClick: () =>
                                      o === 1 ? u(e.id) : d(e.id, -1),
                                    "aria-label":
                                      o === 1
                                        ? `Remove ${e.name}`
                                        : `Decrease quantity of ${e.name}`,
                                    children: o === 1 ? (0, D.jsx)(O, {}) : `-`,
                                  }),
                                  (0, D.jsx)(`span`, { children: o }),
                                  (0, D.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => d(e.id, 1),
                                    disabled:
                                      (e.category !== `pastry` && a >= 5) ||
                                      o >= 99,
                                    "aria-label": `Increase quantity of ${e.name}`,
                                    children: `+`,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  )
                }),
        }),
      }),
      (0, D.jsxs)(`div`, {
        className: `cart-total-sticky cart-breakdown-row cart-breakdown-total`,
        children: [
          (0, D.jsxs)(`span`, {
            children: [`Total (`, o, ` `, o === 1 ? `item` : `items`, `)`],
          }),
          (0, D.jsx)(`span`, { children: (0, D.jsx)(A, { value: s }) }),
        ],
      }),
    ],
  })
}
function We({ products: e, cart: t, onAdd: n }) {
  let r = e.filter((e) => e.category === `pastry`).slice(0, 5)
  return (0, D.jsxs)(`section`, {
    className: `pair-with-section`,
    "aria-labelledby": `pair-with-title`,
    children: [
      (0, D.jsx)(`h2`, { id: `pair-with-title`, children: `Pair it with` }),
      (0, D.jsx)(`div`, {
        className: `pair-with-list`,
        children: r.map((e) =>
          (0, D.jsxs)(
            `article`,
            {
              className: `pair-with-item`,
              children: [
                (0, D.jsx)(`img`, {
                  src: e.image,
                  alt: ``,
                  loading: `lazy`,
                  decoding: `async`,
                }),
                (0, D.jsx)(`strong`, { children: e.name }),
                (0, D.jsxs)(`div`, {
                  className: `pair-with-action`,
                  children: [
                    (0, D.jsx)(we, { value: e.price }),
                    (0, D.jsx)(`button`, {
                      type: `button`,
                      onClick: () => n(e),
                      "aria-label": `Add ${e.name} to your order${
                        t[e.id] ? `, currently ${t[e.id]} in cart` : ``
                      }`,
                      children: `Add`,
                    }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
    ],
  })
}
var Ke = 44,
  qe = 5
function Je(e, t, n) {
  return Math.max(t, Math.min(n, e))
}
function Ye({
  items: e,
  selectedIndex: t,
  onChange: n,
  label: r,
  disabled: i,
}) {
  let a = (e) => Math.floor(qe / 2) * Ke - e * Ke,
    o = (0, _.useRef)(null),
    [s, c] = (0, _.useState)(t),
    l = (0, _.useRef)(a(t))
  ;(0, _.useEffect)(() => {
    let e = a(t)
    ;(l.current = e),
      o.current &&
        ((o.current.style.transition = `none`),
        (o.current.style.transform = `translateY(${e}px)`)),
      c(t)
  }, [t])
  let u = (0, _.useRef)({
      active: !1,
      startClientY: 0,
      startOffset: 0,
      lastClientY: 0,
      lastTime: 0,
      velocity: 0,
    }),
    d = (e, t = !1) => {
      o.current &&
        ((o.current.style.transition = t
          ? `transform 400ms var(--spring-snappy)`
          : `none`),
        (o.current.style.transform = `translateY(${e}px)`))
    },
    f = (t) =>
      Je(Math.round((Math.floor(qe / 2) * Ke - t) / Ke), 0, e.length - 1),
    p = (0, _.useCallback)(
      (e) => {
        if (i) return
        let t = u.current
        ;(t.active = !0),
          (t.startClientY = e),
          (t.startOffset = l.current),
          (t.lastClientY = e),
          (t.lastTime = performance.now()),
          (t.velocity = 0),
          d(l.current)
      },
      [i],
    ),
    m = (0, _.useCallback)(
      (t) => {
        let n = u.current
        if (!n.active) return
        let r = performance.now(),
          i = r - n.lastTime
        i > 0 && (n.velocity = (t - n.lastClientY) / i),
          (n.lastClientY = t),
          (n.lastTime = r)
        let o = n.startOffset + (t - n.startClientY),
          s = a(0),
          l = a(e.length - 1)
        o > s && (o = s + (o - s) * 0.25),
          o < l && (o = l + (o - l) * 0.25),
          d(o),
          c(f(o))
      },
      [e.length],
    ),
    h = (0, _.useCallback)(() => {
      let t = u.current
      if (!t.active) return
      t.active = !1
      let r = o.current
      if (!r) return
      let i =
          new DOMMatrix(getComputedStyle(r).transform).m42 + t.velocity * 80,
        s = a(0),
        p = Je(i, a(e.length - 1), s),
        m = f(p),
        h = a(m)
      ;(l.current = h), d(h, !0), c(m), n(m)
    }, [e.length, n])
  return (0, D.jsxs)(`div`, {
    className: `wheel-drum`,
    role: `listbox`,
    tabIndex: i ? -1 : 0,
    "aria-disabled": !!i,
    "aria-activedescendant": `wheel-${r.replaceAll(" ", "-")}-${t}`,
    onKeyDown: (event) => {
      if (i) return
      const offsets = { ArrowDown: 1, ArrowUp: -1 }
      if (event.key in offsets || event.key === "Home" || event.key === "End") {
        event.preventDefault()
        n(
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? e.length - 1
              : Je(t + offsets[event.key], 0, e.length - 1),
        )
      }
    },
    "aria-label": r,
    onTouchStart: (e) => p(e.touches[0].clientY),
    onTouchMove: (e) => {
      e.preventDefault(), m(e.touches[0].clientY)
    },
    onTouchEnd: h,
    onPointerDown: (e) => {
      e.currentTarget.setPointerCapture(e.pointerId), p(e.clientY)
    },
    onPointerMove: (e) => {
      u.current.active && m(e.clientY)
    },
    onPointerUp: h,
    onPointerCancel: h,
    style: {
      touchAction: `none`,
      cursor: i ? `not-allowed` : `grab`,
      opacity: i ? 0.4 : 1,
      transition: `opacity 200ms`,
    },
    children: [
      (0, D.jsx)(`div`, {
        ref: o,
        className: `wheel-track`,
        children: e.map((e, n) => {
          let distance = Math.abs(n - s)
          return (0, D.jsx)(
            `div`,
            {
              role: `option`,
              id: `wheel-${r.replaceAll(" ", "-")}-${n}`,
              "aria-selected": n === t,
              className: `wheel-row${n === s ? ` wheel-row-selected` : ``}`,
              style: {
                opacity:
                  distance === 0
                    ? 1
                    : distance === 1
                      ? 0.52
                      : distance === 2
                        ? 0.28
                        : 0.12,
                transform: `scale(${
                  distance === 0
                    ? 1
                    : distance === 1
                      ? 0.88
                      : distance === 2
                        ? 0.76
                        : 0.65
                })`,
              },
              children: e,
            },
            e,
          )
        }),
      }),
      (0, D.jsx)(`div`, { className: `wheel-band`, "aria-hidden": `true` }),
      (0, D.jsx)(`div`, { className: `wheel-fade-top`, "aria-hidden": `true` }),
      (0, D.jsx)(`div`, {
        className: `wheel-fade-bottom`,
        "aria-hidden": `true`,
      }),
    ],
  })
}
function Xe(e) {
  let t = [],
    n = new Date()
  for (let r = 8; r <= 18; r++)
    for (let i = 0; i < 60; i += 15) {
      if (
        (r === 18 && i > 0) ||
        (e && (n.getHours() > r || (n.getHours() === r && n.getMinutes() >= i)))
      )
        continue
      let a = r >= 12 ? `PM` : `AM`,
        o = r > 12 ? r - 12 : r === 0 ? 12 : r
      t.push(`${o}:${i.toString().padStart(2, `0`)} ${a}`)
    }
  return t.length > 0 ? t : [`Closed`]
}
var Ze = [`Today`, `Tomorrow`],
  Qe = `ASAP`
function $e({ day: e, time: t }) {
  let n =
    t === `Closed`
      ? `Pickup is closed for today. Choose Tomorrow to place your order.`
      : t === Qe
        ? `We'll start preparing your order as soon as it arrives.`
        : `Ready by ${t} — ${e}.`
  return (0, D.jsxs)(`p`, {
    className: `pickup-ready-note`,
    role: `note`,
    children: [
      (0, D.jsx)(`span`, {
        className: `pickup-ready-icon`,
        "aria-hidden": `true`,
        children: `?`,
      }),
      (0, D.jsx)(`span`, { children: n }),
    ],
  })
}
function et({ day: e, setDay: t, time: n, setTime: r, darkMode: i }) {
  let [a, o] = (0, _.useState)(!1),
    s = Xe(e === `Today`),
    c = e === `Today` && s[0] === `Closed`,
    l = c ? [`Closed`] : e === `Today` ? [Qe, ...s] : s,
    u = c ? `Closed` : n || (e === `Today` ? Qe : l[0])
  ;(0, _.useEffect)(() => {
    c ? n !== `Closed` && r(`Closed`) : l.includes(n) || r(l[0])
  }, [l, n, r, c])
  let d = Ze.indexOf(e),
    f = Math.max(0, l.indexOf(n)),
    p = (e) => {
      let i = Ze[e]
      t(i),
        i === `Today`
          ? r(Xe(!0)[0] === `Closed` ? `Closed` : Qe)
          : (n === Qe || n === `Closed`) && r(Xe(!1)[0])
    }
  return (
    (0, _.useEffect)(() => {
      if (!a) return
      let e = (e) => {
          e.key === `Escape` && o(!1)
        },
        t = document.body.style.overflow
      return (
        (document.body.style.overflow = `hidden`),
        window.addEventListener(`keydown`, e),
        () => {
          ;(document.body.style.overflow = t),
            window.removeEventListener(`keydown`, e)
        }
      )
    }, [a]),
    (0, D.jsxs)(`section`, {
      className: `schedule-section`,
      children: [
        (0, D.jsxs)(`div`, {
          className: `section-heading`,
          children: [
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`p`, { className: `eyebrow`, children: `PICK UP` }),
                (0, D.jsx)(`h2`, { children: `Schedule` }),
              ],
            }),
            (0, D.jsx)(`button`, {
              className: `schedule-edit-button`,
              type: `button`,
              "aria-haspopup": `dialog`,
              "aria-expanded": a,
              onClick: () => o(!0),
              children: `Edit`,
            }),
          ],
        }),
        (0, D.jsxs)(`div`, {
          className: `schedule-summary`,
          "aria-live": `polite`,
          children: [
            (0, D.jsx)(`span`, { children: e }),
            (0, D.jsx)(`strong`, { children: u }),
          ],
        }),
        a &&
          (0, Ge.createPortal)(
            (0, D.jsx)(`div`, {
              className: `schedule-dialog-backdrop${i ? ` dark` : ``}`,
              onMouseDown: (e) => {
                e.target === e.currentTarget && o(!1)
              },
              children: (0, D.jsxs)(`section`, {
                className: `schedule-dialog`,
                role: `dialog`,
                "aria-modal": `true`,
                "aria-labelledby": `schedule-dialog-title`,
                children: [
                  (0, D.jsxs)(`div`, {
                    className: `schedule-dialog-heading`,
                    children: [
                      (0, D.jsxs)(`div`, {
                        children: [
                          (0, D.jsx)(`p`, {
                            className: `eyebrow`,
                            children: `PICK UP`,
                          }),
                          (0, D.jsx)(`h2`, {
                            id: `schedule-dialog-title`,
                            children: `Edit schedule`,
                          }),
                        ],
                      }),
                      (0, D.jsx)(`button`, {
                        className: `schedule-edit-button`,
                        type: `button`,
                        onClick: () => o(!1),
                        children: `Done`,
                      }),
                    ],
                  }),
                  (0, D.jsxs)(`div`, {
                    className: `wheel-pickers-row`,
                    children: [
                      (0, D.jsxs)(`div`, {
                        className: `wheel-column`,
                        children: [
                          (0, D.jsx)(`p`, {
                            className: `wheel-column-label`,
                            children: `Day`,
                          }),
                          (0, D.jsx)(Ye, {
                            label: `Pickup day`,
                            items: [...Ze],
                            selectedIndex: d,
                            onChange: p,
                          }),
                        ],
                      }),
                      (0, D.jsx)(`div`, {
                        className: `wheel-divider`,
                        "aria-hidden": `true`,
                      }),
                      (0, D.jsxs)(`div`, {
                        className: `wheel-column`,
                        children: [
                          (0, D.jsx)(`p`, {
                            className: `wheel-column-label`,
                            children: `Time`,
                          }),
                          (0, D.jsx)(Ye, {
                            label: `Pickup time`,
                            items: l,
                            selectedIndex: f,
                            onChange: (e) => r(l[e]),
                            disabled: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, D.jsx)(`p`, {
                    className: `picker-hint`,
                    children:
                      u === Qe
                        ? `ASAP is available for today.`
                        : u === `Closed`
                          ? `We are currently closed for the day.`
                          : `Ready by ${u} — ${e}.`,
                  }),
                ],
              }),
            }),
            document.body,
          ),
      ],
    })
  )
}
function tt({
  day: e,
  setDay: t,
  time: n,
  setTime: r,
  name: i,
  setName: a,
  contact: o,
  setContact: s,
  invalid: c,
  payment: l,
  setPayment: u,
  onSubmit: d,
  loading: f,
  darkMode: p,
  location,
  setLocation,
  hasItems,
}) {
  let m = n === `Closed`
  return (0, D.jsxs)(`form`, {
    id: `checkout-form`,
    noValidate: !0,
    onSubmit: d,
    children: [
      (0, D.jsx)(PickupLocation, { location, setLocation, invalid: c > 0 }),
      (0, D.jsxs)(`section`, {
        className: `checkout-section details-section`,
        children: [
          (0, D.jsx)(`h2`, {
            className: `checkout-section-title`,
            children: `Your details`,
          }),
          (0, D.jsxs)(`label`, {
            className: `name-field`,
            htmlFor: `pickup-name`,
            children: [
              `Name for pickup (required)`,
              (0, D.jsx)(`input`, {
                id: `pickup-name`,
                "aria-invalid": c > 0 && !i.trim(),
                "aria-describedby":
                  c > 0 && !i.trim() ? `name-error` : undefined,
                required: !0,
                maxLength: 80,
                autoComplete: `name`,
                placeholder: `Enter your name`,
                value: i,
                onChange: (e) => {
                  a(e.target.value)
                },
                className: `name-input ${
                  c ? `invalid-field ${c % 2 ? `shake-odd` : `shake-even`}` : ``
                }`,
              }),
            ],
          }),
          c > 0 &&
            !i.trim() &&
            (0, D.jsx)(`p`, {
              id: `name-error`,
              className: `field-help`,
              role: `alert`,
              children: `Enter the name we should call at pickup.`,
            }),
          (0, D.jsxs)(`label`, {
            className: `name-field`,
            htmlFor: `pickup-contact`,
            children: [
              `Contact (optional)`,
              (0, D.jsx)(`input`, {
                id: `pickup-contact`,
                type: `tel`,
                autoComplete: `tel`,
                maxLength: 32,
                placeholder: `Phone number (optional)`,
                value: o,
                onChange: (e) => s(e.target.value),
                className: `name-input`,
              }),
            ],
          }),
        ],
      }),
      (0, D.jsx)(et, { day: e, setDay: t, setTime: r, time: n, darkMode: p }),
      (0, D.jsx)(`section`, {
        className: `checkout-section payment-section`,
        children: (0, D.jsxs)(`fieldset`, {
          className: `payment-fieldset`,
          children: [
            (0, D.jsx)(`legend`, {
              className: `payment-legend`,
              children: `Payment method`,
            }),
            (0, D.jsx)(`p`, {
              className: `payment-note`,
              children: `Pay at the counter when you pick up your coffee.`,
            }),
            (0, D.jsx)(`div`, {
              className: `payment-options`,
              children: [`Cash at pickup`, `Card at pickup`].map((e) =>
                (0, D.jsxs)(
                  `label`,
                  {
                    className: `payment-card ${l === e ? `selected` : ``}`,
                    children: [
                      (0, D.jsx)(`input`, {
                        type: `radio`,
                        name: `payment`,
                        value: e,
                        checked: l === e,
                        onChange: () => u(e),
                      }),
                      e,
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, D.jsxs)(`div`, {
        className: `checkout-submit-area`,
        children: [
          (0, D.jsx)($e, { day: e, time: n }),
          (0, D.jsx)(`button`, {
            type: `submit`,
            className: `primary-button desktop-place-order`,
            disabled: f || m || !hasItems,
            "aria-busy": f,
            children: f
              ? (0, D.jsxs)(`span`, {
                  className: `loading-dots`,
                  role: `status`,
                  children: [
                    (0, D.jsx)(`i`, {}),
                    (0, D.jsx)(`i`, {}),
                    (0, D.jsx)(`i`, {}),
                  ],
                })
              : `Review order`,
          }),
        ],
      }),
    ],
  })
}
function nt({
  coffees: e,
  cart: t,
  cartTemps: n,
  cartSizes: r,
  cartNotes: i,
  name: a,
  contact: o,
  payment: s,
  day: c,
  time: l,
  total: u,
  loading: d,
  darkMode: f,
  itemPrice: p,
  onClose: m,
  onConfirm: h,
  location,
}) {
  let g = e.filter((e) => t[e.id] > 0),
    v = c === `Today` && l === `ASAP` ? `ASAP` : l === `Closed` ? `Closed` : l,
    y = (0, _.useRef)(m),
    b = (0, _.useRef)(d)
  return (
    (y.current = m),
    (b.current = d),
    (0, _.useEffect)(() => {
      let e = document.body.style.overflow
      document.body.style.overflow = `hidden`
      let t = (e) => {
        e.key === `Escape` && !b.current && y.current()
      }
      return (
        window.addEventListener(`keydown`, t),
        () => {
          ;(document.body.style.overflow = e),
            window.removeEventListener(`keydown`, t)
        }
      )
    }, []),
    (0, Ge.createPortal)(
      (0, D.jsx)(`div`, {
        className: `confirm-order-overlay${f ? ` dark` : ``}`,
        onMouseDown: (e) => {
          e.target === e.currentTarget && !d && m()
        },
        children: (0, D.jsxs)(`section`, {
          className: `confirm-order-modal`,
          role: `dialog`,
          "aria-modal": `true`,
          "aria-labelledby": `confirm-order-title`,
          children: [
            (0, D.jsxs)(`header`, {
              className: `confirm-order-header`,
              children: [
                (0, D.jsxs)(`div`, {
                  children: [
                    (0, D.jsx)(`p`, {
                      className: `eyebrow`,
                      children: `FINAL CHECK`,
                    }),
                    (0, D.jsx)(`h2`, {
                      id: `confirm-order-title`,
                      children: `Confirm your order`,
                    }),
                  ],
                }),
                (0, D.jsx)(`button`, {
                  className: `confirm-order-close`,
                  type: `button`,
                  onClick: m,
                  disabled: d,
                  "aria-label": `Close confirmation`,
                  children: `×`,
                }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              className: `confirm-order-details`,
              children: [
                (0, D.jsxs)(`div`, {
                  children: [
                    (0, D.jsx)(`span`, { children: `Name` }),
                    (0, D.jsx)(`strong`, { children: a }),
                  ],
                }),
                o &&
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(`span`, { children: `Contact` }),
                      (0, D.jsx)(`strong`, { children: o }),
                    ],
                  }),
                (0, D.jsxs)(`div`, {
                  children: [
                    (0, D.jsx)(`span`, { children: `Pickup at ${location}` }),
                    (0, D.jsxs)(`strong`, { children: [v, ` · `, c] }),
                  ],
                }),
                (0, D.jsxs)(`div`, {
                  children: [
                    (0, D.jsx)(`span`, { children: `Payment` }),
                    (0, D.jsx)(`strong`, { children: s }),
                  ],
                }),
              ],
            }),
            (0, D.jsx)(`div`, {
              className: `confirm-order-items`,
              "aria-label": `Order items`,
              children: g.map((e) => {
                let a = t[e.id],
                  o = r[e.id] || `Medium`,
                  s = [
                    e.category === `pastry` ? `Pastry` : n[e.id] || `Iced`,
                    e.category === `pastry` ? `` : o,
                    i[e.id],
                  ].filter(Boolean)
                return (0, D.jsxs)(
                  `div`,
                  {
                    className: `confirm-order-item`,
                    children: [
                      (0, D.jsxs)(`div`, {
                        children: [
                          (0, D.jsxs)(`strong`, {
                            children: [
                              e.name,
                              ` `,
                              (0, D.jsxs)(`span`, { children: [`×`, a] }),
                            ],
                          }),
                          (0, D.jsx)(`small`, { children: s.join(` · `) }),
                        ],
                      }),
                      (0, D.jsx)(we, { value: p(e, o) * a }),
                    ],
                  },
                  e.id,
                )
              }),
            }),
            (0, D.jsx)(`div`, {
              className: `confirm-order-totals`,
              children: (0, D.jsxs)(`div`, {
                className: `confirm-order-total`,
                children: [
                  (0, D.jsx)(`span`, { children: `Total` }),
                  (0, D.jsx)(`strong`, {
                    children: (0, D.jsx)(A, { value: u }),
                  }),
                ],
              }),
            }),
            (0, D.jsxs)(`footer`, {
              className: `confirm-order-actions`,
              children: [
                (0, D.jsx)(`button`, {
                  type: `button`,
                  className: `confirm-order-cancel`,
                  onClick: m,
                  disabled: d,
                  children: `Back to details`,
                }),
                (0, D.jsx)(`button`, {
                  type: `button`,
                  className: `primary-button`,
                  onClick: h,
                  disabled: d,
                  "aria-busy": d,
                  children: d
                    ? (0, D.jsxs)(`span`, {
                        className: `loading-dots`,
                        role: `status`,
                        children: [
                          (0, D.jsx)(`i`, {}),
                          (0, D.jsx)(`i`, {}),
                          (0, D.jsx)(`i`, {}),
                        ],
                      })
                    : `Confirm preview order`,
                }),
              ],
            }),
          ],
        }),
      }),
      document.body,
    )
  )
}
function rt({
  items: e,
  amount: t,
  pickup: n,
  onRestart: r,
  name: i,
  contact: a,
  payment: o,
  cart: s,
  location,
  orderNumber,
  cartSizes,
  cartTemps,
  cartNotes,
}) {
  return (0, D.jsx)(`main`, {
    className: `success-screen`,
    id: `main-content`,
    tabIndex: -1,
    children: (0, D.jsxs)(`div`, {
      className: `success-content`,
      children: [
        (0, D.jsx)(`div`, {
          className: `success-mark`,
          children: (0, D.jsx)(xe, {}),
        }),
        (0, D.jsx)(`p`, {
          className: `eyebrow`,
          children: `PREVIEW ORDER #${orderNumber}`,
        }),
        (0, D.jsx)(`h1`, { children: `Preview order confirmed` }),
        (0, D.jsx)(`p`, {
          className: `success-lead`,
          children: `Your preview is complete. No order has been sent and no payment has been taken. For a live order, collect at your selected branch and pay at the counter.`,
        }),
        (0, D.jsxs)(`div`, {
          className: `success-summary`,
          children: [
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`span`, { children: `Name` }),
                (0, D.jsx)(`strong`, { children: i }),
              ],
            }),
            a &&
              (0, D.jsxs)(`div`, {
                children: [
                  (0, D.jsx)(`span`, { children: `Contact` }),
                  (0, D.jsx)(`strong`, { children: a }),
                ],
              }),
            oe
              .filter((e) => s[e.id] > 0)
              .map((e) =>
                (0, D.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, D.jsxs)(`span`, {
                        children: [
                          s[e.id],
                          ` × `,
                          e.name,
                          e.category !== `pastry`
                            ? ` · ${cartTemps[e.id] || "Iced"} · ${cartSizes[e.id] || "Medium"}`
                            : ``,
                          cartNotes[e.id] ? ` · ${cartNotes[e.id]}` : ``,
                        ],
                      }),
                      (0, D.jsx)(`strong`, {
                        className: `tabular`,
                        children: (0, D.jsx)(we, {
                          value: s[e.id] * ce(e, cartSizes[e.id] || `Medium`),
                        }),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`span`, { children: `Payment` }),
                (0, D.jsx)(`strong`, { children: o }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`span`, { children: `Total Items` }),
                (0, D.jsx)(`strong`, { className: `tabular`, children: e }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`span`, { children: `Total Amount` }),
                (0, D.jsx)(`strong`, {
                  className: `tabular`,
                  children: (0, D.jsx)(we, { value: t }),
                }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`span`, { children: `Pickup location` }),
                (0, D.jsx)(`strong`, { children: location }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`span`, { children: `Pickup Time` }),
                (0, D.jsx)(`strong`, { children: n }),
              ],
            }),
          ],
        }),
        (0, D.jsx)(`button`, {
          className: `primary-button`,
          onClick: r,
          type: `button`,
          children: `Start New Order`,
        }),
      ],
    }),
  })
}
function it() {
  let [e, t] = (0, _.useState)(!1),
    [n, r] = (0, _.useState)(null),
    [i, a] = (0, _.useState)(1),
    [o, s] = (0, _.useState)(`Iced`),
    [c, l] = (0, _.useState)(`Medium`),
    [u, d] = (0, _.useState)(``),
    [f, p] = (0, _.useState)(!1),
    [m, h] = (0, _.useState)(!1),
    [g, v] = (0, _.useState)(`Today`),
    [y, b] = (0, _.useState)(`ASAP`),
    [ee, te] = (0, _.useState)(``),
    [ne, re] = (0, _.useState)(``),
    [location, setLocation] = _.useState(``),
    [orderNumber, setOrderNumber] = _.useState(
      () => `PC-` + Date.now().toString(36).toUpperCase(),
    ),
    [x, S] = (0, _.useState)(`Cash at pickup`),
    [C, ie] = (0, _.useState)(!1),
    [w, ae] = (0, _.useState)(0),
    [se, le] = (0, _.useState)(null),
    ue = (0, _.useRef)(null),
    de = (0, _.useRef)(null),
    productDrafts = _.useRef({}),
    T = pe(oe),
    E = me(),
    _e = he(),
    ve = (preserve = true) => {
      if (n && preserve)
        productDrafts.current[n.id] = {
          quantity: i,
          temperature: o,
          size: c,
          note: u,
        }
      f ||
        (p(!0),
        E.later(() => {
          r(null), p(!1)
        }, fe(380)))
    },
    ye = (e) => {
      const draft = productDrafts.current[e.id]
      p(!1),
        r(e),
        a(
          Math.min(
            draft?.quantity ??
              (T.cart[e.id] || +(e.category === `pastry` || T.cups < 5)),
            e.category === `pastry` ? 99 : 5 - T.cups + (T.cart[e.id] || 0),
          ),
        ),
        s(draft?.temperature || T.cartTemps[e.id] || temperatureOptions(e)[0]),
        l(draft?.size || T.cartSizes[e.id] || `Medium`),
        d(draft?.note ?? T.cartNotes[e.id] ?? ``)
    },
    be = () => {
      if (!n || f) return
      if (i === 0 && T.cart[n.id]) T.removeItem(n.id)
      else
        T.setCartItem(
          n.id,
          Math.min(
            i,
            n.category === "pastry" ? 99 : 5 - T.cups + (T.cart[n.id] || 0),
          ),
          o,
          c,
          u,
        )
      delete productDrafts.current[n.id]
      ve(false)
    },
    xe = (e) => {
      if ((e?.preventDefault(), y !== `Closed`)) {
        if (!ee.trim() || !location.trim() || C || T.items === 0) {
          if (!ee.trim() || !location.trim()) {
            ae((value) => value + 1)
            document
              .getElementById(
                !location.trim() ? `pickup-location` : `pickup-name`,
              )
              ?.focus()
          }
          return
        }
        h(!0)
      }
    },
    Se = () => {
      y !== `Closed` &&
        ee.trim() &&
        location.trim() &&
        !C &&
        T.items !== 0 &&
        (ie(!0),
        E.later(() => {
          E.setConfirmed(!0),
            ie(!1),
            h(!1),
            requestAnimationFrame(() =>
              document.getElementById(`main-content`)?.focus(),
            )
        }, 600))
    },
    O = () => {
      setOrderNumber(`PC-` + Date.now().toString(36).toUpperCase()),
        T.resetCart(),
        E.setConfirmed(!1),
        E.setCheckout(!1),
        h(!1),
        te(``),
        re(``),
        v(`Today`),
        b(`ASAP`),
        E.setTransition(`screen-out`),
        E.later(() => E.setTransition(``), fe(220))
    },
    Ce = !E.checkout && !E.confirmed,
    we = [`app`, e ? `dark` : ``, E.transition, Ce ? `landing-page` : ``]
      .filter(Boolean)
      .join(` `),
    Te = (0, D.jsx)(Ue, {
      coffees: oe,
      cart: T.cart,
      cartTemps: T.cartTemps,
      cartSizes: T.cartSizes,
      cartNotes: T.cartNotes,
      cupCount: T.cups,
      itemCount: T.items,
      total: T.total,
      swipedItem: se,
      setSwipedItem: le,
      removeItem: T.removeItem,
      updateQuantity: T.updateQuantity,
      itemPrice: ce,
      onEdit: ye,
      onBrowse: () => E.navigate(`menu`),
    }),
    Ee = (0, D.jsx)(tt, {
      day: g,
      setDay: v,
      time: y,
      setTime: b,
      name: ee,
      setName: (e) => {
        te(e)
      },
      contact: ne,
      setContact: re,
      invalid: w,
      payment: x,
      setPayment: S,
      onSubmit: xe,
      loading: C,
      darkMode: e,
      location,
      setLocation,
      hasItems: T.items > 0,
    })
  return E.confirmed
    ? (0, D.jsxs)(`div`, {
        ref: E.appRef,
        className: we,
        children: [
          (0, D.jsx)(ge, {}),
          (0, D.jsx)(rt, {
            amount: T.total,
            items: T.items,
            onRestart: O,
            name: ee.trim(),
            contact: ne,
            payment: x,
            location,
            orderNumber,
            cartSizes: T.cartSizes,
            cartTemps: T.cartTemps,
            cartNotes: T.cartNotes,
            cart: T.cart,
            pickup: g === `Today` && y === `ASAP` ? `ASAP · Today` : y || g,
          }),
        ],
      })
    : (0, D.jsxs)(`div`, {
        ref: E.appRef,
        className: we,
        children: [
          (0, D.jsx)(ge, {}),
          (0, D.jsx)(k, {
            headerRef: ue,
            checkout: E.checkout,
            darkMode: e,
            scrolled: _e.scrolled,
            titleCollapsed: _e.titleCollapsed,
            itemCount: T.items,
            loading: C,
            onBack: () => E.navigate(`menu`),
            onRestart: () => E.navigate(`menu`),
            onCart: () => E.navigate(`cart`),
            onTheme: () => t((e) => !e),
          }),
          (0, D.jsx)(`main`, {
            id: `main-content`,
            tabIndex: -1,
            className: `main-content ${E.transition}${
              E.checkout ? ` checkout-page-active` : ``
            }`,
            children: E.checkout
              ? (0, D.jsxs)(`div`, {
                  className: `checkout-page`,
                  children: [
                    (0, D.jsxs)(`div`, {
                      className: `checkout-cart-column`,
                      children: [
                        (0, D.jsx)(`h2`, {
                          className: `checkout-section-title checkout-item-title`,
                          children: `Item`,
                        }),
                        Te,
                        (0, D.jsx)(We, {
                          products: oe,
                          cart: T.cart,
                          onAdd: (e) => T.updateQuantity(e.id, 1),
                        }),
                      ],
                    }),
                    (0, D.jsx)(`div`, {
                      className: `checkout-details-column`,
                      children: Ee,
                    }),
                  ],
                })
              : (0, D.jsxs)(D.Fragment, {
                  children: [
                    (0, D.jsx)(Fe, {
                      menuRef: de,
                      heroRef: _e.heroRef,
                      products: oe,
                    }),
                    (0, D.jsx)(`section`, {
                      className: `menu-page`,
                      "aria-label": `Order menu`,
                      children: (0, D.jsx)(He, {
                        products: oe,
                        cart: T.cart,
                        onAdd: ye,
                        menuRef: de,
                      }),
                    }),
                  ],
                }),
          }),
          (0, D.jsx)(De, {
            checkout: E.checkout,
            loading: C,
            total: T.total,
            pickupClosed: y === `Closed`,
            hasItems: T.items > 0,
            onSubmit: xe,
          }),
          m &&
            (0, D.jsx)(nt, {
              coffees: oe,
              cart: T.cart,
              cartTemps: T.cartTemps,
              cartSizes: T.cartSizes,
              cartNotes: T.cartNotes,
              name: ee.trim(),
              contact: ne.trim(),
              payment: x,
              day: g,
              time: y,
              total: T.total,
              loading: C,
              darkMode: e,
              itemPrice: ce,
              onClose: () => h(!1),
              onConfirm: Se,
              location,
            }),
          !E.checkout &&
            (0, D.jsx)(j, {
              footerRef: _e.footerRef,
              itemCount: T.items,
              cupCount: T.cups,
              total: T.total,
              limit: T.limit,
              barHidden: false,
              loading: C,
              onCheckout: () => E.navigate(`cart`),
            }),
          (0, D.jsx)(Ae, {
            coffee: n,
            max:
              n?.category === `pastry`
                ? 99
                : 5 - T.cups + ((n && T.cart[n.id]) || 0),
            existing: (n && T.cart[n.id]) || 0,
            closing: f,
            onLimit: T.showLimit,
            onAdd: be,
            onClose: ve,
            quantity: i,
            setQuantity: a,
            temp: o,
            setTemp: s,
            size: c,
            setSize: l,
            note: u,
            setNote: d,
          }),
        ],
      })
}

export default it
