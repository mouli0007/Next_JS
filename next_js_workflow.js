
##################### NEXT JS ###############################

Advantages !

Next Js provides server side rendering 
Good for SEO
Soo Fast ! 

#### NEXT JS Environment Setup #########

/// => npx create-next-app .

//=> npm run dev


######### Routes in Next JS ##################

///=> Create a js file inside the pages folder for routing

/// = > import {useRouter } from 'next/router' For Dynamic Routing 

############ Syntax ##############

const Profile = () => {
  const router = useRouter();

  const { username } = router.query;

  return (
    <>
      <h1>{username} product </h1>
    </>
  );
};


########### Link ###########

To Navigate through different pages

import Link from "next/link";

######### Syntax
 
  <Link href="/">Back TO Home</Link>


########### HEAD ##########

Tom Make Meta Tags For Our Pages

import Head from "next/head";

########Syntax

 <Head>
     <title>About Our Tech</title>
  </Head>


### 404 ### 

You should Give Excat Number as JS File 
