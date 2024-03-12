import {Box, Dialog} from '@sanity/ui'
import React, {useCallback} from 'react'
import useScheduleForm from '../../hooks/useScheduleForm'
import useScheduleOperation from '../../hooks/useScheduleOperation'
import {Schedule} from '../../types'
import DialogFooter from './DialogFooter'
import DialogHeader from './DialogHeader'
import {EditScheduleForm} from '../editScheduleForm/EditScheduleForm'

export interface DialogScheduleEditProps {
  onClose: () => void
  schedule: Schedule
}

const DialogScheduleEdit = (props: DialogScheduleEditProps) => {
  const {onClose, schedule} = props

  const {updateSchedule} = useScheduleOperation()
  const {formData, isDirty, onFormChange} = useScheduleForm(schedule)

  // Callbacks
  const handleScheduleUpdate = useCallback(() => {
    if (!formData?.date) {
      return
    }
    // Update schedule then close self
    updateSchedule({
      action: formData.action,
      date: formData.date,
      scheduleId: schedule.id,
    }).then(onClose)
  }, [schedule.id, updateSchedule, onClose, formData?.date, formData?.action])

  return (
    <Dialog
      footer={
        <Box paddingX={4} paddingY={3}>
          <DialogFooter
            buttonText="Update"
            disabled={!isDirty}
            onAction={handleScheduleUpdate}
            onComplete={onClose}
            tone="primary"
          />
        </Box>
      }
      header={<DialogHeader title={`Edit ${formData?.action} schedule`} />}
      id="time-zone"
      onClose={onClose}
      width={1}
    >
      <Box padding={4}>
        <EditScheduleForm action={schedule.action} onChange={onFormChange} value={formData} />
      </Box>
    </Dialog>
  )
}

export default DialogScheduleEdit
