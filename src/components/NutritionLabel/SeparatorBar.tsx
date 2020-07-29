import * as React from 'react'
import styled from 'styled-components'

interface BarProps {
  height: string,
  color?: string,
}

const Bar = styled.div<BarProps>`
  background-color: ${(props: BarProps) => (props.color || 'black')};
  height: ${(props: BarProps) => (props.height || '1px')};
`

interface SeparatorBarProps {
  height: string;
  color?: string;
}

const SeparatorBar = (props: SeparatorBarProps) => {
  return (
    <Bar
      height={props.height}
      color={props.color}
    />
  )
}

export default SeparatorBar