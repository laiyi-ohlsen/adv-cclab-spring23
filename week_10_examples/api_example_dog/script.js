const api_url = "https://random.dog/woof.json?ref=apilist.fun";

async function getDog() {
    
      // Making an API call (request)
      // and getting the response back
      const response = await fetch(api_url);
    
      // Parsing it to JSON format
      const data = await response.json();
      
      console.log(data)

      let url = data.url;

      document.getElementById("dog").src=url;
}
    
    // Calling the function
getDog();


