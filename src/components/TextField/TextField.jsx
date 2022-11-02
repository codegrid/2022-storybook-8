import React from 'react'
import styles from './TextField.module.css'
import PropTypes from 'prop-types'

/**
 * テキストフィールドコンポーネント
 */
export const TextField = ({ id, label, type, errorMessage, onChange, onBlur }) => {
  const classNameList = [styles.textField]
  if (errorMessage) classNameList.push(styles[`error`])
  const classNames = classNameList.join(' ')

  return (
    <div className={styles.controlGroup}>
      {/* 👇idをhtmlFor属性で指定（forはJavaScriptの予約語なので、代わりにhtmlForを使用）*/}
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} type={type} onChange={onChange} onBlur={onBlur} className={classNames} />
      {errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  )
}

TextField.propTypes = {
  /** 入力要素のidで、ラベルやメッセージとの紐付けにも使用 */
  id: PropTypes.string.isRequired,
  /** 入力欄のラベル */
  label: PropTypes.string.isRequired,
  /** 入力欄のタイプ */
  type: PropTypes.oneOf(['text', 'email', 'password']),
  /** エラーメッセージ */
  errorMessage: PropTypes.string,
  /** changeイベント時に実行したい処理 */
  onChange: PropTypes.func,
  /** blurイベント時に実行したい処理 */
  onBlur: PropTypes.func,
}

TextField.defaultProps = {
  type: 'text',
  errorMessage: '',
}
