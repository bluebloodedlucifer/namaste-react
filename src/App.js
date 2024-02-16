import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutClass from "./components/AboutClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/Usercontext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

// const resObj = {
//     "info": {
//       "id": "747259",
//       "name": "FreshMenu",
//       "cloudinaryImageId": "f01db3336e4f8453d2cb0d703291261c",
//       "locality": "EJIPURA",
//       "areaName": "Koramangala",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Continental",
//         "Chinese",
//         "Oriental",
//         "Asian",
//         "Healthy Food",
//         "Fast Food",
//         "Indian",
//         "Desserts"
//       ],
//       "avgRating": 4.1,
//       "parentId": "398",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 32,
//         "lastMileTravel": 0.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "32 mins",
//         "lastMileTravelString": "0.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-01-08 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "textExtendedBadges": [
//           {
//             "iconId": "guiltfree/GF_Logo_android_3x",
//             "shortDescription": "options available",
//             "fontColor": "#7E808C"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "",
//                   "fontColor": "#7E808C",
//                   "iconId": "guiltfree/GF_Logo_android_3x",
//                   "shortDescription": "options available"
//                 }
//               }
//             ]
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "EVERY ITEM",
//         "subHeader": "@ ₹129"
//       },
//       "loyaltyDiscoverPresentationInfo": {
//         "logoCtx": {
//           "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//         },
//         "freedelMessage": "FREE DELIVERY",
//         "badgeType": "BADGE_TYPE_ONE_LITE"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "isNewlyOnboarded": true,
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
//       "context": "seo-data-1d3ce80a-875e-4190-91e7-a6aded29ac26"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/freshmenu-ejipura-koramangala-bangalore-747259",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// }

const AppComponent = () => {

    const [userName, setUserName] = useState()

    useEffect(() => {
        const data = {
            name: "Aryan Panchal"
        }
        setUserName(data.name);
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <AboutClass/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/cart",
                element: <Suspense fallback={<Shimmer/>}><Cart/></Suspense>
            },
        ],
        errorElement: <Error/>
    },

])

const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(<AppComponent/>)

root.render(<RouterProvider router={appRouter}/>)