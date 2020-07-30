import * as React from 'react'
import styled from 'styled-components'

import SeparatorBar from './SeparatorBar'

interface LabelContainerProps {
  backgroundColor?: string,
  color?: string
}

const LabelContainer = styled.div<LabelContainerProps>`
  background-color: ${(props: LabelContainerProps) => (props.backgroundColor || 'white')};
  color: ${(props: LabelContainerProps) => (props.color || 'black')};
  font-family: 'helvetica';
  padding: 3pt;
  text-align: left;
`

const Title = styled.h1`
  font-size: 23pt;
  font-weight: 900;
  margin: 0;
  font-family: 'Franklin Gothic Heavy','Helvetica';
`

const ServingInfo = styled.h2`
  font-size: 8pt;
  font-weight: 400;
  margin: 1pt;
  margin-left: 1pt;
  margin-bottom: 2pt;
`

const AmountPerServing = styled.h2`
  font-size: 8pt;
  font-weight: 700;
  margin: 1pt;
  margin-bottom: 1pt;
`

const CalorieRow = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 1pt;
  margin-bottom: 1pt;
  line-height: 8pt;
  height: 8pt;
`

const CaloriesLabel = styled.h2`
  font-size: 8pt;
  font-weight: 700;
  margin: 0;
  margin-left: 1pt;
  float: left;
`

const CaloriesValue = styled.h2`
  font-size: 8pt;
  font-weight: 100;
  margin: 0;
  margin-left: 2pt;
  float: left;
`

const CaloriesFromFat = styled.h2`
  font-size: 8pt;
  font-weight: 100;
  display: inline-flex;
  margin: 0;
  margin-right: 1pt;
  margin-left: auto;
  float: right;
`

const PercentDailyValueLabel = styled.h2`
  line-height: 6pt;
  font-size: 6pt;
  font-weight: 100;
  text-align: right;
  margin: 0;
  margin-top: 2pt;
  margin-bottom: 5pt;
`

interface NutritionLabelProps {
  fatGrams: number,
  servingSize: string,
  servingsPerContainer: string,
  amountPerServing: string,
  calories: number,
  caloriesFromFat: number,
  percentDailyValue: string,
  backgroundColor?: string,
  //?=maybe for type
}

const NutritionLabel: React.SFC<NutritionLabelProps> = (props: NutritionLabelProps) => {
  return (
    <LabelContainer backgroundColor={props.backgroundColor}>
      <Title>Nutrition Facts </Title>
      <ServingInfo>
        {`Serving Size ${props.servingSize}`}
      </ServingInfo>
      <ServingInfo>
        {`Servings Per Container ${props.servingsPerContainer}`}
      </ServingInfo>
      <SeparatorBar height={'7pt'} color={props.backgroundColor} />
      <AmountPerServing>
        {`Amount Per Serving ${props.amountPerServing}`}
      </AmountPerServing>
      <SeparatorBar height={'0.5pt'} color={props.backgroundColor} />
      <CalorieRow>
        <CaloriesLabel>
          {`Calories `}
        </CaloriesLabel>
        <CaloriesValue>
          {props.calories}
        </CaloriesValue>
        <CaloriesFromFat>
          {`Calories from Fat ${120}`}
        </CaloriesFromFat>
      </CalorieRow>
      <SeparatorBar height={'3pt'} color={props.backgroundColor} />
      <PercentDailyValueLabel>
        {`% Daily Value* ${props.percentDailyValue}`}
      </PercentDailyValueLabel>
      <SeparatorBar height={'0.5pt'} color={props.backgroundColor} />
      <h2> {props.fatGrams} </h2>
    </LabelContainer>
  )
}

export default NutritionLabel;