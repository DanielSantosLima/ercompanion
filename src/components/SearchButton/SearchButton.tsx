import { Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../lib/assets/Colors';
import { styles } from './styles';

type SearchComponentProps = {
  isInputVisible: boolean;
  toggleInputVisibility: () => void;
  textSearch: string;
  setTextSearch: (text: string) => void;
};

export const SearchButton = (props: SearchComponentProps) => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={props.toggleInputVisibility} style={styles.searchIcon}>
        <Feather name="search" size={30} color={Colors.accent} />
      </TouchableOpacity>
      {props.isInputVisible && (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type to search on the page"
            style={styles.textInput}
            onChangeText={(text: string) => props.setTextSearch(text)}
            value={props.textSearch}
          />
          <TouchableOpacity onPress={() => {
            Keyboard.dismiss();
            props.setTextSearch('');
          }}>
            <MaterialIcons name="clear" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


