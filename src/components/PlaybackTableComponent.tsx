import React, { useState } from 'react';
import { Play, Image } from 'lucide-react';

// Define types at the top of the file
interface TableRow {
  datetime: string;
  location: string;
  camera: string;
  caseDetect: string;
  detail: string;
}

interface Column {
  key: keyof TableRow;
  header: string;
}

const PlaybackTableComponent: React.FC = () => {
    // Mock data
    const [data] = useState<TableRow[]>([
      {
        datetime: '2024/11/01 12:34:56',
        location: 'Factory 1',
        camera: 'Cam 1',
        caseDetect: 'Vehicle',
        detail: 'Over parking',
      },
      {
        datetime: '2024/11/01 12:35:00',
        location: 'Factory 1',
        camera: 'Cam 2',
        caseDetect: 'Person',
        detail: 'Unauthorized access',
      },
      {
        datetime: '2024/11/01 12:36:12',
        location: 'Factory 2',
        camera: 'Cam 1',
        caseDetect: 'Vehicle',
        detail: 'Speed violation',
      },
      // Add more mock data to demonstrate scrolling
      ...Array(10).fill(null).map((_, index): TableRow => ({
        datetime: `2024/11/01 ${12 + Math.floor(index/2)}:${(index * 5) % 60}:00`,
        location: `Factory ${(index % 3) + 1}`,
        camera: `Cam ${(index % 4) + 1}`,
        caseDetect: index % 2 === 0 ? 'Vehicle' : 'Person',
        detail: `Event ${index + 1}`,
      }))
    ]);
  
    // Column definitions - can be easily modified to add/remove columns
    const columns: Column[] = [
      { key: 'datetime', header: 'Datetime' },
      { key: 'location', header: 'Location' },
      { key: 'camera', header: 'Camera' },
      { key: 'caseDetect', header: 'Case Detect' },
      { key: 'detail', header: 'Detail' },
    ];
  
    const handlePlayClick = (row: TableRow): void => {
      console.log('Play clicked for:', row);
    };
  
    const handleImageClick = (row: TableRow): void => {
      console.log('Image clicked for:', row);
    };
  
    return (
      <div className="max-w-[1200px] bg-white  ">
        <div className="overflow-x-auto">
          <div className="max-h-[200px] overflow-y-auto">
            <table className="w-full">
              <thead className="text-white sticky top-0" style={{backgroundColor: "#66d1f9"}}>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="px-4 py-2 text-left font-medium border-r border-black min-w-[170px]"
                    >
                      {column.header}
                    </th>
                  ))}
                  <th className="px-4 py-2 text-center font-medium min-w-[140px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-black">
                {data.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                  >
                    {columns.map((column) => (
                      <td key={column.key} className="px-4 py-2 border-r border-black">
                        {row[column.key]}
                      </td>
                    ))}
                    <td className="px-4 py-2">
                      <div className="flex justify-center space-x-2">
                        <button 
                          className="p-1 text-blue-600 hover:text-blue-800"
                          onClick={() => handlePlayClick(row)}
                          aria-label="Play"
                        >
                          <Play size={20} />
                        </button>
                        <button 
                          className="p-1 text-blue-600 hover:text-blue-800"
                          onClick={() => handleImageClick(row)}
                          aria-label="View Image"
                        >
                          <Image size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlaybackTableComponent;

