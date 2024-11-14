import React, { useState } from 'react';
import { Play, Image, Info } from 'lucide-react';

// Define types at the top of the file
interface TableRow {
  datetime: string;
  location: string;
}

interface Column {
  key: keyof TableRow;
  header: string;
}

const SettingTableComponent: React.FC = () => {
    // Mock data
    const [data] = useState<TableRow[]>([
      {
        datetime: '2024/11/01 12:34:56',
        location: 'Factory 1',
      },
      {
        datetime: '2024/11/01 12:35:00',
        location: 'Factory 1',
      },
      {
        datetime: '2024/11/01 12:36:12',
        location: 'Factory 2',
      },
      // Add more mock data to demonstrate scrolling
      ...Array(10).fill(null).map((_, index): TableRow => ({
        datetime: `2024/11/01 ${12 + Math.floor(index/2)}:${(index * 5) % 60}:00`,
        location: `Factory ${(index % 3) + 1}`,
      }))
    ]);
  
    // Column definitions - can be easily modified to add/remove columns
    const columns: Column[] = [
      { key: 'datetime', header: 'Datetime' },
      { key: 'location', header: 'Location' },
    ];
  
    const handlePlayClick = (row: TableRow): void => {
      console.log('Play clicked for:', row);
    };
  
    return (
      <div className="max-w-[1200px] bg-white  border border-black border-opacity-40">
        <div className="overflow-x-auto">
          <div className="max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead className="text-white" style={{backgroundColor: "#d9d9d9"}}>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="px-4 py-2 text-left font-medium min-w-[170px] border-b border-black border-opacity-40"
                    >
                      {/* {column.header} */}
                    </th>
                  ))}
                  {/* <th className="px-4 py-2 text-center font-medium min-w-[400px]">Actions</th> */}
                  <th className="py-6 text-center font-medium min-w-[400px] border-b border-black border-opacity-40"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-black">
                {data.map((row, index) => (
                  <tr
                    key={index}
                    // className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                  >
                    {columns.map((column) => (
                      <td key={column.key} className="px-4 py-2 border-black">
                        {row[column.key]}
                      </td>
                    ))}
                    <td className="px-4 py-2">
                      <div className="flex justify-end space-x-2">
                        <button 
                          className="p-1 text-black hover:text-blue-800"
                          onClick={() => handlePlayClick(row)}
                          aria-label="Play"
                        >
                          <Info size={18} />
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
  
  export default SettingTableComponent;

