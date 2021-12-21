const countries=[
    {name:"Austria",capital:"Vienna",continent:"Europe",population:1.9,currency:"Euro"},
    {name:"Bahrain",capital:"Manama",continent:"Asia",population:1.3,currency:"Bahraini dinar"},
    {name:"United States",capital:"Washington,D.C",continent:"Nort America",population:99.95,currency:"US Dollar"},
    {name:"Zimbabwe",capital:"Harare",continent:"Africa",population:99.97,currency:"US Dollar"},
    {name:"Thailand",capital:"Bangkok",continent:"Asia",population:99.99,currency:"Baht"},
    {name:"Taiwan",capital:"Taipei",continent:"Asia",population:98.97,currency:"New taiwan dollar"},
]
// filter method to get all countries of Asia continent
let ContinentAasia=countries.filter((i)=>i.continent==="Asia");

// get all countries having population less than 2Lakhs
let populationLess=countries.filter((i)=>i.population<2);

// countries having currency us dollar
let UsCurrency=countries.filter((i)=>i.currency==="US Dollar");

// add all countries populations total is variable assigned initial value as zero , 2nd parameter is i
let totalPopulation=countries.reduce((total,i)=>total+i.population,0);

console.log("countries of Asia continent",ContinentAasia);

console.log("countries with population less than 2L",populationLess);

console.log("countries having currency UD Dollar",UsCurrency);

console.log("Total population of all countries in lakhs",totalPopulation);

// for each  loop
countries.forEach((i)=>{
    console.log(`name:${i.name}  capital:${i.capital}`);
})

