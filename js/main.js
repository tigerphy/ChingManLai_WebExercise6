/*
Use getElementById() to find the <li> element that contains the word "Strawberry".
Print out both the html element and the innerHTML. Change the background color
of the list element to red.*/

const strawberry=(html)=>{

  console.log(document.getElementById("berry"));
  document.getElementById("berry").style.backgroundColor = "red";
  console.log(`I found the berry: ${document.getElementById('berry').innerHTML}`);
};

strawberry();

/*Now find the <li> element that contains the word Orange. Use the QuerySelector()
method with a CSS [attribute=value] Selector. Change the background color of the
list element to orange.*/

const orange=(html)=>{
document.querySelector('li[data-foodtype]').style.backgroundColor="orange";
};

console.log(document.querySelector('li[data-foodtype]'));
console.log(`I found the fruit: ${document.querySelector('li[data-foodtype]').innerHTML}`);

orange();

/*Use getElementsByTagName() to return a collection of all the <li>elements in
the document. Use console.log to see that it is a HTMLCollection with 6 child
elements. Study the HTMLCollection.*/
console.log(document.getElementsByTagName("li"));




/*Use a for loop to print out the name of the fruits from the previous
collection.In the loop, change the background color of the list element containing "Pear"
to green. Give the <li>elements a width of 100px and change the list-style-type to
none to remove the bullets.
    */
const y=document.getElementsByTagName("li");
  for (let i = 0; i < y.length; i++) {
  y[i].style.listStyle="none";
  y[i].style.width="100px";
  y[3].style.backgroundColor="green";
  console.log(y[i].innerHTML);
}

/*Use QuerySelectorAll() to return a collection of all the <li>elements in the document.
    Use console.log to see that it actually is a NodeList with 6 child elements.*/

console.log(document.querySelectorAll('li'));

/*Use forEach() to iterate over the list and print out the name of the fruits.
    Add borders around each <li>element.*/

const nodeList=document.querySelectorAll('li');
nodeList.forEach(function(item){
  item.style.borderStyle = "solid";
  console.log(item.innerHTML);
});

