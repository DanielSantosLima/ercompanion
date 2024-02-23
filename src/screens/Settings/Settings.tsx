import { Colors } from "@/lib/assets/Colors";
import { globalStyle } from "@/lib/assets/globalStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Modal,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";

// const keys = await AsyncStorage.getAllKeys();
// AsyncStorage.multiRemove(keys);

export const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [secondModalVisible, setSecondModalVisible] = useState<boolean>(false);
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState<boolean>(false);

  const closeModal = () => {
    setModalVisible(false);
  };
  const closeSecondModal = () => {
    setSecondModalVisible(false);
  };
  const closeConfirmationModal = () => {
    setConfirmationModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.screenView}>
      <View style={styles.resetContainer}>
        <Text style={styles.text}>Include DLC (Coming soon)</Text>
        <Switch />
      </View>
      <View style={styles.resetContainer}>
        <Text style={styles.text}>Reset Progression</Text>
        <TouchableOpacity
          style={styles.resetButtonContainer}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={[globalStyle.text, { fontSize: 25 }]}>
                Be Careful!
              </Text>
              <Text style={[globalStyle.text, { fontSize: 25 }]}>
                This is an irreversible action
              </Text>
              <Text
                style={[
                  globalStyle.text,
                  {
                    fontSize: 19,
                  },
                ]}
              >
                Are you really sure???
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  padding: "10%",
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { backgroundColor: Colors.primary },
                  ]}
                  onPress={() => {
                    setSecondModalVisible(true);
                  }}
                >
                  <Text style={styles.modalText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { backgroundColor: Colors.error },
                  ]}
                  onPress={closeModal}
                >
                  <Text style={styles.modalText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={closeSecondModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={[globalStyle.text, { fontSize: 25 }]}>
                Last Chance!!!
              </Text>
              <Text style={[globalStyle.text, { fontSize: 25 }]}>
                All your progress will be reseted
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  padding: "10%",
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { backgroundColor: Colors.primary },
                  ]}
                  onPress={async () => {
                    const keys = await AsyncStorage.getAllKeys();
                    AsyncStorage.multiRemove(keys);
                    closeSecondModal();
                    closeModal();
                    setConfirmationModalVisible(true);
                  }}
                >
                  <Text style={styles.modalText}>Reset it</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { backgroundColor: Colors.error },
                  ]}
                  onPress={() => {
                    closeSecondModal();
                    closeModal();
                  }}
                >
                  <Text style={styles.modalText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmationModalVisible}
        onRequestClose={closeConfirmationModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={[globalStyle.text, { fontSize: 25 }]}>
                Progress Reseted!!!
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  padding: "10%",
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { backgroundColor: Colors.error },
                  ]}
                  onPress={closeConfirmationModal}
                >
                  <Text style={styles.modalText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};
