import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonItem } from "../lib/interfaces/Common";
import { ToggableItem } from './ToggableItem';

type toggableProps = {
    title: string
    contents: CommonItem[]
    containerStyle?: {}
    isOpen: boolean;
    toggleItem: () => void;
    calculateCompletion(items: CommonItem[], arrayId: number): void
}

export const ToggableIHeader = (props: toggableProps ) => {
    const [collectedItems, setCollectedItems] = useState<CommonItem[]>(props.contents)
    

        return (
            <View style={[styles.componentContainer, props.containerStyle]}>
                <TouchableOpacity style={styles.titleContainer} onPress={props.toggleItem}>
                    <Text style={styles.title}>{props.title}</Text>
                    <AntDesign
                        name={props.isOpen ? "caretup" : "caretdown"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                {props.isOpen &&
                    collectedItems.map((element: CommonItem) => (
                        <ToggableItem
                            key={element.id}
                            item={element}
                            onItemClick={(id: number, checked: boolean) => {
                                const index = props.contents.findIndex((item) => item.id === id)

                                if(index !== -1){
                                    const temp = [...collectedItems]
                                    temp[index].checked = checked
                                    setCollectedItems(temp)
                                    props.calculateCompletion(collectedItems, element.id)
                                }
                            }}
                        />
                    ))}
            </View>
        );
}

const styles = StyleSheet.create({
    componentContainer: {
        flex: 1
    },
    titleContainer: {
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: "5%",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    }
})