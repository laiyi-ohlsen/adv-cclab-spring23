const key = ""

const api_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="+key+""
async function getMars() {
    
      // Making an API call (request)
      // and getting the response back
      const response = await fetch(api_url);
    
      // Parsing it to JSON format
      const data = await response.json();
      
      console.log(data)

      let url = data.photos[0].img_src;

      document.getElementById("image").src=url;
}
    
    // Calling the function
getMars();


