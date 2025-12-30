function firstChar(text) {
  // We iterate through the string character by character
  for (let i = 0; i < text.length; i++) {
    // If the current character is not a space, return it immediately
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  // If the loop finishes (meaning only spaces or empty string), return empty string
  return '';
}

// Example usage:
// const text = prompt("Enter text:");
// alert(firstChar(text));