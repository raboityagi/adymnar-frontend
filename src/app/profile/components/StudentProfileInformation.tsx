import { Button } from '@/components/ui/button'
import { Student } from '@/types/userTypes'
import Image from 'next/image'

export const StudentProfileInformation: React.FC<Student> = ({
	firstname,
	lastname,
	surname,
	classNum,
}) => {
	return (
		<div className='w-full'>
			<div className='flex flex-col gap-4 p-6 bg-white rounded-lg'>
				<Image
					className='rounded-lg'
					src={'/profilo.jpg'}
					alt='pp'
					width={200}
					height={200}
				/>
				<div className='flex flex-col gap-1'>
					<h2 className='text-2xl font-bold text-gray-950'>
						{firstname + ' ' + surname + ' ' + lastname}
					</h2>
					<p className='text-sm font-medium text-gray-500'>Класс: {classNum}</p>
					<p className='text-sm font-medium text-gray-500'>
						Классный руководитель: Ф.И.О
					</p>
				</div>
				<Button>Выйти</Button>
			</div>
		</div>
	)
}
