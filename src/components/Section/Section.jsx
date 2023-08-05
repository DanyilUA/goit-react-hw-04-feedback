import PropTypes from 'prop-types';

export function Section({children, title}) {
    return (
        <>
            <h1 className='maitTitle'>{title}</h1>
            <div>{ children}</div>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}