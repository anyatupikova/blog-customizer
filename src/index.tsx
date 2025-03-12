import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

// Импортируем компоненты
import { Article } from 'components/article/Article';
import { ArticleParamsForm } from 'components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'constants/articleProps';

// Импортируем стили
import './styles/index.scss';
import styles from './styles/index.module.scss';

// Получаем корневой элемент для рендеринга
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

// Основной компонент приложения
const App = () => {
	// Состояние для управления параметрами статьи
	const [articleState, setArticleState] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			{/* Форма для изменения параметров статьи */}
			<ArticleParamsForm
				articleState={articleState}
				setArticleState={setArticleState}
			/>
			{/* Компонент статьи */}
			<Article />
		</div>
	);
};

// Рендерим приложение в корневой элемент
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
