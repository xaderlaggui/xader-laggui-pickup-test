type Props = {
  location: string
  setLocation: (value: string) => void
  invalid: boolean
}

export default function PickupLocation({
  location,
  setLocation,
  invalid,
}: Props) {
  return (
    <section className="checkout-section location-section">
      <h2 className="checkout-section-title">Pickup location</h2>
      <label className="name-field" htmlFor="pickup-location">
        Branch name (required)
        <input
          id="pickup-location"
          className="name-input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
          maxLength={100}
          aria-invalid={invalid && !location.trim()}
          aria-describedby="location-help"
        />
      </label>
      <p id="location-help" className="field-help">
        {invalid && !location.trim()
          ? "Enter a pickup branch name to continue."
          : "Ordering preview only. Branch availability is not verified and no order is sent."}
      </p>
    </section>
  )
}
