import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from './Src/Navigation/MainNavigation';

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <MainNavigation  {...navigation} />
    </NavigationContainer>
  )
};
export default App;