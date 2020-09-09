let item = { name: "Apple"};
let item1 = { name: "Ramen"};
let item2 = { name: "Shampoo"};


let state = {
  pageHeader: "shopping cart"
  items: [item, item1, item2],
};

function renderItems() {
  itemsStr = "";
  state.items.forEach(function (item, index) {
    itemsStr += `
    <div>
     ${item.name} 
     <span data-index='${index}' onclick='updateItem(this)' >update</span>  
    </div>`;
  });
  return itemsStr;
}

function updateItem(itemDiv) {
  let index = itemDiv.dataset.index;
  let item = state.items[index]; 
  console.log(item);

  let name = prompt("Enter name");
  item.name = name;

  render();
}

function addItem() {
  debugger;
  let item = {};

  let name = prompt("Enter name");
  item.name = name;

  state.items.push(item);

  render();
}

function render() {
  htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  <div onclick='addItem()'>add item</div>
                  ${renderItems()}
                </div>`;

  renderItems();

  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString;
}

render();


// SEE CARS_JS folder!!!!!!!!!