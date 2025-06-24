const dashContainer = document.getElementById("dashContainer");
const keyboard = document.getElementById("keyboard");
const category = document.getElementById("category");

let wrongCount=0;

const wordList = [
  {
    category: "body",
    word: ["arms", "hand", "ears", "eyes"],
  },
  {
    category: "direction",
    word: ["east", "west", "north", "south"],
  },
  {
    category: "family",
    word: ["daughter", "son", "mother", "father"],
  },
  {
    category: "numbers",
    word: ["eight", "nine", "ten", "eleven", "twelve"],
  },
  {
    category: "occupation",
    word: ["driver", "nurse", "teacher", "engineer"],
  },
  {
    category: "sports",
    word: ["cricket", "football", "tennis", "kabaddi"],
  },
];

const getRandomWord = (range) => Math.floor(Math.random() * range);
const getCategory = wordList[getRandomWord(wordList.length)];
const getCategoryWord =
  getCategory.word[getRandomWord(getCategory.word.length)];
console.log(getCategoryWord);

category.innerHTML = getCategory.category;

for (let i = 0; i < getCategoryWord.length; i++) {
  dashContainer.appendChild(document.createElement("div"));
}

for (let i = 97; i <= 122; i++) {
  let tempbtn = document.createElement("button");
  tempbtn.innerHTML = `&#${i}`;

  tempbtn.addEventListener("click", () => {
    checkLetter(String.fromCharCode(i));
    tempbtn.setAttribute("disabled", true);
    // tempbtn.classList.add("disabledBtn");
  });
  keyboard.appendChild(tempbtn);
}

const checkLetter = (letter) => {
  if (getCategoryWord.includes(letter))
     {
    for (let i = 0; i < getCategoryWord.length; i++)
     {
      if (getCategoryWord[i] == letter) {
        dashContainer.children[i].innerHTML = letter;
      }
    }
  }
  else if(!getCategoryWord.includes(letter))
  {
    wrongCount+=1;
    if(wrongCount==6)
    {
      
    }
  }
};


