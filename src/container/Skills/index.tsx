import { FC, ReactElement, useState } from 'react'
import * as Styled from './styles'
import { Section } from '../../styles'
import { PageProps } from '../../interface'
import Header from '../../component/Header'
import { ReactComponent as FEIcon } from '../../images/code.svg'
import { ReactComponent as BEIcon } from '../../images/server.svg'
import { ReactComponent as OtherIcon } from '../../images/tool.svg'
import { ReactComponent as ExpandIcon } from '../../images/arrow.svg'
interface IItem {
  header: string
  desc: string
  icon: ReactElement
}
const Skills: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  const items: IItem[] = [
    {
      header: 'Frontend Developer',
      desc: 'More than 2 year',
      icon: <FEIcon />,
    },
    { header: 'Backend Developer', desc: 'About 4 months', icon: <BEIcon /> },
    {
      header: 'Development Related',
      desc: 'Other skills',
      icon: <OtherIcon />,
    },
  ]
  return (
    <Section ref={sectionRef}>
      <Header header='Skills' subHeader='My technical skills' />

      <Styled.ContentWrapper>
        {items.map((item: IItem) => (
          <Item {...item} />
        ))}
      </Styled.ContentWrapper>
    </Section>
  )
}

const Item = (item: IItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <Styled.SkillBox isOpen={isOpen}>
      <Styled.SkillHeaderWrapper>
        <Styled.SkillHeaderWrapperInner>
          <Styled.SkillIcon>{item.icon}</Styled.SkillIcon>
          <Styled.SkillHeader>
            <h2>{item.header}</h2>
            <h4>{item.desc}</h4>
          </Styled.SkillHeader>
        </Styled.SkillHeaderWrapperInner>
        <Styled.ExpandIcon
          isOpen={isOpen}
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          <ExpandIcon />
        </Styled.ExpandIcon>
      </Styled.SkillHeaderWrapper>
      {isOpen && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quasi quisquam, sit repellendus laborum architecto illo aliquid
          quaerat mollitia accusamus sint repellat rerum magnam dolore quis non!
          Distinctio, non voluptate.
        </div>
      )}
    </Styled.SkillBox>
  )
}

export default Skills
