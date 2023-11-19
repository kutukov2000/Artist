import Painting from "./Painting";

function Collection({paintings}) {
    return (
        <div>
            <h1 className="text-align-center">Collection of arts by Leonardo da Vinchi</h1>
            <div className="flex justify-content-center">
                <div className="flex wrap w-65">
                        {paintings.map((art, index) =>
                            <Painting imgSource={art.imgSource} name={art.name} year={art.year}/>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Collection;