export async function getOptions() {
  const request = await fetch("https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=*");

//   const request = await axios(
//     "https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=*"
//   );
  const options = await request.json();

  return options;
}

export async function getLatesOptions() {
  const options = await getOptions();
  return options;
}
