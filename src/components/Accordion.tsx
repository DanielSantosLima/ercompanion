import { useState } from "react"
import { View } from "react-native"
import { Accordion } from "../lib/interfaces/Accordion"
import { CommonItem } from "../lib/interfaces/Common"
import { ToggableIHeader } from "./ToggableIHeader"

type AccordionProps = {
    item: Accordion[]
    calculateCompletion(items: CommonItem[], arrayId: number): void
}

export const AccordionComponent = (props: AccordionProps) => {
    const [openItemId, setOpenItemId] = useState<number | null>(null);

    

    const toggleItem = (itemId: number) => {
        setOpenItemId(prevOpenItemId => (prevOpenItemId === itemId ? null : itemId));
    };

    return (
        <View>
            {props.item.map((item: Accordion) => (
                <ToggableIHeader
                    key={item.id}
                    title={item.location}
                    contents={item.contents}
                    isOpen={openItemId === item.id}
                    toggleItem={() => toggleItem(item.id)}
                    calculateCompletion={(items: CommonItem[], arrayId: number) => {
                        props.calculateCompletion(items, item.id)
                    }}
                />
            ))}
        </View>
    );
}

