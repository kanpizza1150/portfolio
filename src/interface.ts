import { RefObject } from 'react'
import { Sections } from './hook/useNavigate'

export interface PageProps {
  handleSectionChange: (section: Sections) => void
  sectionRef: RefObject<HTMLDivElement>
}
