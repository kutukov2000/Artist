import "./Styles/FamousWork.css"

function FamousWork() {
    return (
        <div className="FamousWork flex justify-content-center">
            <div className="flex w-65">
                <img src="https://media.cnn.com/api/v1/images/stellar/prod/131107152744-mona-lisa.jpg?q=w_2000,h_3000,x_0,y_0,c_fill" alt="" />
                <div>
                    <h1>Mona Lisa</h1>
                    <h2>Artist: Leonardo da Vinci</h2>
                    <p>Year: 1503–1506, perhaps continuing until c. 1517</p>
                    <h3>Description</h3>
                    <hr />
                    <p>The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood. The woman sits markedly upright in a "pozzetto" armchair with her arms folded, a sign of her reserved posture. Her gaze is fixed on the observer. The woman appears alive to an unusual extent, which Leonardo achieved by his method of not drawing outlines (sfumato). The soft blending creates an ambiguous mood "mainly in two features: the corners of the mouth, and the corners of the eyes".</p>
                </div>
            </div>
        </div>
    );
}

export default FamousWork;