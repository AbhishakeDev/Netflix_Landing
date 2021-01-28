const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content items
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tabs-border')
    // Grab content item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //Add show Class
    tabContentItem.classList.add('show')
}

//to remove border
function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tabs-border'))
}

function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'))
}


// Listen to tab clicks
tabItems.forEach(item=>item.addEventListener('click',selectItem));