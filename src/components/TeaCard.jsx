import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const TeaCard = ({ tea, setTeas, teas }) => {
    const { _id, name, chef, category, details, photo } = tea;
    const handleDelete = () => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/tea/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tea has been deleted.",
                                icon: "success"
                            });
                            const ramening = teas.filter(cof => cof._id !== _id);
                            setTeas(ramening);
                        }
                    })
            }
        });
    }
    return (
        <div className=" shadow-xl flex justify-between">
            <div>
                <img className="w-[185px] h-[239px]" src={photo} alt="" />
            </div>
            <div className="space-y-2">
                <h2 className="">name: {name}</h2>
                <p>chef:{chef}</p>
                <p>category:{category}</p>
                <p>{details}</p>
            </div>
            <div className=" justify-end">
                <div className="join join-vertical space-y-4">
                    <button className="btn btn-primary">view</button>
                    <Link to={`updateTea/${_id}`}>
                        <button className="btn btn-success">edit</button>
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="btn btn-info">delete</button>
                </div>
            </div>
        </div>
    );
};

export default TeaCard;

TeaCard.propTypes = {
    tea: PropTypes.object,
    setTeas: PropTypes.object,
    teas: PropTypes.object,
}