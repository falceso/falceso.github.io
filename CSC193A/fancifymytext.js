const makeBigger = () => {
  textArea = document.getElementById("spoopy-input").style.fontSize = "4em"; // Use proper units, such as "4em", and proper capitalization
};

const styleChange = () => {
  const textArea = document.getElementById("spoopy-input");
  const fancy = document.getElementById("fancyMode");

  if (fancy.checked) {
    // Selecting the "FancyShmancy" radio button, should make the text bold, underline, and blue.
    // alert("FANCY");
    textArea.style.color = "blue";
    textArea.style.fontWeight = "bold";
    textArea.style.textDecoration = "underline";
  } else {
    // alert("BORING");
    textArea.style.color = "black";
    textArea.style.fontWeight = "normal";
    textArea.style.textDecoration = "none";
  }
};

const mooText = () => {
  const textArea = document.getElementById("spoopy-input");
  let text = textArea.value.toUpperCase();

  // Adds a suffix of "-Moo" to the last word of each sentence.
  const str = text.split("."); // Consider a sentence to be a string of text that ends with a period character
  for (let i = 0; i < str.length - 1; i++) {
    let words = str[i].trim().split(" "); // Use the String/array methods split and join.
    if (words.length > 0) {
      // At least 1 word, or else error for empty text.
      words[words.length - 1] += "-Moo"; // Append "-Moo" to last word.
    }
    str[i] = words.join(" "); // Connect back w/ following text.
  }

  textArea.value = str.join(". "); // Update text value with modified text.
};
