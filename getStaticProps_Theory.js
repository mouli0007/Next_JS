####### Explanation ##########

  1 Static Generation => all the pages are pre rendered during the build time
		                   Pre-generate a page with the data prepared in the server side during the build time
						   
						   export async function getStaticProps(){
						   
						   // Server Side Code
						   // No Client Side Code
						   // No access to wiindow object
						   }
		  ##################
		  #########################
		  
		  
		  ######## Incremental Static generation ###############
		  
		  Pre-Generated page ==> 
		  Re-Generate it on every request at most  every X seconds
		   A New Pregenerated page will shown to the visitor with the updated data
		  
		  
		  ########### Synatx #############
		  return {
				props: {
				products: data.products,
					},

					// it willl regenerate for every 60 sec on the server ####(!important)####
					revalidate: 60,
					};
		  
		  ###############################
		  ###########################
		  
		  ############### In Built Parameter ###################
		  
		  Syntax ###
		  export async function getStaticProps (context){
		  
		  
		  // We Get an object as a prameter with some extra information
		  // Ex: dynamic params or dynamic path or any kind of information related to the page
		  }







############ Syntax ##############


export async function getStaticProps() {
  //  Code will never be visible on client side !

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },

    // it willl regenerate for every 60 sec
    revalidate: 60,
  };
}
