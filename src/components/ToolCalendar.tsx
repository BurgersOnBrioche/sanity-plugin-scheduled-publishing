import {ChevronLeftIcon, ChevronRightIcon} from '@sanity/icons'
import {Box, Button, Flex, Text} from '@sanity/ui'
import React from 'react'
import styled from 'styled-components'
import {TOOL_HEADER_HEIGHT} from '../constants'

const ButtonContainer = styled(Flex)`
  border-bottom: 1px solid var(--card-border-color);
  border-top: 1px solid var(--card-border-color);
`

const ToolCalendar = () => {
  return (
    <Box>
      <Flex
        align="center"
        paddingLeft={4}
        style={{
          borderBottom: '1px solid var(--card-border-color)',
          minHeight: `${TOOL_HEADER_HEIGHT}px`,
          position: 'sticky',
          top: 0,
        }}
      >
        <Flex align="center" flex={1} justify="space-between">
          <Text weight="medium">Month Year</Text>
          <Flex>
            <Button
              icon={ChevronLeftIcon}
              mode="bleed"
              radius={0}
              style={{height: '55px', width: '55px'}}
            />
            <Button
              icon={ChevronRightIcon}
              mode="bleed"
              radius={0}
              style={{height: '55px', width: '55px'}}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        padding={4}
        style={{aspectRatio: '350/280', background: '#fafafa', position: 'relative'}}
      >
        <Text muted size={1}>
          Calendar days
        </Text>
      </Flex>
      <ButtonContainer flex={1}>
        <Button
          fontSize={1}
          mode="bleed"
          padding={4}
          radius={0}
          style={{width: '100%'}}
          text="Today"
        />
      </ButtonContainer>
    </Box>
  )
}

export default ToolCalendar