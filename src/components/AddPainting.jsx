import { useForm } from "react-hook-form";
import './Styles/AddPainting.css'

function AddPainting({ onAddPicture }) {
    const {
        register, 
        handleSubmit,
        reset
    } = useForm();

    const create = (painting)=>{
        onAddPicture(painting);
        reset()
    }

    return (
        <div className="AddPainting">
            <div className="w-65">
                <h1>Add Picture</h1>
                <form onSubmit={handleSubmit(create)}>
                    <label>Name:</label>
                    <input {...register("name")} type="text"/>
                    <label>Image Url:</label>
                    <input {...register("imgSource")} type="text"/>
                    <label>Year:</label>
                    <input {...register("year")} type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddPainting;