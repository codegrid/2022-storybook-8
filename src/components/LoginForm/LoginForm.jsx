import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './LoginForm.module.css'
import { TextField } from '../TextField'
import { Button } from '../Button'

export const LoginForm = ({ onSubmit }) => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  })
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  })

  const handleChangeInput = (event, name) => {
    setInputValues({ ...inputValues, [name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const _errorMessages = {
      email: '',
      password: '',
    }

    // ⚠️：実践的なメールアドレスの検証ではありません
    if (/^\w+@\w+\.\w+$/.test(inputValues.email) === false) {
      _errorMessages.email = '正しいメールアドレスを入力してください'
    }
    // ⚠️：実践的なパスワードの検証ではありません
    if (/^\w{10,}$/.test(inputValues.password) === false) {
      _errorMessages.password = 'パスワードは半角英数10文字以上で入力してください'
    }
    setErrorMessages(_errorMessages)

    if (Object.keys(_errorMessages).some((key) => _errorMessages[key] !== '')) {
      //  1つでもエラーがあればonSubmitをしない
      return
    }

    onSubmit(inputValues.email, inputValues.password)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        id="email"
        label="メールアドレス"
        errorMessage={errorMessages.email}
        onChange={(event) => handleChangeInput(event, 'email')}
      />
      <TextField
        id="password"
        type="password"
        label="パスワード"
        errorMessage={errorMessages.password}
        onChange={(event) => handleChangeInput(event, 'password')}
      />
      <div className={styles.buttonGroup}>
        <Button type="submit" fullWidth>
          ログイン
        </Button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  /** submitイベントで入力値検証をパスした後に実行したい処理 */
  onSubmit: PropTypes.func,
}
