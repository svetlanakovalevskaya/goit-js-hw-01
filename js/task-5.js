const country = prompt("Введите страну доставки:");
if (country === null) {
    console.log("Название страны не найдено!");
} else {
    const normalizedCountry = country.toLowerCase();
    let price;
    switch (normalizedCountry) {
        case "китай": price = 100; break;
        case "чили": price = 250; break;
        case "австралия": price = 170; break;
        case "индия": price = 80; break;
        case "ямайка": price = 120; break;
        default : alert("Нет доставки в эту страну!");
    }
    alert(price === undefined ? "Введите другую страну доставки!" : `Доставка в ${country} будет стоить ${price} кредитов`);
}