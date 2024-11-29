import Image from "../Image";
import '../App.css';

const Books = () => {
    return (
        <div className="bookContainer">
            <div className="bookWrapper">
                <h4>Book One: The Way of Kings(2010)</h4>
                <Image src='https://m.media-amazon.com/images/I/81cO02Zz6VL._UF1000,1000_QL80_.jpg'></Image>
            </div>
            <div className="bookWrapper">
                <h4>Book Two: Words of Radiance(2014)</h4>
                <Image src='https://m.media-amazon.com/images/I/91tECQfrZTL.jpg'></Image>
            </div>
            <div className="bookWrapper">
                <h4>Book Three: Oathbringer(2017)</h4>
                <Image src='https://m.media-amazon.com/images/I/91x4fchgt2L.jpg'></Image>
            </div>
            <div className="bookWrapper">
                <h4>Book Four: Rhythm of War(2020)</h4>
                <Image src='https://m.media-amazon.com/images/I/81ZR25hH7eL.jpg'></Image>
            </div>
            <div className="bookWrapper">
                <h4>Book Five: Wind and Truth(2024)</h4>
                <Image src='https://m.media-amazon.com/images/I/81oQNU2eoPL._AC_UF1000,1000_QL80_.jpg'></Image>
            </div>
        </div>
    )
};

export default Books;