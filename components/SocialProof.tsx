export default function SocialProof() {
  return (
    <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 text-center animate-fade-in shadow-md hover:shadow-lg hover:border-primary-200 transition-all duration-300">
      <p className="text-base text-primary-800">
        <span className="font-bold text-primary-900">Profesionales de este sector</span>{' '}
        <span className="text-primary-600">ya están en lista de acceso</span>
      </p>
      <div className="flex justify-center gap-2 mt-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full bg-primary-900 border-3 border-white shadow-md animate-float"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        <div className="w-10 h-10 rounded-full bg-accent-500 border-3 border-white shadow-md animate-float" style={{ animationDelay: '1.2s' }} />
      </div>
    </div>
  )
}
