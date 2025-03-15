import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean; // Флаг, указывающий, открыт ли сайдбар
	onClose?: () => void; // Колбэк, вызываемый при закрытии
	rootRef: React.RefObject<HTMLDivElement>; // Ссылка на корневой элемент
	onChange?: (newValue: boolean) => void; // Колбэк для изменения состояния
};

export const useOutsideClickClose = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: UseOutsideClickClose) => {
	useEffect(() => {
		// Если сайдбар закрыт, ничего не делаем
		if (!isOpen) return;

		// Обработчик клика вне сайдбара
		const handleClick = (event: MouseEvent) => {
			const { target } = event;

			// Проверяем, что клик был вне корневого элемента
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				onClose?.(); // Вызываем колбэк закрытия
				onChange?.(false); // Уведомляем об изменении состояния
			}
		};

		// Добавляем обработчик клика
		window.addEventListener('mousedown', handleClick);

		// Удаляем обработчик при размонтировании или закрытии сайдбара
		return () => {
			window.removeEventListener('mousedown', handleClick);
		};
	}, [isOpen, rootRef, onClose, onChange]); // Зависимости: isOpen, rootRef, onClose, onChange
};
