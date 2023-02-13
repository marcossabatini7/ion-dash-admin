import AuthInput from '@/components/auth/AuthInput'
import { GoogleIcon, WarningIcon } from '@/components/icons'
import { useState } from 'react'

export default function Authentication() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submit() {
    if (mode === 'login') {
      console.log('login')
      showError('Ocorreu um erro no login')
    } else {
      console.log('cadastrar')
      showError('Ocorreu um erro no cadastro')
    }
  }

  function showError(msg: string, time: number = 3) {
    setError(msg)
    setTimeout(() => {
      setError(null)
    }, time * 1000)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 m-10">
        <h1 className="text-3xl font-bold mb-5">
          {mode === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>

        {!!error && (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-600 rounded-lg">
            {WarningIcon()}
            <span className="ml-3">{error}</span>
          </div>
        )}

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

        {mode === 'login' ? (
          <p className="mt-8 text-sm">
            Novo por aqui?
            <a
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1"
              onClick={() => setMode('signup')}
            >
              Criar uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8 text-sm">
            Já faz parte da nossa comunidade?
            <a
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1"
              onClick={() => setMode('login')}
            >
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
