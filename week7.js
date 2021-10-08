function getInput() {
    let text = document.getElementById("vowels").value;
    const count = text.match(/[aeiou]/gi).length;
    alert(count);
} 