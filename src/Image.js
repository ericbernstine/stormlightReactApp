import './App.css';
const Image = ({ src }) => {
    return (
        <div>
            <img 
                src={src} 
                alt="A stormlight archive book"
            />
        </div>
    );
};

export default Image;