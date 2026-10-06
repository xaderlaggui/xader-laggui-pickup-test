import PickupExperience from "./components/PickupExperience"
import InteractionSupport from "./components/InteractionSupport"

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PickupExperience />
      <InteractionSupport />
    </>
  )
}
