'use client'

import * as Api from '@/api'
import { LoginFromDto } from '@/api/dto/auth.dto'
import { Checkbox } from '@/components/ui/checkbox'
import clsx from 'clsx'
import { setCookie } from 'nookies'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'

export const AuthForm = () => {
	const [variant, setVariant] = useState<String>()
	const [loading, setIsLoading] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			login: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true)
		try {
			;('use server')
			const formatted_data: LoginFromDto = {
				login: data?.login,
				password: data?.password,
				type: data?.type,
			}
			const { accessToken } = await Api.auth.login(formatted_data)

			setCookie(null, '_token', accessToken, { path: '/' })

			location.href = '/'
		} catch {
			return
		}
		console.log(data)
		setIsLoading(false)
	}

	return (
		<div className='bg-white p-8 rounded-lg flex items-center flex-col gap-5 xl:w-full'>
			<h1 className='text-center font-bold text-xl text-gray-950'>
				Вход в профиль
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-4 w-full'
			>
				<Input
					{...(register('login'), { required: true })}
					type='login'
					placeholder='Логин'
					className={clsx(
						errors.login && 'focus:ring-rose-500',
						loading && 'opacity-50 cursor-default'
					)}
				/>
				<Input
					{...(register('password'), { required: true })}
					type='password'
					placeholder='Пароль'
					className={clsx(
						errors.password && 'focus:ring-rose-500',
						loading && 'opacity-50 cursor-default'
					)}
				/>
				<div className='flex gap-2 items-center'>
					<Checkbox {...register('variant')} id='variant' />
					<label
						htmlFor='variant'
						className='text-xs text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
					>
						Я учитель/завуч
					</label>
				</div>
				<Button disabled={loading} type='submit'>
					Авторизоваться
				</Button>
			</form>
		</div>
	)
}
