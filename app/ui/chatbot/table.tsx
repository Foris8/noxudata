import { FaExclamation } from "react-icons/fa6";
import { PiCaretUpDown } from "react-icons/pi";

type TableRowData = {
    tag:number;
    id: number;
    name: string;
    industry: string;
    city: string;
    state: string;
    segment: string;
    ownerId: number;
};

// Mock data - replace this with your actual data source
const data: TableRowData[] = [
  { tag: 477, id: 1, name: 'Abbott - Pacocha', industry: 'IT', city: 'Colo...', state: 'CO', segment: 'Ente...', ownerId: 7 },
  { tag: 477, id: 2, name: 'Abbott - Pacocha', industry: 'IT', city: 'Colo...', state: 'CO', segment: 'Ente...', ownerId: 7 },
  { tag: 477, id: 3, name: 'Abbott - Pacocha', industry: 'IT', city: 'Colo...', state: 'CO', segment: 'Ente...', ownerId: 7 },
];

const TableComponent: React.FC = () => {
  return (
    <div className="overflow-x-auto relative ml-52">
      <table className="text-sm text-left text-gray-500 table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="py-2 px-6">
                <span className="flex items-center justify-between">
                    <PiCaretUpDown />
                </span>
                </th>
                <th scope="col" className="py-2 px-6">
                <span className="flex items-center justify-between">
                    Name
                    <PiCaretUpDown />
                </span>
                </th>
                <th scope="col" className="py-2 px-6">
                <span className="flex items-center justify-between">
                    Industry
                    <PiCaretUpDown />
                </span>
                </th>
                <th scope="col" className="py-2 px-6">
                <span className="flex items-center justify-between">
                    City
                    <PiCaretUpDown />
                </span>
                </th>
                <th scope="col" className="py-2 px-6">
                <span className="flex items-center justify-between">
                    State
                    <PiCaretUpDown />
                </span>
                </th>
                <th scope="col" className="py-2 px-6">
                <span className="flex items-center justify-between">
                    Segment
                    <PiCaretUpDown />
                </span>
                </th>
                <th scope="col" className="py-2 px-6">
                <span className="flex items-center justify-between">
                    Owner ID
                    <PiCaretUpDown />
                </span>
                </th>
            </tr>
            </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="bg-white border-t border-b">
                <td className="py-2 px-6 text-black">{row.tag}</td>
                <td className="py-2 px-6 text-black">{row.name}</td>
                <td className="py-2 px-6 text-black">{row.industry}</td>
                <td className="py-2 px-6 text-black">{row.city}</td>
                <td className="py-2 px-6 text-black">{row.state}</td>
                <td className="py-2 px-6 text-black">{row.segment}</td>
                <td className="py-2 px-6 text-black">{row.ownerId}</td>
            </tr >
          ))}

            <tr>
            <td colSpan={7} className="text-sm text-gray-700 py-4 px-6 bg-gray-100">
              <FaExclamation className="inline mr-2 rounded-full border-zinc-400 border-2 " size={16} />
              Only X rows are shown. View full list for more
            </td>
          </tr>
          
          <tr>
            <td colSpan={7} className="py-4 px-6 bg-white">
              <div className="flex space-x-2 justify-start ">
                <button className="px-4 py-2 text-sm text-black bg-white rounded-lg shadow border">
                  Show Full List
                </button>
                <button className="px-4 py-2 text-sm text-black bg-white rounded-lg shadow border">
                  Show Query
                </button>
                <button className="px-4 py-2 text-sm text-black bg-white rounded-lg shadow border">
                  Show Chart
                </button>
                <button className="px-4 py-2 text-sm text-black bg-white rounded-lg shadow border">
                  Pin to Dashboard
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default TableComponent;
