import { useState } from "react";
import { View } from "react-native";
import { Accordion } from "../lib/interfaces/Accordion";
import { CommonItem } from "../lib/interfaces/Common";
import { ToggableHeader } from "./ToggableIHeader";

type AccordionProps = {
  item: Accordion[];
  calculateCompletion(items: CommonItem[], arrayId: number): void;
};

export const AccordionComponent = (props: AccordionProps) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (itemId: number) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === itemId ? null : itemId,
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {props.item.map((item: Accordion) => (
        <ToggableHeader
          key={item.id}
          title={item.location}
          contents={item.contents}
          isOpen={openItemId === item.id}
          toggleItem={() => toggleItem(item.id)}
          calculateCompletion={(items: CommonItem[]) => {
            props.calculateCompletion(items, item.id);
          }}
        />
      ))}
    </View>
  );
};
