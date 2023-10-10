//drag-item-list & drag-item
const dragItem = document.querySelectorAll('.drag-item');
const dragList = document.querySelectorAll('.drag-item-list');

// Store the dragged item.
let selectItem;

// Item
dragItem.forEach((item) => {
    item.addEventListener('dragstart', onDragstart);
})

// Catagory
dragList.forEach((list) => {
    list.addEventListener('dragover', onDragOver);
    list.addEventListener('dragenter', onDragEnter);
    list.addEventListener('drop', onDrop);
})

function onDrop() {
    console.log("Drop")
    this.append(selectItem)
    selectItem = null;
}

function onDragstart() {
    selectItem = this;
    console.log(selectItem);
}

function onDragEnter(e) {
    e.preventDefault();
}

function onDragOver(e) {
    e.preventDefault();
}