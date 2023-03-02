
############### Reasons to use Next JS over react

1 SEO 

2 Data Fetching => 

3 Page Pre-rendering => 

react => the html file loads initially and then javascript code runs 

          it could take a while if any kind of data is loaded from the server
###

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, 
instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. 
When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. 
(This process is called hydration.)

#####
next js => It Pre renders the page and 
          pre renders the html content and all the data it needed
		  and it generate pre-rendered html page with data and sent it back to the client
		  it will also pre renders all the javascriptcode and its functionalities
		  
		  
		  ######## Two forms of pre-rendering ##########
		  
		  Data fetching in Next.js allows you to render your content in different ways, depending on your application's use case. These include
		  pre-rendering with Server-side Rendering or Static Generation, 
		  and updating or creating content at runtime with Incremental Static Regeneration.
		  
		  1 Static Generation => all the pages are pre rendered during the build time
		                   Pre-generate a page with the data prepared in the server side during the build time
						   
			2 Server Side Rendering => pages are created at the request time or run time when a request reached the server
