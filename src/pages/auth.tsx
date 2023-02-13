import AuthInput from '@/components/auth/AuthInput'
import { GoogleIcon } from '@/components/icons'
import { useState } from 'react'

export default function Authentication() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submit() {
    if (mode === 'login') {
      console.log('login')
    } else {
      console.log('cadastrar')
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-1/2 ">
        <h1 className="text-xl font-bold mb-5">
          {mode === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>
        <AuthInput
          label="E-mail"
          type="email"
          name="email"
          value={email}
          changeValue={setEmail}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={password}
          changeValue={setPassword}
          required
        />

        <button
          onClick={submit}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300" />

        <button
          onClick={submit}
          className="w-full bg-gray-300 hover:bg-gray-200 text-gray-600 rounded-lg px-4 py-3 flex justify-center items-center gap-3"
        >
          {GoogleIcon}
          Entrar com Google
        </button>
      </div>
    </div>
  )
}
