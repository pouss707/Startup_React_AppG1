

import HomePage from "../pages/home.page";
import AboutPage from "../pages/about.page";
import ContactPage from "../pages/contact.page";
import FormValidate from "../challanges/formValidate.challange";
import UserItem from "../components/UserItem.component";
import PostList from "../components/postList.component";
import PostItem from "../components/postItem.component";
const RoutesConfig = [
 { path: "/home" , element: <HomePage /> },
  { path : "/about" , element: <AboutPage /> },
  { path : "/contact", element: <ContactPage />},   
  { path: "/formVAlidate", element:<FormValidate />},
  // user : router | userId : parametre 
  { path : "/user/:userId", element:<UserItem />},
  // postList
  { path : "/posts" , element: <PostList />},
  { path: "/post/:postId", element: <PostItem />}
  // posts/postId
];


export default RoutesConfig;