import {Stack} from '@sanity/ui'
import React, {PropsWithChildren} from 'react'
import {ScheduleAction, ScheduleFormData} from '../../types'
import ScheduleForm from './ScheduleForm'

interface Props {
  onChange?: (formData: ScheduleFormData) => void
  value?: ScheduleFormData | null
  action: ScheduleAction
}

export function EditScheduleForm(props: PropsWithChildren<Props>) {
  const {onChange, value, action} = props

  return (
    <Stack space={4}>
      {props.children}
      <ScheduleForm action={action} onChange={onChange} value={value} />
    </Stack>
  )
}
