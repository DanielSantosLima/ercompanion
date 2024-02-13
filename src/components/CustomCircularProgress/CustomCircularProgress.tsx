import { Platform, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Colors } from "../../lib/assets/Colors";
import { globalStyle } from "../../lib/assets/globalStyle";

type CircularProgressProps = {
  value: number;
  activeStrokeColor?: string;
  inActiveStrokeColor?: string;
  progressValueColor?: string;
  valueSuffix?: string;
  duration?: number;
  activeStrokeWidth?: number;
  inActiveStrokeWidth?: number;
  inActiveStrokeOpacity?: number;
  radius?: number;
  strokeLinecap?: "butt" | "round" | "square";
  title: string;
  titleStyle?: {};
};

export const CustomCircularProgress = (props: CircularProgressProps) => {
  const font = Platform.OS === "android" ? "serif" : "Times New Roman";

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 40,
      marginBottom: "5%",
      alignSelf: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.text, styles.title, props.titleStyle]}>
        {props.title}
      </Text>
      <CircularProgress
        value={props.value}
        radius={props.radius ? props.radius : 60}
        progressValueColor={
          props.progressValueColor ? props.progressValueColor : Colors.primary
        }
        duration={props.duration ? props.duration : 500}
        inActiveStrokeColor={
          props.inActiveStrokeColor ? props.inActiveStrokeColor : Colors.accent
        }
        activeStrokeColor={
          props.activeStrokeColor ? props.activeStrokeColor : Colors.primary
        }
        activeStrokeWidth={
          props.activeStrokeWidth ? props.activeStrokeWidth : 15
        }
        inActiveStrokeWidth={
          props.inActiveStrokeWidth ? props.inActiveStrokeWidth : 9
        }
        inActiveStrokeOpacity={
          props.inActiveStrokeOpacity ? props.inActiveStrokeOpacity : 0.25
        }
        strokeLinecap={props.strokeLinecap ? props.strokeLinecap : "round"}
        valueSuffix={props.valueSuffix ? props.valueSuffix : "%"}
        progressValueStyle={{ fontFamily: font }}
      />
    </View>
  );
};
