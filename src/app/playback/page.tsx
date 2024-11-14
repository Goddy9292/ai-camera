"use client";
import videojs from 'video.js'
import { useEffect, useRef, useState } from 'react'
import 'video.js/dist/video-js.css'
import Navbar from '../../components/Nav.tsx'
import PlaybackTableComponent from '@/components/PlaybackTableComponent.tsx';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';

export default function Playback() {

  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // useEffect(() => {
  //   const handleInteraction = () => {
  //     if (videoRef.current) {
  //       videoRef.current.muted = false;
  //       document.removeEventListener('click', handleInteraction);
  //     }
  //   };

  //   document.addEventListener('click', handleInteraction);
  //   return () => document.removeEventListener('click', handleInteraction);
  // }, []);

  const [cameras, setCameras] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedParam, setParam] = useState('cameras?factory=1');

  const datetimeFromRef = useRef<HTMLInputElement | null>(null);
  const datetimeToRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (datetimeFromRef.current) {
      flatpickr(datetimeFromRef.current, {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true,
      });
    }
    if (datetimeToRef.current) {
      flatpickr(datetimeToRef.current, {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true,
      });
    }

    // const fetchCameras = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('http://54.255.193.180:8000/ms/cameras?factory=1', {mode: 'cors'});
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch cameras');
    //     }
    //     const data = await response.json();
    //     setCameras(data.cameras);
    //   } catch (err) {
    //     setError(err instanceof Error ? err.message : 'An error occurred');
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // fetchCameras();

  //   const fetchCameras = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('/api/cameras'); // เปลี่ยนเป็นเรียกผ่าน API route
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch cameras');
  //       }
  //       const data = await response.json();
  //       console.log(JSON.stringify(data.cameras));
  //       setCameras(data.cameras);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : 'An error occurred');
  //       console.error('Error fetching cameras:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchCameras();

  // }, []);

  const fetchCameras = async () => {
    setIsLoading(true);
    try {
      // เพิ่ม parameter factory ในการเรียก API
      const response = await fetch(`/api?param=${selectedParam}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cameras');
      }
      const data = await response.json();
      console.log(JSON.stringify(data.cameras));
      setCameras(data.cameras);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching cameras:', err);
    } finally {
      setIsLoading(false);
    }
  };

  fetchCameras();
}, [selectedParam]);

  return (
    <>
      <div className="absolute inset-0 bg-gray-500 opacity-98 rounded-1 p-7 my-auto mx-auto"
        style={{
          marginBottom: -30,
          marginLeft: 30,
          marginRight: 30,
          marginTop: 90,
          backgroundColor: '#D9D9D9', height: 840
        }}
      >
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-3 p-7" style={{marginBottom: 0, marginLeft: 0, marginRight: 0, marginTop: 0, backgroundColor: '#074FB5', minHeight: 800, maxHeight:801}}>
            <div className='mb-10 grid grid-cols-2 flex justify-between'>
              <div className='text-3xl font-bold col-span-1'>
                Factory 1
              </div>
              <div className='col-span-1 flex justify-end content-center'>
                <img src="/1.png" alt="Factory Icon" className="w-25 h-7 " />
              </div>
            </div>
            {/* <div>
              Model Case
            </div>
            <div className="bg-white rounded-md p-2 mb-3 h-9 h-9">
              <select
                className="w-full bg-transparent outline-none text-black"
              >
                <option value="original">Speed</option>
                <option value="ai">Slow</option>
              </select>
            </div> */}

            {/* เพิ่ม dropdown สำหรับเลือก factory */}
            {/* <div className="mb-4">
              <label>Select Factory:</label>
              <select
                value={selectedFactory}
                onChange={(e) => setParam(e.target.value)}
                className="ml-2 p-2 border rounded"
              >
                <option value="1">Factory 1</option>
                <option value="2">Factory 2</option>
                <option value="3">Factory 3</option>
              </select>
            </div> */}
            
            <div>
              Model Case
            </div>
            <div className="bg-white rounded-md p-2 mb-3 h-9">
              <select
                className="w-full bg-transparent outline-none text-black"
                disabled={isLoading}
              >
                {isLoading ? (
                  <option>Loading...</option>
                ) : error ? (
                  <option>Error loading cameras</option>
                ) : (
                  cameras.map((camera) => (
                    <option key={camera} value={camera}>
                      {camera}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div>
              Detect Case
            </div>
            <div className="bg-white rounded-md p-2 mb-3 h-9">
              <select
                className="w-full bg-transparent outline-none text-black"
              >
                <option value="original">Speed</option>
                <option value="ai">Slow</option>
              </select>
            </div>
            {/* <div>Datetime from:</div>
            <div className="bg-white rounded-md p-2 mb-3 h-9">
                <input 
                    type="datetime-local" 
                    id="datetimeFrom" 
                    className="w-full bg-transparent outline-none text-black"
                />
            </div>
            <div>Datetime to:</div>
            <div className="bg-white rounded-md p-2 mb-3 h-9">
                <input 
                    type="datetime-local" 
                    id="datetimeTo" 
                    className="w-full bg-transparent outline-none text-black"
                />
            </div> */}
            <div>
              <label>Datetime from:</label>
              <input type="text" ref={datetimeFromRef} className="bg-white rounded-md p-2 mb-3 h-9" />

              <label>Datetime to:</label>
              <input type="text" ref={datetimeToRef} className="bg-white rounded-md p-2 mb-3 h-9" />
            </div>
          </div>

          <div className="col-span-9 grid grid-cols-1 grid-rows-[5fr_3fr] gap-4">
            <div className="flex justify-center items-center" style={{backgroundColor: '#074FB5'}}>
              <div style={{backgroundColor: '#8b8b8b'}}>
                <video
                  //ref={videoRef}
                  //loop
                  playsInline
                  //autoPlay
                  //muted
                  controls
                  className=""
                  style={{
                    width: 1100,
                    height: 452
                  }}
                >
                  <source src={"http://54.255.193.180:9000/mock/camera/camera_1/video_1730798732.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20241108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241108T093340Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0ed749ae20136cbdbb9f25d0833738d99b46cdfb6b43fd910e602dbe5b2e34c8"} type="video/mp4" />
                  Your browsedoes not support the video tag.
                </video>
              </div>
            </div>
            <div className="flex justify-center items-center" style={{backgroundColor: '#074FB5' }}>
              
              <PlaybackTableComponent/>
            </div>
          </div>
        </div>

      </div>
                    
    </>
  );
}