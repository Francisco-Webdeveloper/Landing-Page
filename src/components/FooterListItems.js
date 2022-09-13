import React from "react";

const FooterListItems = ({ title, items }) => {
  return (
    <div>
      <h6 className="font-medium text-gray-400 capitalize">{title}</h6>
      <ul>
        {items.map((item, id) => (
          <li key={id} className="py-2 text-sm capitalize">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterListItems;
