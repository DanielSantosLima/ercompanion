import { useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import CircularProgress from "react-native-circular-progress-indicator"
import { AccordionComponent } from '../../components/Accordion.tsx'
import { Colors } from "../../lib/assets/Colors.ts"
import { bossess } from '../../lib/data/bossess/index.ts'
import { calculateAccordionCompletion } from "../../lib/functions/calculateAccordionCompletion.ts"
import { Accordion } from "../../lib/interfaces/Accordion.ts"
import { CommonItem } from "../../lib/interfaces/Common.ts"
import { styles } from "./styles.ts"


export const BossessScreen = () => {
  const [bossessArray, setBossessArray] = useState<Accordion[]>(bossess)
  const [totalCompletion, setTotalCompletion] = useState<number>(0)

    const calculateCompletion = (value: CommonItem[], arrayId: number) => {
      
        const parentIndex = bossessArray.findIndex(item => item.id === arrayId)

        const temp = [...bossessArray]
        temp[parentIndex].contents = value
        setBossessArray(temp)

        const percentage = calculateAccordionCompletion(bossessArray)
        
        setTotalCompletion(percentage)
    }

    return(
        <SafeAreaView style={styles.screenContainer}>
          <ScrollView style={styles.scrollView}>
          <View style={styles.circularProgressContainer}>
            <Text style={styles.progressTitle}>Bossess Defeated</Text>
            <CircularProgress
              value={totalCompletion}
              radius={60}
              progressValueColor={'#000'}
              duration={500}
              inActiveStrokeColor={Colors.accent}
              activeStrokeColor={Colors.primary}
              activeStrokeWidth={15}
              inActiveStrokeWidth={9}
              inActiveStrokeOpacity={0.25}
              strokeLinecap="round"
              valueSuffix='%'
            />
          </View>
          <AccordionComponent item={bossess} calculateCompletion={calculateCompletion}/>
          </ScrollView>
        </SafeAreaView>
    )
}

