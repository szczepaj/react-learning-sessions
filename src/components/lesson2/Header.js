import PropTypes from 'prop-types'
import clsx from 'clsx'
import './Header.css'
import css from './Header.module.css'

// npm install --save clsx

export const Header = ({ variant, value, isOutlined, isShadowed }) => {
    console.log(css)
    const classNames = clsx(
        css[variant], {
            [css.outlined]: isOutlined,
            [css.shadowed]: isShadowed
        }
    )

    return (
        <h2 className={classNames}>{value}</h2>
    )
}

Header.propTypes = {
    value: PropTypes.string.isRequired,
    variant: PropTypes.string,
    isOutlined: PropTypes.bool,
    isShadowed: PropTypes.bool
}