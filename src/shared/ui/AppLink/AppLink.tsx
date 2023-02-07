import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary';

type AppLinkProps = LinkProps & {
    className?: string;
    children: React.ReactNode;
    theme?: AppLinkTheme;
}


export function AppLink({className, children, to, theme = 'primary', ...otherProps}: AppLinkProps) {
    return (
        <Link
        to={to}
        className={classNames(cls.link,{}, [className, cls[theme]])}
        {...otherProps}>
            {children}
        </Link>
    )
}
