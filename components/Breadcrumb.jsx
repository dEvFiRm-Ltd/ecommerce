import React from 'react';
import Link from 'next/link';
function Breadcrumb() {
  return (
    <section className='container my-0 py-16 flex flex-row'>
      <Link passHref href='/'>
        <h5 className=' leading-120 font-normal'> Home </h5>
      </Link>
      <h5 className=' leading-120 font-normal mx-4 '> / </h5>
      <Link passHref href='/'>
        <h5 className=' leading-120 font-normal'> Category </h5>
      </Link>
      <h5 className=' leading-120 font-normal mx-4 '> / </h5>
      <Link passHref href='/'>
        <h5 className=' leading-120 font-normal'> Sub Category </h5>
      </Link>
      <h5 className=' leading-120 font-normal mx-4 '> / </h5>
      <Link passHref href='/'>
        <h5 className=' leading-120 font-normal'> Sub Category </h5>
      </Link>
      <h5 className=' leading-120 font-normal mx-4 '> / </h5>
      <Link passHref href='/'>
        <h5 className=' leading-120 font-normal'> Brand </h5>
      </Link>
      <h5 className=' leading-120 font-normal mx-4 '> / </h5>
      <h5 className=' leading-120'> Product </h5>
    </section>
  );
}

export default Breadcrumb;
