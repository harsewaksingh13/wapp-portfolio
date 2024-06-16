import { ReactNode } from "react"
import { Icon, Item } from ".."


export type TagsProps = {
    tags?: Item[]
}

export const Tags = (props: TagsProps) => {
    return (
        <div className="flex-1">
            {props.tags?.map(t => {
                return <SkillTag>{t.title}</SkillTag>
            })}
        </div>
    )
}

export interface SkillTagProps {
    icon?: string
    children: ReactNode
}

const SkillTag = (props: SkillTagProps) => {
    var svg = props.icon || '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity">  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>'
    return <div
        className="m-2 inline-flex items-center font-bold leading-sm px-3 p-4 pr-5 bg-primaryLight text-primary rounded-full"
    >
        <Icon className="mr-2" svg={svg} />
        {props.children}
    </div>
}