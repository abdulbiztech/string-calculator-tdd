function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const sanitizedNumbers = numbers.replace(/\n/g, delimiter);
  const numberArray = sanitizedNumbers.split(delimiter).map(Number);

  const negatives = numberArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
