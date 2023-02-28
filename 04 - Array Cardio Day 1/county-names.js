/* 

This is how I went to wikipaedia and found and removed the county names of England



const firstLink = document.querySelectorAll(".wikitable a:nth-of-type(1)")

const filteredLinksC = firstLink.filter(link => !link.classList.contains("mw-redirect"))

const countyName = filteredLinksC.map(name => name.textContent)

const justCountyNames = countyName.filter(item => item !== "Population" && item !== "Metropolitan and non-metropolitancounties" && !item.startsWith("[") && !item.endsWith("]"))

This resulted in ....

*/

const englishCounties = [
  "Bedfordshire",
  "Bedford",
  "Berkshire",
  "Bracknell Forest",
  "Bristol",
  "Buckinghamshire",
  "Buckinghamshire",
  "Cambridgeshire",
  "Peterborough",
  "Cheshire",
  "Cheshire East",
  "City of London",
  "Cornwall",
  "Isles of Scilly",
  "Cumbria",
  "Derbyshire",
  "Derby",
  "Devon",
  "Plymouth",
  "Dorset",
  "Durham",
  "County Durham",
  "East Riding of Yorkshire",
  "East Sussex",
  "Brighton and Hove",
  "Essex",
  "Gloucestershire",
  "South Gloucestershire",
  "Greater London",
  "London boroughs",
  "Greater Manchester",
  "Hampshire",
  "Portsmouth",
  "Herefordshire",
  "Hertfordshire",
  "Isle of Wight",
  "Kent",
  "Medway",
  "Lancashire",
  "Blackburn with Darwen",
  "Leicestershire",
  "Leicester",
  "Lincolnshire",
  "North Lincolnshire",
  "Merseyside",
  "Norfolk",
  "North Yorkshire",
  "Northamptonshire",
  "North Northamptonshire",
  "Northumberland",
  "Nottinghamshire",
  "Nottingham",
  "Oxfordshire",
  "Rutland",
  "Shropshire",
  "Shropshire",
  "Somerset",
  "Bath and North East Somerset",
  "South Yorkshire",
  "Staffordshire",
  "Stoke-on-Trent",
  "Suffolk",
  "Surrey",
  "Tyne and Wear",
  "Warwickshire",
  "West Midlands",
  "West Sussex",
  "West Yorkshire",
  "Wiltshire",
  "Worcestershire",
];

const numOfCounties = englishCounties.reduce((sum) => sum + 1, 0);
console.log(numOfCounties);
