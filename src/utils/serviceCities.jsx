const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Bogotá", country: "Colombia", countryCode: "CO"},
    { city: "Madrid", country: "España", countryCode: "ES"},
    { city: "Ciudad de México", country: "México", countryCode: "MX"},
    { city: "Guasave", country: "México", countryCode: "MX"},
    { city: "Navojoa", country: "México", countryCode: "MX"},
    { city: "Cozumel", country: "México", countryCode: "MX"},
    // { city: "hawaii", country: "United states of america", countryCode: "EEUU"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)