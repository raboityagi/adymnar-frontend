import { cn } from '@/lib/utils'
import Link from 'next/link'

export const Event = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				'sm:w-[14rem] w-full rounded-lg border-[1px] border-gray-300 px-4 py-2',
				className
			)}
		>
			<div className='flex justify-between items-center'>
				<h3 className='font-bold text-xl'>Название</h3>
				<p className='text-xs text-gray-700'>12/10/2023</p>
			</div>
			<div className='flex flex-col gap-2'>
				<p className='text-sm break-keep line-clamp-3 text-gray-700'>
					описание asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
					asd asd asd sad asd asd
				</p>
				<div className='flex flex-col justify-between items-start gap-2'>
					<p className='text-xs text-gray-700'>Место</p>
					<Link
						className='text-sm font-medium text-gray-700 transition-all hover:text-gray-900'
						href='/'
					>
						Подробнее...
					</Link>
				</div>
			</div>
		</div>
	)
}
