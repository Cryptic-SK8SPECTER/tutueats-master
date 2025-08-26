import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  OrderScreen,
  EditProfileScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  FoodDetailsScreen,
  ReviewsScreen,
  NotificationScreen,
  FoodDeliveryApp,
  RestaurantDetailScreen,
  FavoriteScreen,
  FilterScreen,
  MenuScreen,
} from "./../screens";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Menu",
  screens: {
    Home: {
      screen: HomeScreen,
    },
    Login: LoginScreen,
    Order: OrderScreen,
    EditProfile: EditProfileScreen,
    SignUp: SignUpScreen,
    Forget: ForgotPasswordScreen,
    Details: FoodDetailsScreen,
    Reviews: ReviewsScreen,
    Notifications: NotificationScreen,
    Food: FoodDeliveryApp,
    RestaurantDetails: RestaurantDetailScreen,
    Favorite: FavoriteScreen,
    Filter: FilterScreen,
    Menu: MenuScreen,
  },
});

const MenuNavigator = createStaticNavigation(RootStack);

export default MenuNavigator;
