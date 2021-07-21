import s from './Tag.module.scss'

function Tag({ children }) {
    return (
    <span className={s.tag}>{children}</span>
  
  )
  
}

export default Tag;