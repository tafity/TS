export{};

// Create a "closeButtons" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "closeButtons";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a closeButtons button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("closeButtons");
i;
for (i = 0; i < closeButtons.length; i++) {
    let closeButton: Element = closeButtons[i];
    closeButton.addEventListener ("click", ()=> {
        const li = closeButton.parentElement;
        if (!!li) {
            li.style.display = "none";
        }
       
    })
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLElement | null = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target: HTMLElement = <HTMLElement>ev.target;
        if (target){
            if (target.tagName === 'LI') {
                target.classList.toggle('checked');
              }
        }
      }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
  const li:HTMLElement = document.createElement("li");
  const input:HTMLInputElement | null = <HTMLInputElement>document.getElementById("myInput");
  if (!input) return;
    const inputValue = input.value;
  
 
  const t: Text = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    const ul = document.getElementById("myUL");
    if (ul){
        ul.appendChild(li);
    }
   
  }
    input.value = "";
  
 

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "closeButtons";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeButtons.length; i++) {
    let closeButton: Element = closeButtons[i];
    closeButton.addEventListener ("click", ()=> {
        const li = closeButton.parentElement;
        if (!!li) {
            li.style.display = "none";
        }
       
    })
  }
}