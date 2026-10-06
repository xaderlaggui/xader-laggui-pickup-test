import { useRef, useState } from "react"

type Product = { id: number name: string price: number category: string }
type Quantities = Record<number, number>
type Options = Record<number, string>

export function feedback(message: string, undo?: () => void) {
  window.dispatchEvent(
    new CustomEvent("pickup-feedback", { detail: { message, undo } }),
  )
}

export function temperatureOptions(product: { name: string }) {
  if (/\biced\b|\bfrappe\b/i.test(product.name)) return ["Iced"]
  if (
    /\bhot\b/i.test(product.name) ||
    ["Espresso", "Cappuccino", "Flat White", "Black Coffee"].includes(
      product.name,
    )
  )
    return ["Hot"]
  return ["Iced", "Hot"]
}

export default function usePickupCart(products: Product[]) {
  const [cart, setCart] = useState<Quantities>({})
  const [cartTemps, setTemps] = useState<Options>({})
  const [cartSizes, setSizes] = useState<Options>({})
  const [cartNotes, setNotes] = useState<Options>({})
  const [limit, setLimit] = useState(0)
  const currentCart = useRef(cart)
  currentCart.current = cart
  const countCups = (quantities: Quantities) =>
    products.reduce(
      (count, item) =>
        count + (item.category === "pastry" ? 0 : quantities[item.id] || 0),
      0,
    )
  const calculateTotal = (quantities: Quantities, sizes: Options) =>
    products.reduce(
      (total, item) =>
        total +
        (item.price +
          (item.category === "pastry"
            ? 0
            : sizes[item.id] === "Small"
              ? -10
              : sizes[item.id] === "Large"
                ? 10
                : 0)) *
          (quantities[item.id] || 0),
      0,
    )
  const showLimit = () => {
    setLimit((value) => value + 1)
    feedback("Maximum 5 drinks per order. Remove a drink to add another.")
  }
  const setCartItem = (
    id: number,
    quantity: number,
    temperature: string,
    size: string,
    note: string,
  ) => {
    const product = products.find((item) => item.id === id)
    if (!product || quantity < 0 || quantity > 99) return
    const next = { ...currentCart.current }
    if (quantity < 1) delete next[id]
    else next[id] = quantity
    if (countCups(next) > 5) {
      showLimit()
      return
    }
    currentCart.current = next
    setCart(next)
    setTemps((values) => ({ ...values, [id]: temperature }))
    setSizes((values) => ({ ...values, [id]: size }))
    setNotes((values) => ({ ...values, [id]: note.trim() }))
    feedback(
      quantity
        ? `${quantity} × ${product.name} in your cart · Total ₱${calculateTotal(next, { ...cartSizes, [id]: size })}`
        : `${product.name} removed.`,
    )
  }
  const removeItem = (id: number) => {
    const quantity = currentCart.current[id]
    const product = products.find((item) => item.id === id)
    if (!quantity || !product) return
    const next = { ...currentCart.current }
    delete next[id]
    currentCart.current = next
    setCart(next)
    feedback(`${product.name} removed.`, () =>
      setCartItem(
        id,
        quantity,
        cartTemps[id] || "Iced",
        cartSizes[id] || "Medium",
        cartNotes[id] || "",
      ),
    )
  }
  const updateQuantity = (id: number, change: number) => {
    const quantity = (currentCart.current[id] || 0) + change
    if (quantity < 1) {
      removeItem(id)
      return
    }
    if (quantity > 99) {
      feedback("Maximum 99 of each pastry per order.")
      return
    }
    const product = products.find((item) => item.id === id)
    setCartItem(
      id,
      quantity,
      cartTemps[id] || (product ? temperatureOptions(product)[0] : "Iced"),
      cartSizes[id] || "Medium",
      cartNotes[id] || "",
    )
  }
  return {
    cart,
    cartTemps,
    cartSizes,
    cartNotes,
    cups: countCups(cart),
    items: Object.values(cart).reduce((count, quantity) => count + quantity, 0),
    total: calculateTotal(cart, cartSizes),
    limit,
    showLimit,
    setCartItem,
    removeItem,
    updateQuantity,
    resetCart: () => {
      currentCart.current = {}
      setCart({})
      setTemps({})
      setSizes({})
      setNotes({})
    },
  }
}
