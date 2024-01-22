import CountryBox from "@/components/countrybox";

export default function Suppliers(){
    const countries = [
        "Egypt",
        "Lebanon",
        "Kuwait",
        "Saudi Arabia",
        "Morocco",
        "Tunisia",
        "Jordan",
        "Syria",
        "United Arab Emirates (UAE)",
        "Qatar",
        "Bahrain",
        "France",
        "Cyprus",
        "Greece",
        "Italy",
        "Maldives",
        "Portugal",
        "Spain",
        "Turkey",
      ];
    return(
        <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8 ml-8 text-[#ac476c]">Wedding Suppliers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <CountryBox key={index} imageUrl={`/assets/countries/${country}.jpeg`} countryName={country} />
        ))}
      </div>
    </div>
    )
}