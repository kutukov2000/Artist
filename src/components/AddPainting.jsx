import { useState } from "react";
import './Styles/AddPainting.css'

function AddPainting({ onAddPicture }) {
    const [name, setName] = useState('');
    const [imgSource, setImgSource] = useState('');
    const [year, setYear] = useState('');

    const handleAddPicture = () => {
        const newPicture = {
            name,
            imgSource,
            year
        };
        onAddPicture(newPicture);
        setName('');
        setImgSource('');
        setYear('');
    };

    return (
        <div className="AddPainting">
            <div className="w-65">
                <h1>Add Picture</h1>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                    <label htmlFor="url">Image Url:</label>
                    <input
                        type="text"
                        value={imgSource}
                        onChange={(e) => setImgSource(e.target.value)}
                        required/>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required/>
                    <button onClick={handleAddPicture}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddPainting;