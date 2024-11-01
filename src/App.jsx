import { CiSun } from 'react-icons/ci';
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa6';
import { LuThermometerSnowflake } from 'react-icons/lu';

function App() {
  return (
    <div className='py-12 px-14 flex flex-col gap-8 bg-[#D5E7FE]'>
      <h1 className='text-3xl text-center text-blue-500 font-bold underline'>
        Weather App
      </h1>
      {/* search city */}
      <section className=''>
        <input
          type='text'
          className='rounded-xl w-full shadow-lg px-2 py-4'
          placeholder='Search for city...'
        />
      </section>
      {/* weather data */}
      <section className='mt-12 bg-gray-100 p-4 rounded-xl'>
        <section className='flex text-3xl font-bold justify-between place-items-center'>
          <h1 className='flex flex-col gap-2 text-start text-6xl'>
            <span className=''>87°F</span> New York
          </h1>
          <CiSun size={45} />
        </section>
        <p className='font-semibold mt-4'>Partly Cloudy</p>
      </section>
      {/* Weather Details */}

      <section className='bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-6 mb-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Details Forecast
        </h2>

        <div className='grid grid-cols-3 gap-4 mt-6'>
          <div className='flex items-center gap-2'>
            <WiHumidity />
            <div>
              <p className='text-sm text-gray-500'>Humidity</p>
              <p className='font-semibold'>55%</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaWind />
            <div>
              <p className='text-sm text-gray-500'>Wind</p>
              <p className='font-semibold'>23 mph</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <LuThermometerSnowflake />
            <div>
              <p className='text-sm text-gray-500'>Feels Like</p>
              <p className='font-semibold'>66°F</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
