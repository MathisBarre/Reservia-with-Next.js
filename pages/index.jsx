import SearchSection from "components/SearchSection"
import HostingSection from "components/HostingSection"
import ActivitiesSection from "components/ActivitiesSection"

export default function Home() {

  return (
    <>
      <main className="main">
        <SearchSection/>
        <HostingSection/>
        <ActivitiesSection/>
      </main>
    </>
  )
}