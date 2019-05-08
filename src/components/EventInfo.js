import React from "react"

const EventInfo = () => (
  <div>
    <ul className="list-reset">
      <li className="mb-3">
        <span className="font-semibold mr-2">Tid:</span>
        <span className="font-semibold">11:00 - 12:00</span>
      </li>
      <li className="mb-3">
        <span className="font-semibold mr-2">Plats:</span>
        <span className="font-semibold">Varbergs kusthotell</span>
      </li>
      <li className="mb-3">
        <span className="font-semibold mr-2">Datum:</span>
        <span className="font-semibold">21/08/19</span>
      </li>
      <li>
        <a href="https://www.regionhalland.se/utveckling-och-tillvaxt/utbildnings-och-eventservice/rikskonferensaudionomer/program/" className="inline-block no-underline text-white px-4 py-4 bg-blue rounded font-semibold">Gå till anmälan</a>
      </li>
    </ul>
  </div>
)


export default EventInfo
