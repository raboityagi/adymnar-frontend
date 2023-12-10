import { AuthForm } from '@/app/(site)/components/AuthForm/AuthForm'
import { Event } from '@/components/Event/Event'
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className='min-h-screen py-4 w-screen flex flex-col gap-10 items-center justify-center bg-blue-50 overflow-x-hidden'>
			<MaxWidthWrapper className='flex flex-col gap-4 items-center'>
				<div className='flex flex-col-reverse xl:flex-row gap-2'>
					<div className='p-6 bg-white rounded-lg flex flex-col gap-3'>
						<h1 className='text-xl font-bold text-gray-950'>
							Один шаг до аккаунта на Ш.И.П.
						</h1>
						<ul className='flex flex-col gap-2'>
							<li className='text-md text-gray-700'>
								&rarr; Бесплатно учитесь основам программирования
							</li>
							<li className='text-md text-gray-700'>
								&rarr; Вступайте в программы, курсы и выбирайте свой формат
								обучения
							</li>
							<li className='text-md text-gray-700'>
								&rarr; Присоединяйтесь к профессиональному сообществу и
								развивайте нетворкинг
							</li>
							<li className='text-md text-gray-700'>
								&rarr; Делитесь своими успехами в блоге студента и получайте за
								это доступ к платным курсам
							</li>
							<li className='text-md text-gray-700'>
								&rarr; Участвуйте в обсуждениях к урокам и задавайте вопросы
							</li>
						</ul>
					</div>
					<div className='flex flex-col gap-2'>
						<AuthForm />
						<div className='flex flex-col gap-2 items-center p-6 bg-white rounded-lg xl:w-max'>
							<div className='flex sm:w-max w-full flex-col sm:flex-row flex-wrap justify-center gap-3'>
								<Event />
								<Event />
								<Event />
							</div>
							<Button variant='outline'>Просмотреть больше</Button>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</main>
	)
}
