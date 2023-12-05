import Swal from 'sweetalert2'

const AddT = () => {
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

        fetch('http://localhost:5000/tea', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTea)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'user add successfully done',
                        icon: 'success',
                        confirmButtonText: 'done'
                    })
                }
            })
    }
    return (
        <div className="p-24">
            <h1 className="text-center">add tea</h1>
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
    );
};

export default AddT;