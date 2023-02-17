import { classNames } from 'shared/lib/classNames';
import cls from './NotFoundPage.module.scss';

type NotFoundPageProps = {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    return (
    <div className={classNames(cls.norFoundPage, {}, [])}>
        Страница не найдена!!
    </div>
    )
}
