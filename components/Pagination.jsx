import React from 'react';

function Pagination() {
  return (
    <section className='container my-0 py-36 flex flex-row justify-between items-center '>
      <button className='pagination indicators'>
        <i className='fa-solid fa-arrow-left'></i> Previous
      </button>
      <div className='counts'>
        <button className='pagination count'>1</button>
        <button className='pagination count'>2</button>
        <button className='pagination count active'>3</button>
        <button className='pagination count'>4</button>
      </div>
      <button className='pagination indicators'>
        Next <i className='fa-solid fa-arrow-right'></i>
      </button>
    </section>
  );
}

export default Pagination;
