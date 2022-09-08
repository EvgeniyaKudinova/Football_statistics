import { Link } from 'react-router-dom'

const Notfoundpage = () => {
    return(
        <div>
            Эта страница не существует. Перейти <Link href="/"> на главную страницу </Link>
        </div>
    )
}

export {Notfoundpage}