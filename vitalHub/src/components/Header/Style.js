import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// (Header Container)
export const HeaderContainer = styled(LinearGradient).attrs({
  colors: ["#60BFC5", "#496BBA"],
  start: { x: 0, y: 1 },
  end: { x: 1.5, y: 0 },
  locations: [-0.5, 3.7],
})`
  width: 100%;
  height: 144px;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 20px 20px;
`;

// Header Container -> (Header Content)
export const HeaderContent = styled.View`
  height: 68px;
  width: 91.1%;

  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

export const UserImage = styled.Image`
  height: 60px;
  width: 60px;
`;

// (Titles Container)
export const TitlesContainer = styled.View`
  width: 65.5%;
`;
// Titles -> welcome
export const WelcomeTitle = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 14px;
  color: #4e4b59;
`;

// Titles -> userName
export const UserNameTitle = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 16px;
  color: #fbfbfb;
`;

// Notification Icon Button
export const NotificationBtn = styled(TouchableOpacity).attrs({})``;

export const NotificationIcon = styled(Ionicons).attrs({
  name: "notifications",
  size: 24,
  color: "white",
})``;
