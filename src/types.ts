import {ValidationMarker} from 'sanity'

export interface NormalizedTimeZone {
  abbreviation: string
  alternativeName: string
  mainCities: string
  name: string
  namePretty: string
  offset: string
  value: string
}

/**
 * @public
 */
export interface PluginOptions {
  /**
   * Date format to use for input fields. This must be a valid `date-fns` {@link https://date-fns.org/docs/format formatted string}.
   * @defaultValue 'dd/MM/yyyy HH:mm'
   */
  inputDateTimeFormat?: string
}

export interface Schedule {
  author: string
  action: ScheduleAction
  createdAt: string
  dataset: string
  description: string
  documents: {
    documentId: string
    documentType?: string
  }[]
  executeAt: string | null
  executedAt?: string
  id: string
  name: string
  projectId: string
  state: ScheduleState
  stateReason: string
}

export type ScheduleAction = 'publish' | 'unpublish'

export interface ScheduleFilter {
  state: ScheduleState
  title: string
}

export interface ScheduleFormData {
  date: string
  action: ScheduleAction
}

export type ScheduleSort = 'createdAt' | 'executeAt'

export type ScheduleState = 'cancelled' | 'scheduled' | 'succeeded'

export interface ValidationStatus {
  isValidating: boolean
  validation: ValidationMarker[]
}

/**
 * key is schedule.id, NOT documentId
 */
export type ScheduledDocValidations = Record<string, ValidationStatus>
