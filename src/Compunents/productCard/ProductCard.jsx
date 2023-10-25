
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const ProductCard = ({myProduct , setProduct , products}) => {
    const {
      _id,
        brand,
        description,
        image,
        name
        } = products ||{}
        const handelDetails = () =>{

        }
 const handelDelete = _id => {
  console.log(_id)
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      fetch(`http://localhost:5000/myproduct/${_id}`,{

        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire(
            'Deleted!',
            'Your product has been deleted.',
            'success'
          )
          const remaining = myProduct.filter(pro => pro._id !== _id)
          setProduct(remaining);
        }
      })
    }
  })

 }
    return (
        <div className="font-SometypeMono" >
            <div className="card h-96 px-4 lg:card-side bg-base-100 shadow-md">
  <figure><img src={image}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title mt-2 font-extrabold text-xl uppercase">{brand}</h2>
    <h2 className="card-title mt-2 font-extrabold text-xl">{name}</h2>
    <p className="text-xs">{description}</p>
    <div className="flex gap-4">
      
      <button onClick={handelDetails} className="p-2 rounded-md bg-[#FF324D]">Details</button>
      <button onClick={()=> handelDelete(_id)} className="p-2 bg-[#FF324D] rounded-md">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;