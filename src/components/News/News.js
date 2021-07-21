import s from './News.module.scss'

function News({ children }) {
    return <section className={s.news}>{children}</section>;
}

export default News;