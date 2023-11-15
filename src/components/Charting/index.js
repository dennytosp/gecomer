import { COLORS } from '@/constants'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import styles from './styles'

const Charting = ({}) => {
  const screenWidth = Dimensions.get('window').width
  return (
    <View style={styles.wrapperCenter}>
      <Text>Bezier Line Chart</Text>
      <BarChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                // 1200, 2200, 3200, 4000, 5000, 6200,
              ],
            },
          ],
        }}
        width={screenWidth - 24}
        height={220}
        yAxisLabel=""
        yAxisSuffix="D"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: COLORS.border,
          backgroundGradientFrom: COLORS.black,
          backgroundGradientTo: COLORS.secondary,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(00, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: COLORS.purple,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  )
}

export default Charting
