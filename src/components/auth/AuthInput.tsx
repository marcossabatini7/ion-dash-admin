type InputType = 'text' | 'email' | 'password'

interface AuthInputProps {
  label: string
  name: string
  value: any
  changeValue: (newValue: any) => void
  type?: InputType
  required?: boolean
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        name={props.name}
        required={props.required}
        onChange={(e) => props.changeValue?.(e.target.value)}
        className="px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white"
      />
    </div>
  )
}
