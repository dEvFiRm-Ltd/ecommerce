import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import ProductAttributes from '../../components/ProductAttributes';
import SingleCoupon from '../../components/coupones/SingleCoupon';
import SingleItem from '../../components/SingleItem';
import { FlashSaleData } from '../../components/core/core';
import Stars from '../../components/Stars';
import Feedback from '../../components/Feedback';
import Image from 'next/image';
import Breadcrumb from '../../components/Breadcrumb';
const contents = [
  { img: `/img/item01.jpg` },
  { img: `/img/item-2.jpg` },
  { img: `/img/item-3.jpg` },
  { img: `/img/item-04.jpg` },
  { img: `/img/item-05.jpg` },
  // {img:}
];

function ProductDetails() {
  const [suggested, setSuggested] = useState([]);
  const [data, setData] = useState([]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [collapse, setCollapse] = useState(1);
  const [modal, setModal] = useState(false);

  let slider1 = useRef(null);
  let slider2 = useRef(null);

  useEffect(() => {
    setSuggested(FlashSaleData);
    setNav1(slider1);
    setNav2(slider2);
    setData(contents);
  }, []);

  const handleModal = (e) => {
    setModal(e);
  };
  const settingsOne = {
    asNavFor: nav2,
    fade: true,
    arrows: false,
    ref: (slider) => (slider1 = slider),
  };
  const settingsTwo = {
    asNavFor: nav1,
    slidesToShow: data.length,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
    infinite: false,
    ref: (slider) => (slider2 = slider),
  };
  return (
    <>
      <Breadcrumb />
      <section className='container bg-white flex py-16 mb-16 flex-row'>
        <div className='w-2/5 flex flex-col mr-16'>
          <div className='w-full'>
            <Slider {...settingsOne}>
              {data.map((v, i) => (
                <div key={i} className='relative min-h-[365px] w-full'>
                  <Image
                    src={v.img}
                    layout='fill'
                    className='w-full h-full'
                    alt=''
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className='w-full'>
            <Slider {...settingsTwo}>
              {data.map((v, i) => (
                <div
                  key={i}
                  className='cursor-pointer mx-4 h-[71px] w-[71px] rounded-md overflow-hidden relative block '
                >
                  <Image src={v.img} layout='fill' alt='' />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='w-3/5'>
          <div className='flex flex-col pb-12 border-b border-ash '>
            <h3 className='capitalize mb-6'>
              vikoda natural mineral water 5L Pomelo Emer hair growth booster
              spray 100ml.
            </h3>
            <span className='flex flex-row items-center mb-20 '>
              <p className='mr-4'> 4.5/5</p>
              <span className='mr-4'>
                <i className='fa-solid fa-star text-yellow'></i>
                <i className='fa-solid fa-star text-yellow'></i>
                <i className='fa-solid fa-star text-yellow'></i>
                <i className='fa-solid fa-star text-yellow'></i>
                <i className='fa-solid fa-star-half text-yellow'></i>
              </span>
              <p className='text-gray-600'> (500) | Sold: 4158 </p>
            </span>
            <h4 className='text-[20px] font-semibold '>500$</h4>
            <span className='flex flex-row'>
              <h5 className='text-[16px] mr-8 line-through mt-4 font-semibold text-gray '>
                500$
              </h5>
              <h5 className='text-[16px] mt-4 font-semibold text-orange '>
                -20%
              </h5>
            </span>
            <h6 className='py-4 px-8 text-orange border border-orange rounded-sm mt-10 text-xs inline-block w-[140px] '>
              Discount to: 320.000đ
            </h6>
          </div>
          <div className='flex flex-col pb-12 border-b border-ash '>
            <div className='flex flex-col my-6 first:mt-12 last:mb-12 '>
              <h5 className='text-md leading-[150%] relative pl-10 mb-4  '>
                {' '}
                <span className='absolute top-0 left-0 h-full w-4 bg-green'></span>{' '}
                Color
              </h5>
              <div className='flex flex-wrap flex-row w-full '>
                <ProductAttributes text='Green' />
                <ProductAttributes text='Black' />
                <ProductAttributes text='Blue' />
                <ProductAttributes text='Gsdreen' />
                <ProductAttributes text='Grcsdeen' />
                <ProductAttributes text='Greasen' />
              </div>
            </div>
            <div className='flex flex-col my-6 first:mt-12 last:mb-12 '>
              <h5 className='text-md leading-[150%] relative pl-10 mb-4  '>
                {' '}
                <span className='absolute top-0 left-0 h-full w-4 bg-green'></span>{' '}
                Color
              </h5>
              <div className='flex flex-wrap flex-row w-full '>
                <ProductAttributes text='Green' />
                <ProductAttributes text='Black' />
                <ProductAttributes text='Blue' />
                <ProductAttributes text='Gsdreen' />
                <ProductAttributes text='Grcsdeen' />
                <ProductAttributes text='Greasen' />
              </div>
            </div>
            <div className='flex flex-col my-6 first:mt-12 last:mb-12 '>
              <h5 className='text-md leading-[150%] relative pl-10 mb-4  '>
                {' '}
                <span className='absolute top-0 left-0 h-full w-4 bg-green'></span>{' '}
                Color
              </h5>
              <div className='flex flex-wrap flex-row w-full '>
                <ProductAttributes text='Green' />
                <ProductAttributes text='Black' />
                <ProductAttributes text='Blue' />
                <ProductAttributes text='Gsdreen' />
                <ProductAttributes text='Grcsdeen' />
                <ProductAttributes text='Greasen' />
              </div>
            </div>
          </div>
          <div className='flex flex-col pb-12 border-b border-ash '>
            <div className='flex flex-col my-6 first:mt-12 last:mb-12 '>
              <h5 className='text-md leading-[150%] mb-12 relative pl-10  '>
                {' '}
                <span className='absolute top-0 left-0 h-full w-4 bg-green'></span>{' '}
                Transport fee
              </h5>
              <span className='flex flex-col'>
                <p className=''>
                  {' '}
                  <span className='font-bold'>20.000đ - 50.000đ</span> depending
                  on region{' '}
                </p>
                <p className=''>
                  {' '}
                  Pre-delivery estimate:
                  <span className='font-bold'>05/09/2021</span>
                </p>
              </span>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-col my-6 first:mt-12 last:mb-12 '>
              <h5 className='text-md leading-[150%] mb-12 relative pl-10  '>
                {' '}
                <span className='absolute top-0 left-0 h-full w-4 bg-green'></span>{' '}
                Transport fee
              </h5>
              <SingleCoupon />
            </div>
          </div>
        </div>
      </section>
      <section className='container px-0 pb-16 flex flex-wrap'>
        <div className='w-[65%] bg-white p-8 flex flex-col '>
          <div className='flex flex-row '>
            <button
              onClick={() => setCollapse(1)}
              className={`w-1/2 py-10 text-center relative active:bg-ash ${
                collapse === 1 ? '' : 'hover:bg-gray'
              }`}
              type='button'
            >
              <h5
                className={`leading-[150%] capitalize ${
                  collapse === 1 ? 'text-green' : 'text-black'
                } `}
              >
                Overview
              </h5>
              <span
                className={`absolute bottom-[3px] left-1/2 transition-all -translate-x-1/2 h-[2px] w-0 ${
                  collapse === 1 && 'w-36'
                } bg-green  `}
              ></span>
            </button>
            <button
              onClick={() => setCollapse(2)}
              className={`w-1/2 py-10 text-center relative active:bg-ash ${
                collapse === 2 ? '' : 'hover:bg-gray'
              }`}
              type='button'
            >
              <h5
                className={`leading-[150%] capitalize ${
                  collapse === 2 ? 'text-green' : 'text-black'
                } `}
              >
                Rating &amp; Reviews
              </h5>
              <span
                className={`absolute bottom-[3px] left-1/2 transition-all -translate-x-1/2 h-[2px] w-0 ${
                  collapse === 2 && 'w-36'
                } bg-green  `}
              ></span>
            </button>
          </div>
          {/* Descriptions */}
          <div
            className={` flex-col transition-all ${
              collapse === 1 ? 'flex ' : 'hidden'
            } `}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil amet
            dolores ut dolor nisi doloremque dicta porro voluptatibus quia,
            beatae vel provident quaerat temporibus eos eius saepe tenetur
            nostrum illum est, debitis ipsam nesciunt assumenda quam. Maxime
            dolores minus similique dignissimos quod sed voluptatibus et eius
            modi! Aut asperiores architecto debitis labore culpa deserunt enim
            nulla minus neque molestias expedita illum a, repudiandae cum ipsa
            at pariatur est qui saepe unde quos odio ratione. Numquam maxime
            debitis, voluptates ad itaque perspiciatis natus corporis nam?
            Eveniet, dolor nam? Itaque, perspiciatis nulla expedita illo dolore
            facilis culpa, maiores voluptatem dignissimos porro eos?
          </div>
          {/* Descriptions */}
          {/* Rating & Reviews */}

          <div
            className={` flex-col transition-all ${
              collapse === 2 ? 'flex ' : 'hidden'
            } `}
          >
            <div className='my-16 pt-16 pb-[1px] bg-white flex flex-row justify-around'>
              <div className='flex flex-col'>
                <h3 className='font-normal mb-16'>Product Reviews</h3>
                <div className='flex flex-row'>
                  <div className='flex flex-row mr-16'>
                    <h2 className='text-30 font-semibold text-[#767676] '>
                      5/
                    </h2>
                    <h2 className='text-24 font-semibold text-[#767676] '>5</h2>
                  </div>
                  <div className='flex flex-row text-yellow '>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star-half'></i>
                  </div>
                </div>
                <h3 className='leading-[230%] font-normal '>(20 Reviews)</h3>
              </div>
              <div className='flex flex-col'>
                <Stars count={5} />
                <Stars count={4} />
                <Stars count={3} />
                <Stars count={2} />
                <Stars count={1} />
              </div>
            </div>
            <div className=''>
              <Feedback />
              <Feedback />
              <Feedback />
            </div>
          </div>

          {/* Rating & Reviews */}
        </div>
        <div className='w-[35%] pl-16'>
          <div className='bg-white flex flex-col'>
            <div className='py-10 text-center '>
              <h5 className='text-center'>Product Suggestions</h5>
            </div>
            <div className=' flex flex-row flex-wrap'>
              {suggested.map((item, index) => (
                <div
                  className='w-1/2 pb-16 px-8 odd:pl-0 even:pr-0 '
                  key={index}
                >
                  <SingleItem content={item} size='h-[217px]' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
