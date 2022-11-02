import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

/**
 * ボタンコンポーネント
 */
export const Button = ({ size, variant, loading, fullWidth, children, ...props }) => {
  const classNameList = [styles.button]
  if (size) classNameList.push(styles[`size-${size}`])
  if (variant) classNameList.push(styles[`variant-${variant}`])
  if (loading) classNameList.push(styles['loading'])
  if (fullWidth) classNameList.push(styles['full-width'])
  const classNames = classNameList.join(' ')

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /** ボタンのサイズを変える */
  size: PropTypes.oneOf(['small', 'large']),
  /** ボタンの見た目を変える */
  variant: PropTypes.oneOf(['outlined', 'attention']),
  /** 読み込み中の状態にする */
  loading: PropTypes.bool,
  /** ボタンを親要素いっぱいに広げる */
  fullWidth: PropTypes.bool,
  /** ボタンの内容 */
  children: PropTypes.string,
}

Button.defaultProps = {
  loading: false,
  fullWidth: false,
}
