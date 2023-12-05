import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const AddTea = () => {
    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const addTea = { name, chef, category, details, photo };
        console.log(addTea);

        // send data form backend
        fetch('http://localhost:5000/tea',{
            method: 'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addTea)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if(data){
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
           }
        })
    }
    return (
        <div className="p-24">
            <h1 className="text-center text-5xl">Add New tea</h1>
            <p className="text-lg font-normal w-2/3 mx-auto text-center mt-3 mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <div>
                <form onSubmit={handleFormSubmit}>
                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="add tea" className="input input-bordered full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="add tea" className="input input-bordered full" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">category</span>
                            </label>
                            <input type="text" name="category" placeholder="add tea" className="input input-bordered full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">details</span>
                            </label>
                            <input type="text" name="details" placeholder="add tea" className="input input-bordered full" />
                        </div>
                    </div>
                    <div className=" gap-6">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="add tea" className="input input-bordered full" />
                        </div>
                    </div>
                    <button className="btn w-full mt-6 btn-success"><input type="submit" value="add tea" /></button>
                </form>
            </div>

        </div>
    );
};

export default AddTea;