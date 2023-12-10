import { Event } from '@/components/Event/Event'
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper'
import { SchoolEmployee, Student } from '@/types/userTypes'
import { EmployeeProfileInformation } from './components/EmployeeProfileInformation'
import { EmployeeSchedule } from './components/EmployeeSchedule'
import { Schedule } from './components/Schedule'
import { StudentProfileInformation } from './components/StudentProfileInformation'

function profilePage({ variant }: { variant: string }) {
	const data: Student = {
		surname: 'Test',
		firstname: 'Test',
		lastname: 'Test',
		classNum: 1,
	}

	const datae: SchoolEmployee = {
		surname: 'Test',
		firstname: 'Test',
		lastname: 'Test',
		classNum: 1,
		profession: 'Завуч',
	}

	return (
		<main className='w-screen h-screen bg-sky-50'>
			<MaxWidthWrapper className='h-full flex flex-col md:flex-row items-center justify-center'>
				{variant === 'STUDENT' ? (
					<div className='flex justify-center gap-2'>
						<div className='flex flex-col gap-2'>
							<StudentProfileInformation
								firstname={data.firstname}
								lastname={data.lastname}
								surname={data.surname}
								classNum={data.classNum}
							/>
							<div className='flex flex-col gap-2 p-6 bg-white rounded-lg'>
								<Event className='w-full' />
							</div>
						</div>
						<Schedule />
					</div>
				) : (
					<div className='flex justify-center gap-2'>
						<div className='flex flex-col gap-2'>
							<EmployeeProfileInformation
								firstname={datae.firstname}
								lastname={datae.lastname}
								surname={datae.surname}
								classNum={datae.classNum}
								profession={datae.profession}
							/>
							<div className='flex flex-col gap-2 p-6 bg-white rounded-lg'>
								<Event className='w-full' />
							</div>
						</div>
						<EmployeeSchedule />
					</div>
				)}
			</MaxWidthWrapper>
		</main>
	)
}

export default profilePage
