import { Link } from 'react-router-dom';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { classNames } from '../../../shared/lib/classNames';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export function NavBar({ className }: NavBarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink to="/">Главная</AppLink>
            <AppLink to="/about">О сайте</AppLink>
        </div>
    );
}
