  function alphabetSoup(str){

    return [...str].sort().join(""); // .join converts the array of characters back into a string
  }

  console.log(alphabetSoup("supercalifragilisticexbaledocious"));

