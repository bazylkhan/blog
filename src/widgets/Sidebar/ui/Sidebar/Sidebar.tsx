import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useReducer } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { BugButton } from 'app/providers/ErrorBoundary';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [closed, toggle] = useReducer((closed) => !closed, false);

    return (
        <div className={classNames(cls.Sidebar, { [cls.closed]: closed }, [className])}>
            <button onClick={toggle}>{closed ? 'Open' : 'Close'}</button>
            <BugButton />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
