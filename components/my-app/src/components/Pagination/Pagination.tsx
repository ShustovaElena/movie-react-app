import React from 'react';

export function Pagination() {
  return (
    <React.Fragment>
      <button className="pagination-button">Prev</button>
      <span className="page-number">1/20</span>
      <button className="pagination-button">Next</button>
    </React.Fragment>
  );
}
