"use client";
import Navbar from '../../components/Nav.tsx'
import PlaybackTableComponent from '@/components/PlaybackTableComponent.tsx';
import SettingTableComponent from '@/components/SettingTableComponent.tsx';

export default function Dashboard() {
    //const videoRef = useRef(null)
  
    return (
      <>
        <div className='grid-rows text-black '>
          <div className='grid grid-cols-2'>
            <div className='text-black text-5xl font-bold p-8 bg-'>
              Setting
            </div>
            <div className='flex justify-end items-center gap-10'>
              <button className='text-white font-semibold py-2 rounded bg-[#000562] hover:bg-[#010440] active:scale-95 transition transform duration-150 w-40'>
                AI Model
              </button>
              <button className='text-white font-semibold py-2 rounded bg-[#000562] hover:bg-[#010440] active:scale-95 transition transform duration-150 w-40'>
                Edit
              </button>
            </div>
          </div>

          <div className='grid grid-cols-2 mt-3 gap-12'>
            <div className='bg-white' style={{height: 650}}>
              <div className='flex flex justify-between items-center'>
                <div className='font-semibold text-3xl p-8'>
                  Location
                </div>
                <div>
                  <button className='font-semibold px-4 py-1 rounded bg-[#b6b6b6] hover:bg-[#9c9a9a] active:scale-95 transition transform duration-150 mr-8 '>
                    Add New Location
                  </button>
                </div>
              </div>
              <div className='flex flex justify-center items-center'>
                <SettingTableComponent/>
              </div>
            </div> 
            <div className='bg-white' style={{height: 650}}>
            <div className='flex flex justify-between items-center'>
              <div className='font-semibold text-3xl p-8'>
                Camera
              </div>
              <div>
                <button className='font-semibold px-4 py-1 rounded bg-[#b6b6b6] hover:bg-[#9c9a9a] active:scale-95 transition transform duration-150 mr-8 '>
                  Add New Camera
                </button>
              </div>
              </div>
              <div className='flex flex justify-center items-center'>
                <SettingTableComponent/>
              </div>
            </div>
          </div>
        </div>
  
     
                      
      </>
    );
  }