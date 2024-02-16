import { AntDesign } from "@expo/vector-icons";
import { memo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../lib/assets/Colors";
import { globalStyle } from "../lib/assets/globalStyle";
import { CommonItem } from "../lib/interfaces/Common";
import { ToggableItem } from "./ToggableItem";

type toggableProps = {
  title: string;
  contents: CommonItem[];
  containerStyle?: object;
  isOpen: boolean;
  toggleItem: () => void;
  calculateCompletion(items: CommonItem[], arrayId: number): void;
};

export const ToggableHeader = memo(function ToggableIHeader(
  props: toggableProps,
) {
  const [collectedItems, setCollectedItems] = useState<CommonItem[]>(
    props.contents,
  );

  const styles = StyleSheet.create({
    componentContainer: {
      flex: 1,
    },
    titleContainer: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: Colors.primary,
      marginVertical: "3%",
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: props.isOpen ? Colors.primary : Colors.background,
    },
    title: {
      fontSize: 25,
      fontFamily: "Mantinia",
      color: props.isOpen ? Colors.accent : Colors.primary,
    },
  });

  return (
    <View style={[styles.componentContainer, props.containerStyle]}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={props.toggleItem}
      >
        <Text style={[globalStyle.text, styles.title]}>{props.title}</Text>
        <AntDesign
          name={props.isOpen ? "caretup" : "caretdown"}
          size={24}
          color={props.isOpen ? Colors.accent : Colors.primary}
        />
      </TouchableOpacity>
      {props.isOpen &&
        collectedItems.map((element: CommonItem) => (
          <ToggableItem
            key={element.id}
            item={element}
            onItemClick={(id: number, checked: boolean) => {
              const index = props.contents.findIndex((item) => item.id === id);

              if (index !== -1) {
                const temp = [...collectedItems];
                temp[index].checked = checked;
                setCollectedItems(temp);
                props.calculateCompletion(collectedItems, element.id);
              }
            }}
          />
        ))}
    </View>
  );
});
