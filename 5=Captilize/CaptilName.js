function capitalizeFirstLetter(name) {
    if (typeof name !== 'string') {
        return 'Invalid input: Please enter a string';
    }
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
  }
  
  // Example usage:
  const userName = ("dinkar thakur"); // write the name in place of Dinkar thakur......  
  const capitalizedName = capitalizeFirstLetter(userName);
  console.log(capitalizedName);
  