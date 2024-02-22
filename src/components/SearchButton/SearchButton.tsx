import { Accordion } from "@/lib/interfaces/Accordion";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Keyboard, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../../lib/assets/Colors";
import { styles } from "./styles";

type SearchComponentProps = {
  isInputVisible: boolean;
  toggleInputVisibility: () => void;
  textSearch: string;
  handleSearchText: (text: string) => void;
  dataArray: Accordion[];
  filterDataArray: (filteredArmor: Accordion[]) => void;
};

export const SearchButton = (props: SearchComponentProps) => {
  const handleFilterArmor = () => {
    if (props.textSearch.trim() === "") {
      // If input text is empty, render all items in armorsArray
      props.filterDataArray(props.dataArray);
    } else {
      // Filter armor based on textSearch
      const filteredArmor = props.dataArray.filter((category) =>
        category.contents.some((item) =>
          item.name.toLowerCase().includes(props.textSearch.toLowerCase()),
        ),
      );
      // Pass filtered armor to parent component
      props.filterDataArray(filteredArmor);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity
        onPress={props.toggleInputVisibility}
        style={styles.searchIcon}
      >
        <Feather name="search" size={30} color={Colors.accent} />
      </TouchableOpacity>
      {props.isInputVisible && (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type to search on the page"
            style={styles.textInput}
            onChangeText={(text: string) => {
              props.handleSearchText(text);
              handleFilterArmor();
            }}
            // onEndEditing={handleFilterArmor}
            value={props.textSearch}
          />
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              props.handleSearchText("");
            }}
          >
            <MaterialIcons name="clear" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
