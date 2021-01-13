var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomAnimalParts = ["лапа", "уши", "зубы", "хвост"];
var randomAnimal = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Выбор случайного слова из массива randomAnimalPart:
var randomAnimalParts = randomAnimalParts[Math.floor(Math.random() * 4)];
// Выбор случайного слова из массива randomAnimal:
var randomAnimal = randomAnimal[Math.floor(Math.random() * 5)];
// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " ещё более " +  
randomAdjective + " чем "+ randomAnimalParts + " y " + randomAnimal + "!!!";
alert(randomInsult) ;