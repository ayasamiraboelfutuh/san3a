import React from 'react';

export default function SidebarCatogry({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="p-4 bg-light rounded-4 border">
      <h5 className="fw-bold mb-3">Categories</h5>
      <hr />
      <ul className="list-unstyled">
        {categories.map((cat) => (
          <li key={cat} className="mb-2">
            <button 
              className={`btn w-100 text-start ${activeCategory === cat ? 'btn-dark' : 'btn-link text-decoration-none text-dark'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}