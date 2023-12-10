import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

const classes = [
	{
		time: '08:00-08:45',
		name: 'Математика',
	},
	{
		time: '09:00-09:45',
		name: 'Русский язык',
	},
	{
		time: '10:00-10:45',
		name: 'Литература',
	},
	{
		time: '11:00-11:45',
		name: 'Информатика',
	},
	{
		time: '12:00-12:45',
		name: '',
	},
	{
		time: '13:00-13:45',
		name: '',
	},
	{
		time: '14:00-14:45',
		name: '',
	},
	{
		time: '15:00-15:45',
		name: '',
	},
]

export const Schedule = () => {
	return (
		<div className='p-6 rounded-lg bg-white flex flex-col justify-between gap-2'>
			<div className='flex flex-col gap-2'>
				<div className='flex justify-between items-center'>
					<h2 className='font-bold text-xl text-gray-950'>Расписание</h2>
					<p className='text-xs font-medium text-gray-500'>
						12/10/2023 - 12/11/2023
					</p>
				</div>
				<div className='flex gap-4'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Время</TableHead>
								<TableHead>Название предмета</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{classes.map((classobj) => (
								<TableRow key={classobj.time}>
									<TableCell className='text-gray-800 font-medium'>
										{classobj.time}
									</TableCell>
									<TableCell className='text-gray-800 font-medium'>
										{classobj.name}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Время</TableHead>
								<TableHead>Название предмета</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{classes.map((classobj) => (
								<TableRow key={classobj.time}>
									<TableCell className='text-gray-800 font-medium'>
										{classobj.time}
									</TableCell>
									<TableCell className='text-gray-800 font-medium'>
										{classobj.name}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
			<div className='flex gap-2'>
				<Button variant='outline' className='grow'>
					Предыдущий день
				</Button>
				<Button variant='outline' className='grow'>
					Следующий день
				</Button>
			</div>
		</div>
	)
}
