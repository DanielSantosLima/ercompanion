import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "../lib/assets/Colors";
import { globalStyle } from "../lib/assets/globalStyle";
import { CommonItem } from "../lib/interfaces/Common";

type AccordionItemProps = {
  item: CommonItem;
  onItemClick(id: number, checked: boolean): void;
};

export const ToggableItem = (props: AccordionItemProps) => {
  const [isChecked, setIsChecked] = useState(props.item.checked);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handlePress = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    props.onItemClick(props.item.id, newCheckedState);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={[globalStyle.text, styles.title]}>{props.item.name}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View
          style={[
            styles.checkBox,
            { backgroundColor: isChecked ? Colors.primary : Colors.background },
          ]}
        >
          {isChecked && (
            <MaterialCommunityIcons
              name="sword-cross"
              size={24}
              color={Colors.accent}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={{ marginVertical: "5%", fontWeight: "bold" }}>
                {props.item.name}
              </Text>
              <Text>Need to know where to find it? Follow the link</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(props.item.externalLink);
                  closeModal();
                }}
              >
                <Text style={styles.externalLink}>
                  {props.item.externalLink}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: "2%",
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 20,
    width: "80%",
  },
  checkBox: {
    borderRadius: 4,
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%",
    marginBottom: "2%",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%", // Adjust the width of the modal content
  },
  externalLink: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  closeButton: {
    marginTop: 10,
  },
});
