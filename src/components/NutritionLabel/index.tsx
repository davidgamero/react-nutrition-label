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
  padding: 1pt;
  text-align: left;
`

const Title = styled.h1`
  font-size: 23pt;
  margin: 0;
`

const ServingInfo = styled.h2`
  font-size: 8pt;
  font-weight: 400;
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
      <ServingInfo>
        {`Amount Per Serving ${props.amountPerServing}`}
      </ServingInfo>
      <ServingInfo>
        {`Calories ${props.calories}`}
      </ServingInfo>
      <ServingInfo>
        {`Calories from Fat ${props.caloriesFromFat}`}
      </ServingInfo>
      <ServingInfo>
        {`% Daily Value* ${props.percentDailyValue}`}
      </ServingInfo>
      <h2> {props.fatGrams} </h2>
      <SeparatorBar height={'7pt'} color={props.backgroundColor} />
    </LabelContainer>
  )
}

export default NutritionLabel;