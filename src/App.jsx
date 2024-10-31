import { CiSun } from "react-icons/ci"

function App() {
  return (
    <div className='py-12 px-14 flex flex-col gap-8 bg-[#D5E7FE]'>
      <h1 className='text-3xl text-center text-blue-500 font-bold underline'>
        Weather App
      </h1>
      {/* search city */}
      <section className="">
        <input type="text" className="rounded-xl w-full shadow-lg px-2 py-4" placeholder="Search for city..." />
      </section>
      {/* weather data */}
      <section className="mt-12 bg-gray-100 p-4 rounded-xl">
        <section className="flex text-3xl font-bold justify-between place-items-center">
          <h1 className="flex flex-col gap-2 text-start text-6xl"><span className="">87°F</span> New York</h1>
          <CiSun size={45} />
        </section>
        <p className="font-semibold mt-4">Partly Cloudy</p>
      </section>
    </div>
  );
}

export default App;
