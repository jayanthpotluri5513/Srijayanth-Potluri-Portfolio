import React, { useState } from 'react';

const List = ({ list,filterItems}) => {
  const [active, setActive] = useState(null);

  return (
    <div className='portfolio__list'>
      {list.map((category, index) => {
        return (
          <button
            key={index}
            className={`${active === index ? 'active-work' : ''} portfolio__list-item text-cs`}
            onClick={() => {
                 setActive(index);
                 filterItems(category);

            }} // Set active index on click
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
