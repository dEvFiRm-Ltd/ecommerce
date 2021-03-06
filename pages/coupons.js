import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { couponData } from '../components/core/core';
import SingleCoupon from '../components/coupones/SingleCoupon';
import Hero from '../components/Hero';
import Pagination from '../components/Pagination';
import Modal from '../components/partials/Modal';
import TimeLaps from '../components/TimeLaps';

function Coupons() {
  const [coupon, setCoupon] = useState([]);
  const [modal, setModal] = useState(false);
  const [couponCount, setCouponCount] = useState(0);

  useEffect(() => {
    setCoupon(couponData);
    setCouponCount(couponData.length - 1);
    return () => {
      setCoupon([]);
      setCouponCount(0);
    };
  }, []);

  const handleModal = (e) => {
    setModal(e);
  };
  return (
    <>
      <Breadcrumb />
      <Hero />
      <section className='container bg-white flex pt-16 flex-col'>
        <div className='pb-16 flex justify-center flex-row items-center'>
          <h3 className='mr-16'>Time Left </h3>
          <TimeLaps />
        </div>
        <div className='flex flex-row flex-wrap'>
          {coupon.map((item, index) => (
            <SingleCoupon
              key={index}
              view={modal}
              setView={(e) => handleModal(e)}
              content={item}
              classes={
                index === 0 ? 'mr-8' : index === couponCount ? 'ml-8' : 'mx-8'
              }
            />
          ))}
        </div>
      </section>
      <Pagination />
      <Modal view={modal} setView={(e) => handleModal(e)} />
    </>
  );
}

export default Coupons;
