import cls from './Sidebar.module.scss'
import {classNames} from 'shared/lib/classNames'
import { ReactNode, useState } from 'react';

type SidebarProps = {
    children?: ReactNode
    className?: string;
}

export const Sidebar = ({className, children}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onToggle = () => setCollapsed(!collapsed)
    return (
        <aside className={classNames(cls.sideBar, {[cls.collapsed]:  collapsed}, [className])}>

            <button onClick={onToggle}>toggle</button>
            <div className={cls.switcher}>
            {children}
            </div>

        </aside>
    )

}
