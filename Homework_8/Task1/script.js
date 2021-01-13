var randomBodyParts = ["волосы", "нос", "уши", "зубы"];
var randomAdjectives = ["глупая", "унылая", "тупая", "ужасная"];
var randomWords = ["муха", "слона", "дерево", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
 // Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * 5)];
// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " словно " +  randomAdjective + " " + randomWord + "!!!";
alert(randomInsult) ;