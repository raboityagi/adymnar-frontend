import {
	EmployeeLoginResponseDto,
	LoginFromDto,
	StudentLoginResponseDto,
} from './dto/auth.dto'

export const login = async (
	values: LoginFromDto
): Promise<StudentLoginResponseDto | EmployeeLoginResponseDto> => {
	const res = await fetch('http://localhost:3000/api/login', {
		method: 'POST',
		body: JSON.stringify(values),
	})
	const data = res.json()
	return data
}
