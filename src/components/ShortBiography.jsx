import Painting from "./Painting";
import "./Styles/ShortBiography.css"

function ShortBiography() {
    return (
        <div className="shortBiography">
            <Painting imgSource="https://www.leonardodavinci.net/images/gallery/self-portrait.jpg"
                      name="Leonardo da Vinci: self-portrait"
                      year="1512"/>
            <div>
                <p><span className="bold">Born:</span> April 15, 1452, Anchiano, near Vinci, Republic of Florence [Italy]</p>
                <p><span className="bold">Died:</span> May 2, 1519, Cloux [now Clos-Lucé], France (aged 67)</p>
                <p><span className="bold">Notable Works:</span> “Battle of Anghiari” “Last Supper” “Leda” “Mona Lisa”</p>
                <p><span className="bold">Movement / Style:</span> Early Renaissance Renaissance</p>
                <p><span className="bold">Subjects Of Study:</span> painting perspective proportion anatomy mechanics</p>
            </div>
        </div>
    );
}

export default ShortBiography;