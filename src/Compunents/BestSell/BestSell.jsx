const BestSell = () => {
  return (
    <div className="w-full h-[350px] bg-[#8ed1fc] px-28 mt-24 ">
      <div className="flex justify-between">

        <div className="mt-24">
          <div className="absolute">
          <h3 className="  text-lg font-semibold relative lg:left-24">
          New season trends!
          </h3>
          <p className="  md:md:text-4xl font-extrabold relative lg:left-24">Best Summer Collection</p>
          <button className="py-2 px-3 text-white bg-[#FF324D] relative lg:left-24 rounded-sm mt-3 ">
            Shop Now
          </button>
          </div>
        </div>
        <div className="carousel carousel-center h-[350px] max-w-md p-4 space-x-4 rounded-box">
         
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/Rvf1JJ2/pdt8.jpg"
                className="rounded-box"
              />
             
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/hcqGgL9/pdt21-600x600.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/3k5nd3V/pdt12-600x600.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/wg2BvGJ/pdt5-600x600.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src=" https://i.ibb.co/56VQMFM/pdt2-600x600.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/kHFJsG0/pdt1-600x600.jpg "
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src=" https://i.ibb.co/3NqTcrK/pdt14.jpg  "
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src=" 
                https://i.ibb.co/0mY0Qwt/pdt18-600x600.jpg   "
                className="rounded-box"
              />
            </div>
          
            <div className="carousel-item">
              <img
                src=" https://i.ibb.co/D8pyPnS/pdt19-600x600.jpg"
                className="rounded-box"
              />
            </div>
          </div> 
      </div>
    </div>
  );
};

export default BestSell;
