interface CountryBoxProps {
    imageUrl: string;
    countryName: string;
  }
  
  const CountryBox: React.FC<CountryBoxProps> = ({ imageUrl, countryName }) => {
    return (
      <div className="max-w-xs mx-auto overflow-hidden shadow-lg h-400 relative border border-gray-300 rounded-md">
        <a href="#">
          <img className="w-full h-full object-cover" src={imageUrl} alt={countryName} />
          <div className="absolute inset-x-0 bottom-0 p-1" style={{ backgroundColor: '#ac476c' }}>
            <div className="text-white text-center">
              <div className="text-xl mb-2">{countryName}</div>
            </div>
          </div>
        </a>
      </div>
    );
  };
  
  export default CountryBox;
  