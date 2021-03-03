
//Array of Object this one name :
const products = [ 

    {id: 1, name : 'laptop', price : 500},
    {id: 2,name : 'Iphone', price : 900},
    {id: 3, name : 'TV', price: 1900},
    {id: 4, name : 'Ipad', price: 600},
];



// Map

const names = products.map(product => product.name); 


//console.log(name) // Display all name 



// Method no: 1;
//------------------------

 const prices = products.map(pd => pd.price);
//console.log(prices);
// display all price 

// Method no : 2

//------------------------------
 //const prices = products.map (pd =>{


    //return pd.price;

 //})

 //console.log(prices);


// forEach 


//products.forEach(product => console.log(product.name ));


// filter the Products
// const cheaper = products.filter(pd => pd.price < 100);

// console.log(cheaper);


// Reminig Product show : 



 const rei = products.filter(pd => pd.id !=4);
 //console.log(rei);


 //finding product on Array :



 const findingproduct = products.filter(pd => pd.name === 'laptop')

 console.log(findingproduct);
 

