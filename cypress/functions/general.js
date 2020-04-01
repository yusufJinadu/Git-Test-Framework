
export function RegistrationDataCreator(){
    const data = 
    {
        "desiredResidence": {
            "postCode": "56821",
            "city": "Ellenz-Poltersdorf",
            "street": "Moselweinstraße",
            "houseNumber": "117",
            "includedDistricts": [
                "Ellenz",
                "Poltersdorf"
            ]
        },
        "desiredProperty": {
            "maxPrice": 5000,
            "minLivingSpace": 70,
            "minNumberOfRooms": 2,
            "earliestDateAvailable": "current"
        },
        "personalInformation": {
            "firstName": "Johny",
            "lastName": "Blank",
            "email": generateRandomEmail(),
            "password": "sample123"
        }
    }
    cy.writeFile("../fixtures/registrationData.json", data )
}

export function generateRandomEmail(){
    let letters = ['a','b','c']
    let char1 = Math.floor(Math.random() * 10000)
    let char2 = letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)]
    let fullChar = char1 + char2
    return `yjinadu+johnyblank${fullChar}@immomio.de`
}