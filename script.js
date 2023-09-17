function vowelCheck(){
    // Get the value of the input field with id="vowelfield" (the textarea in index.html)
    let text = document.getElementById("vowelfield").value;
    // store the number of occurence of vowels in the text
    let countVowel = 0;

    // convert any text entered to lower case
    text = text.toLowerCase();

    // loop through the text to check if each character is a vowel
    for(let index = 0; index < text.length; index++){
        // get the character at each index
        let vowelword = text.charAt(index);
        // check if the character is a vowel
        if(checkingVowel(vowelword)){
            countVowel++;
        }
    }

    // update the value in the span with id="vowel_result" (the span in index.html)
    const vowelResult = document.getElementById("vowel_result");
    // display the result
    vowelResult.innerHTML = countVowel;
}

// function to check if a character is a vowel
function checkingVowel(vowelword){
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(vowelword);
}