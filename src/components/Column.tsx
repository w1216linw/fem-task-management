import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Column as ColumnType } from "./Dashboard";

interface ColumnProps {
  columns: ColumnType[];
  column: ColumnType;
  setColumns: (columns: ColumnType[]) => void;
}

const Column: React.FC<ColumnProps> = ({ column, columns, setColumns }) => {
  const [input, setInput] = useState<string>("");

  const deleteColumn = () => {
    setColumns(columns.filter((_, i) => i !== column.id));
  };

  useEffect(() => {
    if (!input) return;

    const debounce = setTimeout(() => {
      column.name = input;
    }, 500);

    return () => clearTimeout(debounce);
  }, [input]);

  return (
    <div className="flex items-center gap-2">
      <input
        className="flex-grow border-lines-light border rounded-lg p-2 text-sm"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => deleteColumn()}>
        <FaTimes size={20} className="text-secondary-500" />
      </button>
    </div>
  );
};

export default Column;
