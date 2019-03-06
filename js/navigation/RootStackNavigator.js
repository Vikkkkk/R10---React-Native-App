import { createStackNavigator, createAppContainer } from "react-navigation";
import SpeakerModal from "../screen/Speaker";
import NavigationLayout from "./NavigationLayout";

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: SpeakerModal
    },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
