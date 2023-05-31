/* Toggle btn */

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')

    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

}

/* End of Toggle Btn */

/* Animated Text */
const sentences = ['Powerful Outcomes.', 'Actionable Solutions.', 'Tangible Results.'];
const changingSentence = document.querySelector('.changing-sentence');
let index = 0;

function typeSentence() {
    const sentence = sentences[index];
    let currentCharacter = 0;
  
    const typeInterval = setInterval(() => {
      changingSentence.textContent += sentence.charAt(currentCharacter);
      currentCharacter++;
  
      if (currentCharacter === sentence.length) {
        clearInterval(typeInterval);
        setTimeout(eraseSentence, 2000); // Wait for 2 seconds before erasing the sentence
      }
    }, 100);
  }
  
  function eraseSentence() {
    const sentence = changingSentence.textContent;
    let currentCharacter = sentence.length - 1;
  
    const eraseInterval = setInterval(() => {
      changingSentence.textContent = sentence.substring(0, currentCharacter);
      currentCharacter--;
  
      if (currentCharacter === -1) {
        clearInterval(eraseInterval);
        index = (index + 1) % sentences.length;
        setTimeout(typeSentence, 1000); // Wait for 1 second before typing the next sentence
      }
    }, 50);
  }
  
  // Call the function initially
  typeSentence();
/* End of Animated Text */