let credits = 23580;
const pricePerDroid = 3000;
const countDroid = prompt("Сколько дроидов хотите приобрести?");
if (countDroid === null) {
    console.log("Отменено пользователем!");
} else if (Number(countDroid) === 0) {
    console.log("Введите количество больше 0!");
} else if (countDroid > 0) {
    const totalPrice = pricePerDroid * countDroid;
    console.log(totalPrice > credits ? "Недостаточно средств на счету!" : `Вы купили ${countDroid} дроидов, на счету осталось ${credits = credits - totalPrice} кредитов.`);
}