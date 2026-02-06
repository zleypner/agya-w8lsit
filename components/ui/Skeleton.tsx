interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-primary-200/50'
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  }

  return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
}

export function FeatureCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border-2 border-primary-100 p-6 md:p-8 shadow-md">
      <Skeleton className="w-14 h-14 rounded-xl mb-4" />
      <Skeleton variant="text" className="w-2/3 h-6 mb-3" />
      <Skeleton variant="text" className="w-full h-4 mb-2" />
      <Skeleton variant="text" className="w-4/5 h-4" />
    </div>
  )
}

export function MetricsSkeleton() {
  return (
    <section className="py-16 md:py-24 bg-primary-900 rounded-3xl mx-4 md:mx-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-1/3 mx-auto mb-4 bg-primary-700/50" />
          <Skeleton className="h-4 w-1/2 mx-auto bg-primary-700/50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-16 w-24 mx-auto mb-2 bg-primary-700/50" />
              <Skeleton className="h-6 w-32 mx-auto mb-1 bg-primary-700/50" />
              <Skeleton className="h-4 w-40 mx-auto bg-primary-700/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-primary-100 p-5 md:p-6">
              <Skeleton variant="text" className="w-3/4 h-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CarouselSkeleton() {
  return (
    <div className="py-8">
      <div className="flex gap-4 overflow-hidden px-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-shrink-0 w-72">
            <Skeleton className="h-48 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  )
}
