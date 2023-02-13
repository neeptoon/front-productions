import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass'))
        .toBe('someClass');
    });

    test('with additional params', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
        .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass dis class1 class2';
        expect(classNames('someClass', { dis: true }, ['class1', 'class2']))
        .toBe(expected);
    });
});
