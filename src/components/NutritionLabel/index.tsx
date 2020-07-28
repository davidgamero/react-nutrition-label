import * as React from 'react'
import styled from 'styled-components'

interface LabelContainerProps {
  backgroundColor?: string,
  color?: string
}

const LabelContainer = styled.div<LabelContainerProps>`
  background-color: ${(props: LabelContainerProps) => (props.backgroundColor || 'white')};
  color: ${(props: LabelContainerProps) => (props.color || 'black')};
`


interface NutritionLabelProps {
  fatGrams: number,
  backgroundColor?: string
}

const NutritionLabel: React.SFC<NutritionLabelProps> = (props: NutritionLabelProps) => {
  return (
    <LabelContainer>
      <h1>NutritionLabel </h1>
      <h2> {props.fatGrams} </h2>
    </LabelContainer>
  )
}

export default NutritionLabel;