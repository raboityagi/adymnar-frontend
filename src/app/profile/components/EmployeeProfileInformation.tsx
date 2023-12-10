import { Button } from '@/components/ui/button'
import { SchoolEmployee } from '@/types/userTypes'
import Image from 'next/image'

export const EmployeeProfileInformation: React.FC<SchoolEmployee> = ({
	firstname,
	lastname,
	surname,
	profession,
	classNum,
}) => {
	return (
		<div className='h-full w-full'>
			<div className='h-full flex flex-col justify-between gap-2 p-6 bg-white rounded-lg'>
				<div className='flex flex-col gap-4'>
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
						<p className='text-sm font-medium text-gray-500'>
							Ваш класс: {classNum}
						</p>
						<p className='text-sm font-medium text-gray-500'>
							Должность: {profession}
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<Button>Редактировать профиль</Button>
					{profession === 'Завуч' && (
						<Button variant='outline'>Зарегистрировать ученика</Button>
					)}
					<Button variant='ghost'>Выйти</Button>
				</div>
			</div>
		</div>
	)
}
