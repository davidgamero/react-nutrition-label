import * as React from 'react'
import styled from 'styled-components'

import SeparatorBar from './SeparatorBar'

interface RowContainerProps {
  indent?: string;
}

const RowContainer = styled.div<RowContainerProps>`
  margin-top: 0;
  margin-left: ${(props: RowContainerProps) => (props.indent || '0pt')};
  padding: 0;
`

const TextContainer = styled.div`
  line-height: 8pt;
  padding-bottom: 2pt;
`

interface NutrientTextProps {
  isBold?: boolean;
}

const NutrientText = styled.p<NutrientTextProps>`
  font-weight: ${(props: NutrientTextProps) => (props.isBold ? 700 : 100)};
  font-family: Helvetica;
  font-size: 8pt;
  margin-left: 2pt;
  padding: 0px;
  display: inline;
`

interface NutrientRowProps {
  label: string;
  value: string;
  hideBar?: boolean;
  color?: string;
  boldLabel?: boolean;
  indent?: string;
}

const NutrientRowSeparatorBarHeight = '0.25pt';

const NutrientRow = (props: NutrientRowProps) => {
  return (
    <RowContainer indent={props.indent}>
      {props.hideBar ? null : <SeparatorBar
        height={NutrientRowSeparatorBarHeight}
        color={props.color}
      />}
      <TextContainer>
        <NutrientText isBold={props.boldLabel}>
          {props.label}
        </NutrientText>
        <NutrientText>
          {props.value}
        </NutrientText>
      </TextContainer>

    </RowContainer>

  )
}

export default NutrientRow