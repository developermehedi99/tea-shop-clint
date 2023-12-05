import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UPdateT = () => {
    const { _id, name, chef, category, details, photo } = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateTea = { name, chef, category, details, photo };
        console.log(updateTea);

        fetch(`http://localhost:5000/tea/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTea)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'update!',
                        text: 'tea updated successfully done',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }

    return (
        <div className="p-24">
            <h1 className="text-center text-4xl font-bold mb-8">update tea : {name}</h1>
            <form onSubmit={handleUpdate}>
                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="add tea" className="input input-bordered full" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">chef</span>
                        </label>
                        <input type="text" name="chef" defaultValue={chef} placeholder="add tea" className="input input-bordered full" />
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="add tea" className="input input-bordered full" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="add tea" className="input input-bordered full" />
                    </div>
                </div>
                <div className=" gap-6">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="update tea" className="input input-bordered full" />
                    </div>
                </div>
                <button className="btn w-full mt-6 btn-success"><input type="submit" value="update tea" /></button>
            </form>
        </div>
    );
};

export default UPdateT;