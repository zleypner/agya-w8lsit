import { X } from 'lucide-react'

interface PainPointProps {
  children: React.ReactNode
  index?: number
}

export default function PainPoint({ children, index = 0 }: PainPointProps) {
  return (
    <li
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent-50 transition-colors duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <X className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" aria-hidden />
      <span className="text-primary-800 leading-relaxed">{children}</span>
    </li>
  )
}
