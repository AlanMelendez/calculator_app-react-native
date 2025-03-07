import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';
import { useCalculator } from '@/hooks/useCalculator';


interface CalculatorButtonProps {
    text: string;
    color?: string;
    blackText?: boolean;
    width?: number;
    height?: number;
    onPressAction: () => void;
    doublesSize?: boolean;
}

const CalculatorButton = ({text, color = Colors.darkGray, blackText = false, onPressAction, doublesSize=false}:CalculatorButtonProps) => {
  
 
  
    return (
    <Pressable 
        style={({pressed})=> (
            {
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.5 : 1,
                width: doublesSize ? 180 : 70,
            }
        )}
        onPress={()=>{
            Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Error
            );
            onPressAction();
        }}
        >
        <Text style={{
            ...globalStyles.buttonText,
            color: blackText ? Colors.background : Colors.textPrimary,
            // 
           
        }} >{text}</Text>
    </Pressable>
  )
}

export default CalculatorButton