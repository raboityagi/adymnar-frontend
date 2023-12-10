export interface LoginFromDto {
	login: string
	password: string
	type: string
}

export interface LoginResponseDto {
	student: Student
	employee: Employee
	accessToken: string
	refreshToken: string
}

export type StudentLoginResponseDto = Omit<LoginResponseDto, 'employee'>

export type EmployeeLoginResponseDto = Omit<LoginResponseDto, 'student'>

export interface Student {
	id: number
	firstname: string
	surname: string
	lastname: string
	classNum: number
}

export interface Employee {
	id: number
	firstname: string
	surname: string
	lastname: string
	classNum: number
	profession: string
}

export interface UserCredentials {
	firstname: string
	surname: string
	lastname: string
}
