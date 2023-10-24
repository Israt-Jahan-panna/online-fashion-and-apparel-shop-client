const Banner = () => {
  return (
    <div className="font-SometypeMono">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full"> 
          <img src="https://i.ibb.co/Kq7VPGG/banner1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="absolute">
            <h3 className="relative left-24 text-lg font-semibold ">Get up to 50% off Today Only!</h3>
            <p className="relative left-24 md:md:text-6xl font-extrabold ">Woman Fashion</p>
            <button className="btn bg-[#FF324D] relative left-24 rounded-lg mt-3">Shop Now</button>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/HX9ZPyT/banner2-2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className="absolute">
            <h3 className="relative left-24 md:text-lg font-semibold ">50% off in all products</h3>
            <p className="relative left-24 md:text-6xl font-extrabold ">Man Fashion</p>
            <button className="btn bg-[#FF324D] relative left-24 rounded-lg mt-3">Shop Now</button>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/m8RvCW0/banner3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className="absolute">
            <h3 className="relative left-24 md:text-lg font-semibold ">50% off in Taking your Viewing <br />Experience to Next Level</h3>
            <p className="relative left-24 md:text-6xl font-extrabold ">Summer Sale</p>
            <button className="btn bg-[#FF324D] relative left-24 rounded-lg mt-3">Shop Now</button>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
