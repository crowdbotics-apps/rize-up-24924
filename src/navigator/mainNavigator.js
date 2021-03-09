import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile22213070Navigator from '../features/UserProfile22213070/navigator';
import ArticleList213043Navigator from '../features/ArticleList213043/navigator';
import ArticleList213042Navigator from '../features/ArticleList213042/navigator';
import ArticleList213041Navigator from '../features/ArticleList213041/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile22213070: { screen: UserProfile22213070Navigator },
ArticleList213043: { screen: ArticleList213043Navigator },
ArticleList213042: { screen: ArticleList213042Navigator },
ArticleList213041: { screen: ArticleList213041Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
