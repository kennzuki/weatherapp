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
    </div>
  );
}

export default App;
