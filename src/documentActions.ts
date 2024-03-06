import {DocumentActionComponent} from 'sanity'
import {
  SchedulePublishAction,
  ScheduleUnPublishAction,
} from './documentActions/schedule/ScheduleAction'

type Action = DocumentActionComponent

export default function resolveDocumentActions(existingActions: Action[]): Action[] {
  // Add schedule action after default publish action
  const index = existingActions.findIndex((a) => a.action === 'publish')
  if (index < 0) {
    return [SchedulePublishAction, ScheduleUnPublishAction, ...existingActions]
  }
  return [
    ...existingActions.slice(0, index + 1),
    SchedulePublishAction,
    ScheduleUnPublishAction,
    ...existingActions.slice(index + 1),
  ]
}
