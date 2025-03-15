import arrow from '../../images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type ArrowButtonProps = {
	onClick: () => void;
	isOpen: boolean;
};

export const ArrowButton = ({ onClick, isOpen }: ArrowButtonProps) => {
	// Смещение кнопки со стрелкой при раскрытии aside
	const arrowButtonStyle = clsx(styles.container, {
		[styles.container_open]: isOpen,
	});

	// Разворот стрелки на кнопке при раскрытии aside
	const arrowButtonImgStyle = clsx(styles.arrow, {
		[styles.arrow_open]: isOpen,
	});

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={arrowButtonStyle}>
			<img src={arrow} alt='иконка стрелочки' className={arrowButtonImgStyle} />
		</div>
	);
};
