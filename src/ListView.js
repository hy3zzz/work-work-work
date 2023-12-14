import React, { useState, useMemo } from "react";
import ListItemView from "./ListItemView";
import Overlay from "./Overlay";

const ListView = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => b.year.localeCompare(a.year));
  }, [items]);
  console.log(sortedItems);

  return (
    <div className="list-view">
      {sortedItems.map((item) => (
        <ListItemView
          key={item.id}
          item={item}
          onClick={() => setSelectedItem(item)}
        />
      ))}
      {selectedItem && (
        <Overlay image={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default ListView;
